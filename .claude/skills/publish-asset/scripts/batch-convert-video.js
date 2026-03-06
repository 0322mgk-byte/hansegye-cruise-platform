/**
 * 일괄 영상 변환 스크립트
 * Usage: node batch-convert-video.js <target-dir> [targetSizeMB] [width]
 *
 * - ffprobe로 영상 길이 확인 → 목표 크기에서 비트레이트 역산
 * - MP4: 2-pass H.264 (passlogfile로 임시파일 경로 제어)
 * - MOV/MXF → MP4 변환
 * - 이미 목표 크기 이하인 mp4는 SKIP
 * - 출력: batch-convert.js와 동일한 JSON 구조
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

const targetDir = process.argv[2];
const targetSizeMB = parseFloat(process.argv[3] || '5');
const width = process.argv[4] ? parseInt(process.argv[4]) : null;

if (!targetDir) {
  console.error('Usage: node batch-convert-video.js <target-dir> [targetSizeMB] [width]');
  process.exit(1);
}

const VIDEO_EXTS = ['.mp4', '.mov', '.mxf'];
const targetBytes = targetSizeMB * 1024 * 1024;
const nullDev = process.platform === 'win32' ? 'NUL' : '/dev/null';

function walkDir(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (fs.statSync(full).isDirectory()) {
      files.push(...walkDir(full));
    } else {
      const ext = path.extname(full).toLowerCase();
      if (VIDEO_EXTS.includes(ext)) files.push(full);
    }
  }
  return files;
}

function getDuration(filePath) {
  try {
    const output = execSync(
      `ffprobe -v error -show_entries format=duration -of csv=p=0 "${filePath}"`,
      { stdio: ['pipe', 'pipe', 'pipe'], encoding: 'utf-8' }
    );
    return parseFloat(output.trim());
  } catch {
    return -1;
  }
}

function calcVideoBitrate(durationSec) {
  const audioBitrate = 128; // kbps
  const targetBits = targetSizeMB * 1024 * 1024 * 8;
  const videoBitrate = Math.floor(targetBits / durationSec / 1000) - audioBitrate;
  return Math.max(videoBitrate, 100); // 최소 100kbps
}

function encodeMP4(inputPath, outputPath, bitrate) {
  const scaleFilter = width ? ` -vf "scale=${width}:-2"` : '';
  const passlogfile = path.join(os.tmpdir(), `ffmpeg2pass-${Date.now()}`);

  try {
    // Pass 1
    execSync(
      `ffmpeg -i "${inputPath}" -c:v libx264 -b:v ${bitrate}k${scaleFilter} -c:a aac -b:a 128k -movflags +faststart -pass 1 -passlogfile "${passlogfile}" -f null ${nullDev} -y`,
      { stdio: 'pipe' }
    );
    // Pass 2
    execSync(
      `ffmpeg -i "${inputPath}" -c:v libx264 -b:v ${bitrate}k${scaleFilter} -c:a aac -b:a 128k -movflags +faststart -pass 2 -passlogfile "${passlogfile}" "${outputPath}" -y`,
      { stdio: 'pipe' }
    );
    return fs.statSync(outputPath).size;
  } catch {
    return -1;
  } finally {
    // 2-pass 임시 파일 정리
    for (const suffix of ['.log', '.log.mbtree']) {
      const tmpFile = `${passlogfile}-0${suffix}`;
      if (fs.existsSync(tmpFile)) fs.unlinkSync(tmpFile);
    }
  }
}


const files = walkDir(targetDir);
const results = [];

for (const file of files) {
  const ext = path.extname(file).toLowerCase();
  const basename = file.slice(0, -ext.length);
  const origSize = fs.statSync(file).size;

  // MXF/MOV → MP4 변환 (브라우저 재생 불가 포맷 → MP4)
  if (ext === '.mxf' || ext === '.mov') {
    const duration = getDuration(file);
    if (duration <= 0) {
      results.push({ action: 'FAILED', original: file, origSize, error: 'ffprobe failed' });
      continue;
    }
    const outFile = `${basename}.mp4`;
    const bitrate = calcVideoBitrate(duration);
    const finalSize = encodeMP4(file, outFile, bitrate);
    if (finalSize === -1) {
      results.push({ action: 'FAILED', original: file, origSize, error: 'ffmpeg encode failed' });
      continue;
    }
    results.push({
      action: 'CONVERTED', original: file, converted: outFile,
      origSize, finalSize,
      warning: finalSize > targetBytes ? 'OVER_TARGET_SIZE' : undefined
    });
    continue;
  }

  // mp4 — 이미 목표 크기 이하면 SKIP
  if (origSize <= targetBytes) {
    results.push({ action: 'SKIP', original: file, size: origSize });
    continue;
  }

  // mp4 — 재인코딩 (RECOMPRESSED)
  const duration = getDuration(file);
  if (duration <= 0) {
    results.push({ action: 'FAILED', original: file, origSize, error: 'ffprobe failed' });
    continue;
  }

  const bitrate = calcVideoBitrate(duration);
  const tmpFile = `${basename}_recompress${ext}`;
  let finalSize = encodeMP4(file, tmpFile, bitrate);

  if (finalSize === -1) {
    results.push({ action: 'FAILED', original: file, origSize, error: 'ffmpeg encode failed' });
    if (fs.existsSync(tmpFile)) fs.unlinkSync(tmpFile);
    continue;
  }

  fs.renameSync(tmpFile, file);
  finalSize = fs.statSync(file).size;

  results.push({
    action: 'RECOMPRESSED', original: file,
    origSize, finalSize,
    warning: finalSize > targetBytes ? 'OVER_TARGET_SIZE' : undefined
  });
}

console.log(JSON.stringify(results, null, 2));

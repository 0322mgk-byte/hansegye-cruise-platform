/**
 * 일괄 이미지 변환 스크립트
 * Usage: node batch-convert.js <target-dir> [format] [maxBytes] [startQuality] [width]
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const targetDir = process.argv[2];
const format = process.argv[3] || 'webp';
const maxBytes = parseInt(process.argv[4] || '204800');
const startQ = parseInt(process.argv[5] || '80');
const width = process.argv[6] ? parseInt(process.argv[6]) : null;

const IMAGE_EXTS = ['.jpg', '.jpeg', '.png', '.webp', '.avif', '.jfif', '.gif', '.bmp'];
const RESIZE_STEPS = [0.75, 0.5]; // fallback: 75% → 50% of original width

function walkDir(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (fs.statSync(full).isDirectory()) {
      files.push(...walkDir(full));
    } else {
      const ext = path.extname(full).toLowerCase();
      if (IMAGE_EXTS.includes(ext)) files.push(full);
    }
  }
  return files;
}

function getImageWidth(filePath) {
  try {
    const output = execSync(
      `ffprobe -v error -select_streams v:0 -show_entries stream=width -of csv=p=0 "${filePath}"`,
      { stdio: ['pipe', 'pipe', 'pipe'], encoding: 'utf-8' }
    );
    return parseInt(output.trim());
  } catch {
    return -1;
  }
}

function convert(inputPath, outputPath, quality, scaleWidth) {
  const scaleFilter = scaleWidth ? ` -vf "scale=${scaleWidth}:-2"` : '';
  const cmd = format === 'webp'
    ? `ffmpeg -i "${inputPath}" -c:v libwebp -quality ${quality}${scaleFilter} "${outputPath}" -y`
    : `ffmpeg -i "${inputPath}" -c:v libaom-av1 -crf ${Math.round(63 - quality * 0.63)} -still-picture 1${scaleFilter} "${outputPath}" -y`;
  try {
    execSync(cmd, { stdio: 'pipe' });
    return fs.statSync(outputPath).size;
  } catch (e) {
    return -1;
  }
}

/**
 * quality를 startQ → 10까지 낮추며 시도.
 * 그래도 초과하면 원본 너비의 75% → 50%로 리사이즈 후 재시도.
 * 50%에서도 초과하면 그 결과를 유지 + 경고.
 */
function convertWithFallback(inputPath, outputPath, origWidth) {
  // 1차: 지정된 width (또는 원본)로 quality 조절
  // 원본이 지정 width보다 작으면 업스케일 방지 — 리사이즈 건너뜀
  let currentWidth = (width && origWidth > 0 && origWidth <= width) ? null : width;
  let q = startQ;
  let finalSize = 0;

  while (q >= 10) {
    finalSize = convert(inputPath, outputPath, q, currentWidth);
    if (finalSize === -1) { q -= 10; continue; }
    if (finalSize <= maxBytes) return { finalSize, quality: Math.max(q, 10), resized: false };
    q -= 10;
  }

  // 2차: fallback 리사이즈 (원본 너비 기준 75% → 50%)
  const baseWidth = width || origWidth;
  if (baseWidth <= 0) {
    // ffprobe 실패 시 리사이즈 불가 → 현재 결과 유지
    return { finalSize, quality: 10, resized: false, warning: 'OVER_MAX_SIZE' };
  }

  for (const ratio of RESIZE_STEPS) {
    const resizeWidth = Math.round(baseWidth * ratio);
    // 짝수로 맞춤 (ffmpeg scale=-2 요구)
    const evenWidth = resizeWidth % 2 === 0 ? resizeWidth : resizeWidth - 1;
    q = startQ;
    while (q >= 10) {
      finalSize = convert(inputPath, outputPath, q, evenWidth);
      if (finalSize === -1) { q -= 10; continue; }
      if (finalSize <= maxBytes) return { finalSize, quality: Math.max(q, 10), resized: true, resizedWidth: evenWidth };
      q -= 10;
    }
  }

  // 모든 시도 실패 → 마지막 결과 유지 + 경고
  return { finalSize, quality: 10, resized: true, warning: 'OVER_MAX_SIZE' };
}

const files = walkDir(targetDir);
const results = [];

for (const file of files) {
  const ext = path.extname(file).toLowerCase();
  const basename = file.slice(0, -ext.length);
  const origSize = fs.statSync(file).size;

  // Case 1: Already target format and under max size → skip
  if (ext === `.${format}` && origSize <= maxBytes) {
    results.push({ action: 'SKIP', original: file, size: origSize });
    continue;
  }

  // Case 2: Already target format but over max size → recompress
  if (ext === `.${format}`) {
    const tmpFile = `${basename}_recompress.${format}`;
    const origWidth = getImageWidth(file);
    const result = convertWithFallback(file, tmpFile, origWidth);
    if (fs.existsSync(tmpFile)) {
      fs.renameSync(tmpFile, file);
      result.finalSize = fs.statSync(file).size;
    }
    results.push({
      action: 'RECOMPRESSED', original: file,
      origSize, finalSize: result.finalSize, quality: result.quality,
      resized: result.resized || undefined,
      resizedWidth: result.resizedWidth || undefined,
      warning: result.warning || (result.finalSize > maxBytes ? 'OVER_MAX_SIZE' : undefined)
    });
    continue;
  }

  // Case 3: Different format → convert
  const outFile = `${basename}.${format}`;
  const origWidth = getImageWidth(file);
  const result = convertWithFallback(file, outFile, origWidth);
  if (result.finalSize === -1) {
    results.push({ action: 'FAILED', original: file, origSize, error: 'ffmpeg failed' });
    continue;
  }
  result.finalSize = fs.statSync(outFile).size;
  results.push({
    action: 'CONVERTED', original: file, converted: outFile,
    origSize, finalSize: result.finalSize, quality: result.quality,
    resized: result.resized || undefined,
    resizedWidth: result.resizedWidth || undefined,
    warning: result.warning || (result.finalSize > maxBytes ? 'OVER_MAX_SIZE' : undefined)
  });
}

console.log(JSON.stringify(results, null, 2));

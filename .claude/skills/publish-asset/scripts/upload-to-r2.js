/**
 * R2 업로드 스크립트
 *
 * 사용법: node upload-to-r2.js <프로젝트루트> <대상디렉토리>
 *
 * - 프로젝트루트의 .env.local에서 R2 인증 정보를 읽음
 * - 대상 디렉토리 하위의 모든 파일을 R2에 업로드
 * - public/ 기준 상대경로를 R2 key로 사용
 * - 결과를 JSON으로 stdout에 출력
 */

const path = require('path');
const fs = require('fs');

// 프로젝트 루트의 node_modules에서 S3Client 로드
const projectRoot = process.argv[2];
const targetDir = process.argv[3];

if (!projectRoot || !targetDir) {
  console.error('Usage: node upload-to-r2.js <project-root> <target-directory>');
  process.exit(1);
}

const { S3Client, PutObjectCommand } = require(
  path.join(projectRoot, 'node_modules', '@aws-sdk', 'client-s3')
);

// .env.local 파싱
function loadEnv(envPath) {
  const content = fs.readFileSync(envPath, 'utf-8');
  const env = {};
  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const val = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, '');
    env[key] = val;
  }
  return env;
}

// MIME 타입 매핑
const MIME_TYPES = {
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.jfif': 'image/jpeg',
  '.png': 'image/png',
  '.gif': 'image/gif',
  '.bmp': 'image/bmp',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.mov': 'video/quicktime',
};

// 디렉토리 재귀 탐색
function walkDir(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, entry);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      files.push(...walkDir(fullPath));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

async function main() {
  const envPath = path.join(projectRoot, '.env.local');
  if (!fs.existsSync(envPath)) {
    console.error('.env.local not found at:', envPath);
    process.exit(1);
  }

  const env = loadEnv(envPath);
  const required = ['R2_ACCESS_KEY_ID', 'R2_SECRET_ACCESS_KEY', 'R2_ENDPOINT', 'R2_BUCKET_NAME', 'R2_PUBLIC_URL'];
  for (const key of required) {
    if (!env[key]) {
      console.error(`Missing ${key} in .env.local`);
      process.exit(1);
    }
  }

  const client = new S3Client({
    region: 'auto',
    endpoint: env.R2_ENDPOINT,
    credentials: {
      accessKeyId: env.R2_ACCESS_KEY_ID,
      secretAccessKey: env.R2_SECRET_ACCESS_KEY,
    },
  });

  const publicDir = path.join(projectRoot, 'public');
  const resolvedTarget = path.resolve(targetDir);

  if (!fs.existsSync(resolvedTarget)) {
    console.error('Target directory not found:', resolvedTarget);
    process.exit(1);
  }

  const files = walkDir(resolvedTarget);
  const results = [];

  for (const filePath of files) {
    const r2Key = path.relative(publicDir, filePath).split(path.sep).join('/');
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    try {
      const body = fs.readFileSync(filePath);
      await client.send(new PutObjectCommand({
        Bucket: env.R2_BUCKET_NAME,
        Key: r2Key,
        Body: body,
        ContentType: contentType,
      }));

      const r2Url = `${env.R2_PUBLIC_URL}/${encodeURI(r2Key).replace(/%2F/g, '/')}`;
      results.push({
        localPath: filePath,
        r2Key,
        r2Url,
        size: body.length,
        status: 'OK',
      });
    } catch (err) {
      results.push({
        localPath: filePath,
        r2Key,
        r2Url: '',
        size: 0,
        status: 'FAILED',
        error: err.message,
      });
    }
  }

  console.log(JSON.stringify(results, null, 2));
}

main().catch(err => {
  console.error('Upload failed:', err.message);
  process.exit(1);
});

---
name: publish-asset
description: >
  public 폴더의 이미지/영상을 ffmpeg로 최적화 변환한 뒤 Cloudflare R2에 업로드하고,
  데이터 파일(.ts)의 경로를 R2 CDN URL로 교체하는 에셋 퍼블리싱 스킬.
  "에셋 퍼블리시", "이미지 R2에 올려줘", "public 폴더 최적화해서 업로드", "R2에 배포",
  "에셋 최적화", "CDN에 올려줘", "이미지 변환하고 올려줘", "상품 이미지 최적화", "에셋 배포"
  같은 요청이나, 특정 크루즈 상품(예: alaska-cruise) 또는 특정 폴더(예: section3)의
  에셋을 변환/업로드하고 싶을 때 트리거된다.
---

# publish-asset

`public/products/` 내의 이미지/영상을 **변환 → 원본 삭제 → R2 업로드 → 데이터 파일 경로 교체 → 로컬 삭제**하는 스킬이다.

기존 폴더 구조는 그대로 유지하며, 폴더를 새로 생성하거나 삭제하지 않는다.

## 실행 모드

**모든 단계를 사용자 승인 없이 연속 실행한다.** 중간에 멈추거나 확인을 요청하지 않는다.
8단계(로컬 파일 삭제)도 안전 조건을 충족하면 자동으로 실행한다. 최종 결과만 9단계에서 보고한다.

## 전체 워크플로우

```
1. 파라미터 확인 → 2. 파일 스캔 → 3. 이미지 변환 → 4. 영상 변환
→ 5. 원본 삭제 → 6. R2 업로드 → 7. 데이터 파일 경로 교체 → 8. 로컬 파일 삭제 → 9. 결과 보고
```

---

## 1단계: 파라미터 확인

사용자 요청에서 아래 파라미터를 추출하고, 지정하지 않은 항목은 기본값을 적용한다.
**상품명이 요청에 없을 때만 질문한다.** 나머지는 기본값으로 진행한다.

| 파라미터 | 기본값 | 설명 |
|---------|--------|------|
| **상품명** | (필수) | 예: `alaska-cruise`, `north-europe-cruise` |
| **범위** | 상품 전체 | 상품 전체 또는 특정 폴더 (예: `section3`, `sectrion6/day1`) |
| **이미지 포맷** | `webp` | 변환 대상 포맷: webp, avif |
| **이미지 최대 크기** | `200KB` | 바이트 단위: `204800` |
| **이미지 quality** | `80` | ffmpeg quality 시작값 |
| **이미지 해상도(width)** | `1024` | 지정 시 `-vf "scale={w}:-2"` 적용. quality로 부족하면 자동 리사이즈(75%→50%) |
| **영상 처리** | `upload` | `convert`이면 재인코딩, `upload`이면 그대로 업로드 |
| **영상 목표 크기 (desktop)** | `12MB` | desktop 폴더 영상의 목표 크기 |
| **영상 해상도 (desktop)** | 원본 유지 | width 미지정 → 원본 해상도 그대로 |
| **영상 목표 크기 (mobile)** | `5MB` | mobile 폴더 영상의 목표 크기 |
| **영상 해상도 (mobile)** | `480px` | `-vf "scale=480:-2"` 적용 |

**대상 경로 결정:**
- 상품 전체: `public/products/{상품명}/`
- 특정 폴더: `public/products/{상품명}/{범위}/`

프로젝트 루트: 이 스킬은 항상 `C:\AI_Project\cruise-schedule-web-page`를 프로젝트 루트로 사용한다.
스킬 루트: `{프로젝트루트}/.claude/skills/publish-asset`

---

## 2단계: 파일 스캔 및 분류

대상 경로 하위의 모든 파일을 재귀적으로 스캔하고 분류한다:

- **이미지**: jpg, jpeg, png, webp, avif, jfif, gif, bmp
- **영상**: mp4, mov, mxf

분류 결과(이미지 N개, 영상 N개, 총 용량)를 출력한다.

---

## 3단계: 이미지 변환

`scripts/batch-convert.js`를 **2회 실행**한다 — OG 이미지와 나머지를 분리 처리.

### 실행 방법

```bash
node "{스킬루트}/scripts/batch-convert.js" "{대상경로}" {포맷} {최대바이트} {startQ} {width}
```

### 3-A: OG 이미지 (포맷 변환만)

OG 이미지(`og.*`)는 사용자가 직접 1200px로 준비하므로, **리사이즈 없이 webp 변환만** 수행한다.

```bash
node ".claude/skills/publish-asset/scripts/batch-convert.js" "public/products/{상품명}" webp 10485760 80
```
- `maxBytes`를 10MB로 설정하여 사실상 크기 제한 없음
- `width` 미지정 → 원본 해상도 유지
- 대상 경로를 상품 루트로 지정하면 `og.png`만 해당 (하위 폴더는 별도 실행)

**주의**: 상품 루트에 og 외 다른 이미지가 있으면 그것도 이 설정으로 처리된다. 하위 폴더의 이미지는 포함되지 않으므로(walkDir은 재귀이므로 주의), 상품 루트에 og만 있는 일반적인 경우에는 문제없다. og 파일만 정확히 대상으로 하려면 og 파일 하나만 있는 디렉토리를 지정하거나, 별도로 처리한다.

### 3-B: 나머지 이미지 (리사이즈 + 압축)

```bash
# 각 하위 폴더별로 실행
node ".claude/skills/publish-asset/scripts/batch-convert.js" "public/products/{상품명}/section3" webp 204800 80 1024
node ".claude/skills/publish-asset/scripts/batch-convert.js" "public/products/{상품명}/section4" webp 204800 80 1024
node ".claude/skills/publish-asset/scripts/batch-convert.js" "public/products/{상품명}/sectrion6" webp 204800 80 1024
```
- `maxBytes`: 204800 (200KB)
- `width`: 1024 (데스크탑 Retina 2x 충분). 원본이 1024px 이하이면 업스케일하지 않고 quality 조절만 수행
- quality 10까지 내려도 초과하면 자동 fallback 리사이즈 (75% → 50%)

범위가 상품 전체인 경우, 하위 폴더별로 나눠 실행하면 og 이미지와 혼합되지 않는다.

### 출력 JSON

스크립트는 JSON 배열을 stdout으로 출력한다:
```json
[
  { "action": "SKIP", "original": "...", "size": 85234 },
  { "action": "RECOMPRESSED", "original": "...", "origSize": 200000, "finalSize": 95000, "quality": 60 },
  { "action": "CONVERTED", "original": "photo.jpg", "converted": "photo.webp", "origSize": 300000, "finalSize": 88000, "quality": 70 },
  { "action": "CONVERTED", "original": "big.jpg", "converted": "big.webp", "origSize": 500000, "finalSize": 180000, "quality": 50, "resized": true, "resizedWidth": 768 },
  { "action": "FAILED", "original": "...", "origSize": 100000, "error": "ffmpeg failed" }
]
```

**3-A와 3-B 출력을 모두 저장해둔다 — 5단계, 7단계에서 사용한다.**

---

## 4단계: 영상 변환

`.mxf`와 `.mov` 파일은 브라우저에서 재생할 수 없으므로, 영상 처리 모드와 무관하게 항상 mp4로 변환한다.
mp4 파일은 사용자가 영상 처리를 `convert`로 지정한 경우에만 재인코딩한다. 기본값(`upload`)이면 건너뛴다.

즉, `.mxf` 또는 `.mov`가 존재하면 영상 처리 모드가 `upload`이어도 4단계를 실행한다.
영상 포맷은 MP4 단일 사용 (WebM 불필요).

`scripts/batch-convert-video.js`를 실행한다.

### Desktop / Mobile 분기

영상 폴더에 `desktop/`, `mobile/` 하위 폴더가 존재하면 **각각 다른 설정으로 분리 실행**한다.

| 폴더 | 목표 크기 | 해상도 (width) | 이유 |
|------|----------|---------------|------|
| `desktop/` | **12MB** | 원본 유지 (미지정) | 데스크탑은 고해상도 필요 |
| `mobile/` | **5MB** | **480px** | 모바일은 대역폭 절약 우선 |

`desktop/`과 `mobile/` 하위 폴더가 없는 경우(플랫 구조)에는 기본값(5MB, 원본 해상도)으로 단일 실행한다.

### 실행 방법

```bash
node "{스킬루트}/scripts/batch-convert-video.js" "{대상경로}" {목표MB} {width}
```

**예시 — desktop/mobile 분기:**
```bash
# hero-video desktop (12MB, 원본 해상도)
node ".claude/skills/publish-asset/scripts/batch-convert-video.js" "public/products/arabia-cruise/hero-video/desktop" 12

# hero-video mobile (5MB, 480px)
node ".claude/skills/publish-asset/scripts/batch-convert-video.js" "public/products/arabia-cruise/hero-video/mobile" 5 480

# section5 desktop (12MB, 원본 해상도)
node ".claude/skills/publish-asset/scripts/batch-convert-video.js" "public/products/arabia-cruise/section5/desktop" 12

# section5 mobile (5MB, 480px)
node ".claude/skills/publish-asset/scripts/batch-convert-video.js" "public/products/arabia-cruise/section5/mobile" 5 480
```

**예시 — 플랫 구조 (하위 폴더 없음):**
```bash
# 기본값 (5MB, 원본 해상도)
node ".claude/skills/publish-asset/scripts/batch-convert-video.js" "public/products/alaska-cruise/hero-video" 5
```

### 출력 JSON

```json
[
  { "action": "SKIP", "original": "...", "size": 3000000 },
  { "action": "RECOMPRESSED", "original": "clip.mp4", "origSize": 15000000, "finalSize": 4800000 },
  { "action": "CONVERTED", "original": "clip.mov", "converted": "clip.mp4", "origSize": 20000000, "finalSize": 4500000 },
  { "action": "FAILED", "original": "...", "origSize": 10000000, "error": "ffprobe failed" }
]
```

**desktop/mobile 각각의 출력을 모두 저장해둔다 — 5단계, 7단계에서 사용한다.**

---

## 5단계: 원본 파일 삭제

3단계/4단계 출력에서 `action: "CONVERTED"`인 항목의 `original` 파일을 삭제한다.
(포맷이 변경되어 새 파일이 생긴 경우에만 원본을 삭제하는 것이다.)

**삭제하지 않는 경우:**
- `RECOMPRESSED`: 원본 위에 덮어쓰기됨 (삭제할 원본이 없음)
- `SKIP`: 변환 자체를 하지 않음
- `FAILED`: 변환 실패

**안전 조건 (모두 충족 시 삭제):**
1. 경로가 `public/products/` 하위인가
2. 확장자가 이미지(jpg, jpeg, png, webp, avif, jfif, gif, bmp) 또는 영상(mp4, mov, mxf)인가
3. `converted` 파일이 실제로 존재하는가

```bash
rm "{original 파일경로}"
```

삭제한 파일 수를 기록한다 — 9단계 보고에 사용.

---

## 6단계: R2 업로드

`scripts/upload-to-r2.js` 스크립트를 사용하여 대상 경로의 파일을 Cloudflare R2에 업로드한다.
(5단계에서 원본을 삭제했으므로, 변환된 파일만 업로드된다.)

### 실행 방법

```bash
node "{스킬루트}/scripts/upload-to-r2.js" "{프로젝트루트}" "{대상경로}"
```

**예시:**
```bash
node ".claude/skills/publish-asset/scripts/upload-to-r2.js" "C:\AI_Project\cruise-schedule-web-page" "public/products/alaska-cruise/section3"
```

- 스크립트는 `{프로젝트루트}/.env.local`에서 R2 인증 정보를 읽는다
- 대상 경로 하위의 모든 파일을 `public/` 기준 상대경로로 R2에 업로드한다
- 예: `public/products/alaska-cruise/section4/section4-b.webp` → R2 key: `products/alaska-cruise/section4/section4-b.webp`

### 출력 JSON

```json
[
  { "localPath": "...", "r2Key": "products/...", "r2Url": "https://pub-xxx.r2.dev/products/...", "size": 85234, "status": "OK" },
  { "localPath": "...", "r2Key": "...", "r2Url": "...", "size": 0, "status": "FAILED", "error": "..." }
]
```

**이 출력을 저장해둔다 — 7단계, 8단계에서 사용한다.**

업로드 실패한 파일이 있으면 해당 파일은 이후 단계에서 제외한다.

---

## 7단계: 데이터 파일 경로 교체

### 모드 감지

`data/products/{상품명}/intro-data.ts`에서 `"/shared/placeholder.png"` 존재 여부를 확인한다.
- **발견됨** → **populate 모드**: `references/populate-mode.md`를 읽고 절차를 따른다.
- **발견 안됨** → **교체 모드**: `references/replace-mode.md`를 읽고 절차를 따른다.

---

## 8단계: 로컬 파일 삭제

R2 업로드와 경로 교체가 모두 완료된 파일의 로컬 복사본을 삭제한다.
(원본은 5단계에서 이미 삭제됨. 여기서는 변환된/건너뛴 파일을 삭제한다.)

```bash
rm "{파일경로}"
```

**안전 조건 (모두 충족 시 자동 삭제)**:
- 삭제 대상이 `public/products/{상품명}/` 하위 경로인가
- 파일 확장자가 이미지(jpg, jpeg, png, webp, avif, jfif, gif, bmp) 또는 영상(mp4, mov, mxf)인가
- 6단계 upload-to-r2.js 출력에서 해당 파일의 `status`가 `"OK"`인가

안전 조건을 충족하지 않는 파일은 삭제하지 않고 결과 보고에 "삭제 건너뜀" 상태로 기록한다.

---

## 9단계: 결과 보고

### 이미지 변환 결과
| 원본 파일 | 변환 후 | R2 URL | 크기 | 상태 |
|---|---|---|---|---|
| section4/photo.jpg | photo.webp | https://pub-xxx.r2.dev/... | 85KB | OK |

### 영상 처리 결과
| 원본 파일 | R2 URL | 크기 | 상태 |
|---|---|---|---|
| hero-video/clip.mp4 | https://pub-xxx.r2.dev/... | 3.7MB | OK |

### 요약
- 이미지: N개 변환 완료, N개 건너뜀
- 영상: N개 처리 완료
- 원본 삭제: N개
- 총 용량 절감: 변환 전 X MB → 변환 후 Y MB (Z% 절감)
- R2 업로드: N개 성공, N개 실패
- 데이터 파일 경로 교체: N개 파일, N개 경로
- 로컬 파일 삭제: N개
- 용량 초과 경고가 있으면 여기에 표시

**Populate 모드 실행 시 추가 항목:**
- Populate 모드: 활성
- 데이터 파일 주입: N개 파일, N개 필드
- 잔여 placeholder: N개 (파일명, 필드)

---

## 주의사항

- 모든 ffmpeg 명령에 `-y` 플래그를 붙여 덮어쓰기 확인을 건너뛴다.
- 파일명에 공백이 있을 수 있으므로 반드시 따옴표로 감싼다.
- 하나의 파일 변환이 실패해도 나머지 파일은 계속 처리한다. 실패한 파일은 결과 표에 "실패"로 기록한다.
- `.env.local`의 R2 키가 노출되지 않도록 주의한다. 결과 보고에서 R2_PUBLIC_URL은 표시하되 키는 표시하지 않는다.

### 불필요한 승인 요청 방지

사용자가 불필요하게 승인 버튼을 눌러야 하는 상황을 최소화한다.

- **`cd`를 사용하지 않는다.** `cd && 명령` 복합 명령은 무조건 수동 승인을 요구한다. 절대경로를 사용한다.
- **명령을 체이닝하지 않는다.** `명령1 && 명령2` 대신 별도의 Bash tool call로 분리한다.
- **파일 목록 확인은 Glob 도구를 사용한다.** `ls`, `find` 등의 Bash 명령 대신 Glob 도구를 쓰면 승인 없이 실행된다.
- **node 스크립트는 단독 실행한다.** `node script.js args1 && node script.js args2` 대신 두 번의 별도 Bash 호출로 나눈다.

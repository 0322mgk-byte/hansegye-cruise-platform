# 7-B: 교체 모드 (기존 로컬 경로 → R2 URL)

R2 업로드가 성공한 파일에 대해, `data/products/{상품명}/` 내의 .ts 파일에서 기존 로컬 경로를 R2 URL로 교체한다.

## 경로 매핑 생성

3단계/4단계 출력과 6단계 출력을 조합하여 매핑을 만든다:

1. **CONVERTED** 항목: `original`의 파일명(확장자 포함) → 6단계 출력에서 대응하는 `r2Url`
   - 원본: `/products/alaska-cruise/section4/section4-b.jpg`
   - R2: `https://pub-xxx.r2.dev/products/alaska-cruise/section4/section4-b.webp`
2. **RECOMPRESSED / SKIP** 항목: `original`의 파일명 → 6단계 출력에서 같은 파일명의 `r2Url`
   - 원본: `/products/alaska-cruise/section3/healing-wellness/onship-spa-massage.avif`
   - R2: `https://pub-xxx.r2.dev/products/alaska-cruise/section3/healing-wellness/onship-spa-massage.avif`

## 교체 대상 파일

이미지/영상 경로를 포함하는 데이터 파일들:
- `hero-data.ts` — 히어로 영상
- `intro-data.ts` — 시설 안내 이미지
- `features-data.ts` — 객실 이미지
- `details-data.ts` — 상세 스펙 영상
- `schedule-days-data.ts` — 일정별 이미지
- `schedule-modals-data.ts` — 모달 이미지
- `index.ts` — ogImage 등

## 교체 방법

1. Grep으로 `data/products/{상품명}/` 내 모든 .ts 파일에서 이미지/영상 경로를 검색한다
2. 각 경로에 대해 Edit 도구로 교체한다:
   - **확장자가 변경된 경우** (예: `.jpg` → `.webp`):
     ```
     변경 전: "/products/alaska-cruise/section4/section4-b.jpg"
     변경 후: "https://pub-xxx.r2.dev/products/alaska-cruise/section4/section4-b.webp"
     ```
   - **확장자가 동일한 경우**:
     ```
     변경 전: "/products/alaska-cruise/section3/healing-wellness/onship-spa-massage.avif"
     변경 후: "https://pub-xxx.r2.dev/products/alaska-cruise/section3/healing-wellness/onship-spa-massage.avif"
     ```

## URL 중복 방지

경로 교체 시 반드시 **따옴표를 포함하여** 매칭한다.
`"/products/..."`를 `"https://r2.dev/..."`로 교체하면, 이미 교체된 R2 URL 내부의
부분 문자열(`r2.dev/products/...`)이 다시 매칭되는 것을 방지할 수 있다.

```
# 올바른 예 (따옴표 포함 매칭)
old_string: '"/products/alaska-cruise/section4/photo.jpg"'
new_string: '"https://pub-xxx.r2.dev/products/alaska-cruise/section4/photo.webp"'

# 잘못된 예 (따옴표 없이 매칭 → 이미 교체된 URL 내부에서 재매칭됨)
old_string: '/products/alaska-cruise/section4/photo.webp'
```

# 7-A: Populate 모드 (placeholder → R2 URL 주입)

6단계 R2 업로드 결과에서 `status: "OK"`인 파일들의 `r2Url`을 사용한다.
폴더 구조와 데이터 파일 필드의 1:1 매핑을 기반으로 placeholder를 교체한다.

## 매핑 테이블

| 폴더 경로 | 데이터 파일 | 대상 필드 | 매핑 키 |
|---|---|---|---|
| `hero-video/desktop/` | `hero-data.ts` | `videoSources` | 고정 |
| `hero-video/mobile/` | `hero-data.ts` | `mobileVideoSources` | 고정 |
| `section3/entertainment/` | `intro-data.ts` | `facilities[]` where `name === "엔터테인먼트"` → `images` | 고정 |
| `section3/outdoor-leisure/` | `intro-data.ts` | `facilities[]` where `name === "아웃도어 & 레저"` → `images` | 고정 |
| `section3/healing-wellness/` | `intro-data.ts` | `facilities[]` where `name === "힐링 & 웰니스"` → `images` | 고정 |
| `section4/inside/` | `features-data.ts` | `rooms[]` where `name === "인사이드"` → `image` | 고정 |
| `section4/oceanview/` | `features-data.ts` | `rooms[]` where `name === "오션뷰"` → `image` | 고정 |
| `section4/balcony/` | `features-data.ts` | `rooms[]` where `name === "발코니"` → `image` | 고정 |
| `section5/desktop/` | `details-data.ts` | 데스크톱 영상 소스 | 고정 |
| `section5/mobile/` | `details-data.ts` | 모바일 영상 소스 | 고정 |
| `sectrion6/dayN/{FolderName}/` | `schedule-days-data.ts` | `items[]` where `modalId` 매칭 → `images` | modalId 매칭 |
| `sectrion6/dayN/{FolderName}/` | `schedule-modals-data.ts` | modal where `id` 매칭 → `images` | modalId 매칭 |
| 루트 `og.*` | `index.ts` | `ogImage` | 고정 |

## modalId ↔ 폴더명 매칭 규칙

폴더명에서 하이픈 제거 + 소문자 변환 = modalId

```
Quattro-Canti → quattrocanti → modalId: "quattrocanti"
Sagrada-Familia → sagradafamilia → modalId: "sagradafamilia"
Museum-of-the-Future → museumofthefuture → modalId: "museumofthefuture"
```

## 교체 절차

**A. hero-data.ts (영상)**

1. 6단계 결과에서 `hero-video/desktop/` 하위 R2 URL을 수집
2. 6단계 결과에서 `hero-video/mobile/` 하위 R2 URL을 수집
3. 파일을 읽고, `videoSources: []`를 찾아서 교체:
   ```typescript
   // 변경 전
   videoSources: [],

   // 변경 후 (desktop/ 폴더의 mp4)
   videoSources: [
     { src: "https://r2.dev/.../hero-video/desktop/hero.mp4", type: "video/mp4" },
   ],
   ```
4. `mobileVideoSources: []`도 동일하게 교체 (mobile/ 폴더)
5. 영상 포맷은 MP4 단일 사용 (WebM 불필요)

**B. intro-data.ts (시설 이미지)**

1. 시설별 폴더→이름 매핑:
   - `section3/entertainment/` → `name: "엔터테인먼트"`
   - `section3/outdoor-leisure/` → `name: "아웃도어 & 레저"`
   - `section3/healing-wellness/` → `name: "힐링 & 웰니스"`
2. 각 시설에 대해:
   - 6단계 결과에서 해당 폴더의 R2 URL들을 수집
   - 파일에서 `name: "엔터테인먼트"` 블록을 찾음
   - 해당 블록의 `images: ["/shared/placeholder.png"]`를 R2 URL 배열로 교체
   - Edit 도구 사용 시 `name: "..."` + `images:` 를 포함한 충분한 컨텍스트로 유니크하게 매칭

**C. features-data.ts (객실 이미지)**

1. 객실별 폴더→이름 매핑:
   - `section4/inside/` → `name: "인사이드"`
   - `section4/oceanview/` → `name: "오션뷰"`
   - `section4/balcony/` → `name: "발코니"`
2. 각 객실에 대해:
   - 6단계 결과에서 해당 폴더의 R2 URL 1개를 가져옴 (대표 이미지)
   - 파일에서 `name: "인사이드"` 블록 찾음
   - `image: "/shared/placeholder.png"`를 R2 URL로 교체

**D. schedule-days-data.ts (일정 이미지)**

1. `sectrion6/` 하위 폴더 구조를 스캔하여 dayN/{FolderName} 목록 생성
2. 각 폴더명에서 modalId 추출: `FolderName.replace(/-/g, '').toLowerCase()`
3. 6단계 결과에서 해당 폴더의 R2 URL들을 수집
4. 파일에서 `modalId: '{modalId}'` 블록을 찾음
5. 해당 블록의 `images: ['/shared/placeholder.png']`를 R2 URL 배열로 교체
6. Edit 사용 시 `modalId: '...'` + `images:` 를 포함한 컨텍스트로 유니크 매칭

**dayN 플랫 구조 (서브폴더 없는 경우) 처리:**
- update-cruise 규칙: tourist-spot이 1개인 일차는 서브폴더 없이 `dayN/`에 직접 이미지 배치
- 이 경우 `dayN/` 폴더 자체에 있는 이미지들을 해당 일차의 유일한 tourist-spot modalId에 매핑
- `schedule-days-data.ts`를 읽어서 해당 dayN의 tourist-spot modalId를 확인

**E. schedule-modals-data.ts (모달 이미지)**

1. D와 동일한 modalId → 폴더 매핑 사용
2. 파일에서 `id: '{modalId}'` 블록을 찾음
3. 해당 블록의 `images: ['/shared/placeholder.png']`를 R2 URL 배열로 교체
4. `schedule-days-data.ts`와 `schedule-modals-data.ts` 모두 같은 R2 URL 배열을 사용

**F. index.ts (OG 이미지)**

1. 6단계 결과에서 루트의 `og.*` 파일 R2 URL을 찾음
2. `ogImage: ''`를 R2 URL로 교체
3. `thumbnailImage: '/shared/placeholder.png'`도 적절한 R2 URL로 교체

**G. details-data.ts (제원 영상)**

1. 6단계 결과에서 `section5/desktop/` 및 `section5/mobile/` R2 URL을 수집
2. 데스크톱/모바일 영상 소스를 hero-data.ts와 동일한 방식으로 교체

## 주의사항

- 폴더에 이미지가 없으면 (빈 폴더) 해당 필드는 placeholder 그대로 유지
- R2 URL이 없는 (업로드 실패) 파일은 건너뜀
- 교체 완료 후 `"/shared/placeholder.png"` 잔여 여부를 Grep으로 확인하고 결과 보고에 포함

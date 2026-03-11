---
name: generate-cruise
description: >
  research-cruise로 조사한 결과를 읽어 14개 데이터 파일을 생성하고 빌드 검증 및 에셋 폴더를 만드는 스킬.
  이 스킬은 research-cruise가 완료된 후에만 사용한다 — 크루즈 일정 데이터가 포함된 요청에는 research-cruise를 먼저 사용해야 한다.
  "/generate-cruise", "크루즈 파일 생성", "데이터 파일 만들어줘", "조사 결과로 페이지 생성해줘" 같은 요청이나,
  /research-cruise 완료 후 /clear를 거쳐 파일 생성을 요청할 때 트리거된다.
  사용자가 크루즈 일정 원본 데이터를 함께 보내는 경우에는 이 스킬이 아닌 research-cruise를 사용한다.
---

# generate-cruise

**데이터 파일만 생성**하여 새로운 크루즈 상품 페이지를 만든다. UI 컴포넌트, 레이아웃, 스타일링 코드는 수정하지 않는다 — 이 프로젝트는 데이터와 프레젠테이션이 완전히 분리되어 있어, 데이터 파일만 넣으면 컴포넌트가 자동으로 페이지를 렌더링한다.

---

## 핵심 원칙

이 프로젝트는 데이터와 프레젠테이션이 분리된 구조이다. 컴포넌트는 `data/products/{slug}/`의 데이터를 읽어 동적으로 렌더링한다.

### 레퍼런스 복사 → 특정 필드만 교체 (가장 중요한 원칙)

새 크루즈 추가란 **알래스카 레퍼런스의 해당 파일을 실제로 읽어서 복사한 뒤, 참조 문서에 명시된 필드만 교체**하는 것이다. 템플릿이나 요약본에서 생성하지 않는다 — 레퍼런스를 직접 읽어야 기존 상품들과 구조·라벨·포맷이 정확히 일치하고, 참조 문서에 없는 필드를 실수로 누락하거나 변경하는 것을 방지할 수 있다.

- 참조 문서에 "교체할 필드"로 명시된 것만 교체한다
- 명시되지 않은 필드는 레퍼런스의 값을 그대로 유지한다
- UI에 표시되는 라벨 텍스트(`labels`, `notices`, `infoSections` 등)는 레퍼런스 그대로 보존한다

### 파일별 수정 범위:

| 마커 | 의미 | 파일 |
|------|------|------|
| 🔄 복사+교체 | 레퍼런스 복사 후 지정 필드만 교체 | hero, trip-info, schedule-labels, product-info |
| 🔧 구조조정 | 일수/기항지에 맞게 구조 변경 | schedule-days, schedule-modals |
| 🔬 조사반영 | Agent S/P 조사 결과로 내용 교체 | intro, features, details |
| 🔒 그대로복사 | 레퍼런스에서 100% 그대로 복사 | trip-summary, static-data |
| 🆕 자동생성 | 구조에 맞게 새로 생성 | meta.ts, index.ts |

**레퍼런스 상품:** `data/products/alaska-cruise/` (각 파일 생성 전에 반드시 해당 레퍼런스 파일을 실제로 읽는다)
**타입 정의:** `data/types.ts`

---

## 작업 공간 읽기 (Workspace)

### workspace 확인

`/research-cruise`가 저장한 `.cruise-workspace/{slug}/` 디렉토리에서 조사 결과를 읽는다:

```
.cruise-workspace/{slug}/
├── parsed-data.md          ← 파싱된 일정 데이터
├── agent-s.md              ← Agent S 선박 조사 결과
└── agent-p-{도시명}.md     ← Agent P 기항지 조사 결과 (도시별)
```

**workspace가 없으면 즉시 중단:** `.cruise-workspace/` 디렉토리가 없거나 `parsed-data.md`가 없으면 다음 메시지를 출력하고 종료한다:

```
workspace를 찾을 수 없습니다. 먼저 `/research-cruise`를 실행하여 조사를 완료하세요.
```

### 중단 후 재실행

파일 생성이 중단된 경우(컨텍스트 압축 등), 재실행 시 `data/products/{slug}/` 디렉토리가 이미 존재하더라도 **14개 파일을 전부 새로 생성**한다. 같은 workspace 데이터와 레퍼런스를 기반으로 만들기 때문에 결과가 거의 동일하며, 파일 간 정합성이 보장된다.

참고: research-cruise는 인터넷 조사(비용이 큰 작업)이므로 기존 결과 파일을 재활용(건너뛰기)하고, generate-cruise는 로컬 파일 복사+교체(비용이 낮은 작업)이므로 전부 재생성한다.

---

## 1단계: 데이터 파일 14개 생성

`data/products/{slug}/` 디렉토리를 생성하고 다음 순서로 파일 생성 (총 14개):

| # | 파일 | 마커 | 작업 방식 | 참조 문서 |
|---|------|------|----------|----------|
| 1 | `hero-data.ts` | 🔄 | 레퍼런스 복사 → 지정 필드 교체 | `references/data-structure.md` Section 1 |
| 2 | `trip-info-data.ts` | 🔄 | 레퍼런스 복사 → 항공편/기항지 교체 | `references/data-structure.md` Section 2 |
| 3 | `intro-data.ts` | 🔬 | 레퍼런스 구조 복사 → Agent S 내용 반영 | `references/data-structure.md` Section 3 |
| 4 | `features-data.ts` | 🔬 | 레퍼런스 구조 참고 → Agent S 객실 데이터 반영 | `references/data-structure.md` Section 4 |
| 5 | `details-data.ts` | 🔬 | 레퍼런스 구조 복사 → Agent S 제원 데이터 반영 | `references/data-structure.md` Section 5 |
| 6 | `schedule-labels-data.ts` | 🔄 | 레퍼런스 복사 → 선박명/날짜만 교체 | `references/data-structure.md` Section 6 |
| 7 | `schedule-days-data.ts` | 🔧 | 일수에 맞게 구조 변경 | `references/timeline-items.md` |
| 8 | `schedule-modals-data.ts` | 🔧 | 기항지에 맞게 모달 구성 | `references/timeline-items.md` |
| 9 | `product-info-data.ts` | 🔄 | 레퍼런스 복사 → 항공사/선박/기항지명만 교체 | `references/data-structure.md` Section 7 |
| 10 | `pricing-data.ts` | 🔄 | 사용자가 가격 제공 시 교체, 미제공 시 레퍼런스 그대로 | `references/data-structure.md` Section 8 |
| 11 | `trip-summary-data.ts` | 🔒 | 레퍼런스에서 **그대로 복사** | `references/example-patterns.md` Section 4 |
| 12 | `static-data.ts` | 🔒 | 레퍼런스에서 **그대로 복사** | `references/example-patterns.md` Section 5 |
| 13 | `meta.ts` | 🆕 | 자동 생성 (홈페이지 카드용 메타 정보) | `references/example-patterns.md` Section 6-A |
| 14 | `index.ts` | 🆕 | 자동 생성 (meta import + data 조립) | `references/example-patterns.md` Section 6-B |

**중요:** 각 파일 생성 전에 반드시 **알래스카 레퍼런스의 해당 파일을 실제로 읽고**, 참조 문서에서 교체할 필드 목록을 확인한다. 레퍼런스를 직접 읽어야 하는 이유: 각 파일에는 수십 개의 라벨, 옵션, 구조 필드가 있고 참조 문서에는 교체 대상만 명시되어 있으므로, 원본을 읽지 않으면 보존해야 할 필드를 누락하거나 구조가 틀어진다.

---

## 2단계: 등록 및 검증

1. `data/products/index.ts` (중앙 레지스트리)에 새 상품 추가: meta import + productMetas 배열 + productLoaders 항목 3곳 추가 (Section 8 참조)
2. `public/shared/placeholder.png` 존재 확인 (이미 있으면 건너뜀)
3. `npm run build` 실행하여 TypeScript 타입 에러 검증
4. 빌드 성공 시 workspace 정리: `rm -rf .cruise-workspace/{slug}`
5. 새 상품 URL 안내: `/products/{slug}`

---

## 3단계: 에셋 폴더 생성

1단계에서 생성한 데이터 파일을 기반으로 `public/products/{slug}/` 에셋 폴더 구조를 생성한다. 이 폴더에 사용자가 나중에 이미지와 영상을 넣는다.

### 고정 폴더 (항상 생성)

```
public/products/{slug}/
├── hero-video/          ← 히어로 영상
│   ├── desktop/         ← 데스크톱 영상 (mp4)
│   └── mobile/          ← 모바일 영상 (mp4)
├── section3/            ← 크루즈 시설 안내 (intro-data.ts)
│   ├── entertainment/
│   ├── outdoor-leisure/
│   └── healing-wellness/
├── section4/            ← 숙박 시설 (features-data.ts)
│   ├── inside/          ← 인사이드 객실 대표 이미지 1장
│   ├── oceanview/       ← 오션뷰 객실 대표 이미지 1장
│   └── balcony/         ← 발코니 객실 대표 이미지 1장
└── section5/            ← 크루즈 제원 (details-data.ts)
    ├── desktop/         ← 데스크톱용 제원 영상
    └── mobile/          ← 모바일용 제원 영상
```

- OG 이미지는 `public/products/{slug}/` 루트에 직접 배치 (폴더 불필요)
- section3 하위 폴더명은 고정 (모든 상품이 동일한 3개 카테고리 사용)

### section6 (일정별 관광지 이미지)

1단계에서 생성한 `schedule-days-data.ts`를 기반으로 생성한다.

```
public/products/{slug}/
└── section6/
    ├── day2/
    │   ├── Dubai/
    │   ├── Museum-of-the-Future/
    │   └── ...
    ├── day3/
    └── ...
```

**dayN 폴더 생성 규칙:**
- `scheduleDaysData`에서 `tourist-spot` 또는 `cruise-at-sea` 타입 아이템이 **1개 이상** 있는 일차만 생성
- 해당 아이템이 없는 일차(출발일, 귀국일 등)는 생성하지 않음

**dayN 하위 폴더 생성 규칙:**
- `tourist-spot` 또는 `cruise-at-sea` 아이템이 **2개 이상**인 일차 → 각 관광지별 하위 폴더 생성
- **1개**인 일차 → 하위 폴더 없이 플랫 구조 (이미지를 dayN/ 에 직접 배치)

**하위 폴더 네이밍:**

모달 `title`의 괄호 `()` 안 텍스트를 그대로 사용한다:
1. 모달 `title`에서 괄호 안 텍스트를 추출
2. Title Case로 변환, 단어 간 하이픈으로 연결
3. 관사/전치사(of, the, at, in)는 소문자 유지

| 모달 title | 폴더명 |
|---|---|
| `[관광정보] 이스탄불 (ISTANBUL)` | `Istanbul` |
| `[관광정보] 하기아 소피아 (HAGIA SOPHIA)` | `Hagia-Sophia` |
| `[관광정보] 톱카프 궁전 (TOPKAPI PALACE)` | `Topkapi-Palace` |
| `[관광정보] 카스르 알 와탄 (QASR AL WATAN)` | `Qasr-Al-Watan` |
| `[관광정보] 예류지질공원 (YEHLIU GEOPARK)` | `Yehliu-Geopark` |
| `[관광정보] 미코노스 풍차 (KATO MILI WINDMILLS)` | `Kato-Mili-Windmills` |

**생성 명령:** `mkdir -p`로 전체 구조를 한 번에 생성한다.

---

## 핵심 규칙

### 사용자 일정 데이터 → 알래스카 패턴 정규화
사용자가 제공한 일정 원본은 **파싱의 입력 소스**로만 취급한다 (parsed-data.md에 원본 보존). 실제 `schedule-days-data.ts` 생성 시에는 알래스카 레퍼런스(`data/products/alaska-cruise/schedule-days-data.ts`)의 **형식과 구조**에 맞춰 정규화한다.

⚠️ **"알래스카 패턴"은 형식/구조만 의미한다 — 알래스카의 일정 내용을 복사하는 것이 아니다.**
- **형식은 알래스카에서**: TimelineItem 배열 구조, text 아이템 간결함 수준, 카드 배치 순서, details 작성 스타일
- **내용은 사용자 데이터에서**: 도시명, 날짜, 시간, 관광지, 항공편, 호텔, 식사 등 일정 고유 정보는 전부 사용자가 제공한 새 크루즈 일정에서 가져온다

**추출하는 정보 (schedule-days-data.ts에 반영):**
- 시간 + 핵심 이벤트 (출발, 도착, 미팅, 승선, 하선 등)
- 여행 필수 details (교통편, 비행시간, 시차 등)
- 관광지/체험 이름 (tourist-spot 카드 생성용)
- 식사 종류, 호텔명/등급, 출항 시간/오버나이트 안내

**걸러내는 정보 (schedule-days-data.ts에 넣지 않음):**
- 호텔 마케팅 카피 (소개글, 부대시설 나열 등)
- 사진/이미지 파일명, 마케팅 해시태그/슬로건
- 중복 선박 스펙 (details-data.ts에서 별도 관리)
- 상세 투어 타임테이블 (`✔ 관광 일정: [08:30] 미팅 → ...` 등 세부 동선)
- 현지 사정 안내 등 반복 고지 문구 (departure-notice의 고정 details가 이미 커버)

**항공편 출발 아이템의 필수 표준 항목** (예외 — 사용자 미제공 시에도 자동 보충):
  - `시차 : 한국보다 {N}시간 느립니다/빠릅니다.` — 메인 에이전트가 목적지 기준으로 판단 (서머타임 미적용, 대표 시차)
  - `항공 시간 및 편수는 변경될 수 있습니다.` — 고정 문구

상세 패턴은 `references/timeline-items.md`의 예시 참조.

### 관광지 카드 세분화 (가장 중요한 규칙)
사용자가 제공한 일정에서 **이름이 붙은 관광지/체험**마다 개별 `tourist-spot` 카드를 생성한다. 기항지 관광일의 카드 구성:

1. **도시 개요 카드 1개** — `title: '[관광 정보] {도시명} ({로마자})'` 형식
2. **개별 관광지 카드 N개** — `title: '[관광 정보] {관광지명} ({로마자})'` 형식, 각 관광명소/체험마다 1개씩

상세 규칙, 예시 및 카드 생성 기준은 `references/timeline-items.md`의 tourist-spot 섹션 참조.

### Google Maps 지도 자동 생성
tourist-spot 모달에는 반드시 지도를 포함한다. `googleMapQuery`로부터 `googleMapEmbed`를 자동 생성한다.
생성 규칙 및 모달 타입별 포함 여부는 `references/timeline-items.md`의 "googleMapEmbed 자동 생성 규칙" 참조.
Agent P에게 embed URL 조사를 요청하지 않는다 — `googleMapQuery`만 조사하면 embed URL은 자동 생성된다.

### 이미지/영상 처리
컴포넌트가 `images[0]`에 직접 접근하여 빈 배열 사용 시 크래시가 발생하므로, 반드시 플레이스홀더 사용:

| 필드 타입 | 값 |
|-----------|-----|
| `images: string[]` | `["/shared/placeholder.png"]` |
| `image: string` | `"/shared/placeholder.png"` |
| `videoSources` | `[]` (빈 배열은 안전) |
| `mobileVideoSources` | `[]` (빈 배열은 안전) |
| `thumbnailImage` | `"/shared/placeholder.png"` |
| `ogImage` | `""` (빈 문자열) |

### 빌딩 블록 조립 방식
각 일차의 구성은 고정 템플릿이 아니라, 사용자 데이터를 읽고 해당하는 블록만 골라 조립한다. 블록 선택 기준, 배치 순서, 엣지 케이스 처리 규칙은 `references/timeline-items.md`의 "빌딩 블록 조립 방식" 섹션 참조.

### 동적 일수 생성
`scheduleDaysData` 배열의 항목 수 = UI 아코디언 개수. 크루즈가 8박 11일이면 `DayScheduleData` 객체 11개를 생성한다.

### 직항 vs 경유 항공편
`references/data-structure.md` Section 2의 분기 로직 참조. 직항은 배열에 FlightLeg 1개, 경유는 FlightLeg 2개 + `arriveLayover`/`departLayover` 라벨 필드 추가. 항공편 정보가 제공되지 않은 경우 항공편 관련 필드를 생략한다.

### 승선/하선 수속 안내 (Info Cards)
승선(`modalId: "boarding"`) 및 하선(`modalId: "disembarkation"`) info-card와 해당 info 모달은 알래스카 레퍼런스에서 그대로 복사한다. title 필드의 선박명만 변경. `references/example-patterns.md` Section 7 참조.

### 선박 정보 카드 (ship-info)
승선일에 `tourist-spot` 타입으로 선박 정보 카드를 1개 포함하고, `schedule-modals-data.ts`에 `ship-info` 모달을 1개 생성한다. Agent S의 선박 조사 결과를 반영. `references/timeline-items.md`의 ship-info Modal 참조.

### 기항지 선택 관광
사용자가 선택 관광 데이터를 제공한 경우에만 `shore-excursion` 타임라인 아이템과 모달을 포함한다. 제공하지 않으면 해당 카드를 완전히 제외.

### meta 자동 생성
| 필드 | 규칙 |
|------|------|
| `slug` | 크루즈명 영문 변환 + `-cruise` |
| `name` | `{선박명} {지역} 크루즈 {N박 N일}` (한국어) |
| `shortDescription` | 기항지 도시 나열 (` · ` 구분) |
| `ogTitle` | 아래 OG 카피 생성 규칙 참조 |
| `ogDescription` | 아래 OG 카피 생성 규칙 참조 |
| `thumbnailImage` | `"/shared/placeholder.png"` |
| `ogImage` | `""` (빈 값 — 사용자가 나중에 설정) |
| `cardDepartureLabel` | `"YY년 M월 D일 출발"` (예: `"26년 1월 10일 출발"`) |
| `cardTitle` | `"{지역} 크루즈 {N박 N일}"` — 선박명 제외 (예: `"아라비아 크루즈 7박 9일"`) |
| `cardShipName` | `"{한글 선박명} ({영문 선박명})"` (예: `"코스타 토스카나호 (Costa Toscana)"`) |
| `cardRoute` | 아래 경로 요약 규칙 참조 |
| `cardPrice` | `"{최저가격}원~"` — 천 단위 콤마 포함 (예: `"5,790,000원~"`) pricing-data의 첫 번째 roomTab 최저가 사용 |

#### OG 카피 생성 규칙 (`ogTitle`, `ogDescription`)

SNS/카카오톡 공유 시 노출되는 카피. 스크롤을 멈추고 클릭하게 만드는 것이 목적이다.

**타겟:** 20~40대 / **핵심 소구:** 호기심, 의외성

**글자 수:**
- `ogTitle`: 40자 이내 (카카오톡 미리보기 잘림 방지)
- `ogDescription`: 80자 이내

**필수 조건:**
- `ogTitle`과 `ogDescription` 중 최소 하나에 "크루즈"를 포함한다
- `name`이나 `cardTitle`을 그대로 복사하지 않는다 — OG 카피는 별도의 독립적인 카피이다

**작성 프로세스:**
1. `references/og-copy-guide.md`를 읽고 소비자 욕구(Desires)와 불안(Barriers) 목록을 파악한다
2. 이 크루즈 상품의 핵심 특장점(Agent P 조사 결과 중 가장 차별화되는 요소)을 1개 선정한다
3. Section 5(상품 특성 → 욕구 매칭)를 참고하여, 특장점에 가장 잘 맞는 소비자 욕구/불안을 연결한다
4. Section 4(후킹 기법)의 패턴 중 하나를 활용하여 ogTitle을 작성한다 — 관광지 정보가 아니라 소비자 심리를 건드리는 카피
5. ogDescription은 ogTitle의 호기심을 구체적 정보로 뒷받침한다 (어떤 크루즈인지, 왜 클릭해야 하는지)
6. Section 6(금지 패턴)에 해당하는 표현을 사용하지 않는다
7. 상품마다 가장 잘 어울리는 후킹 기법을 자율적으로 판단하여 선택한다 — 하나의 패턴에 고정하지 않는다

**주의:** 사용자가 OG 카피를 직접 지정한 경우, 사용자 제공 값을 그대로 사용한다.

### 홈페이지 카드 경로 요약 규칙 (`cardRoute`)
일정 순서(1일차→마지막 일차)를 기준으로 나열하되, 해상일은 제외한다. 귀환(출발지 복귀)은 생략한다.

**국가 3개 이상:** 국가명으로 나열
- 예: `"독일 > 덴마크 > 노르웨이"`, `"UAE > 오만 > 카타르"`

**국가 2개 이하:** 기항 도시명으로 나열
- 예: `"밴쿠버 > 주노 > 스캐그웨이 > 엔디캇 암 > 케치칸"`

### 스케줄 라벨
알래스카 레퍼런스에서 `scheduleLabelsData`를 복사하고 선박명 관련 텍스트만 수정. `scheduleMeta`는 새 크루즈의 날짜 범위와 기간을 반영한다.

---

## 참조 문서

데이터 파일 생성 전에 **알래스카 레퍼런스 파일을 실제로 읽고**, 다음 참조 문서에서 교체할 필드 목록을 확인:

- **`references/data-structure.md`** — 파일별 "교체할 필드" 목록과 "보존할 필드" 목록. 이 문서에 명시된 필드만 교체하고, 나머지는 레퍼런스 그대로 유지한다.
- **`references/timeline-items.md`** — TimelineItem 10가지 타입 + ModalData 5가지 타입 예제 포함. 관광지 카드 세분화 규칙 포함.
- **`references/example-patterns.md`** — 알래스카 레퍼런스에서 그대로 복사할 패턴 (static-data, trip-summary, pricing-data, 승선/하선 안내 모달)
- **`references/og-copy-guide.md`** — OG 카피 작성을 위한 소비자 욕구/불안 분석 및 후킹 기법 가이드

---
name: update-cruise
description: >
  사용자가 제공한 크루즈 일정 데이터로 TypeScript 데이터 파일을 생성하여 새로운 크루즈 상품 페이지를 만드는 스킬.
  사용자가 크루즈 일정표(텍스트 또는 이미지)를 제공하고 새 크루즈 상품 페이지 생성, 크루즈 목적지 추가,
  크루즈 일정 데이터 파일 생성을 요청할 때 이 스킬을 사용한다.
  "새로운 지중해 크루즈 추가해줘", "이 크루즈 일정으로 페이지 만들어줘", "이 일정표로 새 상품 만들어줘"
  같은 요청이나, 사용자가 크루즈 일정 데이터를 붙여넣기/업로드할 때 트리거된다.
---

# update-cruise

**데이터 파일만 생성**하여 새로운 크루즈 상품 페이지를 만든다 — UI 컴포넌트, 레이아웃, 스타일링 코드는 절대 수정하지 않는다.

## 핵심 원칙

이 프로젝트는 데이터와 프레젠테이션이 분리된 구조이다. 컴포넌트는 `data/products/{slug}/`의 데이터를 읽어 동적으로 렌더링한다.

### 레퍼런스 복사 → 특정 필드만 교체 (가장 중요한 원칙)

새 크루즈 추가란 **알래스카 레퍼런스의 13개 파일을 실제로 읽어서 복사한 뒤, 참조 문서에 명시된 필드만 교체**하는 것이다. 템플릿이나 요약본에서 생성하지 않는다.

- 참조 문서에 "교체할 필드"로 명시된 것만 교체한다
- 명시되지 않은 필드는 레퍼런스의 값을 그대로 유지한다
- UI에 표시되는 라벨 텍스트(`labels`, `notices`, `infoSections` 등)는 레퍼런스 그대로 보존한다

### 파일별 수정 범위:

| 마커 | 의미 | 파일 |
|------|------|------|
| 🔄 복사+교체 | 레퍼런스 복사 후 지정 필드만 교체 | hero, trip-info, schedule-labels, product-info |
| 🔧 구조조정 | 일수/기항지에 맞게 구조 변경 | schedule-days, schedule-modals |
| 🔬 조사반영 | Agent S/P 조사 결과로 내용 교체 | intro, features, details |
| 🔒 그대로복사 | 레퍼런스에서 100% 그대로 복사 | pricing, trip-summary, static-data |
| 🆕 자동생성 | 구조에 맞게 새로 생성 | index.ts |

**레퍼런스 상품:** `data/products/alaska-cruise/` (각 파일 생성 전에 반드시 해당 레퍼런스 파일을 실제로 읽는다)
**타입 정의:** `data/types.ts`

---

## 실행 흐름

### 1단계: 사용자 데이터 파싱

사용자가 제공한 일정(텍스트 또는 이미지)에서 다음 정보를 추출:
- 선박명 및 크루즈 선사
- 출발일 및 기간 (N박 N일)
- 항공사 및 항공편 정보 (직항 vs 경유)
- 기항지 도시 및 해상일
- **각 일차별 개별 관광지/체험 이름 목록** (이름이 붙은 관광명소, 박물관, 사원, 전망대, 체험 투어 등을 모두 추출 — 이 목록이 tourist-spot 카드와 모달의 생성 근거가 됨)
- 가격 데이터 (제공된 경우)
- 기항지 선택 관광 정보 (제공된 경우)

### 2단계: 서브에이전트 인터넷 조사 (병렬 실행)

**기항지별 병렬 에이전트 아키텍처**를 사용한다. 선박 조사 1개 + 기항지별 조사 N개를 모두 동시에 실행:

```
[모두 병렬 실행]
├── Agent S: 선박 조사 (제원 + 시설 + 객실)
├── Agent P-1: 기항지 1 조사 (예: 두바이 — 도시 개요 + 관광지 3개)
├── Agent P-2: 기항지 2 조사 (예: 무스카트 — 도시 개요 + 관광지 2개)
├── Agent P-3: 기항지 3 조사 (예: 도하 — 도시 개요 + 관광지 2개)
└── Agent P-4: 기항지 4 조사 (예: 아부다비 — 도시 개요 + 관광지 3개)
```

각 기항지 에이전트가 해당 도시의 개요 + 모든 개별 관광지를 함께 조사한다. 같은 도시의 관광지는 교통, 문화, 지리 등 공유 컨텍스트가 있어 하나의 에이전트가 처리하는 것이 품질과 효율 면에서 최적이다.

**해상일(sea day)**은 별도 에이전트를 배정하지 않는다. Agent S의 선박 시설 조사 결과를 활용하여 생성한다.

**Agent S — 선박 조사:**
크루즈 선박을 인터넷에서 조사하여 수집:
- 선박 제원: 톤수, 길이, 승무원, 높이(미터), 갑판 수(층), 승객 정원, 첫 항해, 객실 수
- 시설 설명: 엔터테인먼트, 아웃도어 & 레저, 힐링 & 웰니스 (3개 카테고리)
- 객실 스펙: 인사이드/오션뷰/발코니 객실 크기, 침대 타입, 어메니티
- YouTube 선박 투어 영상 ID (찾을 수 있는 경우)

Agent S 프롬프트 템플릿:
```
크루즈 선박 "{선박명}"에 대한 상세 정보를 인터넷에서 검색해줘.
필요한 정보:
1. 선박 제원 (8항목, 반드시 구분하여 조사):
   - 총 톤수 (예: 113,561톤)
   - 길이 (예: 289.86m)
   - 승무원 수 (예: 약 1,200명)
   - 선박 높이 — 미터 단위 (예: 59.44m, 74m) ※ 갑판 수와 별도
   - 승객 정원 (예: 3,080명)
   - 갑판/층 수 (예: 19층, 20층) ※ 선박 높이와 별도
   - 첫 항해 연도 (예: 2007. 4. 11 또는 2018년)
   - 총 객실 수 (예: 1,539개)
2. 선내 시설 3개 카테고리:
   - 엔터테인먼트: 극장, 공연, 카지노, 바
   - 아웃도어 & 레저: 수영장, 스포츠 코트, 워터파크, 조깅 트랙
   - 힐링 & 웰니스: 스파, 피트니스 센터, 사우나, 자쿠지
   각 카테고리별 subtitle(1줄)과 description(2-3문장, 한국어)을 작성
3. 객실 타입 (인사이드, 오션뷰, 발코니):
   각각: 면적(m²), 침대 구성, TV 크기, 냉장고 유무, 욕실 설비
4. 선박 투어 YouTube 영상 ID (찾을 수 있다면)
구조화된 형식으로 반환.
```

**Agent P-{N} — 기항지별 조사 (기항지 수만큼 병렬 생성):**
각 기항지 도시마다 1개의 에이전트를 배정한다. 해당 도시의 개요 + 그 도시 내 모든 관광지/체험을 함께 조사:

Agent P 프롬프트 템플릿:
```
"{도시명}"의 관광 정보를 인터넷에서 검색해줘.

■ 도시 개요:
- 도시명 한국어/영문
- 관광 목적지로서의 도시 설명 2-3단락 (한국어)
- Google Maps 검색 쿼리

■ 개별 관광지 ({관광지 수}개):
{해당 도시의 관광지 목록 — 예: "미래 박물관, 팜 주메이라 전망대, 사막 사파리 투어"}
각 관광지에 대해:
1. 관광지명 한국어 및 영문
2. 관광지 설명 2-3단락 (한국어)
3. 정보 테이블: 도시/국가, 주소, 홈페이지, 연락처, 입장료, 운영시간
4. Google Maps 검색 쿼리 (예: "Museum of the Future,Dubai,UAE")
5. Google Maps 임베드 URL
구조화된 형식으로 반환.
```

### 3단계: 데이터 파일 13개 생성

`data/products/{slug}/` 디렉토리를 생성하고 다음 순서로 파일 생성:

| # | 파일 | 마커 | 작업 방식 | 참조 문서 |
|---|------|------|----------|----------|
| 1 | `hero-data.ts` | 🔄 | 레퍼런스 복사 → 지정 필드 교체 | `references/data-structure.md` Section 1 |
| 2 | `trip-info-data.ts` | 🔄 | 레퍼런스 복사 → 항공편/기항지 교체 | `references/data-structure.md` Section 2 |
| 3 | `intro-data.ts` | 🔬 | 레퍼런스 구조 복사 → Agent S 내용 반영 | `references/data-structure.md` Section 3 |
| 4 | `features-data.ts` | 🔬 | 레퍼런스 구조 복사 → Agent S 내용 반영 | `references/data-structure.md` Section 4 |
| 5 | `details-data.ts` | 🔬 | 레퍼런스 구조 복사 → Agent S specs value 교체 | `references/data-structure.md` Section 5 |
| 6 | `schedule-labels-data.ts` | 🔄 | 레퍼런스 복사 → 선박명/날짜만 교체 | `references/data-structure.md` Section 6 |
| 7 | `schedule-days-data.ts` | 🔧 | 일수에 맞게 구조 변경 | `references/timeline-items.md` |
| 8 | `schedule-modals-data.ts` | 🔧 | 기항지에 맞게 모달 구성 | `references/timeline-items.md` |
| 9 | `pricing-data.ts` | 🔒 | **레퍼런스 그대로 복사** (가격 미제공 시) | `references/data-structure.md` Section 9 |
| 10 | `product-info-data.ts` | 🔄 | 레퍼런스 복사 → 항공사/선박/기항지명만 교체 | `references/data-structure.md` Section 10 |
| 11 | `trip-summary-data.ts` | 🔒 | 레퍼런스에서 **그대로 복사** | `references/example-patterns.md` Section 4 |
| 12 | `static-data.ts` | 🔒 | 레퍼런스에서 **그대로 복사** | `references/example-patterns.md` Section 5 |
| 13 | `index.ts` | 🆕 | 자동 생성 | `references/example-patterns.md` Section 6 |

**중요:** 각 파일 생성 전에 반드시 **알래스카 레퍼런스의 해당 파일을 실제로 읽고**, 참조 문서에서 교체할 필드 목록을 확인한다. 레퍼런스를 읽지 않고 템플릿에서 생성하면 안 된다.

### 4단계: 등록 및 검증

1. `data/products/index.ts` (중앙 레지스트리)에 새 상품 추가
2. `public/shared/placeholder.png` 존재 확인 (없으면 생성 — 400x300 회색 PNG)
3. `npm run build` 실행하여 TypeScript 타입 에러 검증
4. 새 상품 URL 안내: `/products/{slug}`

---

## 핵심 규칙

### 관광지 카드 세분화 (가장 중요한 규칙)
사용자가 제공한 일정에서 **이름이 붙은 관광지/체험**마다 개별 `tourist-spot` 카드를 생성한다. 기항지 관광일의 카드 구성은 반드시 다음과 같다:

1. **도시 개요 카드 1개** — `title: '[관광 정보] {도시명}'` 형식. 도시 전체를 소개.
2. **개별 관광지 카드 N개** — 사용자 데이터에 이름이 나온 각 관광명소/체험마다 1개씩. `title`은 설명적 제목 사용 (예: `'미완의 걸작, 사그라다 파밀리아 [입장]'`).

각 tourist-spot 카드에는 대응하는 모달 데이터도 `schedule-modals-data.ts`에 반드시 함께 생성해야 한다.

**카드로 만드는 항목:** 이름이 있는 관광명소, 박물관, 사원, 전망대, 체험 투어 (사막 사파리, 유람선 등)
**카드로 만들지 않는 항목 (text 타입 사용):** "자유시간", "쇼핑몰 방문", "항구 복귀", "공항 이동" 등

예시 — 사용자 데이터:
> 두바이 미래 박물관 [외관], 팜 주메이라 전망대 [내부], 사막 사파리 투어

→ 생성할 카드 4개:
1. `[관광 정보] 두바이` — 도시 개요 (modalId: `dubai`)
2. `두바이 미래 박물관` — 개별 카드 (modalId: `museumofthefuture`)
3. `팜 주메이라 전망대` — 개별 카드 (modalId: `palmjumeirah`)
4. `사막 사파리 투어` — 개별 카드 (modalId: `desertsafari`)

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

### 동적 일수 생성
`scheduleDaysData` 배열의 항목 수 = UI 아코디언 개수. 크루즈가 8박 11일이면 `DayScheduleData` 객체 11개를 생성한다.

### 직항 vs 경유 항공편
`references/data-structure.md` Section 2의 분기 로직 참조. 직항은 배열에 FlightLeg 1개, 경유는 FlightLeg 2개 + `arriveLayover`/`departLayover` 라벨 필드 추가.

### 승선/하선 수속 안내 (Info Cards)
승선(`modalId: "boarding"`) 및 하선(`modalId: "disembarkation"`) info-card와 해당 info 모달은 알래스카 레퍼런스에서 그대로 복사한다. title 필드의 선박명만 변경. `references/example-patterns.md` Section 7 참조.

### 기항지 선택 관광
사용자가 선택 관광 데이터를 제공한 경우에만 `shore-excursion` 타임라인 아이템과 모달을 포함한다. 제공하지 않으면 해당 카드를 완전히 제외.

### meta 자동 생성
| 필드 | 규칙 |
|------|------|
| `slug` | 크루즈명 영문 변환 + `-cruise` |
| `name` | `{선박명} {지역} 크루즈 {N박 N일}` (한국어) |
| `shortDescription` | 기항지 도시 나열 (` · ` 구분) |
| `ogTitle`, `ogDescription` | `""` (빈 값 — 사용자가 나중에 설정) |
| `thumbnailImage` | `"/shared/placeholder.png"` |
| `ogImage` | `""` (빈 값 — 사용자가 나중에 설정) |
| `cardDepartureLabel` | `"YY년 M월 D일 출발"` (예: `"26년 1월 10일 출발"`) |
| `cardTitle` | `"{지역} 크루즈 {N박 N일}"` — 선박명 제외 (예: `"아라비아 크루즈 7박 9일"`) |
| `cardShipName` | `"{한글 선박명} ({영문 선박명})"` (예: `"코스타 토스카나호 (Costa Toscana)"`) |
| `cardRoute` | 아래 경로 요약 규칙 참조 |
| `cardPrice` | `"{최저가격}원~"` — 천 단위 콤마 포함 (예: `"5,790,000원~"`) pricing-data의 첫 번째 roomTab 최저가 사용 |

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

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
| 🔬 조사반영 | Agent S/V/P 조사·검증 결과로 내용 교체 | intro, features, details |
| 🔒 그대로복사 | 레퍼런스에서 100% 그대로 복사 | trip-summary, static-data |
| 🆕 자동생성 | 구조에 맞게 새로 생성 | meta.ts, index.ts |

**레퍼런스 상품:** `data/products/alaska-cruise/` (각 파일 생성 전에 반드시 해당 레퍼런스 파일을 실제로 읽는다)
**타입 정의:** `data/types.ts`

---

## 실행 흐름

### 1단계: 사용자 데이터 파싱

사용자가 제공한 일정(텍스트 또는 이미지)에서 다음 정보를 추출:
- 선박명 및 크루즈 선사
- 출발일 및 기간 (N박 N일)
- 항공사 및 항공편 정보 (직항 vs 경유, 제공된 경우)
- 기항지 도시 및 해상일
- **각 일차별 개별 관광지/체험 이름 목록** (이름이 붙은 관광명소, 박물관, 사원, 전망대, 체험 투어 등을 모두 추출 — 이 목록이 tourist-spot 카드와 모달의 생성 근거가 됨)
- 가격 데이터 (제공된 경우)
- 기항지 선택 관광 정보 (제공된 경우)

### 2단계: 서브에이전트 인터넷 조사 (병렬 실행)

**기항지별 병렬 에이전트 아키텍처**를 사용한다. 선박 조사 1개 + 기항지별 조사 N개를 병렬 실행한 뒤, 객실 정보를 검증한다:

```
[1차: 병렬 실행]
├── Agent S: 선박 조사 (제원 + 시설 + 객실) — 공식 사이트 기반
├── Agent P-1: 기항지 1 조사 (예: 두바이 — 도시 개요 + 관광지 3개)
├── Agent P-2: 기항지 2 조사 (예: 무스카트 — 도시 개요 + 관광지 2개)
├── Agent P-3: 기항지 3 조사 (예: 도하 — 도시 개요 + 관광지 2개)
└── Agent P-4: 기항지 4 조사 (예: 아부다비 — 도시 개요 + 관광지 3개)

[2차: Agent S 완료 후 실행]
└── Agent V: 선박 정보 검증 (Agent S의 제원 + 객실 결과를 공식 사이트에서 교차 확인)
```

각 기항지 에이전트가 해당 도시의 개요 + 모든 개별 관광지를 함께 조사한다. 같은 도시의 관광지는 교통, 문화, 지리 등 공유 컨텍스트가 있어 하나의 에이전트가 처리하는 것이 품질과 효율 면에서 최적이다.

**해상일(sea day)**은 별도 에이전트를 배정하지 않는다. Agent S의 선박 시설 조사 결과를 활용하여 생성한다.

**Agent S — 선박 조사 (공식 사이트 필수):**
크루즈 선박의 정보를 **해당 선사의 공식 사이트**에서 우선적으로 수집한다:
- 선박 제원: 톤수, 길이, 승무원, 높이(미터), 갑판 수(층), 승객 정원, 첫 항해, 객실 수
- 시설 설명: 엔터테인먼트, 아웃도어 & 레저, 힐링 & 웰니스 (3개 카테고리)
- 객실 정보: **공식 사이트에 기재된 객실 타입별 어메니티를 있는 그대로** 수집 (임의 추가/생략 금지)

Agent S 프롬프트 템플릿:
```
크루즈 선박 "{선박명}"에 대한 상세 정보를 조사해줘.

■ 필수 규칙:
- 반드시 해당 선사의 공식 사이트(예: costacruises.com, princess.com, msccruises.com)에서 정보를 가져올 것
- 모든 데이터 항목에 출처 URL을 기록할 것
- 공식 사이트에 명시되지 않은 항목은 포함하지 말 것
- 선박 제원 8항목 중 공식 사이트에서 확인할 수 없는 항목은 빈 문자열("")로 반환할 것 (부정확한 정보보다 빈 값이 낫다)

■ 1. 선박 제원 (8항목, 반드시 구분하여 조사):
   - 총 톤수 (예: 113,561톤)
   - 길이 (예: 289.86m)
   - 승무원 수 (예: 약 1,200명)
   - 선박 높이 — 미터 단위 (예: 59.44m, 74m) ※ 갑판 수와 별도
   - 승객 정원 (예: 3,080명)
   - 갑판/층 수 (예: 19층, 20층) ※ 선박 높이와 별도
   - 첫 항해 연도 (예: 2007. 4. 11 또는 2018년)
   - 총 객실 수 (예: 1,539개)
   출처 URL: {공식 사이트 URL}

■ 2. 선내 시설 3개 카테고리:
   - 엔터테인먼트: 극장, 공연, 카지노, 바
   - 아웃도어 & 레저: 수영장, 스포츠 코트, 워터파크, 조깅 트랙
   - 힐링 & 웰니스: 스파, 피트니스 센터, 사우나, 자쿠지
   각 카테고리별 subtitle(1줄)과 description(2-3문장, 한국어)을 작성
   출처 URL: {공식 사이트 URL}

■ 3. 객실 정보 (공식 사이트 기반 — 가장 중요):
   공식 사이트에서 아래 3개 객실 카테고리에 해당하는 타입을 찾아 조사:
   - 인사이드 (공식 사이트 표기: Interior, Inside, Classic Interior 등)
   - 오션뷰 (공식 사이트 표기: Ocean View, Exterior, Classic Exterior 등)
   - 발코니 (공식 사이트 표기: Balcony, Veranda, Classic Balcony 등)

   각 객실 타입별:
   a) 공식 사이트에서 사용하는 정확한 객실 타입 명칭
   b) 면적(m²)
   c) 공식 사이트에 기재된 어메니티/설비를 있는 그대로 전부 수집
      - 공식 사이트에 나열된 항목만 포함 (임의 추가 금지)
      - 항목 수는 공식 사이트에 있는 만큼만
   d) 출처 URL

■ 출력 형식:
[선박 제원]
- 출처: {URL}
- 톤수: ... / 길이: ... / ...

[선내 시설]
- 출처: {URL}
- 엔터테인먼트: subtitle + description
- 아웃도어 & 레저: subtitle + description
- 힐링 & 웰니스: subtitle + description

[객실 정보]
인사이드 (공식 명칭: {공식 사이트 표기})
- 출처: {URL}
- 면적: {m²}
- 어메니티:
  1. {공식 사이트 항목 그대로}
  2. {공식 사이트 항목 그대로}
  ...

오션뷰 (공식 명칭: {공식 사이트 표기})
- 출처: {URL}
- 면적: {m²}
- 어메니티: (상동)

발코니 (공식 명칭: {공식 사이트 표기})
- 출처: {URL}
- 면적: {m²}
- 어메니티: (상동)
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
구조화된 형식으로 반환.
```

**Agent V — 선박 정보 검증 (Agent S 완료 후 실행):**
Agent S가 반환한 **제원 + 객실 정보**의 정확성을 공식 사이트에서 교차 검증한다. Agent S → Agent V는 순차 실행 (V는 S의 결과에 의존). Agent P는 V와 무관하므로 병렬 진행된다.

Agent V 프롬프트 템플릿:
```
아래는 "{선박명}" 선박 조사 결과이다. 출처 URL을 직접 방문하여 교차 검증해줘.

{Agent S의 출력 전체를 여기에 첨부}

■ 검증 작업 A: 선박 제원 (8항목)
1. Agent S가 제출한 출처 URL에 접속하여 각 제원 수치가 실제로 존재하는지 확인
2. 공식 사이트에서 확인할 수 없는 항목은 value를 빈 문자열("")로 처리
3. 단위(톤, m, 명, 층 등)가 올바른지 확인

■ 검증 작업 B: 객실 정보
1. Agent S가 제출한 출처 URL에 접속하여 해당 정보가 실제로 존재하는지 확인
2. 면적(m²) 수치가 공식 사이트 표기와 일치하는지 확인
3. 어메니티 항목이 공식 사이트에 실제로 기재되어 있는지 1:1 대조
4. 공식 사이트에는 있지만 Agent S가 누락한 항목이 있는지 확인하여 보충
5. 공식 사이트에 없는 항목이 Agent S 결과에 포함되어 있으면 제거

■ 출력 형식:
[제원 검증 결과]
- 공식 사이트 URL: {직접 방문하여 확인한 URL}
- 톤 수: {확인된 값 또는 ""} — 확인/불일치/미확인
- 길이: {확인된 값 또는 ""} — 확인/불일치/미확인
- 승무원: {확인된 값 또는 ""} — 확인/불일치/미확인
- 높이: {확인된 값 또는 ""} — 확인/불일치/미확인
- 승객 정원: {확인된 값 또는 ""} — 확인/불일치/미확인
- 규모: {확인된 값 또는 ""} — 확인/불일치/미확인
- 첫 항해: {확인된 값 또는 ""} — 확인/불일치/미확인
- 객실 수: {확인된 값 또는 ""} — 확인/불일치/미확인

[객실 검증 결과]
- 공식 사이트 URL: {직접 방문하여 확인한 URL}
- 검증 상태: 각 항목별 확인/불일치/미확인

[확정 객실 데이터] (검증 통과 항목만)
인사이드 (공식 명칭: {공식 사이트 표기})
- 면적: {확인된 m²}
- 어메니티:
  1. {확인된 항목}
  2. {확인된 항목}
  ...

오션뷰 (공식 명칭: ...)
- ...

발코니 (공식 명칭: ...)
- ...
```

### 3단계: 데이터 파일 14개 생성

`data/products/{slug}/` 디렉토리를 생성하고 다음 순서로 파일 생성 (총 14개):

| # | 파일 | 마커 | 작업 방식 | 참조 문서 |
|---|------|------|----------|----------|
| 1 | `hero-data.ts` | 🔄 | 레퍼런스 복사 → 지정 필드 교체 | `references/data-structure.md` Section 1 |
| 2 | `trip-info-data.ts` | 🔄 | 레퍼런스 복사 → 항공편/기항지 교체 | `references/data-structure.md` Section 2 |
| 3 | `intro-data.ts` | 🔬 | 레퍼런스 구조 복사 → Agent S 내용 반영 | `references/data-structure.md` Section 3 |
| 4 | `features-data.ts` | 🔬 | 레퍼런스 구조 참고 → Agent V 검증 데이터 반영 | `references/data-structure.md` Section 4 |
| 5 | `details-data.ts` | 🔬 | 레퍼런스 구조 복사 → Agent V 검증 제원 데이터 반영 | `references/data-structure.md` Section 5 |
| 6 | `schedule-labels-data.ts` | 🔄 | 레퍼런스 복사 → 선박명/날짜만 교체 | `references/data-structure.md` Section 6 |
| 7 | `schedule-days-data.ts` | 🔧 | 일수에 맞게 구조 변경 | `references/timeline-items.md` |
| 8 | `schedule-modals-data.ts` | 🔧 | 기항지에 맞게 모달 구성 | `references/timeline-items.md` |
| 9 | `product-info-data.ts` | 🔄 | 레퍼런스 복사 → 항공사/선박/기항지명만 교체 | `references/data-structure.md` Section 7 |
| 10 | `pricing-data.ts` | 🔄 | 사용자가 가격 제공 시 교체, 미제공 시 레퍼런스 그대로 | `references/data-structure.md` Section 8 |
| 11 | `trip-summary-data.ts` | 🔒 | 레퍼런스에서 **그대로 복사** | `references/example-patterns.md` Section 4 |
| 12 | `static-data.ts` | 🔒 | 레퍼런스에서 **그대로 복사** | `references/example-patterns.md` Section 5 |
| 13 | `meta.ts` | 🆕 | 자동 생성 (홈페이지 카드용 메타 정보) | `references/example-patterns.md` Section 6-A |
| 14 | `index.ts` | 🆕 | 자동 생성 (meta import + data 조립) | `references/example-patterns.md` Section 6-B |

**중요:** 각 파일 생성 전에 반드시 **알래스카 레퍼런스의 해당 파일을 실제로 읽고**, 참조 문서에서 교체할 필드 목록을 확인한다. 레퍼런스를 읽지 않고 템플릿에서 생성하면 안 된다.

### 4단계: 등록 및 검증

1. `data/products/index.ts` (중앙 레지스트리)에 새 상품 추가: meta import + productMetas 배열 + productLoaders 항목 3곳 추가 (Section 8 참조)
2. `public/shared/placeholder.png` 존재 확인 (없으면 생성 — 400x300 회색 PNG)
3. `npm run build` 실행하여 TypeScript 타입 에러 검증
4. 새 상품 URL 안내: `/products/{slug}`

### 5단계: 에셋 폴더 생성

3단계에서 생성한 데이터 파일을 기반으로 `public/products/{slug}/` 에셋 폴더 구조를 생성한다. 이 폴더에 사용자가 나중에 이미지와 영상을 넣는다.

#### 고정 폴더 (항상 생성)

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

#### section6 (일정별 관광지 이미지)

3단계에서 생성한 `schedule-days-data.ts`를 기반으로 생성한다.

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

### 사용자 일정 데이터 직접 매핑
사용자가 제공한 일정표의 텍스트 아이템(`[시간] 제목` + `▣ 세부항목`)은 AI가 임의로 재구성하지 않고 **그대로 매핑**한다:
- 각 `[시간] 제목`은 `text` 타입 아이템의 `time`과 `text` 필드가 된다
- 각 `▣ ...`은 해당 아이템의 `details` 배열 원소가 된다
- 사용자가 `▣` 항목을 제공하지 않은 텍스트 아이템은 `details` 필드를 생략한다
- AI가 임의로 details 항목을 추가/삭제/이동하지 않는다
- **예외 — 항공편 출발 아이템의 필수 표준 항목:** 사용자가 `▣`로 제공하지 않았더라도 아래 2개는 항상 details에 포함한다. 사용자가 제공했으면 그 값을 쓰고, 미제공이면 자동 보충한다:
  - `시차 : 한국보다 {N}시간 느립니다/빠릅니다.` — 메인 에이전트가 목적지 기준으로 판단 (서머타임 미적용, 대표 시차)
  - `항공 시간 및 편수는 변경될 수 있습니다.` — 고정 문구

이 원칙은 1일차(출발일), 마지막 일차(귀국일) 등 모든 일차의 text 아이템에 적용된다. 상세 매핑 규칙은 `references/timeline-items.md`의 "출발일 예시" 참조.

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

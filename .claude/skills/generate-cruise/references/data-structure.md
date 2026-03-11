# Data Structure Reference

모든 파일은 알래스카 레퍼런스(`data/products/alaska-cruise/`)를 **실제로 읽어서 복사**한 뒤, 아래에 명시된 필드**만** 교체한다.
명시되지 않은 필드는 레퍼런스의 값을 그대로 유지한다. 타입은 `data/types.ts`에 정의되어 있다.

---

## Section 1: hero-data.ts

**작업 방식:** 레퍼런스 파일을 읽고 복사한 뒤, 아래 필드만 교체
**레퍼런스:** `data/products/alaska-cruise/hero-data.ts`

### 교체할 필드:

| 필드 | 교체 규칙 | 예시 |
|------|----------|------|
| `cruiseLine` | 새 선박명 | `"코스타 크루즈 토스카나호"` |
| `departureDate` | `"YYYY년 MM월 DD일 출발"` | `"2026년 01월 10일 출발"` |
| `duration` | `"N박 N일"` | `"7박 9일"` |
| `nights` | `"N박"` | `"7박"` |
| `description` | 아래 형식을 반드시 준수 | — |
| `mobileDescription` | 아래 형식을 반드시 준수 | — |
| `videoSources` | `[]` (빈 배열) | — |
| `mobileVideoSources` | `[]` (빈 배열) | — |
| `mobileVideoSrc` | `""` (빈 문자열) | — |
| `posterImage` | `"/shared/placeholder.png"` | — |

### description 형식 (반드시 준수):
```
"{크루즈명} N박 N일의 상세 일정을 안내해 드립니다\n일자별 주요 일정과 기항지 정보를 지금 바로 확인하세요"
```
예시: `"아라비아 크루즈 7박 9일의 상세 일정을 안내해 드립니다\n일자별 주요 일정과 기항지 정보를 지금 바로 확인하세요"`

### mobileDescription 형식 (반드시 준수):
```
"{크루즈명} {departureDate}\n주요 일정과 기항지 정보를 지금 바로 확인하세요"
```
예시: `"아라비아 크루즈 {departureDate}\n주요 일정과 기항지 정보를 지금 바로 확인하세요"`

주의: `{departureDate}`는 문자열 리터럴 그대로 넣는다 (컴포넌트가 런타임에 치환함).

### 보존할 필드 (절대 수정 금지):
- `ctaText` — 레퍼런스 값 그대로 유지

---

## Section 2: trip-info-data.ts

**작업 방식:** 레퍼런스 파일을 읽고 복사한 뒤, 아래 필드만 교체
**레퍼런스:** `data/products/alaska-cruise/trip-info-data.ts`

### 교체할 필드:

| 필드 | 교체 규칙 |
|------|----------|
| `subtitle` | `"{출발지}에서 {도착지}까지 N박 N일의 항해"` (예: `"밴쿠버에서 알래스카까지 8박 10일의 항해"`) |
| `flights.outbound` | 새 항공편 FlightLeg 배열 |
| `flights.inbound` | 새 항공편 FlightLeg 배열 |
| `routeCities` | 새 기항지 배열 (해상 포함) |

### FlightLeg 구조:
```typescript
{
  airline: "대한항공",
  flightCode: "KE061",
  departureTime: "17:35",
  departureDate: "08/03 (월)",
  arrivalTime: "13:30",
  arrivalDate: "08/03 (월)",
  duration: "총 9시간 55분 소요",
}
```

### 직항 vs 경유 분기:
- **직항:** `outbound`/`inbound` 각각 FlightLeg 1개. `labels`에서 `arriveLayover`/`departLayover` 필드 제거.
- **경유:** `outbound`/`inbound` 각각 FlightLeg 2개. `labels`에 `arriveLayover: '경유지 도착'`, `departLayover: '경유지 출발'` 추가.
- **미제공:** 사용자가 항공편 정보를 제공하지 않은 경우 `flights` 전체를 생략한다. 사용자가 나중에 별도로 항공편 추가를 요청할 수 있다.

### 보존할 필드 (절대 수정 금지):
- `title`, `labels`의 기본 필드들 (`schedule`, `departKorea`, `arriveLocal` 등) — 레퍼런스 그대로 유지
- `reservationStatus`, `reservationCount`, `escortInfo`, `meetingPlace` — 레퍼런스 그대로 유지

---

## Section 3: intro-data.ts

**작업 방식:** 레퍼런스 파일을 읽고 구조를 복사한 뒤, Agent S 조사 결과로 내용 교체
**레퍼런스:** `data/products/alaska-cruise/intro-data.ts`

### 교체할 필드:

| 필드 | 교체 규칙 |
|------|----------|
| `description` | 알래스카 레퍼런스 값을 사용하지 않고 `"{새 선박명}에서 펼쳐지는 특별한 경험을 만나보세요."` 형식으로 교체 |
| `facilities[].subtitle` | Agent S 조사 결과. **20자 이내의 함축적 캐치프레이즈**로 작성 — 시설 고유 명칭(The Red Room 등)이나 구체적 스펙(255m, 1,300m² 등)은 subtitle에 넣지 않고 description에 배치. 한국 일반 소비자가 바로 이해할 수 있는 단어만 사용(생소한 외래어 금지) |
| `facilities[].description` | Agent S 조사 결과. 시설 고유 명칭은 사용 가능하되, 그 외 생소한 외래어는 쉬운 한국어로 대체 |
| `facilities[].alt` | `"{새 선박명} {카테고리명} 시설"` |
| `facilities[].images` | `["/shared/placeholder.png"]` |

### 보존할 필드 (절대 수정 금지):
- `title` (`"크루즈 시설 안내"`) — 레퍼런스 그대로
- `moreText` (`"자세히 보기"`) — 레퍼런스 그대로
- `facilities[].name` — 3개 카테고리명 (`"엔터테인먼트"`, `"아웃도어 & 레저"`, `"힐링 & 웰니스"`) 레퍼런스 그대로

---

## Section 4: features-data.ts

**작업 방식:** 레퍼런스 파일을 읽고 구조를 참고한 뒤, **Agent S 조사 객실 데이터**로 생성
**레퍼런스:** `data/products/alaska-cruise/features-data.ts` (구조 참고용)

### 핵심 원칙: 공식 사이트 기반 동적 어메니티

어메니티 항목의 **개수와 내용**은 선사 공식 사이트에 기재된 것만 포함한다.
레퍼런스(알래스카)의 어메니티 11개를 그대로 복사하지 않는다.
공식 사이트에 7개가 있으면 7개, 13개가 있으면 13개를 생성한다.

### 교체할 필드:

| 필드 | 교체 규칙 |
|------|----------|
| `description` | 알래스카 레퍼런스 값을 사용하지 않고 `"{새 선박명}의 객실을 소개합니다."` 형식으로 교체 |
| `rooms[].description` | Agent S 조사 데이터 |
| `rooms[].amenities` | Agent S 조사 데이터 — 공식 사이트 어메니티 기반으로 동적 생성 (아래 매핑 테이블 사용) |
| `rooms[].image` | `"/shared/placeholder.png"` |

### 보존할 필드 (절대 수정 금지):
- `title`, `moreText`, `modalPrefix` — 레퍼런스 그대로
- `rooms[].name` — 3개 객실명 (`"인사이드"`, `"오션뷰"`, `"발코니"`) 레퍼런스 그대로
- `rooms[].subtitle` — 레퍼런스 그대로

### 어메니티 아이콘 매핑 테이블:

공식 사이트에서 가져온 각 어메니티 항목을 아래 테이블에 매칭하여 `iconName`을 결정한다.
매칭되지 않는 항목은 가장 유사한 아이콘을 선택한다.

| 어메니티 키워드 | iconName | fullWidth |
|----------------|----------|-----------|
| 객실 크기, 면적, m² | `Maximize2` | `true` |
| 더블/퀸/킹 베드, 침대 (전환 가능 포함) | `BedDouble` | — |
| 싱글/트윈 베드 | `BedDouble` | — |
| TV, 텔레비전, HDTV | `Tv` | — |
| 냉장고, 미니바 | `Refrigerator` | — |
| 욕실, 샤워, 화장실, 욕조 | `Bath` | — |
| 타월, 수건, 리넨 | `Waves` | — |
| 헤어드라이어, 욕실 용품, 어메니티 키트 | `Wind` | — |
| 금고, 세이프티 박스 | `Lock` | — |
| 옷장, 수납공간, 클로젯 | `DoorClosed` | — |
| 룸서비스 | `ConciergeBell` | — |
| 소파, 소파베드, 라운지 | `Sofa` | — |
| 발코니 가구, 데크체어, 테라스 | `Armchair` | — |
| 창문, 윈도우, 포트홀 | `AppWindow` | — |
| 에어컨, 공조, 온도 조절 | `Wind` | — |
| 책상, 데스크, 화장대 | `Armchair` | — |

- `fullWidth: true`는 객실 크기 항목(`Maximize2`)에만 기본 적용
- 발코니 객실의 발코니 상세(데크체어, 테이블 등)에는 `fullWidth: true` 추가 가능

### 객실 크기 평수 환산 규칙 (필수):

`Maximize2` 아이콘의 객실 크기 label에는 m² 뒤에 반드시 **평수 환산**을 괄호로 병기한다.

**계산법:** `평 = m² ÷ 3.3058` → 소수점 1자리 반올림

**표기 패턴:**
- 단일 값: `"객실 크기: 약 15m² (약 4.5평)"`
- 범위 값: `"객실 크기: 약 14~16m² (약 4.2~4.8평)"`
- 발코니 포함: `"객실 크기: 약 19m² + 발코니 8m² (총 약 8.2평)"`
  - 발코니 포함 시 **총 면적**(객실+발코니)을 합산하여 평수 환산

---

## Section 5: details-data.ts

**작업 방식:** 레퍼런스 파일을 읽고 구조를 복사한 뒤, Agent S 조사 제원 데이터로 value만 교체
**레퍼런스:** `data/products/alaska-cruise/details-data.ts`

### 교체할 필드:

`specs` 배열의 **8개 label은 고정** — value만 교체.
Agent S 조사 결과의 value를 그대로 사용한다. Agent S가 보조 출처에서 보완한 값(예: `"약 65m"`, `"약 17층"`)도 그대로 반영한다. Agent S가 빈 문자열(`""`)로 반환한 항목만 빈 문자열을 유지한다.

예시 — Agent S가 빈 문자열로 반환한 경우:
```ts
{ label: "높이", value: "" },
```

| label (고정) | value 교체 규칙 | 알래스카 예시 |
|-------------|----------------|-------------|
| `"톤 수"` | `"{톤수}톤"` | `"113,561톤"` |
| `"길이"` | `"{길이}m"` | `"289.86m"` |
| `"승무원"` | `"약 {승무원수}명"` 또는 `"{승무원수}명"` | `"1,200명"` |
| `"높이"` | **미터 단위** `"{높이}m"` | `"59.44m"` |
| `"승객 정원"` | `"{정원}명"` | `"3,080명"` |
| `"규모"` | **층수** `"{층수}층"` | `"19층"` |
| `"첫 항해"` | 연도 또는 날짜 | `"2007. 4. 11"` |
| `"객실 수"` | `"{객실수}개"` | `"1,539개"` |

### 영상 관련 필드 (새 상품은 영상 미준비 상태):
- `youtube` — 생략 (나중에 영상 추가 시 설정)
- `videoSources` — `[]` (빈 배열)
- `mobileVideoSources` — `[]` (빈 배열)

### 보존할 필드 (절대 수정 금지):
- `title` (`"크루즈 제원"`) — 레퍼런스 그대로
- `specs` 배열의 8개 **label** — 레퍼런스 그대로 (순서도 동일)

---

## Section 6: schedule-labels-data.ts

**작업 방식:** 레퍼런스 파일을 읽고 **거의 그대로 복사**, 아래 필드만 교체
**레퍼런스:** `data/products/alaska-cruise/schedule-labels-data.ts`

### 교체할 필드:

| 필드 | 교체 규칙 |
|------|----------|
| `defaultSeaSublabel` | 새 선박명 |
| `scheduleMeta.dateRange` | `"YYYY년 M월 D일 — M월 D일"` |
| `scheduleMeta.durationLabel` | `"N박 N일"` |

### 보존할 필드 (절대 수정 금지):
- `scheduleLabelsData`의 나머지 모든 필드 — 레퍼런스 그대로

---

## Section 7: product-info-data.ts

**작업 방식:** 레퍼런스 파일을 읽고 복사한 뒤, 아래 필드만 교체
**레퍼런스:** `data/products/alaska-cruise/product-info-data.ts`

### 교체할 필드:

| 필드 | 교체 규칙 |
|------|----------|
| `includedItems` | 항공사명, 선박명, 기항지 목록 등 사용자 데이터에 맞게 텍스트 교체 |
| `excludedItems` | 팁 금액, 현지 진행비 등 사용자 데이터에 맞게 텍스트 교체 |

예시 교체:
- `"대한항공 왕복 항공료"` → `"에미레이트 항공 왕복 항공료"`
- `"에메랄드 프린세스 크루즈 승선료 (8박)"` → `"코스타 토스카나 크루즈 승선료 (7박)"`
- `"기항지 관광 (총 3곳: 주노/스캐그웨이/케치칸)"` → `"기항지 관광 (총 3곳: 두바이/아부다비/도하)"`

### 보존할 필드 (절대 수정 금지):
- `labels` — 레퍼런스 그대로
- `title`, `subtitle` — 레퍼런스 그대로
- 항목의 전체 구조 및 개수 — 레퍼런스를 기반으로 유지 (항공사/선박/기항지 명칭만 교체)

---

## Section 8: pricing-data.ts

**작업 방식:** 🔒 레퍼런스 파일을 **그대로 복사**. 사용자가 가격을 제공한 경우에만 아래 필드를 교체.
**레퍼런스:** `data/products/alaska-cruise/pricing-data.ts`

⚠️ **이 파일은 반드시 레퍼런스를 실제로 읽어서 전체를 그대로 복사해야 한다.** 템플릿이나 요약본을 사용하지 않는다.

### 사용자가 가격 데이터를 제공한 경우에만 교체할 필드:

| 필드 | 조건 |
|------|------|
| `roomTabs[].prices` | 사용자가 가격을 제공한 경우만 |
| `fuelSurcharge` | 사용자가 유류할증료를 제공한 경우만 |
| `fuelSurchargeText` | fuelSurcharge 변경 시 텍스트도 맞게 수정 |
| `crewTip` | 사용자가 팁 금액을 제공한 경우만 |
| `localGuideFee` | 사용자가 현지 진행비를 제공한 경우만 |

### 절대 수정 금지 (사용자가 명시적으로 변경을 요청하지 않는 한):
- `labels` 전체 — UI에 표시되는 텍스트이므로 레퍼런스 그대로
- `personOptions` — 레퍼런스 그대로
- `notices` — 레퍼런스 그대로
- `infoSections` 전체 — 객실 이용 안내, 소아 및 유아 안내, 경비 및 팁 안내, 요금 변동 및 기타 등 4개 섹션 모두 레퍼런스 그대로

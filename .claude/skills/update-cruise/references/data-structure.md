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
| `subtitle` | 사용자 데이터에서 추출 또는 기항지 조합 |
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

### 보존할 필드 (절대 수정 금지):
- `title`, `labels`의 기본 필드들 (`schedule`, `departKorea`, `arriveLocal` 등) — 레퍼런스 그대로 유지
- `reservationStatus`, `reservationCount`, `escortInfo`, `meetingPlace` — 레퍼런스 그대로 유지

---

## Section 3: intro-data.ts

**작업 방식:** 레퍼런스 파일을 읽고 구조를 복사한 뒤, Agent A 조사 결과로 내용 교체
**레퍼런스:** `data/products/alaska-cruise/intro-data.ts`

### 교체할 필드:

| 필드 | 교체 규칙 |
|------|----------|
| `description` | `"{새 선박명}에서 펼쳐지는 특별한 경험을 만나보세요."` |
| `facilities[].subtitle` | Agent A 조사 결과 |
| `facilities[].description` | Agent A 조사 결과 |
| `facilities[].alt` | `"{새 선박명} {카테고리명} 시설"` |
| `facilities[].images` | `["/shared/placeholder.png"]` |

### 보존할 필드 (절대 수정 금지):
- `title` (`"크루즈 시설 안내"`) — 레퍼런스 그대로
- `moreText` (`"더 알아보기"`) — 레퍼런스 그대로
- `facilities[].name` — 3개 카테고리명 (`"엔터테인먼트"`, `"아웃도어 & 레저"`, `"힐링 & 웰니스"`) 레퍼런스 그대로

---

## Section 4: features-data.ts

**작업 방식:** 레퍼런스 파일을 읽고 구조를 복사한 뒤, Agent A 조사 결과로 내용 교체
**레퍼런스:** `data/products/alaska-cruise/features-data.ts`

### 교체할 필드:

| 필드 | 교체 규칙 |
|------|----------|
| `description` | `"{새 선박명}의 객실을 소개합니다."` |
| `rooms[].description` | Agent A 조사 결과 |
| `rooms[].amenities[].label` | Agent A 조사 결과 (크기, 침대 등) |
| `rooms[].image` | `"/shared/placeholder.png"` |

### 보존할 필드 (절대 수정 금지):
- `title`, `moreText`, `modalPrefix` — 레퍼런스 그대로
- `rooms[].name` — 3개 객실명 (`"인사이드"`, `"오션뷰"`, `"발코니"`) 레퍼런스 그대로
- `rooms[].subtitle` — 레퍼런스 그대로
- `rooms[].amenities[].iconName` — 레퍼런스 그대로
- `rooms[].amenities[].fullWidth` — 레퍼런스 그대로

**사용 가능한 iconName:** `Maximize2`, `BedDouble`, `BedSingle`, `Tv`, `Refrigerator`, `Bath`, `Waves`, `Wind`, `Sofa`

---

## Section 5: details-data.ts

**작업 방식:** 레퍼런스 파일을 읽고 구조를 복사한 뒤, Agent A 조사 결과로 value만 교체
**레퍼런스:** `data/products/alaska-cruise/details-data.ts`

### 교체할 필드:

`specs` 배열의 **8개 label은 고정** — value만 교체:

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

`youtube` 필드: Agent A가 찾은 영상 ID로 교체 (없으면 레퍼런스 youtube 필드 제거)

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

## Section 9: pricing-data.ts

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

---

## Section 10: product-info-data.ts

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

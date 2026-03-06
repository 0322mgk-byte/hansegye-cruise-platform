# Timeline Items & Modal Data Reference

Types defined in `data/types.ts`. Files: `schedule-days-data.ts` and `schedule-modals-data.ts`.

---

## Schedule Days Structure

```typescript
import type { DayScheduleData } from '@/data/types';

export const scheduleDaysData: DayScheduleData[] = [
  {
    day: 1,
    date: 'MM/DD(요일)',        // e.g., "08/03(월)"
    location: '인천 → 밴쿠버',  // Arrow for transit, single name for stay
    description: '상세 내용을 확인해보세요',
    items: [/* TimelineItem[] */],
  },
  // ... one entry per day
];
```

---

## 10 TimelineItem Types

### 1. location-marker
Visual location pin on the timeline.
```typescript
{ type: 'location-marker', label: '인천' }
{ type: 'location-marker', label: '밴쿠버', extraMarginTop: true }
```
- Use `extraMarginTop: true` when this marker follows other items (not the first item)

### 2. text
General information with optional details and warnings.
```typescript
{
  type: 'text',
  time: '17:35',
  text: '인천 국제공항 출발 - 밴쿠버 향발',
  details: [
    '교통편 : 에어캐나다 or 대한항공',
    '비행시간 : 약 9시간 55분 소요',
    '시차 : 17시간 느립니다.',
  ],
  warning: '기내 좌석 배정은 항공사의 고유 권한입니다.',
}
```
- `time` is optional (omit for items without specific times)
- `details` is optional (array of supplementary info strings)
- `warning` is optional (shown as highlighted warning text)

### 3. tourist-spot
개별 관광 명소 카드. 사용자 데이터에 이름이 나오는 관광지/체험마다 1개씩 생성한다.
기항지 관광일에는 반드시 다음 2단계로 구성:
  1. `[관광 정보] {도시명} ({로마자})` — 도시 전체를 소개하는 개요 카드 1개
  2. `[관광 정보] {관광지명} ({로마자})` — 사용자 데이터에 명시된 각 관광지/체험마다 1개씩

예: 사용자가 "구엘 공원, 사그라다 파밀리아, 까사 바트요"를 줬다면
→ [관광 정보] 바르셀로나 (Barcelona) + [관광 정보] 구엘 공원 (Park Güell) + [관광 정보] 사그라다 파밀리아 (Sagrada Família) + [관광 정보] 까사 바트요 (Casa Batlló) = 총 4개 카드

**도시 개요 카드:**
```typescript
{
  type: 'tourist-spot',
  modalId: 'vancouver',
  title: '[관광 정보] 밴쿠버 (Vancouver)',
  shortTitle: '밴쿠버',
  images: ['/shared/placeholder.png'],
  description: '캐나다 서부 최대의 도시, 밴쿠버...',
  mobileLabel: '[관광정보]',
  mobileSublabel: '밴쿠버',
}
```

**개별 관광지 카드:**
```typescript
{
  type: 'tourist-spot',
  modalId: 'sagradafamilia',
  title: '[관광 정보] 사그라다 파밀리아 (Sagrada Família)',
  shortTitle: '성가족 성당',
  images: ['/shared/placeholder.png'],
  description: '가우디가 생애를 바친 미완성 대성당으로...',
  mobileLabel: '[관광정보]',
  mobileSublabel: '사그라다 파밀리아',
}
```
- `modalId` must match an id in `scheduleModalsData` — 각 카드마다 대응하는 모달이 필요
- `images` must have at least one entry (use placeholder)
- 모든 관광지 카드의 title은 통일 형식 사용: `[관광 정보] {한글명} ({국제 통용 로마자})`
  - 도시 개요: `[관광 정보] 밴쿠버 (Vancouver)`
  - 개별 관광지: `[관광 정보] 사그라다 파밀리아 (Sagrada Família)`
  - 로마자는 구글 맵, 공항, 항공사 등에서 국제적으로 통용되는 표기를 사용
  - `[입장]`, `[외관]` 같은 활동 마커나, "밴쿠버에서 가장 오래된 거리, 개스타운" 같은 설명적 제목은 사용하지 않음
- **카드로 만드는 항목:** 이름이 있는 관광명소, 박물관, 사원, 전망대, 체험 투어 등
- **카드로 만들지 않는 항목:** "자유시간", "쇼핑몰 방문", "항구 복귀" 등 → `text` 타입 사용

#### 이미지 개수 규칙 (카드 vs 모달)

`schedule-days-data.ts`(데스크톱 카드)와 `schedule-modals-data.ts`(상세보기 모달)는 **같은 관광지라도 이미지 개수가 다르다:**

| 파일 | 용도 | 이미지 개수 |
|------|------|------------|
| `schedule-days-data.ts` | 데스크톱 아코디언 내 카드 | **항상 3개** (대표 이미지 3장 선별) |
| `schedule-modals-data.ts` | 상세보기 모달 | **가변** (보유한 이미지 전부) |

- 카드의 3개 이미지는 모달 이미지 중에서 선별한다 (보통 앞 3개)
- 이 규칙은 `tourist-spot`, `cruise-at-sea` 카드 모두에 동일하게 적용된다
- 플레이스홀더 단계에서는 양쪽 모두 `['/shared/placeholder.png']` 사용

### 4. shore-excursion
Links to optional shore excursion modal. Only include if user provides excursion data.
```typescript
{
  type: 'shore-excursion',
  modalId: 'shoreexcursion-juneau',
  title: '주노(Juneau) 추천 기항지 선택 관광',
  mobileLabel: '[기항지 투어]',
  mobileSublabel: '주노 추천 선택 관광',
}
```

### 5. info-card
Structured information card with nested sections. Used for boarding and disembarkation.
```typescript
{
  type: 'info-card',
  modalId: 'boarding',        // or 'disembarkation'
  title: '{선박명} 승선 수속 안내',
  emoji: '📢',
  mobileLabel: '[승선 안내]',
  mobileSublabel: '승선 수속 안내',
  sections: [/* ... */],
}
```
- Full code: `example-patterns.md` Section 7 (boarding: 7-A, disembarkation: 7-B)
- Only change the ship name in the `title` field

### 6. cruise-at-sea
Sea day card with onboard activities. Used when the ship is at sea all day.
해상일이 여러 날이어도 모달은 `cruiseatsea` 1개만 생성하고, 모든 해상일 카드가 같은 modalId를 공유한다.
```typescript
{
  type: 'cruise-at-sea',
  modalId: 'cruiseatsea',
  title: '{선박명} 전일 해상',
  images: ['/shared/placeholder.png'],
  description: '선내 자유시간: 수준 높은 무료 공연 관람 및 다채로운 부대시설 이용',
  bulletPoints: [
    '프리미엄 스파에서 여행의 피로를 부드럽게 풀어보세요.',
    '탁 트인 야외 수영장에서 일광욕을 즐기며 여유롭게 책을 읽어보세요.',
  ],
  closingText: '잔잔한 바다 한가운데서 누리는 이 모든 휴식이 크루즈 여행의 진정한 매력입니다.',
  mobileLabel: '🚢 전일 해상',
  mobileSublabel: '{선박명}',
}
```

### 7. meal
Meal indicator.
```typescript
{ type: 'meal', text: '조식 (기내식)' }
{ type: 'meal', text: '중식 (선내식)' }
{ type: 'meal', text: '석식 (선내식)' }
{ type: 'meal', text: '조식 (호텔식)' }
```

### 8. hotel
Accommodation indicator.
```typescript
{ type: 'hotel', name: '에메랄드 프린세스' }          // On cruise ship
{ type: 'hotel', name: '호텔로 이동 및 휴식' }       // At hotel
```

### 9. departure-notice
Ship departure/arrival notice with timing.
```typescript
{
  type: 'departure-notice',
  time: '21:00',
  text: '{선박명}는 스캐그웨이를 향해 출발합니다',
  details: [
    '현지 기상 및 선사 사정에 의해 출항 시간이 예고 없이 변동될 수 있습니다.',
    '원활한 출발을 위해 늦어도 출항 1시간 전까지는 반드시 탑승을 마쳐주세요.',
  ],
}
```

### 10. closing-message
Final message on the last day.
```typescript
{ type: 'closing-message', text: '한세계 여행사와 함께 즐거운 여행이 되셨길 바랍니다.' }
```

---

## Day Composition: 빌딩 블록 조립 방식

### 핵심 원칙

각 일차의 구성은 **고정 템플릿이 아니라, 사용자 데이터를 읽고 해당하는 블록만 골라서 조립**한다. 크루즈 상품마다 일정이 전부 다르므로, 사용자가 제공한 일정 데이터에서 각 일차의 요소를 파악하여 적절한 블록(TimelineItem)을 배치한다.

### 블록 선택 기준

사용자 데이터에 아래 요소가 존재하면 대응하는 블록을 사용한다. 없는 요소의 블록은 생략한다.

| 사용자 데이터의 요소 | 사용할 블록 | 비고 |
|---|---|---|
| 항공편 출발/도착 | `text` (time + details) | 미제공 시 생략 |
| 공항 미팅 | `text` (time) | 미제공 시 생략 |
| 기항지 도시 + 관광지 | `tourist-spot` | 도시 개요 1개 + 관광지 N개 |
| "전일 해상" / "종일 항해" | `cruise-at-sea` | |
| 승선 | `info-card` (boarding) | 레퍼런스 복사 |
| 하선 | `info-card` (disembarkation) | 레퍼런스 복사 |
| 출항 시간 | `departure-notice` | |
| 식사 정보 | `meal` | |
| 호텔 숙박 | `hotel` (호텔명) | |
| 선박 숙박 | `hotel` (선박명) | |
| 자유시간, 쇼핑, 이동 등 | `text` | |
| 기항지 선택 관광 | `shore-excursion` | 데이터 제공 시에만 |
| 여정 종료 | `closing-message` | 마지막 일차만 |

### 한 일차 내 블록 배치 순서

존재하는 블록만 아래 순서대로 배치한다. 단, 사용자 데이터의 시간 순서가 우선한다.

1. `meal` — 조식
2. `location-marker` — 해당 위치
3. `text` — 시간순 이벤트 (미팅, 출발, 도착, 이동 등)
4. `info-card` — 승선 또는 하선 수속 안내
5. `tourist-spot` — 도시 개요 → 개별 관광지 순서
6. `cruise-at-sea` — 해상일 카드
7. `shore-excursion` — 선택 관광
8. `text` — 자유시간, 쇼핑 등
9. `departure-notice` — 출항 안내
10. `meal` — 중식, 석식
11. `hotel` — 숙박
12. `closing-message` — 마지막 일차 종료 메시지

### 엣지 케이스 처리

| 상황 | 처리 방법 |
|---|---|
| 항공편 미제공 | 항공편 관련 text 블록 생략. 사용자가 나중에 별도 요청 시 추가 |
| 1일차에 바로 승선 (호텔 없음) | hotel 블록 없이 `info-card`(boarding) + `departure-notice`로 구성 |
| 하선 후 관광 없이 바로 귀국 | tourist-spot 없이 `info-card`(disembarkation) + text(공항 이동)로 구성 |
| 같은 도시 2일 방문 | modalId에 `-dayN` 접미사 추가: `barcelona-day3`, `barcelona-day4` |
| 승선일에 관광도 포함 | tourist-spot + info-card(boarding) — 사용자 데이터 순서대로 배치 |

### 참고 예시

아래는 자주 나오는 일차 구성 패턴이다. **반드시 이대로 따르는 것이 아니라**, 사용자 데이터에 맞게 블록을 조립하는 참고용이다.

#### 출발일 예시

**핵심: 사용자 일정의 ▣ 항목을 details 배열에 그대로 매핑한다.**

사용자가 제공한 일정표에서 각 `[시간] 제목` 아래의 `▣ ...` 항목들이 해당 text 아이템의 `details` 배열 원소가 된다.
AI가 임의로 항목을 추가/삭제/이동하지 않는다.

**단, 항공편 출발 아이템의 필수 표준 항목은 예외다** — 아래 "출발 아이템 필수 표준 항목" 참조.

**예시 — 사용자 데이터:**
```
[10:30] 인천 국제공항 미팅
▣ 출발 2시간 전까지 공항 미팅 장소 집결

[13:40] 인천 국제공항 출발 - 이스탄불 향발
▣ 교통편 : 대한항공
▣ 비행시간 : 약 12시간 10분 소요
▣ 시차 : 한국보다 6시간 느립니다.
▣ 항공 시간 및 편수는 변경될 수 있습니다.

[19:40] 이스탄불 공항 도착

호텔 이동 및 휴식
```

**→ 생성 결과:**
```typescript
items: [
  { type: 'location-marker', label: '인천' },
  {
    type: 'text',
    time: '10:30',
    text: '인천 국제공항 미팅',
    details: [
      '출발 2시간 전까지 공항 미팅 장소 집결',
    ],
  },
  {
    type: 'text',
    time: '13:40',
    text: '인천 국제공항 출발 - 이스탄불 향발',
    details: [
      '교통편 : 대한항공',
      '비행시간 : 약 12시간 10분 소요',
      '시차 : 한국보다 6시간 느립니다.',
      '항공 시간 및 편수는 변경될 수 있습니다.',
    ],
    warning: '기내 좌석 배정은 항공사의 고유 권한입니다. 인솔자와 여행사의 권한이 없으므로 고객님이 원하시는 좌석으로 배정이 불가할 수 있음을 양해 부탁드립니다.',
  },
  { type: 'meal', text: '석식 (기내식)' },
  { type: 'location-marker', label: '이스탄불', extraMarginTop: true },
  {
    type: 'text',
    time: '19:40',
    text: '이스탄불 공항 도착',
  },
  { type: 'text', text: '호텔 이동 및 휴식' },
  { type: 'hotel', name: '호텔로 이동 및 휴식', note: '4성급 호텔 예정' },
]
```

**구성 규칙:**

| 아이템 | 생성 조건 | details 규칙 |
|--------|----------|-------------|
| 미팅 | 사용자가 미팅 시간을 제공한 경우에만 | 사용자가 제공한 ▣ 항목 그대로 |
| 출발 | 항공편 정보가 있을 때 | 사용자 ▣ 항목 + 필수 표준 항목 자동 보충 (아래 참조) |
| 도착 | 같은 날 도착하는 경우 | 사용자가 ▣ 항목을 제공한 경우에만 details 포함, 없으면 details 생략 |
| 호텔 | 도착 후 호텔 숙박 시 | note에 호텔 등급 정보 (사용자 제공 시) |

**출발 아이템 필수 표준 항목:**

항공편 출발 text 아이템(`인천 국제공항 출발 — {목적지} 향발`)의 details에는 아래 2개가 항상 포함되어야 한다. 사용자가 `▣`로 제공했으면 그 값을 그대로 쓰고, 미제공이면 자동 보충한다.

| 항목 | 값 | 보충 규칙 |
|------|-----|----------|
| 시차 | `시차 : 한국보다 {N}시간 느립니다/빠릅니다.` | 메인 에이전트가 목적지 기준으로 판단 (서머타임 미적용, 대표 시차) |
| 항공 변경 고지 | `항공 시간 및 편수는 변경될 수 있습니다.` | 고정 문구 |

details 배열 내 배치 순서: 사용자 ▣ 항목(교통편, 비행시간 등) → 시차 → 항공 변경 고지 (details의 마지막 2개)

**출발 아이템 warning (고정 문구):**
```
'기내 좌석 배정은 항공사의 고유 권한입니다. 인솔자와 여행사의 권한이 없으므로 고객님이 원하시는 좌석으로 배정이 불가할 수 있음을 양해 부탁드립니다.'
```

**식사 아이템:** 사용자 데이터에 식사 정보가 명시되어 있으면 해당 위치에 meal 아이템을 넣는다. 위치도 사용자 데이터 순서를 따른다.

#### 기항지 관광일 예시
사용자 데이터에 이름이 나온 관광지/체험마다 개별 tourist-spot 카드를 생성한다.
"자유시간", "쇼핑", "항구 복귀" 등은 text 아이템으로 처리한다.
```typescript
items: [
  { type: 'meal', text: '조식 (선내식)' },
  { type: 'location-marker', label: '{도시명}' },
  { type: 'text', time: '...', text: '{도시명} 도착 후 관광 출발' },
  // ① 도시 개요 카드 (항상 1개)
  { type: 'tourist-spot', modalId: '{city}', title: '[관광 정보] {도시명} ({City})', ... },
  // ② 개별 관광지 카드 (사용자 데이터에서 추출한 만큼)
  { type: 'tourist-spot', modalId: '{attraction1}', title: '[관광 정보] {관광지1} ({Attraction1})', ... },
  { type: 'tourist-spot', modalId: '{attraction2}', title: '[관광 정보] {관광지2} ({Attraction2})', ... },
  { type: 'tourist-spot', modalId: '{attraction3}', title: '[관광 정보] {관광지3} ({Attraction3})', ... },
  // 자유시간, 이동 등은 text 아이템
  { type: 'text', text: '{쇼핑몰} 자유시간' },
  { type: 'meal', text: '중식 (한식)' },
  // Optional: shore-excursion (사용자가 선택 관광 데이터를 제공한 경우에만)
  { type: 'departure-notice', time: '...', text: '{선박명}는 {다음도시}를 향해 출발합니다', ... },
  { type: 'meal', text: '석식 (선내식)' },
  { type: 'hotel', name: '{선박명}' },
]
```
**예시 — 사용자가 바르셀로나 일정으로 "구엘 공원 [입장], 사그라다 파밀리아 [입장], 까사 바트요 [외부], 까사 밀라 [외부]"를 줬다면:**
→ 도시 개요 1개 + 개별 관광지 4개 = tourist-spot 카드 총 5개 + 각각의 모달 5개

#### 승선일 예시
```typescript
items: [
  { type: 'meal', text: '조식 (호텔식)' },
  { type: 'location-marker', label: '{항구도시}' },
  { type: 'text', time: '...', text: '{항구} 크루즈 터미널 이동', details: [...] },
  { type: 'info-card', modalId: 'boarding', ... },  // Copy from reference
  { type: 'departure-notice', time: '...', text: '{선박명} 출항', ... },
  { type: 'meal', text: '석식 (선내식)' },
  { type: 'hotel', name: '{선박명}' },
]
```

#### 해상일 예시
```typescript
items: [
  { type: 'meal', text: '조식 (선내식)' },
  { type: 'location-marker', label: '해상', extraMarginTop: true },
  { type: 'cruise-at-sea', modalId: 'cruiseatsea', ... },
  { type: 'meal', text: '중식 (선내식)' },
  { type: 'meal', text: '석식 (선내식)' },
  { type: 'hotel', name: '{선박명}' },
]
```

#### 하선일 예시
```typescript
items: [
  { type: 'meal', text: '조식 (선내식)' },
  { type: 'location-marker', label: '{항구도시}' },
  { type: 'info-card', modalId: 'disembarkation', ... },  // Copy from reference
  { type: 'text', time: '...', text: '{항구} 크루즈 터미널 하선', details: [...] },
]
```

#### 귀국일 예시
```typescript
items: [
  { type: 'meal', text: '조식 (기내식)' },
  { type: 'location-marker', label: '인천', extraMarginTop: true },
  { type: 'text', time: '00:00', text: '인천 국제 공항 도착', details: ['인천국제공항 도착 후 개별해산'], warning: '...' },
  { type: 'closing-message', text: '한세계 여행사와 함께 즐거운 여행이 되셨길 바랍니다.' },
]
```

---

## 5 ModalData Types

### 1. tourist-spot Modal
```typescript
{
  type: 'tourist-spot',
  id: 'vancouver',                            // Must match modalId in timeline item
  title: '[관광정보] 밴쿠버 (VANCOUVER)',
  images: ['/shared/placeholder.png'],         // Placeholder
  descriptions: [
    'First paragraph about the city...',
    'Second paragraph...',
    'Third paragraph...',
  ],
  infoTable: [
    { label: '도시', value: '북아메리카 캐나다 밴쿠버' },
    { label: '주소', value: '' },
    { label: '홈페이지', value: '' },
    { label: '연락처', value: '' },
    { label: '입장료', value: '' },
    { label: '오픈시간', value: '' },
  ],
  googleMapQuery: 'Vancouver,BC,Canada',
  googleMapEmbed: 'https://maps.google.com/maps?q=Vancouver,BC,Canada&t=&z=15&ie=UTF8&iwloc=&output=embed',
}
```

**googleMapEmbed 자동 생성 규칙:**
tourist-spot 모달에는 반드시 지도를 포함한다. `googleMapQuery`의 공백을 `+`로 치환하여 아래 형식으로 자동 생성:
```
https://maps.google.com/maps?q={query}&t=&z=15&ie=UTF8&iwloc=&output=embed
```

| 모달 타입 | 지도 포함 |
|-----------|----------|
| tourist-spot | **YES** |
| cruise-at-sea / ship-info / shore-excursion / info | NO |
```

### 2. shore-excursion Modal
```typescript
{
  type: 'shore-excursion',
  id: 'shoreexcursion-juneau',
  title: '주노(Juneau) 추천 기항지 선택 관광',
  intro: '본 프로그램은 {크루즈 선사}에서 직접 주관하며...',
  tours: [
    {
      name: '멘덴홀 빙하 & 혹등고래 관찰 투어',
      tourCode: 'JNU-630',
      duration: '약 5시간 30분',
      price: '성인 $269.95부터~',
      highlight: '주노의 상징인 멘덴홀 빙하를 감상하고...',
      note: '바닷바람을 막아줄 따뜻한 겉옷 준비가 필수...',  // Optional
    },
  ],
  notices: [
    '안내된 투어 요금 및 세부 일정은 변동될 수 있습니다.',
    '인기 프로그램은 조기 마감될 수 있으므로...',
  ],
}
```

### 3. ship-info Modal
```typescript
{
  type: 'ship-info',
  id: 'emeraldprincess',
  title: '{선박명} ({English Name})',
  images: ['/shared/placeholder.png'],
  descriptions: [
    '{크루즈 선사}의 대표 선박, {선박명}.',
    '총 톤수 {tonnage}톤, 최대 {capacity}명의 승객을 수용...',
  ],
  infoTable: [
    { label: '선박명', value: '{선박명} ({English Name})' },
    { label: '등록 국가', value: '{country}' },
    { label: '총 톤수', value: '{tonnage}톤' },
    { label: '승객 정원', value: '{capacity}명' },
    { label: '승무원 수', value: '약 {crew}명' },
    { label: '주요 시설', value: '수영장, 스파, 카지노, 극장...' },
    { label: '식사', value: '메인 다이닝룸, 뷔페...' },
    { label: '드레스코드', value: '캐주얼 (스마트 캐주얼 권장)' },
  ],
}
```

### 4. cruise-at-sea Modal
해상일이 여러 날이어도 모달은 `cruiseatsea` 1개만 생성한다. descriptions는 3문단으로 구성: 도입 → 시설 소개 → 식사/마무리.
```typescript
{
  type: 'cruise-at-sea',
  id: 'cruiseatsea',
  title: '{선박명} 전일 해상',
  images: ['/shared/placeholder.png'],
  descriptions: [
    '오늘은 종일 해상에서 보내는 날입니다. {선박명}의 다양한 시설을 마음껏 즐겨보세요.',
    '{선박 주요 시설을 2-3문장으로 소개하는 문단 — Agent S 조사 결과 활용}',
    '메인 다이닝룸과 뷔페 레스토랑에서 세계 각국의 요리를 즐기시고, 야외 데크에서 광활한 바다의 풍경을 감상하며 특별한 하루를 보내시기 바랍니다.',
  ],
  bulletPoints: [
    '프리미엄 스파에서 여행의 피로를 부드럽게 풀어보세요.',
    '탁 트인 야외 수영장에서 일광욕을 즐기며 여유롭게 책을 읽어보세요.',
  ],
  closingText: '잔잔한 바다 한가운데서 누리는 이 모든 휴식이 크루즈 여행의 진정한 매력입니다.',
  infoTable: [
    { label: '선박', value: '{선박명} ({English Name})' },
    { label: '주요 시설', value: '수영장, 스파, 카지노, 극장...' },
    { label: '식사', value: '메인 다이닝룸, 뷔페...' },
    { label: '드레스코드', value: '캐주얼 (스마트 캐주얼 권장)' },
  ],
}
```
- `bulletPoints`와 `closingText`는 타임라인 카드(cruise-at-sea item)와 동일한 내용을 모달에도 포함한다 (optional)

### 5. info Modal
Used for boarding and disembarkation — copy from Alaska reference. See `example-patterns.md` Section 7.
```typescript
{
  type: 'info',
  id: 'boarding',       // or 'disembarkation'
  title: '{선박명} 승선 수속 안내',
  sections: [/* copy from reference, only change ship name in title */],
}
```

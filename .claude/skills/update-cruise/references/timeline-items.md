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
  1. `[관광 정보] {도시명}` — 도시 전체를 소개하는 개요 카드 1개
  2. 개별 관광지 카드 — 사용자 데이터에 명시된 각 관광지/체험마다 1개씩

예: 사용자가 "구엘 공원, 사그라다 파밀리아, 까사 바트요"를 줬다면
→ [관광 정보] 바르셀로나 (개요) + 구엘 공원 + 사그라다 파밀리아 + 까사 바트요 = 총 4개 카드

**도시 개요 카드:**
```typescript
{
  type: 'tourist-spot',
  modalId: 'vancouver',
  title: '[관광 정보] 밴쿠버',
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
  title: '미완의 걸작, 사그라다 파밀리아 [입장]',
  shortTitle: '성가족 성당',
  images: ['/shared/placeholder.png'],
  description: '가우디가 생애를 바친 미완성 대성당으로...',
  mobileLabel: '[관광정보]',
  mobileSublabel: '사그라다 파밀리아',
}
```
- `modalId` must match an id in `scheduleModalsData` — 각 카드마다 대응하는 모달이 필요
- `images` must have at least one entry (use placeholder)
- 개요 카드의 title은 `[관광 정보] {도시명}` 형식, 개별 카드의 title은 설명적 제목 사용
- **카드로 만드는 항목:** 이름이 있는 관광명소, 박물관, 사원, 전망대, 체험 투어 등
- **카드로 만들지 않는 항목:** "자유시간", "쇼핑몰 방문", "항구 복귀" 등 → `text` 타입 사용

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
  modalId: 'boarding',
  title: '{선박명} 승선 수속 안내',
  emoji: '📢',
  mobileLabel: '[승선 안내]',
  mobileSublabel: '승선 수속 안내',
  sections: [
    {
      heading: '1. 수하물 위탁 (Luggage Drop-off)',
      items: [
        { text: '터미널 도착 후 큰 수하물을 위탁하시면...' },
        { text: '여권, 승선 서류, 귀중품...', bold: '소지품 확인:' },
        {
          text: '승선 후 안내에 따라...',
          bold: '필수 안전 교육(Safety Drill):',
          subItems: [
            { text: '미이수 시 발생하는 실제 상황', isWarning: true },
            { text: '선사 시스템은 실시간으로...', bold: '실시간 추적:' },
          ],
        },
      ],
    },
  ],
}
```
- Copy boarding/disembarkation info-cards from Alaska reference (see `example-patterns.md` Section 7)
- Only change the ship name in the `title` field

### 6. cruise-at-sea
Sea day card with onboard activities. Used when the ship is at sea all day.
```typescript
{
  type: 'cruise-at-sea',
  modalId: 'cruiseinterior',
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

## Day Composition Patterns

### First Day (Departure from Korea)
```typescript
items: [
  { type: 'location-marker', label: '인천' },
  { type: 'text', time: '...', text: '인천 국제공항 미팅', details: [...] },
  { type: 'text', time: '...', text: '인천 국제공항 출발', details: [...], warning: '...' },
  { type: 'meal', text: '석식 (기내식)' },
]
```

### Port Day (Sightseeing)
사용자 데이터에 이름이 나온 관광지/체험마다 개별 tourist-spot 카드를 생성한다.
"자유시간", "쇼핑", "항구 복귀" 등은 text 아이템으로 처리한다.
```typescript
items: [
  { type: 'meal', text: '조식 (선내식)' },
  { type: 'location-marker', label: '{도시명}' },
  { type: 'text', time: '...', text: '{도시명} 도착 후 관광 출발' },
  // ① 도시 개요 카드 (항상 1개)
  { type: 'tourist-spot', modalId: '{city}', title: '[관광 정보] {도시명}', ... },
  // ② 개별 관광지 카드 (사용자 데이터에서 추출한 만큼)
  { type: 'tourist-spot', modalId: '{attraction1}', title: '{관광지1 설명적 제목}', ... },
  { type: 'tourist-spot', modalId: '{attraction2}', title: '{관광지2 설명적 제목}', ... },
  { type: 'tourist-spot', modalId: '{attraction3}', title: '{관광지3 설명적 제목}', ... },
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

### Boarding Day (First Cruise Day)
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

### Sea Day
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

### Disembarkation Day
```typescript
items: [
  { type: 'meal', text: '조식 (선내식)' },
  { type: 'location-marker', label: '{항구도시}' },
  { type: 'info-card', modalId: 'disembarkation', ... },  // Copy from reference
  { type: 'text', time: '...', text: '{항구} 크루즈 터미널 하선', details: [...] },
]
```

### Last Day (Return to Korea)
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
  googleMapEmbed: 'https://www.google.com/maps/embed?pb=...',
}
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
```typescript
{
  type: 'cruise-at-sea',
  id: 'cruiseatsea',
  title: '{선박명} 전일 해상',
  images: ['/shared/placeholder.png'],
  descriptions: [
    '선내 자유시간: 수준 높은 무료 공연 관람 및 다채로운 부대시설 이용',
  ],
  bulletPoints: [
    '프리미엄 스파에서 여행의 피로를 부드럽게 풀어보세요.',
    '탁 트인 야외 수영장에서 일광욕을 즐기며 여유롭게 책을 읽어보세요.',
    '오션뷰 조깅 트랙을 달리거나 최신식 피트니스 센터에서 상쾌하게 땀을 흘려보세요.',
    '따뜻한 자쿠지에 몸을 담그고 와인 한 잔의 여유를 만끽해 보세요.',
    '요가, 댄스 강좌, 빙고 등 매일 다채롭게 열리는 선내 프로그램에 참여해 보세요.',
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

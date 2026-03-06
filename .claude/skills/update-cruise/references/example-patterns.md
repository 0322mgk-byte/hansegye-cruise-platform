# Example Patterns from Alaska Reference

Files that should be copied as-is or with minimal changes from the Alaska reference (`data/products/alaska-cruise/`).

---

## Section 4: trip-summary-data.ts (Copy As-Is)

Copy this file exactly from the Alaska reference. No changes needed.

**Source:** `data/products/alaska-cruise/trip-summary-data.ts` — 원본 파일을 직접 읽어서 복사할 것.

---

## Section 5: static-data.ts (Copy As-Is)

Copy this file exactly from the Alaska reference. No changes needed.

**Source:** `data/products/alaska-cruise/static-data.ts` — 원본 파일을 직접 읽어서 복사할 것.

---

## Section 6-A: meta.ts (Auto-Generate)

Each product has a separate `meta.ts` file containing only the lightweight meta information used by the homepage card listing.

```typescript
import type { ProductMeta } from '@/data/types';

export const meta: ProductMeta = {
  slug: '{slug}',
  name: '{선박명} {지역} 크루즈 N박 N일',
  shortDescription: '{기항지1} · {기항지2} · {기항지3}',
  thumbnailImage: '/shared/placeholder.png',
  ogImage: '',
  ogTitle: '',
  ogDescription: '',
  cardDepartureLabel: '{YY년 M월 D일 출발}',
  cardTitle: '{지역} 크루즈 {N박 N일}',
  cardShipName: '{한글 선박명} ({영문 선박명})',
  cardRoute: '{경로 요약}',
  cardPrice: '{최저가격}원~',
};
```

## Section 6-B: index.ts (Auto-Generate)

```typescript
import type { ProductDefinition } from '@/data/types';
import { companyInfo } from '@/data/shared/company';
import { meta } from './meta';
import { heroData } from './hero-data';
import { tripInfoData } from './trip-info-data';
import { introData } from './intro-data';
import { featuresData } from './features-data';
import { detailsData } from './details-data';
import { scheduleLabelsData, scheduleMeta } from './schedule-labels-data';
import { scheduleDaysData } from './schedule-days-data';
import { scheduleModalsData } from './schedule-modals-data';
import { pricingData } from './pricing-data';
import { productInfoData } from './product-info-data';
import { tripSummaryData } from './trip-summary-data';
import { checklistData, headerData, footerData, mobileBottomBarData } from './static-data';

export const {exportName}: ProductDefinition = {
  meta,
  data: {
    hero: heroData,
    tripInfo: tripInfoData,
    intro: introData,
    features: featuresData,
    details: detailsData,
    schedule: {
      labels: scheduleLabelsData,
      days: scheduleDaysData,
      modals: scheduleModalsData,
      dateRange: scheduleMeta.dateRange,
      durationLabel: scheduleMeta.durationLabel,
    },
    pricing: pricingData,
    productInfo: productInfoData,
    tripSummary: tripSummaryData,
    checklist: checklistData,
    header: {
      ...headerData,
      companyName: companyInfo.companyName,
      logoPath: companyInfo.logoPath,
      logoDarkPath: companyInfo.logoDarkPath,
    },
    footer: {
      ...footerData,
      companyName: companyInfo.companyName,
      logoPath: companyInfo.logoDarkPath,
      copyright: companyInfo.copyright,
      addresses: companyInfo.addresses,
      mainPhone: companyInfo.mainPhone,
    },
    mobileBottomBar: mobileBottomBarData,
  },
};
```

**Export name convention:** Convert slug to camelCase. Examples:
- `alaska-cruise` → `alaskaCruise`
- `north-europe-cruise` → `northEuropeCruise`
- `western-mediterranean-cruise` → `westernMediterraneanCruise`

---

## Section 7: Boarding & Disembarkation (Copy As-Is, Change Ship Name Only)

These data blocks appear in two places:
1. **As info-card items** in `schedule-days-data.ts` (inside a day's `items` array)
2. **As info modals** in `schedule-modals-data.ts`

### 7-A: Boarding Info-Card (schedule-days-data.ts)

Place this in the boarding day's `items` array. Only change the ship name in `title`.

```typescript
{
  type: "info-card",
  modalId: "boarding",
  title: "{선박명} 승선 수속 안내",  // ← Change ship name only
  emoji: "📢",
  mobileLabel: "[승선 안내]",
  mobileSublabel: "승선 수속 안내",
  sections: [
    {
      heading: "1. 수하물 위탁 (Luggage Drop-off)",
      items: [
        { text: "터미널 도착 후 큰 수하물을 위탁하시면 배정된 선실 앞으로 안전하게 배달됩니다." },
        { text: "여권, 승선 서류, 귀중품 및 파손 주의 물품은 반드시 직접 소지하고 탑승해 주세요." },
      ],
    },
    {
      heading: "2. 승선 수속 (Check-in & Boarding)",
      items: [
        { text: "준비물: 여권, 크루즈 승선 서류, 해외 결제 가능한 신용카드" },
        { text: "위탁 수속 후 체크인 카운터에서 본인 확인 및 수속을 진행합니다." },
        { text: "모든 탑승 수속은 크루즈 출발 시간 2시간 전까지 반드시 완료되어야 합니다." },
        { text: "선실 내에는 신분증, 결제 수단, 객실 키 역할을 하는 '승선 카드'가 비치되어 있습니다. (분실 시 안내 데스크에서 재발급 가능)" },
      ],
    },
    {
      heading: "3. 승선 후 유의사항 (After Boarding)",
      items: [
        {
          text: "필수 안전 교육(Safety Drill): 승선 후 안내에 따라 지정된 장소에서 위급 상황 대처 교육을 이수해야 합니다.",
        },
        {
          text: "미이수 시 발생하는 실제 상황 (필독)",
          subItems: [
            { text: "끝까지 찾아내는 실시간 추적: 선사 시스템은 실시간으로 미이수자를 파악합니다. 교육을 마칠 때까지 이름이 공공연하게 방송되거나, 승무원이 선실로 직접 찾아와 참여를 독촉합니다." },
            { text: "선상 카드 및 모든 유료 서비스 정지: 교육 미완료 시 선상 카드(SeaPass 등)가 정지됩니다. 이 경우 바(Bar)에서 음료 주문, 면세점 쇼핑, 카지노 이용 및 유료 레스토랑 예약 등 배 안의 모든 결제와 서비스 이용이 거부될 수 있습니다." },
            { text: "선장 권한에 의한 '강제 하선' 조치: 국제 해상법(SOLAS)에 의거, 끝내 불응할 경우 선장은 승객을 다음 기항지에서 강제로 내리게 할 권한이 있습니다." },
            { text: "환불 및 보상 불가: 규정 위반으로 인한 하선이므로 잔여 일정 환불이 전혀 안 되며, 집으로 돌아가는 항공편 비용도 본인이 직접 부담해야 하는 가장 심각한 상황이 발생할 수 있습니다.", isWarning: true },
          ],
        },
        { text: "선사에서 운영하는 기항지 투어(영어 진행)는 조기 마감될 수 있으므로 승선 첫날 신청하시기를 권장합니다. (변경/취소 시 수수료 발생 가능)", bold: "기항지 선택 관광:" },
      ],
    },
  ],
}
```

### 7-B: Disembarkation Info-Card (schedule-days-data.ts)

Place this in the disembarkation day's `items` array. Title does not contain ship name — copy exactly.

```typescript
{
  type: "info-card",
  modalId: "disembarkation",
  title: "크루즈 하선 수속 안내",
  emoji: "📢",
  mobileLabel: "[하선 안내]",
  mobileSublabel: "하선 수속 안내",
  sections: [
    {
      heading: "1. 선내 결제 비용 정산 (Settlement)",
      items: [
        { text: "하선 전날 저녁 또는 당일 아침, 선실로 상세 결제 내역서가 배달됩니다.", bold: "내역 확인:" },
        { text: "승선 시 등록한 신용카드로 자동 청구되므로, 내역에 이상이 없다면 별도의 하선 수속 없이 편안하게 대기하시면 됩니다. (현금 결제 희망 시 미화 달러 USD 사용 가능)", bold: "결제 방식:" },
        { text: "정산서를 받지 못하셨거나 청구 내역에 문의가 있으신 경우, 승선 카드를 지참하여 고객 안내 데스크(Guest Relations)를 방문해 주세요.", bold: "안내 데스크:" },
      ],
    },
    {
      heading: "2. 하선 전 수하물 위탁 (Luggage Drop-off)",
      items: [
        { text: "하선 전날 선실로 전달되는 '전용 수하물 태그'를 가방에 부착한 뒤, 선사가 지정한 시간까지 선실 문 밖에 내어주세요. 위탁하신 짐은 하선 후 크루즈 터미널에서 찾으실 수 있습니다.", bold: "수하물 내놓기:" },
        { text: "주의 사항: 하선 당일 입을 옷, 여권, 승선 카드, 신용카드, 귀중품 및 상비약 등은 절대 위탁 수하물에 넣지 마시고 반드시 본인이 직접 소지(핸드캐리)하여 하선해 주시기 바랍니다.", isWarning: true },
      ],
    },
  ],
}
```

### 7-C: Boarding Info Modal (schedule-modals-data.ts)

Info modal의 sections 내용은 위 info-card(7-A)의 sections와 **완전히 동일**하다. title의 선박명만 교체.

```typescript
{
  type: "info",
  id: "boarding",
  title: "{선박명} 승선 수속 안내",  // ← Change ship name only
  sections: [
    // 7-A의 sections 전체를 그대로 복사
  ],
}
```

### 7-D: Disembarkation Info Modal (schedule-modals-data.ts)

```typescript
{
  type: "info",
  id: "disembarkation",
  title: "크루즈 하선 수속 안내",
  sections: [
    // Exact same sections content as the info-card above (7-B)
    // Copy both sections with all items
  ],
}
```

---

## Section 8: Central Registry Update (data/products/index.ts)

After creating the new product directory, update the central registry. The registry uses **dynamic imports** — only lightweight meta files are loaded statically, while the full product data is lazy-loaded on demand.

Add 3 things:
1. A meta import at the top
2. The meta to the `productMetas` array
3. A case to `getProductBySlug` switch

```typescript
import type { ProductDefinition, ProductMeta } from '@/data/types';

// Lightweight meta-only imports (no heavy schedule/modal data)
import { meta as alaskaMeta } from './alaska-cruise/meta';
import { meta as newCruiseMeta } from './{new-slug}/meta';  // ← Add meta import

const productMetas: ProductMeta[] = [
  alaskaMeta,
  newCruiseMeta,  // ← Add to meta array
];

export function getAllProductMetas(): ProductMeta[] {
  return productMetas;
}

export async function getProductBySlug(slug: string): Promise<ProductDefinition | null> {
  switch (slug) {
    case 'alaska-cruise': return (await import('./alaska-cruise')).alaskaCruise;
    case '{new-slug}': return (await import('./{new-slug}')).{exportName};  // ← Add case
    default: return null;
  }
}

export function getAllSlugs(): string[] {
  return productMetas.map(m => m.slug);
}
```

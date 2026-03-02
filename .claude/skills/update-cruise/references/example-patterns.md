# Example Patterns from Alaska Reference

Files that should be copied as-is or with minimal changes from the Alaska reference (`data/products/alaska-cruise/`).

---

## Section 4: trip-summary-data.ts (Copy As-Is)

Copy this file exactly from the Alaska reference. No changes needed.

**Source:** `data/products/alaska-cruise/trip-summary-data.ts`

```typescript
import type { TripSummaryData } from '@/data/types';

export const tripSummaryData: TripSummaryData = {
  labels: {
    title: "규정 및 유의사항",
    subtitle: "예약 전 꼭 확인해야 할 필수 사항입니다",
    cancellationTitle: "취소 위약금 규정",
    noticeTitle: "중요 안내사항",
    safetyTitle: "승선 필수 안전 수칙",
  },
  cancellationItems: [
    "예약금 100만 원(환불 불가)",
    "출발일로부터 89일~60일 전 취소 시 신청금(150만 원) 위약금 부과",
    "출발일로부터 59일~30일 전 취소 시 총 여행 요금의 60% 위약금 부과",
    "출발일로부터 29일~15일 전 취소 시 총 여행 요금의 75% 위약금 부과",
    "출발일로부터 14일~출발 당일 취소 시 총 여행 요금의 100% 위약금 부과",
  ],
  importantNotices: [
    { text: "크루즈 취소료 규정은 연휴·연말·휴가 시즌 특별 규정, 여행자의 질병·부상·천재지변 등 사유를 불문하고 엄격히 적용됩니다. (예약 요청 시 별도 고지)" },
    { text: "'총 경비'는 할인된 상품 가격이 아닌 정상 상품 가격을 의미합니다." },
    { text: "No Show에 대한 환불은 적용되지 않으며, 크루즈 서류 발행 이후 모든 예약 변경에 대해 비용이 부과됩니다." },
    {
      text: "취소 접수는 업무 시간 내 유선 접수만 가능합니다.",
      subItems: [
        "업무 시간: 월~금 09:30~16:30",
        "토/일 및 국가 공휴일 제외",
      ],
    },
    {
      text: "고객님들의 편안한 기항지 관광을 위해 대부분 선사 프로그램이 아닌, 당사에서 직접 준비하여 여행 프로그램을 진행합니다.",
      subItems: [
        "간혹 천재지변, 풍랑, 날씨에 따라 선사가 입/출항을 못 하는 경우가 발생할 수 있습니다.",
        "이 경우 선사 권한으로 현장에서 일정이 변경될 수 있습니다.",
        "따라서 기항지 관광에 대한 환불 처리는 불가하오니, 이 점 양해 부탁드립니다.",
      ],
    },
    {
      text: "항공사의 문제로 수하물 미도착 및 항공 연착으로 인해 항공편이 변경되는 경우가 있을 수 있습니다.",
      subItems: [
        "이 경우 여행사의 문제가 아니고 항공사의 문제로 발행되기 때문에, 여행사 보상 처리가 아닌 항공사에 보상 처리를 요청하여 해결하셔야 합니다.",
      ],
    },
  ],
  safetyNotices: [
    { text: "승선 후 안내에 따라 지정된 장소에서 위급 상황 대처 교육을 이수해야 합니다.", bold: "필수 안전 교육(Safety Drill):" },
    {
      text: "",
      bold: "미이수 시 발생하는 실제 상황 (필독)",
      isWarning: true,
      subItems: [
        { text: "선사 시스템은 실시간으로 미이수자를 파악합니다. 교육을 마칠 때까지 이름이 공공연하게 방송되거나, 승무원이 선실로 직접 찾아와 참여를 독촉합니다.", bold: "끝까지 찾아내는 실시간 추적:" },
        { text: "교육 미완료 시 선상 카드(SeaPass 등)가 정지됩니다. 이 경우 바(Bar)에서 음료 주문, 면세점 쇼핑, 카지노 이용 및 유료 레스토랑 예약 등 배 안의 모든 결제와 서비스 이용이 거부될 수 있습니다.", bold: "선상 카드 및 모든 유료 서비스 정지:" },
        { text: "국제 해상법(SOLAS)에 의거, 끝내 불응할 경우 선장은 승객을 다음 기항지에서 강제로 내리게 할 권한이 있습니다.", bold: "선장 권한에 의한 '강제 하선' 조치:" },
        { text: "규정 위반으로 인한 하선이므로 잔여 일정 환불이 전혀 안 되며, 집으로 돌아가는 항공편 비용도 본인이 직접 부담해야 하는 가장 심각한 상황이 발생할 수 있습니다.", bold: "환불 및 보상 불가:", isWarning: true },
      ],
    },
  ],
};
```

---

## Section 5: static-data.ts (Copy As-Is)

Copy this file exactly from the Alaska reference. No changes needed.

**Source:** `data/products/alaska-cruise/static-data.ts`

```typescript
import type { ChecklistData, HeaderData, FooterData, MobileBottomBarData } from '@/data/types';

export const checklistData: ChecklistData = {
  labels: {
    title: "준비물",
    subtitle: "쾌적한 크루즈 여행을 위해 미리 챙겨주세요",
  },
  categories: [
    {
      title: "서류 / 결제",
      items: [
        "여권 (6개월 이상 잔여기간)",
        "여권 분실 시 크루즈 탑승 불가 (긴급여권 X)",
        "항공권 / 크루즈 티켓 / 짐택 / 호텔 바우처 / 여행자보험 등은 여행사 준비",
        "신용카드는 본인 또는 동반자 명의 권장",
        "해외 사용 신용카드 (비자 / 마스터 / 다이너스 / 아멕스 등)",
        "카드가 없으면 현금 보증금(약 300~500달러 또는 유로)으로 대체 가능",
      ],
    },
    {
      title: "의상 / 개인용품",
      items: [
        "남: 셔츠 정장·넥타이 또는 턱시도",
        "여: 원피스 / 블라우스 (한복 유용)",
        "신발 (캐주얼화 / 운동화 / 슬리퍼·크록스)",
        "썬크림, 모자, 화장품, 빗, 면도기",
        "선사 정책에 따라 갈라 디너가 있을 수 있음",
        "선내 18~20도 온도 유지",
        "수영장 / 피트니스 및 도보 일정 대비",
        "등산복 / 등산화는 자제 권장",
        "우천 대비 우산 또는 우비",
      ],
    },
    {
      title: "환전",
      items: [
        "현지 화폐",
        "(카지노 이용 시) 미국 달러",
        "한국 원화는 사용 불가",
      ],
    },
    {
      title: "음식 / 간식",
      items: [
        "사탕, 과자 등 간식",
        "(취향) 튜브 고추장",
        "(취향) 컵라면",
        "(취향) 김치 (통조림 / 볶음김치)",
        "(취향) 소주 (종이팩)",
        "개인 취향에 따라 준비",
        "선내 반입 규정은 선사 기준 확인 필요",
      ],
    },
    {
      title: "가방 / 위생",
      items: [
        "앞으로 메는 소형 가방 (소매치기 예방 목적 권장)",
        "치약 / 칫솔",
        "위생팩",
        "텀블러 (물 담는 용기)",
        "선사 제공: 샴푸 / 컨디셔너 / 바디워시 / 수건",
      ],
    },
    {
      title: "상비약",
      items: [
        "소화제, 멀미약, 두통약, 감기약, 해열제, 상처연고, 밴드",
        "개인 복용약은 캐리어 / 휴대품에 분산해 넉넉히 준비 권장",
      ],
    },
    {
      title: "수화물",
      items: [
        "권장 사항: 일반적으로 1인당 2개의 위탁 수하물을 권장합니다",
        "무게: 개당 약 23kg(50lbs)을 초과하지 않는 것이 좋습니다 (승무원이 직접 운반하기 때문에 안전상의 이유로 제한)",
        "크기: 객실 내 침대 밑이나 옷장에 보관해야 하므로 너무 큰 하드케이스보다는 표준 사이즈가 유리합니다",
      ],
    },
    {
      title: "통신",
      items: [
        "해외 로밍 신청",
        "출국 전 데이터 통신 차단",
        "통신사 연락처: SK 02-6343-9000 / KT 02-2190-0901 / LGT 02-3416-7010",
        "선내 와이파이 별도 신청 (룸당 1인 권장)",
      ],
    },
    {
      title: "기타 / 주의",
      items: [
        "접는 천가방 또는 장바구니 (마지막 날 짐 꾸리기 용도로 유용)",
        "(유료) 크루즈 인터넷",
        "(유료) 주류 패키지",
        "전기 110V·220V",
        "드라이 / 커피포트는 있으나, 다른 전기제품 반입 불가",
      ],
    },
    {
      title: "반입금지",
      items: [
        "술, 진공포장되지 않은 음식물, 폭발물 / 독성물질 / 인화성 물질, 도검류, 총기류, 공구류 등",
        "주류 반입은 엄격히 금지 (1병까지는 가능)",
      ],
    },
  ],
};

// 회사 공통 필드(companyName, logoPath, logoDarkPath)는 index.ts에서 companyInfo로 주입
type ProductHeaderData = Omit<HeaderData, 'companyName' | 'logoPath' | 'logoDarkPath'>;

export const headerData: ProductHeaderData = {
  mobileTitle: "상품상세정보",
  navItems: [
    { name: "시설 안내", href: "#intro" },
    { name: "일정표", href: "#schedule" },
    { name: "가격 안내", href: "#pricing" },
    { name: "규정 안내", href: "#trip-summary" },
    { name: "준비물", href: "#checklist" },
  ],
  ctaText: "예약 문의",
};

// 회사 공통 필드(companyName, logoPath, copyright, addresses, mainPhone)는 index.ts에서 companyInfo로 주입
type ProductFooterData = Omit<FooterData, 'companyName' | 'logoPath' | 'copyright' | 'addresses' | 'mainPhone'>;

export const footerData: ProductFooterData = {
  specialty: "전세계 크루즈 전문",
  services: "성지순례 · 해외여행",
  cruiseLines: [
    "INCRUISES · VIRGIN VOYAGES",
    "ROYAL CARIBBEAN · MSC",
    "CARNIVAL · COSTA",
    "NORWEGIAN · PRINCESS",
  ],
  ceoLabel: "대표",
  ceoName: "임 두 환",
  ceoNameEn: "CEO LIM DOO HWAN",
  mobileLabel: "Mobile.",
  mobiles: ["010-6811-9191", "010-8468-9185"],
  emailLabel: "E-mail.",
  email: "imdh91@naver.com",
  mainPhoneLabel: "대표전화",
};

// kakaoTemplate 함수는 MobileBottomBar.tsx 컴포넌트 내부로 이동
export const mobileBottomBarData: MobileBottomBarData = {
  phoneNumber: "010-6811-9191",
  kakaoUrl: "https://open.kakao.com/",
  businessHours: "평일 09:00 - 18:00",
  calculatorText: "요금 계산기",
  inquiryText: "문의하기",
  inquiryModalTitle: "문의하기",
  copyButtonText: "복사하기",
  copyCompleteText: "복사 완료!",
  kakaoButtonText: "카톡 문의",
  guideText: "일정표 잘 보셨나요? 더 궁금하신 점이나 인원별 상세 견적은 지금 보고 계신 카톡으로 편하게 말씀해 주세요!",
  processTitle: "[예약 프로세스 요약]",
  processFlow: "금액 확인 ➔ 카톡 문의 ➔ 맞춤 상담 ➔ 예약 확정"
};
```

---

## Section 6: index.ts (Auto-Generate)

```typescript
import type { ProductDefinition } from '@/data/types';
import { companyInfo } from '@/data/shared/company';
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
  meta: {
    slug: '{slug}',
    name: '{선박명} {지역} 크루즈 N박 N일',
    shortDescription: '{기항지1} · {기항지2} · {기항지3}',
    thumbnailImage: '',
    ogImage: '',
    ogTitle: '',
    ogDescription: '',
  },
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
          text: "승선 후 안내에 따라 지정된 장소에서 위급 상황 대처 교육을 이수해야 합니다.",
          bold: "필수 안전 교육(Safety Drill):",
          subItems: [
            { text: "미이수 시 발생하는 실제 상황 (필독)", isWarning: true },
            { text: "선사 시스템은 실시간으로 미이수자를 파악합니다. 교육을 마칠 때까지 이름이 공공연하게 방송되거나, 승무원이 선실로 직접 찾아와 참여를 독촉합니다.", bold: "끝까지 찾아내는 실시간 추적:" },
            { text: "교육 미완료 시 선상 카드(SeaPass 등)가 정지됩니다. 이 경우 바(Bar)에서 음료 주문, 면세점 쇼핑, 카지노 이용 및 유료 레스토랑 예약 등 배 안의 모든 결제와 서비스 이용이 거부될 수 있습니다.", bold: "선상 카드 및 모든 유료 서비스 정지:" },
            { text: "국제 해상법(SOLAS)에 의거, 끝내 불응할 경우 선장은 승객을 다음 기항지에서 강제로 내리게 할 권한이 있습니다.", bold: "선장 권한에 의한 '강제 하선' 조치:" },
            { text: "규정 위반으로 인한 하선이므로 잔여 일정 환불이 전혀 안 되며, 집으로 돌아가는 항공편 비용도 본인이 직접 부담해야 하는 가장 심각한 상황이 발생할 수 있습니다.", isWarning: true, bold: "환불 및 보상 불가:" },
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

```typescript
{
  type: "info",
  id: "boarding",
  title: "{선박명} 승선 수속 안내",  // ← Change ship name only
  sections: [
    // Exact same sections content as the info-card above (7-A)
    // Copy all 3 sections with all items and subItems
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

After creating the new product directory, update the central registry:

```typescript
import type { ProductDefinition, ProductMeta } from '@/data/types';
import { alaskaCruise } from './alaska-cruise';
import { northEuropeCruise } from './north-europe-cruise';
import { westernMediterraneanCruise } from './western-mediterranean-cruise';
import { newCruise } from './{new-slug}';  // ← Add import

const products: ProductDefinition[] = [
  alaskaCruise,
  northEuropeCruise,
  westernMediterraneanCruise,
  newCruise,  // ← Add to array
];

export function getAllProductMetas(): ProductMeta[] {
  return products.map(p => p.meta);
}

export async function getProductBySlug(slug: string): Promise<ProductDefinition | null> {
  return products.find(p => p.meta.slug === slug) ?? null;
}

export function getAllSlugs(): string[] {
  return products.map(p => p.meta.slug);
}
```

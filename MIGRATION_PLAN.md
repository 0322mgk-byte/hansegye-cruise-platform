# 단일앱 구조 마이그레이션 계획

## 목적

현재 단일 크루즈 랜딩페이지를 **다중 상품 단일 앱**으로 전환한다.
컴포넌트가 데이터를 직접 import하는 구조 → props로 데이터를 받는 구조로 변경하여,
하나의 UI 코드로 여러 상품 페이지를 렌더링할 수 있게 한다.

---

## 현재 구조 vs 목표 구조

### 현재

```
data/types.ts → data/sections/*.ts → data/sections/cruise-data.ts → 컴포넌트에서 직접 import
```

### 목표

```
data/types.ts
    ↓
data/products/alaska-cruise/index.ts  (상품별 데이터 폴더)
    ↓
data/products/index.ts                (상품 레지스트리)
    ↓
app/products/[slug]/page.tsx          (동적 라우팅)
    ↓
컴포넌트에 props 전달
```

### 목표 폴더 구조

```
cruise-platform/
├── app/
│   ├── page.tsx                              ← 홈 (상품 목록)
│   ├── layout.tsx                            ← 사이트 레벨 메타데이터
│   ├── products/
│   │   └── [slug]/
│   │       └── page.tsx                      ← 상품 페이지 (동적 라우팅)
│   └── components/                           ← 공통 UI 컴포넌트
│
├── data/
│   ├── types.ts                              ← 타입 정의
│   ├── shared/                               ← 회사 공통 데이터 (신규)
│   │   └── company.ts                        ← 회사명, 로고, 주소, 저작권 등
│   └── products/                             ← 상품 레지스트리
│       ├── index.ts                          ← getProductBySlug(), getAllProductMetas()
│       └── alaska-cruise/                    ← 상품별 데이터 폴더
│           ├── index.ts                      ← ProductDefinition 조립 + export
│           ├── hero-data.ts
│           ├── intro-data.ts
│           ├── features-data.ts
│           ├── details-data.ts
│           ├── trip-info-data.ts
│           ├── schedule-labels-data.ts
│           ├── schedule-days-data.ts
│           ├── schedule-modals-data.ts
│           ├── pricing-data.ts
│           ├── product-info-data.ts
│           ├── trip-summary-data.ts
│           └── static-data.ts
│
├── public/                                   ← 이미지만 (영상은 외부 스토리지)
│   ├── shared/                               ← 회사 공통 에셋
│   │   ├── header/
│   │   └── bottom_bar/
│   └── products/
│       └── alaska-cruise/                    ← 상품별 이미지
│           ├── og.png
│           ├── thumbnail.jpg
│           ├── section3/
│           ├── section4/
│           └── sectrion6/
│
└── lib/                                      ← 유틸리티
```

---

## 주의: kakaoTemplate 함수 직렬화 문제

`MobileBottomBarData.kakaoTemplate`은 **함수**이다 (`data/types.ts:450`).
`app/products/[slug]/page.tsx`는 Server Component이므로, **함수는 Server → Client로 전달할 수 없다.**
빌드 자체가 실패한다.

### 해결 방법

1. `data/types.ts`에서 `kakaoTemplate`을 함수 → 포맷 문자열로 변경
2. 실제 함수 로직은 `MobileBottomBar.tsx` 컴포넌트 내부로 이동

```typescript
// ❌ BEFORE (data/types.ts:450)
kakaoTemplate: (adults: number, children: number, infants: number, totalPrice: string) => string;

// ✅ AFTER — 함수 제거, 포맷은 컴포넌트 내부에서 처리
// MobileBottomBarData에서 kakaoTemplate 필드 삭제
// MobileBottomBar.tsx 내부에 로직 이동:
const getKakaoText = (adults: number, children: number, infants: number, totalPrice: string) => {
  const parts: string[] = [];
  if (adults > 0) parts.push(`성인 ${adults}명`);
  if (children > 0) parts.push(`소아 ${children}명`);
  if (infants > 0) parts.push(`유아 ${infants}명`);
  return `${parts.join(", ")}, 총 예상 비용 ${totalPrice} 견적 문의합니다.`;
};
```

> 이 변경은 Phase 1 (타입 수정)과 Phase 2 (MobileBottomBar 전환) 시 반영한다.

---

## 규칙: import 경로는 `@/` 절대경로 사용

모든 데이터 파일에서 타입 import 시 `@/data/types`를 사용한다.
상대경로(`../types`, `../../types`)는 파일 이동 시 깨지므로 사용하지 않는다.

```typescript
// ✅ 모든 데이터 파일에서 이렇게 import
import type { HeroData } from '@/data/types';

// ❌ 사용 금지 — 파일 위치 바뀌면 깨짐
import type { HeroData } from '../types';
import type { HeroData } from '../../types';
```

---

## 데이터 설계: 공유 vs 상품별 분리

### 공유 데이터 (`data/shared/company.ts`)

모든 상품에서 동일한 회사 정보. 한 번 수정하면 전체 반영.

```typescript
export const companyInfo = {
  companyName: '한세계여행사',
  logoPath: '/shared/header/logo.png',
  logoDarkPath: '/shared/header/logo-dark.png',
  addresses: ['전북 군산시...', '군산시...'],  // ← 복수형 배열 (FooterData.addresses와 일치)
  copyright: '© 2026 한세계여행사. All rights reserved.',
  mainPhone: '1688-3221',
};
```

> **주의:** 실제 FooterData 타입에서 필드명은 `addresses: string[]` (복수, 배열)이다.
> `address` (단수)가 아님. companyInfo도 이에 맞춰야 한다.

### 상품별 데이터 (`data/products/[slug]/`)

상품마다 다른 데이터. 각 상품 폴더에 섹션 파일 13개 + index.ts.

> **중요:** `static-data.ts`를 이동할 때, 회사 공통 필드(companyName, logoPath, address 등)는
> **제거**하고 `companyInfo`에서 가져온다. 중복 데이터를 남기면 "어디를 고쳐야 하지?" 혼란이 생긴다.

```typescript
// data/products/alaska-cruise/index.ts
import type { ProductDefinition } from '@/data/types';
import { companyInfo } from '@/data/shared/company';
import { heroData } from './hero-data';
import { introData } from './intro-data';
import { featuresData } from './features-data';
import { detailsData } from './details-data';
import { tripInfoData } from './trip-info-data';
import { scheduleLabelsData, scheduleMeta } from './schedule-labels-data';
import { scheduleDaysData } from './schedule-days-data';
import { scheduleModalsData } from './schedule-modals-data';
import { pricingData } from './pricing-data';
import { productInfoData } from './product-info-data';
import { tripSummaryData } from './trip-summary-data';
import { checklistData, headerData, footerData, mobileBottomBarData } from './static-data';

export const alaskaCruise: ProductDefinition = {
  meta: {
    slug: 'alaska-cruise',
    name: '프린세스 크루즈 에메랄드호 알래스카 8박 10일',
    shortDescription: '짐 싸는 고생, 바가지 끝! 30% 싸게 발코니에서 빙하 1열 직관',
    thumbnailImage: '/products/alaska-cruise/thumbnail.jpg',
    ogImage: '/products/alaska-cruise/og.png',
    ogTitle: '호구 안 당하고 알래스카 크루즈 VIP 가는 법',
    ogDescription: '짐 싸는 고생, 바가지 끝! 30% 싸게 발코니에서 빙하 1열 직관',
  },
  data: {
    hero: heroData,
    intro: introData,
    features: featuresData,
    details: detailsData,
    tripInfo: tripInfoData,
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
      addresses: companyInfo.addresses,   // ← 복수형 배열
      copyright: companyInfo.copyright,
      mainPhone: companyInfo.mainPhone,
    },
    mobileBottomBar: mobileBottomBarData,
  },
};
```

### 분리 기준

| 데이터 | 위치 | 이유 |
|--------|------|------|
| 회사명, 로고, 주소, 저작권, 대표전화 | `data/shared/company.ts` | 모든 상품 동일, 1곳 수정 → 전체 반영 |
| 히어로, 일정, 가격, 선박정보 등 | `data/products/[slug]/*.ts` | 상품마다 다름 |
| 카카오 URL, 상품별 전화번호 | `data/products/[slug]/static-data.ts` | 상품마다 다를 수 있음 |
| 체크리스트 (여행 준비물) | `data/products/[slug]/static-data.ts` | 크루즈 종류별로 다를 수 있음 |

### static-data.ts 분리 시 처리

```typescript
// ❌ BEFORE (data/sections/static-data.ts)
export const headerData = {
  companyName: '한세계여행사',     // ← 회사 공통
  logoPath: '/header/logo.png',    // ← 회사 공통
  navItems: [...],                 // ← 상품별
  ctaText: '...',                  // ← 상품별
};

// ✅ AFTER (data/products/alaska-cruise/static-data.ts)
// 회사 공통 필드는 제거 — index.ts에서 companyInfo로 주입
export const headerData = {
  navItems: [...],                 // 상품별 데이터만 유지
  ctaText: '...',
};
```

**타입 처리 전략 (필수):**

현재 `HeaderData.companyName`은 **required** 필드이다.
static-data.ts에서 제거하면 타입 에러가 발생한다. 해결 방법:

```typescript
// data/types.ts — HeaderData, FooterData에서 회사 필드를 optional로 변경하지 않는다.
// 대신 static-data.ts에서는 Omit 타입을 사용:

// data/products/alaska-cruise/static-data.ts
import type { HeaderData, FooterData } from '@/data/types';

// 회사 필드를 제외한 타입으로 export
type ProductHeaderData = Omit<HeaderData, 'companyName' | 'logoPath' | 'logoDarkPath'>;
type ProductFooterData = Omit<FooterData, 'companyName' | 'addresses' | 'copyright' | 'mainPhone'>;

export const headerData: ProductHeaderData = {
  navItems: [...],
  ctaText: '...',
};

export const footerData: ProductFooterData = {
  specialty: '...',
  services: '...',
  // ... (회사 필드 제외한 나머지)
};
```

그리고 `index.ts`에서 spread로 합치면 완전한 `HeaderData`/`FooterData` 타입이 된다:
```typescript
header: { ...headerData, companyName: companyInfo.companyName, ... },  // → HeaderData 타입 충족
```

---

## 미디어 전략: 이미지는 Git, 영상은 외부 스토리지

### 문제

```
15개 상품 × (이미지 2MB + 영상 17MB) = 약 285MB
→ GitHub 권장 한도(1GB) 내이지만, 영상 교체 시 이력 누적
→ Vercel 배포 결과물 100MB 제한 (Free) / 200MB (Pro)
```

### 해결: 2단계 전략

**Phase 5A (지금):** 이미지만 `/public/products/[slug]/`에 유지

```
이미지: 15개 × 2MB = 30MB → Git에 충분
영상: 외부 스토리지 URL로 참조
```

**Phase 5B (나중 또는 동시):** 영상을 Cloudflare R2로 이동

```typescript
// hero-data.ts — 영상은 외부 URL
export const heroData = {
  videoSources: [
    { src: 'https://media.your-domain.com/alaska-cruise/hero-1080p.webm', type: 'video/webm' },
    { src: 'https://media.your-domain.com/alaska-cruise/hero-720p.mp4', type: 'video/mp4' },
  ],
};
```

### 왜 Cloudflare R2인가

| 항목 | R2 | S3 + CloudFront |
|------|-----|-----------------|
| 저장 10GB | 무료 | 유료 |
| 트래픽 비용 | **무료** | 비쌈 (영상 자동재생 시 위험) |
| 설정 난이도 | 쉬움 | 보통 |

> R2 설정은 이 마이그레이션과 별도로 진행 가능. 우선은 기존 영상을 `/public/`에 두고 나중에 전환해도 됨.

---

## Phase 1: 타입 확장 + 공유 데이터 + 상품 레지스트리

> 기존 코드 변경 없음. 파일 추가만.

### Step 1.1: `data/types.ts` 타입 수정

**추가:**
```typescript
export interface ProductMeta {
  slug: string;
  name: string;
  shortDescription: string;
  thumbnailImage: string;
  ogImage: string;
  ogTitle: string;
  ogDescription: string;
}

export interface ProductDefinition {
  meta: ProductMeta;
  data: CruisePackageData;
}
```

**수정 — MobileBottomBarData에서 kakaoTemplate 함수 제거:**
```typescript
// ❌ 삭제
kakaoTemplate: (adults: number, children: number, infants: number, totalPrice: string) => string;
```
> 이 함수 로직은 Phase 2에서 MobileBottomBar.tsx 컴포넌트 내부로 이동한다.

### Step 1.2: `data/shared/company.ts` 생성

기존 `static-data.ts`에서 회사 공통 정보 추출.

### Step 1.3: `data/products/alaska-cruise/` 디렉토리 생성

기존 `data/sections/*.ts` 파일들을 `data/products/alaska-cruise/`로 이동.
`data/products/alaska-cruise/index.ts`에서 ProductDefinition 조립.

**파일 이동 시 반드시 수행:**
1. 13개 데이터 파일의 타입 import 경로를 `@/data/types`로 변경
   - 이동 전: `import type { HeroData } from '../types'`
   - 이동 후: `import type { HeroData } from '@/data/types'`
2. `static-data.ts`에서 회사 공통 필드(companyName, logoPath 등) 제거
3. `cruise-data.ts`는 이동하지 않음 (Step 1.5에서 호환용으로 유지)

**Phase 1 완료 후 `data/sections/` 상태:**
```
data/sections/
└── cruise-data.ts   ← 호환용 re-export만 남음 (Phase 6에서 삭제)
    (나머지 13개 파일은 data/products/alaska-cruise/로 이동 완료)
```

### Step 1.4: `data/products/index.ts` 생성 (레지스트리)

```typescript
import type { ProductDefinition, ProductMeta } from '../types';
import { alaskaCruise } from './alaska-cruise';

const products: ProductDefinition[] = [alaskaCruise];

export function getAllProductMetas(): ProductMeta[] {
  return products.map(p => p.meta);
}

// async로 설계 — 나중에 DB 전환 시 함수 시그니처를 바꾸지 않아도 됨
export async function getProductBySlug(slug: string): Promise<ProductDefinition | null> {
  // 현재: 파일 기반 (동기)
  return products.find(p => p.meta.slug === slug) ?? null;
  // 나중: DB 기반 (비동기)
  // return await db.products.findBySlug(slug);
}

export function getAllSlugs(): string[] {
  return products.map(p => p.meta.slug);
}
```

> `getProductBySlug`를 처음부터 async로 만들면, DB 전환 시 이 함수를 호출하는 모든 곳을 리팩토링하지 않아도 된다.
> `app/products/[slug]/page.tsx`는 이미 async Server Component이므로 await 사용에 문제 없다.

### Step 1.5: 기존 `data/sections/cruise-data.ts` 호환성 유지

마이그레이션 중 기존 페이지가 깨지지 않도록, `cruise-data.ts`가 새 경로를 re-export:

```typescript
// data/sections/cruise-data.ts (임시 호환용, Phase 6에서 삭제)
import { alaskaCruise } from '../products/alaska-cruise';
export const cruiseData = alaskaCruise.data;
```

> 이 파일 덕분에 Phase 2에서 컴포넌트를 하나씩 전환하는 동안에도 기존 페이지가 정상 동작한다.
> Phase 3에서 새 상품 페이지가 완성되면 이 파일을 참조하는 곳이 없어지고, Phase 6에서 삭제한다.

### 검증

- [ ] TypeScript 컴파일 확인
- [ ] 기존 페이지 동작 영향 없음 (`cruiseData` import 여전히 작동)

---

## Phase 2: 컴포넌트 props 전환 (핵심)

> 14개 컴포넌트에서 `cruiseData` 직접 import 제거 → props로 데이터 수신

### 변환 순서 (단순 → 복잡)

| # | 컴포넌트 | 난이도 | 특이사항 | 완료 |
|---|----------|--------|----------|------|
| 1 | Footer | 쉬움 | 단일 섹션, 함수 내부 구조분해 | [ ] |
| 2 | ProductInfo | 쉬움 | 동일 | [ ] |
| 3 | TripSummary | 쉬움 | 동일 | [ ] |
| 4 | Hero | 쉬움 | 동일 | [ ] |
| 5 | Details | 쉬움 | 동일 | [ ] |
| 6 | Checklist | 보통 | 모듈 레벨 구조분해 → 함수 내부로 이동 | [ ] |
| 7 | Intro | 보통 | 모듈 레벨 + 캐러셀 모달 | [ ] |
| 8 | Features | 보통 | 모듈 레벨 + 모달 | [ ] |
| 9 | Pricing | 보통 | 모듈 레벨 구조분해 | [ ] |
| 10 | TripInfo | 보통 | 크로스 섹션: tripInfo + hero.duration | [ ] |
| 11 | Header | 보통 | 크로스 섹션: header + footer.mainPhone + mobileBottomBar.kakaoUrl | [ ] |
| 12 | MobileBottomBar | 보통 | 크로스 섹션: mobileBottomBar + pricing | [ ] |
| 13 | Schedule + Timeline | 어려움 | 979줄, 서브컴포넌트 6곳에서 cruiseData 참조 | [ ] |

### 기본 변환 패턴

```tsx
// ❌ BEFORE
import { cruiseData } from "@/data/sections/cruise-data";
const { title, items } = cruiseData.someSection;  // 모듈 레벨

export default function MyComponent() {
  return <div>{title}</div>;
}

// ✅ AFTER
import type { SomeSectionData } from "@/data/types";

interface MyComponentProps {
  data: SomeSectionData;
}

export default function MyComponent({ data }: MyComponentProps) {
  const { title, items } = data;  // 함수 내부
  return <div>{title}</div>;
}
```

### 크로스 섹션 컴포넌트 props 설계

```tsx
// TripInfo — hero.duration이 추가로 필요
interface TripInfoProps {
  data: TripInfoData;
  duration: string;
}

// Header — footer.mainPhone, mobileBottomBar.kakaoUrl이 추가로 필요
interface HeaderProps {
  data: HeaderData;
  mainPhone: string;
  kakaoUrl: string;
}

// MobileBottomBar — pricing 데이터가 추가로 필요
interface MobileBottomBarProps {
  data: MobileBottomBarData;
  pricingData: PricingData;
}
```

### Timeline 변환 전략 (가장 복잡 — 상세 가이드)

Timeline.tsx (979줄)에는 3단계 깊이의 서브컴포넌트가 있고, 6곳에서 `cruiseData`를 참조한다.
각 참조 지점을 props/파라미터로 교체해야 한다.

**변경 지점 맵:**

```
Timeline (메인 컴포넌트)
├── Line 5:   import { cruiseData } 제거
├── Line 18:  const { labels } = cruiseData.schedule → props에서 받기
├── Line 813: cruiseData.schedule.days → props에서 받기
├── Line 943: cruiseData.schedule.dateRange → props에서 받기
│
├── TimelineItemRenderer (서브컴포넌트)
│   └── Line 96: cruiseData.schedule.modals → 파라미터로 전달받기
│
└── ModalRenderer (서브컴포넌트)
    └── Line 461: cruiseData.schedule.modals → 파라미터로 전달받기
```

**구체적 변경:**

```tsx
// 1. 메인 컴포넌트 — props로 ScheduleData 수신
interface TimelineProps {
  data: ScheduleData;
}

export const Timeline = ({ data }: TimelineProps) => {
  const { labels, days, modals, dateRange, durationLabel } = data;
  // 이후 모든 cruiseData.schedule.* 참조를 로컬 변수로 대체
};

// 2. TimelineItemRenderer — modals, labels를 파라미터로 추가
const TimelineItemRenderer = ({
  item,
  openModal,
  modals,     // 추가
  labels,     // 추가
}: {
  item: TimelineItem;
  openModal: (id: string) => void;
  modals: ModalData[];
  labels: ScheduleLabels;
}) => { ... };

// 3. ModalRenderer — modals를 파라미터로 추가
const ModalRenderer = ({
  activeModal,
  onClose,
  modals,     // 추가
}: {
  activeModal: string | null;
  onClose: () => void;
  modals: ModalData[];
}) => { ... };

// 4. dayContent 헬퍼 — modals, labels를 파라미터로 추가
const dayContent = (
  items: TimelineItem[],
  openModal: (id: string) => void,
  modals: ModalData[],     // 추가
  labels: ScheduleLabels   // 추가
) => { ... };
```

> 각 서브컴포넌트 호출 시 `modals={modals}`, `labels={labels}`를 전달하는 것을 빠뜨리지 않도록 주의.

### Phase 2 중간 검증

Phase 2 완료 직후, 기존 `app/page.tsx`를 임시 수정하여 동작 확인:

```tsx
// app/page.tsx (임시 — Phase 3 완료 시 상품 목록으로 교체됨)
// Phase 3에서 / → /products/alaska-cruise 리디렉션이 적용되면 이 페이지는
// 리디렉션에 의해 접근되지 않게 됨 (dead code). Phase 4에서 홈페이지로 최종 교체.
import { cruiseData } from "@/data/sections/cruise-data";

export default function Home() {
  return (
    <main className="relative">
      <Header data={cruiseData.header} mainPhone={cruiseData.footer.mainPhone} kakaoUrl={cruiseData.mobileBottomBar.kakaoUrl} />
      <Hero data={cruiseData.hero} />
      <TripInfo data={cruiseData.tripInfo} duration={cruiseData.hero.duration} />
      <Intro data={cruiseData.intro} />
      <Features data={cruiseData.features} />
      <Details data={cruiseData.details} />
      <Schedule data={cruiseData.schedule} />
      <ProductInfo data={cruiseData.productInfo} />
      <Pricing data={cruiseData.pricing} />
      <TripSummary data={cruiseData.tripSummary} />
      <Checklist data={cruiseData.checklist} />
      <Footer data={cruiseData.footer} />
      <MobileBottomBar data={cruiseData.mobileBottomBar} pricingData={cruiseData.pricing} />
    </main>
  );
}
```

- [ ] 모든 섹션, 모달, 캐러셀, 애니메이션 정상 동작 확인
- [ ] `npm run build` 성공

---

## Phase 3: 동적 라우팅 + 상품 페이지 + URL 리디렉션

### Step 3.1: `app/products/[slug]/page.tsx` 생성

```tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProductBySlug, getAllSlugs } from "@/data/products";
// 모든 컴포넌트 import...

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return {};
  const { meta } = product;
  return {
    title: meta.ogTitle,
    description: meta.ogDescription,
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription,
      images: [{ url: meta.ogImage }],
      locale: 'ko_KR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.ogTitle,
      description: meta.ogDescription,
      images: [meta.ogImage],
    },
  };
}

export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();
  const { data } = product;

  return (
    <main className="relative">
      <Header data={data.header} mainPhone={data.footer.mainPhone} kakaoUrl={data.mobileBottomBar.kakaoUrl} />
      <Hero data={data.hero} />
      <TripInfo data={data.tripInfo} duration={data.hero.duration} />
      <Intro data={data.intro} />
      <Features data={data.features} />
      <Details data={data.details} />
      <Schedule data={data.schedule} />
      <ProductInfo data={data.productInfo} />
      <Pricing data={data.pricing} />
      <TripSummary data={data.tripSummary} />
      <Checklist data={data.checklist} />
      <Footer data={data.footer} />
      <MobileBottomBar data={data.mobileBottomBar} pricingData={data.pricing} />
    </main>
  );
}
```

### Step 3.2: `app/layout.tsx` 메타데이터 일반화

하드코딩된 알래스카 메타데이터 제거 → 사이트 레벨 기본값만 유지:

```tsx
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "한세계여행사 - 크루즈 전문",
  description: "전세계 크루즈 여행 전문 여행사",
};
```

### Step 3.3: 기존 URL 리디렉션 (`next.config.ts`)

기존에 전단지로 뿌린 `/` URL이 깨지지 않도록 리디렉션 설정:

```typescript
// next.config.ts
const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/products/alaska-cruise',
        permanent: false,  // 302 — 나중에 홈페이지가 완성되면 제거
      },
    ];
  },
};
```

> Phase 4에서 홈페이지를 만들면 이 리디렉션을 제거하고, 홈페이지가 `/`가 됨.
> 기존 링크를 공유받은 사용자는 `/`로 접속해도 상품 페이지로 안내됨.

**주의: 쿼리 파라미터 유실**
`/?utm_source=flyer&utm_campaign=alaska` 같은 마케팅 URL은 리디렉션 시 쿼리 파라미터가 유실된다.
마케팅 추적이 중요하다면 next.config.ts 대신 middleware로 처리하거나,
전단지에 처음부터 `/products/alaska-cruise?utm_source=flyer` URL을 사용하는 것을 권장한다.

### Step 3.4: (선택) 커스텀 404 페이지

존재하지 않는 상품 slug 접근 시 사용자 친화적 페이지 표시:

```tsx
// app/not-found.tsx
export default function NotFound() {
  return (
    <div>
      <h1>페이지를 찾을 수 없습니다</h1>
      <a href="/">상품 목록으로 돌아가기</a>
    </div>
  );
}
```

> 필수는 아님. Next.js 기본 404로도 동작하며, 나중에 디자인과 함께 추가해도 됨.

### 검증

- [ ] `/products/alaska-cruise` 접속 → 기존 랜딩페이지와 동일하게 동작
- [ ] `/` 접속 → `/products/alaska-cruise`로 리디렉션 확인
- [ ] `/products/없는-상품` 접속 → 404 페이지 확인
- [ ] OG 태그 확인 (개발자 도구 → meta 태그)

---

## Phase 4: 홈페이지 (상품 목록)

### `app/page.tsx` 교체 + 리디렉션 제거

```tsx
import Link from "next/link";
import { getAllProductMetas } from "@/data/products";

export default function HomePage() {
  const products = getAllProductMetas();

  return (
    <main>
      <h1>크루즈 상품</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link key={product.slug} href={`/products/${product.slug}`}>
            <img src={product.thumbnailImage} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.shortDescription}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
```

`next.config.ts`에서 `/` → `/products/alaska-cruise` 리디렉션 제거.

### 검증

- [ ] `/` 접속 → 상품 카드 목록 표시
- [ ] 카드 클릭 → `/products/alaska-cruise`로 이동

---

## Phase 5: 이미지/영상 경로 정리

### Step 5A: 이미지 디렉토리 재구성 (Git 내)

```
이동:
/public/hero-video/    → /public/products/alaska-cruise/hero-video/  (영상은 나중에 R2로)
/public/section3/      → /public/products/alaska-cruise/section3/
/public/section4/      → /public/products/alaska-cruise/section4/
/public/sectrion6/     → /public/products/alaska-cruise/sectrion6/
/public/Alaska-og.png  → /public/products/alaska-cruise/og.png

공유 에셋 이동:
/public/header/        → /public/shared/header/
/public/bottom_bar/    → /public/shared/bottom_bar/
```

**파일 이동은 반드시 `git mv`를 사용한다** (이력 보존):

```bash
git mv public/header public/shared/header
git mv public/bottom_bar public/shared/bottom_bar
git mv public/hero-video public/products/alaska-cruise/hero-video
git mv public/section3 public/products/alaska-cruise/section3
git mv public/section4 public/products/alaska-cruise/section4
git mv public/sectrion6 public/products/alaska-cruise/sectrion6
git mv public/Alaska-og.png public/products/alaska-cruise/og.png
```

> 수동으로 파일을 복사+삭제하면 git이 "삭제 + 새 파일"로 인식하여 이력이 끊긴다.

경로 참조 업데이트 (데이터 파일 + **컴포넌트 파일**):

| 파일 | 변경할 경로들 |
|------|-------------|
| `hero-data.ts` | 영상 3개 경로 |
| `intro-data.ts` | 이미지 약 19개 경로 |
| `features-data.ts` | 이미지 3개 경로 |
| `schedule-modals-data.ts` | 이미지 다수 |
| `schedule-days-data.ts` | 이미지 다수 |
| `static-data.ts` | 로고, 아이콘 경로 |
| **`app/components/Header.tsx`** | **`/header/kakaotalk.svg` (하드코딩, line 49)** |

> **주의:** Header.tsx에 `/header/kakaotalk.svg` 경로가 데이터가 아닌 JSX에 직접 하드코딩되어 있다.
> `/shared/header/kakaotalk.svg`로 변경해야 한다. 이것을 놓치면 카카오톡 아이콘이 깨진다.

### Step 5B: 영상 → Cloudflare R2 이동 (선택, 별도 진행 가능)

```
1. Cloudflare R2 버킷 생성 + 커스텀 도메인 설정 (media.your-domain.com)
2. 영상 파일 R2에 업로드
3. 데이터 파일에서 영상 경로를 R2 URL로 변경
4. /public/에서 영상 파일 삭제 → Git 용량 대폭 절감

결과:
- Git 레포: 코드 + 이미지만 → 15개 상품이어도 ~50MB
- R2: 영상 → 용량/트래픽 제한 없음
- Vercel 배포: 100MB 제한에 여유
```

### 검증

- [ ] 모든 이미지/영상 로드 확인
- [ ] `npm run build` 성공

---

## Phase 6: 정리

### 삭제할 파일

- `data/sections/` 디렉토리 전체 (데이터가 `data/products/alaska-cruise/`로 이동 완료 후)
- `data/sections/cruise-data.ts` (호환용 re-export — 더 이상 불필요)

### 최종 검증

- [ ] `npm run build` 성공
- [ ] `npm run start` → 프로덕션 모드 확인
- [ ] `/` → 홈페이지 (상품 목록)
- [ ] `/products/alaska-cruise` → 상품 페이지 (모든 기능 정상)
- [ ] OG 태그 정상 (각 상품별 다른 메타데이터)
- [ ] 모바일 반응형 정상
- [ ] 모달, 캐러셀, 애니메이션 정상

---

## 수정 대상 파일 요약

| 파일 | 변경 | Phase |
|------|------|-------|
| `data/types.ts` | ProductMeta, ProductDefinition 타입 추가 | 1 |
| `data/shared/company.ts` | **신규** — 회사 공통 데이터 | 1 |
| `data/products/alaska-cruise/index.ts` | **신규** — 상품 정의 | 1 |
| `data/products/alaska-cruise/*.ts` | `data/sections/*.ts`에서 이동 | 1 |
| `data/products/index.ts` | **신규** — 레지스트리 | 1 |
| `data/sections/cruise-data.ts` | 호환용 re-export (임시) | 1 |
| `app/components/*.tsx` (14개) | cruiseData import 제거, props 인터페이스 추가 | 2 |
| `app/page.tsx` | 임시: props 전달 방식으로 변경 | 2 |
| `app/products/[slug]/page.tsx` | **신규** — 동적 상품 페이지 | 3 |
| `app/layout.tsx` | 메타데이터 일반화 | 3 |
| `next.config.ts` | 리디렉션 추가 (임시) | 3 |
| `app/page.tsx` | 상품 목록 페이지로 교체 | 4 |
| `next.config.ts` | 리디렉션 제거 | 4 |
| `data/products/alaska-cruise/*.ts` | 이미지 경로 업데이트 | 5 |
| `public/` | 에셋 디렉토리 재구성 | 5 |
| `data/sections/` | 삭제 (이동 완료 후) | 6 |

---

## 새 상품 추가 방법 (마이그레이션 완료 후)

```bash
# 1. 상품 데이터 폴더 생성 (기존 상품 구조 복사)
cp -r data/products/alaska-cruise/ data/products/japan-cruise/

# 2. 각 데이터 파일 내용 수정
#    - hero-data.ts: 영상, CTA 텍스트, 출발일, 기간
#    - intro-data.ts: 시설 소개, 이미지
#    - schedule-days-data.ts: 일정표
#    - schedule-modals-data.ts: 관광지 정보, 모달
#    - pricing-data.ts: 가격, 객실 타입
#    - 기타 섹션별 데이터
#    - index.ts: meta 정보 (slug, name, OG 태그 등)

# 3. 상품 이미지 추가
mkdir public/products/japan-cruise/
# → 이미지 파일 배치

# 4. 레지스트리에 등록
# data/products/index.ts에 import + products 배열에 추가

# 끝! /products/japan-cruise 로 자동 접근 가능
```

---

## 기존 템플릿 레포 2개 가져오기

```
1. 해당 레포를 로컬에 클론
   git clone https://github.com/YOU/cruise-site-a.git

2. 상품 데이터 폴더 생성
   mkdir data/products/[상품-slug]/

3. 데이터 파일 복사 + 조정
   cruise-site-a/data/sections/*.ts → data/products/[상품-slug]/*.ts
   - import 경로 수정 (../types → @/data/types 등)
   - companyInfo는 shared에서 가져오도록 변경

4. 이미지 복사
   cruise-site-a/public/section3/ → public/products/[상품-slug]/section3/
   cruise-site-a/public/section4/ → public/products/[상품-slug]/section4/
   (영상은 R2에 업로드)

5. index.ts 작성
   data/products/[상품-slug]/index.ts에 ProductDefinition 조립

6. 레지스트리에 등록
   data/products/index.ts에 추가

7. 검증
   /products/[상품-slug] 접속 → 정상 동작 확인

8. 기존 레포 아카이브
```

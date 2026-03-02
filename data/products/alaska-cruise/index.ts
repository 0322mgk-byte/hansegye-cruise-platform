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

export const alaskaCruise: ProductDefinition = {
  meta: {
    slug: 'alaska-cruise',
    name: '프린세스 크루즈 에메랄드호 알래스카 8박 10일',
    shortDescription: '짐 싸는 고생, 바가지 끝! 30% 싸게 발코니에서 빙하 1열 직관',
    thumbnailImage: '/shared/placeholder.png',
    ogImage: '/products/alaska-cruise/og.png',
    ogTitle: '호구 안 당하고 알래스카 크루즈 VIP 가는 법',
    ogDescription: '짐 싸는 고생, 바가지 끝! 30% 싸게 발코니에서 빙하 1열 직관',
    cardDepartureLabel: '26년 8월 3일 출발',
    cardTitle: '알래스카 크루즈 8박 10일',
    cardShipName: '에메랄드 프린세스호 (Emerald Princess)',
    cardRoute: '밴쿠버 > 주노 > 스캐그웨이 > 엔디캇 암 > 케치칸',
    cardPrice: '5,790,000원~',
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

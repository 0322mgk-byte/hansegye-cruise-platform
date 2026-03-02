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

export const southernMediterraneanCruise: ProductDefinition = {
  meta: {
    slug: 'southern-mediterranean-cruise',
    name: '코스타 포르투나호 남부 지중해 크루즈 8박 10일',
    shortDescription: '이스탄불 · 미코노스 · 크레타 · 로도스 · 산토리니 · 아테네',
    thumbnailImage: '/shared/placeholder.png',
    ogImage: '',
    ogTitle: '',
    ogDescription: '',
    cardDepartureLabel: '26년 6월 27일 출발',
    cardTitle: '남부 지중해 크루즈 8박 10일',
    cardShipName: '코스타 포르투나호 (COSTA Fortuna)',
    cardRoute: '이스탄불 > 미코노스 > 헤라클리온 > 로도스 > 산토리니 > 아테네',
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

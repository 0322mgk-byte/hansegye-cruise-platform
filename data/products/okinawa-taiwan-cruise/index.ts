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

export const okinawaTaiwanCruise: ProductDefinition = {
  meta: {
    slug: 'okinawa-taiwan-cruise',
    name: 'MSC 벨리시마 오키나와/대만 크루즈 5박 6일',
    shortDescription: '대만 · 미야코 · 나하 · 이시가키 · 기륭',
    thumbnailImage: '/shared/placeholder.png',
    ogImage: '',
    ogTitle: '',
    ogDescription: '',
    cardDepartureLabel: '26년 1월 16일 출발',
    cardTitle: '오키나와/대만 크루즈 5박 6일',
    cardShipName: 'MSC 벨리시마호 (MSC Bellissima)',
    cardRoute: '대만 > 미야코 > 나하 > 이시가키 > 기륭',
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

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

export const arabiaCruise: ProductDefinition = {
  meta: {
    slug: 'arabia-cruise',
    name: '코스타 토스카나 아라비아 크루즈 7박 9일',
    shortDescription: '두바이 · 무스카트 · 도하 · 아부다비',
    thumbnailImage: '/shared/placeholder.png',
    ogImage: '',
    ogTitle: '',
    ogDescription: '',
    cardDepartureLabel: '26년 1월 10일 출발',
    cardTitle: '아라비아 크루즈 7박 9일',
    cardShipName: '코스타 토스카나호 (Costa Toscana)',
    cardRoute: '두바이 > 오만 > 카타르',
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

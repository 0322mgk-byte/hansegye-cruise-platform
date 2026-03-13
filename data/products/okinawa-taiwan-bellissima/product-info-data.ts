import type { ProductInfoData } from '@/data/types';

export const productInfoData: ProductInfoData = {
  labels: {
    includedTitle: "포함사항",
    excludedTitle: "불포함사항",
  },
  title: "상품 안내",
  subtitle: "포함 내역과 별도 지출 항목을 확인해 보세요",
  includedItems: [
    "에어로케이 항공 왕복 항공료(이코노미), 공항-터미널 픽드랍",
    "MSC 벨리시마 크루즈 승선료 (5박)",
    "기항지 핵심 투어 관광 (대만/오키나와) — 한국인 가이드, 전용 차량, 입장료, 기사/가이드 팁",
    "크루즈 인솔자 동행, 1억 원 여행자 보험",
    "투어 일정표에 표기된 식사",
  ],
  excludedItems: [
    "선상 팁, 개인 경비 및 매너 팁",
    "선상 내 와이파이, 주류 비용, 유료 식당 및 시설 이용",
    "일정표상 자유 식사",
  ],
};

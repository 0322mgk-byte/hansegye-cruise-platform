import type { ProductInfoData } from '@/data/types';

export const productInfoData: ProductInfoData = {
  labels: {
    includedTitle: "포함사항",
    excludedTitle: "불포함사항",
  },
  title: "상품 안내",
  subtitle: "포함 내역과 별도 지출 항목을 확인해 보세요",
  includedItems: [
    "대한항공 왕복 항공료(이코노미), 이스탄불공항-항구 픽업/샌딩",
    "코스타 포르투나 크루즈 승선료 (8박, 인사이드/오션뷰/발코니)",
    "이스탄불 호텔 1박 및 이스탄불/아테네 한국인 가이드 핵심 관광 (입장료, 전용 차량, 차량부대비 포함)",
    "투어 일정표에 표기된 식사",
    "크루즈 인솔자 동행, 1억 원 여행자 보험",
  ],
  excludedItems: [
    "기타 선내 개인 비용 (선내 음료, 주류, 면세점, 카지노, 인터넷, 세탁비 등)",
    "크루즈 선내 팁(선내 봉사료): 77유로 (금액 변동 가능, 하선 시 결제)",
    "기항지 자유식 식사비용, 개인경비 및 매너팁",
  ],
};

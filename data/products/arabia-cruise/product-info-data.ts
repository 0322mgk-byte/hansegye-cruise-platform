import type { ProductInfoData } from '@/data/types';

export const productInfoData: ProductInfoData = {
  labels: {
    includedTitle: "포함사항",
    excludedTitle: "불포함사항",
  },
  title: "상품 안내",
  subtitle: "포함 내역과 별도 지출 항목을 확인해 보세요",
  includedItems: [
    "대한항공 왕복 항공료(이코노미), 공항-크루즈터미널 픽업/샌딩",
    "코스타 토스카나 크루즈 승선료 (7박)",
    "기항지 관광(두바이, 아부다비) 한국어가이드, 현지가이드, 전용차량비, 차량부대비, 입장료",
    "기사, 가이드 비용, 현지 여행사 대행수수료",
    "크루즈 인솔자 동행, 1억 원 여행자 보험",
    "투어 일정표에 표기된 한식 식사",
  ],
  excludedItems: [
    "기타 선내 개인 비용 (선내 음료, 주류, 면세점, 카지노, 인터넷, 세탁비, 유료식당 등)",
    "크루즈 선내 팁(선내 봉사료): 77유로 (금액 변동 가능, 하선 시 결제)",
    "기항지 자유식사 비용 (일정표 참고), 개인경비 및 매너팁",
  ],
};

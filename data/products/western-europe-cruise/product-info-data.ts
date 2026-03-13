import type { ProductInfoData } from '@/data/types';

export const productInfoData: ProductInfoData = {
  labels: {
    includedTitle: "포함사항",
    excludedTitle: "불포함사항",
  },
  title: "상품 안내",
  subtitle: "포함 내역과 별도 지출 항목을 확인해 보세요",
  includedItems: [
    "대한항공 왕복 항공료(이코노미), 공항-터미널 픽드랍",
    "MSC 프레지오사 크루즈(인사이드, 오션뷰, 발코니)",
    "파리 1박 호텔 및 시내 관광 (입장료, 전용 차량, 한국인 기사 가이드 등)",
    "각 기항지 관광 포함 (총 4곳: 사우샘프턴/함부르크/브뤼헤/로테르담)",
    "크루즈 인솔자 동행, 1억 원 여행자 보험",
  ],
  excludedItems: [
    "기타 선내 개인 비용 (선내 음료, 주류, 면세점, 카지노, 인터넷, 세탁비 등)",
    "크루즈 선내 팁(선내 봉사료): 77유로 (금액 변동 가능, 하선 시 결제)",
    "공동 경비: USD 100 (고객 중 총무 관리)",
  ],
};

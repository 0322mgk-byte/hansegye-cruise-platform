import type { ProductInfoData } from '@/data/types';

export const productInfoData: ProductInfoData = {
  labels: {
    includedTitle: "포함사항",
    excludedTitle: "불포함사항",
  },
  title: "상품 안내",
  subtitle: "포함 내역과 별도 지출 항목을 확인해 보세요",
  includedItems: [
    "에미레이트 항공 왕복 항공료(이코노미), 공항-터미널 픽드랍",
    "코스타 디아데마 크루즈(인사이드, 오션뷰, 발코니)",
    "각 기항지 관광 포함 (함부르크/코펜하겐/게이랑에르/베르겐/스타방에르)",
    "크루즈 인솔자 동행, 1억 원 여행자 보험",
  ],
  excludedItems: [
    "기타 선내 개인 비용 (선내 음료, 주류, 면세점, 카지노, 인터넷, 세탁비 등)",
    "크루즈 선내 팁(선내 봉사료): 성인 77유로 / 소아 38.5유로 (금액 변동 가능, 하선 시 결제)",
    "현지 진행비(인솔자/기사/가이드): 110유로",
  ],
};

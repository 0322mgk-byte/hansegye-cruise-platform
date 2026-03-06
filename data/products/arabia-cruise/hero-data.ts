import type { HeroData } from '@/data/types';

export const heroData: HeroData = {
  ctaText: "일정 확인하기",
  cruiseLine: "코스타 크루즈 토스카나호",
  departureDate: "2026년 01월 10일 출발",
  duration: "7박 9일",
  nights: "7박",
  description: "아라비아 크루즈 7박 9일의 상세 일정을 안내해 드립니다\n일자별 주요 일정과 기항지 정보를 지금 바로 확인하세요",
  mobileDescription: "아라비아 크루즈 {departureDate}\n주요 일정과 기항지 정보를 지금 바로 확인하세요",
  videoSources: [
    { src: "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/hero-video/desktop/hero-video.mp4", type: "video/mp4" },
  ],
  mobileVideoSources: [
    { src: "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/hero-video/mobile/hero-video.mp4", type: "video/mp4" },
  ],
};

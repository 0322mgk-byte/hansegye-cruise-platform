import type { HeroData } from '@/data/types';

export const heroData: HeroData = {
  ctaText: "일정 확인하기",
  cruiseLine: "코스타 크루즈 포르투나호",
  departureDate: "2026년 06월 27일 출발",
  duration: "8박 10일",
  nights: "8박",
  description: "남부 지중해 크루즈 8박 10일의 상세 일정을 안내해 드립니다\n일자별 주요 일정과 기항지 정보를 지금 바로 확인하세요",
  mobileDescription: "남부 지중해 크루즈 {departureDate}\n주요 일정과 기항지 정보를 지금 바로 확인하세요",
  videoSources: [
    { src: "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/southern-mediterranean-cruise/hero-video/desktop/hero-video.mp4", type: "video/mp4" },
  ],
  mobileVideoSources: [
    { src: "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/southern-mediterranean-cruise/hero-video/mobile/hero-video.mp4", type: "video/mp4" },
  ],
};

import type { DetailsData } from '@/data/types';

export const detailsData: DetailsData = {
  title: "크루즈 제원",
  specs: [
    { label: "톤 수", value: "132,500톤" },
    { label: "길이", value: "306m" },
    { label: "승무원", value: "1,253명" },
    { label: "높이", value: "약 60m" },
    { label: "승객 정원", value: "4,947명" },
    { label: "규모", value: "20층" },
    { label: "첫 항해", value: "2014. 11. 01" },
    { label: "객실 수", value: "1,862개" },
  ],
  youtube: {
    videoId: "5wMQNxrwxM0",
    startSeconds: 0,
    endSeconds: 30,
  },
  videoSources: [
    { src: "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/north-europe-cruise/hero-video/north-europe-video2-details.mp4", type: "video/mp4" },
  ],
  mobileVideoSources: [
    { src: "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/north-europe-cruise/hero-video/mobile-north-europe-video2.mp4", type: "video/mp4" },
  ],
};

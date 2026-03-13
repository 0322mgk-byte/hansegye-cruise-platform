import type { DetailsData } from '@/data/types';

export const detailsData: DetailsData = {
  title: "크루즈 제원",
  specs: [
    { label: "톤 수", value: "139,072톤" },
    { label: "길이", value: "333.30m" },
    { label: "승무원", value: "1,388명" },
    { label: "높이", value: "67.69m" },
    { label: "승객 정원", value: "4,345명" },
    { label: "규모", value: "18층" },
    { label: "첫 항해", value: "2013년 3월" },
    { label: "객실 수", value: "1,751개" },
  ],
  videoSources: [
    { src: "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section5/desktop/section5-video.mp4", type: "video/mp4" },
  ],
  mobileVideoSources: [
    { src: "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section5/mobile/section5-video.mp4", type: "video/mp4" },
  ],
};

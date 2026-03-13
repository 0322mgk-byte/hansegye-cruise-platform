import type { DetailsData } from '@/data/types';

export const detailsData: DetailsData = {
  title: "크루즈 제원",
  specs: [
    { label: "톤 수", value: "153,516톤" },
    { label: "길이", value: "323m" },
    { label: "승무원", value: "1,413명" },
    { label: "높이", value: "74m" },
    { label: "승객 정원", value: "5,119명" },
    { label: "규모", value: "20층" },
    { label: "첫 항해", value: "2018년" },
    { label: "객실 수", value: "2,066개" },
  ],
  videoSources: [
    { src: "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-mediterranean-cruise/section5/desktop-cruise-specifications.mp4", type: "video/mp4" },
  ],
  mobileVideoSources: [
    { src: "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-mediterranean-cruise/section5/mobile-cruise-specifications.mp4", type: "video/mp4" },
  ],
};

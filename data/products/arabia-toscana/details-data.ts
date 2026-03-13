import type { DetailsData } from '@/data/types';

export const detailsData: DetailsData = {
  title: "크루즈 제원",
  specs: [
    { label: "톤 수", value: "186,382톤" },
    { label: "길이", value: "337m" },
    { label: "승무원", value: "약 1,646명" },
    { label: "높이", value: "72m" },
    { label: "승객 정원", value: "5,324명" },
    { label: "규모", value: "20층" },
    { label: "첫 항해", value: "2022. 3. 5" },
    { label: "객실 수", value: "2,663개" },
  ],
  videoSources: [
    { src: "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section5/desktop/section5-video.mp4", type: "video/mp4" },
  ],
  mobileVideoSources: [
    { src: "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section5/mobile/section5-video.mp4", type: "video/mp4" },
  ],
};

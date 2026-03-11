import type { IntroData } from '@/data/types';

export const introData: IntroData = {
  title: "크루즈 시설 안내",
  description: "크루즈에서 즐길 수 있는 대표 시설을 소개합니다",
  moreText: "자세히 보기",
  facilities: [
    {
      name: "엔터테인먼트",
      images: ["/shared/placeholder.png"],
      alt: "할리우드 시어터",
      subtitle: "하와이의 밤을 수놓는 공연과 즐거움",
      description:
        "880석 규모의 Hollywood Theater에서 매일 밤 라이브 공연과 뮤지컬 프로덕션을 감상할 수 있습니다. 뉴올리언스 테마의 Mardi Gras Cabaret Lounge & Nightclub에서는 디스코와 노래방을 즐기고, Gold Rush Saloon에서 다트와 바 당구로 여유로운 밤을 보내세요. Pink's Champagne Bar, Waikiki Bar, Napa Wine Bar 등 개성 넘치는 바와 라운지가 선내 곳곳에 마련되어 있습니다.",
    },
    {
      name: "아웃도어 & 레저",
      images: ["/shared/placeholder.png"],
      alt: "오아시스 풀",
      subtitle: "하와이 햇살 아래 즐기는 액티비티",
      description:
        "Oasis Pool과 마이애미 테마의 South Beach Pool에서 수영을 즐기고, 선상 핫터브에서 하와이의 바다를 바라보며 휴식할 수 있습니다. 조깅 트랙에서 달리기를 하거나, 농구·배구 코트, 피클볼 코트, 골프 드라이빙 넷 등 다양한 스포츠 시설을 이용할 수 있습니다.",
    },
    {
      name: "힐링 & 웰니스",
      images: ["/shared/placeholder.png"],
      alt: "만다라 스파",
      subtitle: "수상 경력의 만다라 스파에서 완벽한 휴식",
      description:
        "50가지 이상의 스페셜티 트리트먼트를 제공하는 수상 경력의 Mandara Spa에서 핫스톤 마사지, 페이셜, 침술 등 프리미엄 케어를 받을 수 있습니다. Santa Fe Fitness Center에서 최신 운동 기구와 피트니스 클래스를 이용하고, 사우나와 핫터브에서 항해의 피로를 풀어보세요.",
    },
  ],
};

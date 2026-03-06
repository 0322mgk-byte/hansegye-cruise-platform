import type { DayScheduleData } from '@/data/types';

export const scheduleDaysData: DayScheduleData[] = [
  // ─── 1일차: 인천 → 두바이 (출발 + 승선) ───
  {
    day: 1,
    date: '01/10(토)',
    location: '인천 → 두바이',
    description: '상세 내용을 확인해보세요',
    items: [
      { type: 'location-marker', label: '인천' },
      {
        type: 'text',
        time: '09:45',
        text: '인천 국제공항 집결 및 미팅',
        details: [
          '여권, 항공권, 크루즈 승선 서류를 반드시 지참해 주세요.',
        ],
      },
      {
        type: 'text',
        time: '12:45',
        text: '인천 국제공항 출발 — 두바이 향발',
        details: [
          '교통편 : 대한항공',
          '비행시간 : 약 10시간 55분 소요',
        ],
        warning: '항공좌석배정은 항공사의 고유 권한입니다. 인솔자와 여행사의 권한이 없으므로 고객님이 원하시는 좌석으로 배정이 불가할 수 있음을 양해 부탁드립니다.',
      },
      { type: 'meal', text: '석식 (기내식)' },
      { type: 'location-marker', label: '두바이', extraMarginTop: true },
      {
        type: 'text',
        time: '18:40',
        text: '두바이 국제공항 도착',
      },
      {
        type: 'text',
        text: '크루즈 항구로 이동 후 코스타 토스카나 승선',
      },
      {
        type: 'info-card',
        modalId: 'boarding',
        title: '코스타 토스카나 승선 수속 안내',
        emoji: '📢',
        mobileLabel: '[승선 안내]',
        mobileSublabel: '승선 수속 안내',
        sections: [
          {
            heading: '1. 수하물 위탁 (Luggage Drop-off)',
            items: [
              { text: '터미널 도착 후 큰 수하물을 위탁하시면 배정된 선실 앞으로 안전하게 배달됩니다.' },
              { text: '여권, 승선 서류, 귀중품 및 파손 주의 물품은 반드시 직접 소지하고 탑승해 주세요.' },
            ],
          },
          {
            heading: '2. 승선 수속 (Check-in & Boarding)',
            items: [
              { text: '준비물: 여권, 크루즈 승선 서류, 해외 결제 가능한 신용카드' },
              { text: '위탁 수속 후 체크인 카운터에서 본인 확인 및 수속을 진행합니다.' },
              { text: '모든 탑승 수속은 크루즈 출발 시간 2시간 전까지 반드시 완료되어야 합니다.' },
              { text: '선실 내에는 신분증, 결제 수단, 객실 키 역할을 하는 \'승선 카드\'가 비치되어 있습니다. (분실 시 안내 데스크에서 재발급 가능)' },
            ],
          },
          {
            heading: '3. 승선 후 유의사항 (After Boarding)',
            items: [
              {
                text: '필수 안전 교육(Safety Drill): 승선 후 안내에 따라 지정된 장소에서 위급 상황 대처 교육을 이수해야 합니다.',
              },
              {
                text: '미이수 시 발생하는 실제 상황 (필독)',
                subItems: [
                  { text: '끝까지 찾아내는 실시간 추적: 선사 시스템은 실시간으로 미이수자를 파악합니다. 교육을 마칠 때까지 이름이 공공연하게 방송되거나, 승무원이 선실로 직접 찾아와 참여를 독촉합니다.' },
                  { text: '선상 카드 및 모든 유료 서비스 정지: 교육 미완료 시 선상 카드(SeaPass 등)가 정지됩니다. 이 경우 바(Bar)에서 음료 주문, 면세점 쇼핑, 카지노 이용 및 유료 레스토랑 예약 등 배 안의 모든 결제와 서비스 이용이 거부될 수 있습니다.' },
                  { text: '선장 권한에 의한 \'강제 하선\' 조치: 국제 해상법(SOLAS)에 의거, 끝내 불응할 경우 선장은 승객을 다음 기항지에서 강제로 내리게 할 권한이 있습니다.' },
                  { text: '환불 및 보상 불가: 규정 위반으로 인한 하선이므로 잔여 일정 환불이 전혀 안 되며, 집으로 돌아가는 항공편 비용도 본인이 직접 부담해야 하는 가장 심각한 상황이 발생할 수 있습니다.', isWarning: true },
                ],
              },
              { text: '선사에서 운영하는 기항지 투어(영어 진행)는 조기 마감될 수 있으므로 승선 첫날 신청하시기를 권장합니다. (변경/취소 시 수수료 발생 가능)', bold: '기항지 선택 관광:' },
            ],
          },
        ],
      },
      { type: 'hotel', name: '코스타 토스카나' },
    ],
  },

  // ─── 2일차: 두바이 관광 ───
  {
    day: 2,
    date: '01/11(일)',
    location: '두바이',
    description: '상세 내용을 확인해보세요',
    items: [
      { type: 'meal', text: '조식 (선내식)' },
      { type: 'location-marker', label: '두바이' },
      {
        type: 'text',
        time: '09:00',
        text: '두바이 관광 출발 (전용차량)',
      },
      {
        type: 'tourist-spot',
        modalId: 'dubai',
        title: '[관광 정보] 두바이 (Dubai)',
        shortTitle: '두바이',
        images: [
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day2/Dubai/Burj%20Khalifa%20_main%20pic_2880%20x%201620px.webp",
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day2/Dubai/Cultural-significance-of-Dubai-souks.webp",
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day2/Dubai/palm-jumeirah_1.webp",
        ],
        description: '아랍에미리트의 초현대적 도시 두바이는 세계 최고층 빌딩 부르즈 할리파, 인공 섬 팜 주메이라, 전통 수크 시장이 어우러진 매력적인 관광 도시입니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '두바이',
      },
      {
        type: 'tourist-spot',
        modalId: 'museumofthefuture',
        title: '[관광 정보] 미래 박물관 (Museum of the Future)',
        shortTitle: '미래 박물관',
        images: [
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day2/Museum-of-the-Future/Killa-Design-Museum-of-the-Future-Shots-2023-3.webp",
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day2/Museum-of-the-Future/Killa-Design-Museum-of-the-Future-Shots-2023-4.webp",
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day2/Museum-of-the-Future/Museum_1280x720.webp",
        ],
        description: '독특한 도넛 형태의 은빛 외관에 아랍어 캘리그래피가 새겨진 두바이의 랜드마크로, 미래 기술과 혁신을 주제로 한 체험형 전시관입니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '미래 박물관',
      },
      {
        type: 'text',
        text: '아랍에미레이트 몰 자유시간',
      },
      {
        type: 'tourist-spot',
        modalId: 'palmjumeirah',
        title: '[관광 정보] 팜 주메이라 (Palm Jumeirah)',
        shortTitle: '팜 주메이라',
        images: [
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day2/Palm-Jumeirah/3e65815dfd07b825a6109359ee75846e.webp",
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day2/Palm-Jumeirah/742d79ffd607ef64c9b38cad5e31ae43850421dd2076d30b8720aa09d94cabbc.webp",
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day2/Palm-Jumeirah/Palm-Islands-Dubai-Haeder-16-9-1920x1080px.webp",
        ],
        description: '야자나무 모양으로 조성된 세계 최대의 인공 섬 팜 주메이라의 전망대에서 두바이 스카이라인과 아라비아 해의 파노라마 뷰를 감상할 수 있습니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '팜 주메이라',
      },
      { type: 'meal', text: '중식 (한식)' },
      {
        type: 'tourist-spot',
        modalId: 'desertsafari',
        title: '[관광 정보] 사막 사파리 (Desert Safari)',
        shortTitle: '사막 사파리',
        images: [
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day2/Desert-Safari/Desert-Safari-in-Dubai.webp",
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day2/Desert-Safari/desert-safari2.webp",
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day2/Desert-Safari/dubai-desert-safari-dune-bashing-camel-ride-bbq-dinnerentertainment.webp",
        ],
        description: '6인승 차량으로 모래 사막에 직접 들어가 듄배싱과 샌드보드를 체험하고, 아라비아 사막의 황홀한 일몰을 감상한 뒤 BBQ 석식을 즐기는 투어입니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '사막 사파리',
      },
      {
        type: 'text',
        text: '크루즈 항구 복귀 및 휴식',
      },
      { type: 'meal', text: '석식 (현지식 — BBQ)' },
      { type: 'hotel', name: '코스타 토스카나' },
    ],
  },

  // ─── 3일차: 두바이 관광 + 출항 ───
  {
    day: 3,
    date: '01/12(월)',
    location: '두바이',
    description: '상세 내용을 확인해보세요',
    items: [
      { type: 'meal', text: '조식 (선내식)' },
      { type: 'location-marker', label: '두바이' },
      {
        type: 'text',
        time: '09:00',
        text: '두바이 올드타운 관광 출발 (전용차량)',
      },
      {
        type: 'tourist-spot',
        modalId: 'alseef',
        title: '[관광 정보] 알시프 (Al Seef)',
        shortTitle: '알시프',
        images: [
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day3/Al-Seef/3-1-1.webp",
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day3/Al-Seef/dd00ff_1554814aee26409ca96c9ebaeb6fe7fe~mv2_d_6720_4480_s_4_2.webp",
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day3/Al-Seef/download-1.webp",
        ],
        description: '두바이 크릭을 따라 조성된 알시프는 전통 아랍 건축 양식을 현대적으로 재해석한 문화 거리로, 카페와 레스토랑, 갤러리가 어우러진 워터프론트 산책로입니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '알시프',
      },
      {
        type: 'tourist-spot',
        modalId: 'alfahidi',
        title: '[관광 정보] 알파히디 (Al Fahidi)',
        shortTitle: '알파히디',
        images: [
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day3/Al-Fahidi/Camello_y_campamento,_Al_Bastakiya,_Dubai,_2009-11-23,_DD_8878.webp",
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day3/Al-Fahidi/dubai-coffee-musuem-ticket.webp",
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day3/Al-Fahidi/UAE_Dubai_Al_Fahidi_Fort_img1_asv2018-01.webp",
        ],
        description: '19세기 전통 바람탑(Wind Tower) 건축물이 보존된 두바이에서 가장 오래된 역사 지구로, 두바이 박물관과 전통 아랍 가옥을 둘러볼 수 있습니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '알파히디',
      },
      {
        type: 'tourist-spot',
        modalId: 'dubaiframe',
        title: '[관광 정보] 두바이 프레임 (Dubai Frame)',
        shortTitle: '두바이 프레임',
        images: [
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day3/Dubai-Frame/1750325887_6853da7f8ede1.webp",
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day3/Dubai-Frame/dubai-frame-tickets-hd.webp",
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day3/Dubai-Frame/tRv6BDQN-Dubai-Frame.webp",
        ],
        description: '높이 150m의 황금빛 액자 형태 건축물로, 한쪽에서는 올드 두바이를, 반대쪽에서는 신도시의 스카이라인을 감상할 수 있는 독특한 랜드마크입니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '두바이 프레임',
      },
      {
        type: 'tourist-spot',
        modalId: 'abra',
        title: '[관광 정보] 아브라 (Abra)',
        shortTitle: '아브라',
        images: [
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day3/Abra/5-53.webp",
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day3/Abra/666bd205446e993960cad3c63f342439f0ad05b4_2_690x438.webp",
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day3/Abra/dubai-souq.webp",
        ],
        description: '데이라와 부르두바이를 연결하는 전통 목조 수상택시 아브라를 타고 두바이 크릭을 건너며 양쪽 수크 시장의 활기찬 풍경을 감상합니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '아브라',
      },
      {
        type: 'tourist-spot',
        modalId: 'goldsouq',
        title: '[관광 정보] 골드수크 (Gold Souq)',
        shortTitle: '골드수크',
        images: [
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day3/Gold-Souq/326492ab-c0e7-44bb-a355-6b94115225ee.webp",
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day3/Gold-Souq/dubai-gold-souk-jewelry-display-1024x553.webp",
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day3/Gold-Souq/Gold-Souk-in-Deira.webp",
        ],
        description: '데이라 지구에 위치한 전통 금시장으로, 수백 개의 상점에서 금 목걸이부터 다이아몬드 보석까지 다양한 귀금속을 판매하고 있습니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '골드수크',
      },
      {
        type: 'tourist-spot',
        modalId: 'soukmedinatjumeirah',
        title: '[관광 정보] 수크 메디나 쥬메이라 (Souk Madinat Jumeirah)',
        shortTitle: '수크 메디나 쥬메이라',
        images: [
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day3/Souk-Madinat-Jumeirah/f9.webp",
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day3/Souk-Madinat-Jumeirah/McGettigans-Souk-Madinat-6.webp",
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day3/Souk-Madinat-Jumeirah/Souk-Madinat-Jumeirah-Desktop-ActivityDetails-1-1.webp",
        ],
        description: '전통 아라비안 양식으로 꾸며진 고급 쇼핑몰로, 수공예품과 아라비안 향신료, 현지 공예품을 구매할 수 있으며 버즈 알아랍의 최고 포토 스팟입니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '수크 메디나 쥬메이라',
      },
      {
        type: 'tourist-spot',
        modalId: 'burjalarab',
        title: '[관광 정보] 버즈 알아랍 (Burj Al Arab)',
        shortTitle: '버즈 알아랍',
        images: [
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day3/Burj-Al-Arab/069fd173-499f-46da-a67f-cf4f873d7868-17771-dubai-inside-burj-al-arab-tour--03.webp",
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day3/Burj-Al-Arab/675859513.webp",
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day3/Burj-Al-Arab/inside-burj-al-arab-supplied.webp",
        ],
        description: '돛단배 형태의 세계적으로 유명한 7성급 럭셔리 호텔 버즈 알아랍을 해변에서 조망하며 두바이의 상징적 건축미를 감상합니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '버즈 알아랍',
      },
      { type: 'meal', text: '중식 (한식)' },
      {
        type: 'text',
        text: '두바이 몰 자유시간 — 3,000여 개 점포가 입점된 세계 최대 쇼핑몰',
      },
      {
        type: 'text',
        text: '크루즈 항구 복귀 및 휴식',
      },
      {
        type: 'departure-notice',
        time: '19:00',
        text: '코스타 토스카나는 무스카트를 향해 출항합니다',
        details: [
          '현지 기상 및 선사 사정에 의해 출항 시간이 예고 없이 변동될 수 있습니다.',
          '원활한 출발을 위해 늦어도 출항 1시간 전까지는 반드시 탑승을 마쳐주세요.',
        ],
      },
      { type: 'meal', text: '석식 (선내식)' },
      { type: 'hotel', name: '코스타 토스카나' },
    ],
  },

  // ─── 4일차: 무스카트 (오만) ───
  {
    day: 4,
    date: '01/13(화)',
    location: '무스카트',
    description: '상세 내용을 확인해보세요',
    items: [
      { type: 'meal', text: '조식 (선내식)' },
      { type: 'location-marker', label: '무스카트' },
      {
        type: 'text',
        time: '00:00',
        text: '무스카트 도착 (신밧드의 나라)',
      },
      {
        type: 'tourist-spot',
        modalId: 'muscat',
        title: '[관광 정보] 무스카트 (Muscat)',
        shortTitle: '무스카트',
        images: [
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day4/1728728808_Old%20Muscat%20in%20Oman.webp",
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day4/bb7ee733-f188-4947-b4e8-a520fbfaad40.webp",
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day4/bdb79a6d-1a76-4c2e-8bf6-7518537fd40f.webp",
        ],
        description: '오만의 수도 무스카트는 아라비아해 연안에 위치한 아름다운 항구 도시로, 전통과 현대가 조화를 이루며 신밧드의 모험으로 유명한 역사적인 도시입니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '무스카트',
      },
      {
        type: 'text',
        time: '09:00',
        text: '선사 기항지투어 OR 자유시간 (선택옵션)',
      },
      {
        type: 'text',
        time: '12:00',
        text: '크루즈 항구 복귀 및 휴식',
      },
      { type: 'meal', text: '중식 (선내식)' },
      {
        type: 'departure-notice',
        time: '18:00',
        text: '코스타 토스카나는 도하를 향해 출항합니다',
        details: [
          '현지 기상 및 선사 사정에 의해 출항 시간이 예고 없이 변동될 수 있습니다.',
          '원활한 출발을 위해 늦어도 출항 1시간 전까지는 반드시 탑승을 마쳐주세요.',
        ],
      },
      { type: 'meal', text: '석식 (선내식)' },
      { type: 'hotel', name: '코스타 토스카나' },
    ],
  },

  // ─── 5일차: 전일 해상 ───
  {
    day: 5,
    date: '01/14(수)',
    location: '해상',
    description: '상세 내용을 확인해보세요',
    items: [
      { type: 'meal', text: '조식 (선내식)' },
      { type: 'location-marker', label: '해상', extraMarginTop: true },
      {
        type: 'cruise-at-sea',
        modalId: 'cruiseatsea',
        title: '코스타 토스카나 전일 해상',
        images: [
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day5/costa-toscana-aussen-la-spiaggia-beach-pool-20220614_181336.webp",
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day5/costa-toscana-aussen-sports-arena-18-05600.webp",
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day5/costa-toscana-aussen-versilia-beach-pool-sundeck18-05543.webp",
        ],
        description: '선내 자유시간: 수준 높은 무료 공연 관람 및 다채로운 부대시설 이용',
        bulletPoints: [
          '솔레미오 스파에서 탈라소테라피와 사우나로 여행의 피로를 부드럽게 풀어보세요.',
          '4개의 수영장과 자쿠지에서 일광욕을 즐기며 여유롭게 휴식을 취해보세요.',
          '유리 바닥 스카이워크에서 발아래 펼쳐진 바다를 감상해 보세요.',
          '폴트로나 프라우 아레나 극장에서 화려한 공연을 관람해 보세요.',
          '댄스 강좌, 요가, 빙고 등 매일 다채롭게 열리는 선내 프로그램에 참여해 보세요.',
        ],
        closingText: '잔잔한 바다 한가운데서 누리는 이 모든 휴식이 크루즈 여행의 진정한 매력입니다.',
        mobileLabel: '🚢 전일 해상',
        mobileSublabel: '코스타 토스카나',
      },
      { type: 'meal', text: '중식 (선내식)' },
      { type: 'meal', text: '석식 (선내식)' },
      { type: 'hotel', name: '코스타 토스카나' },
    ],
  },

  // ─── 6일차: 도하 (카타르) ───
  {
    day: 6,
    date: '01/15(목)',
    location: '도하',
    description: '상세 내용을 확인해보세요',
    items: [
      { type: 'meal', text: '조식 (선내식)' },
      { type: 'location-marker', label: '도하' },
      {
        type: 'text',
        time: '07:00',
        text: '도하 도착 (카타르)',
      },
      {
        type: 'tourist-spot',
        modalId: 'doha',
        title: '[관광 정보] 도하 (Doha)',
        shortTitle: '도하',
        images: [
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day6/2023-qm-www-2_-_Architecture_Tour.2e16d0ba.fill-1200x630.webp",
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day6/museum-of-islamic-art-im-pei-1st-century-architecture_2_dezeen_2364_col_8.webp",
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day6/Museum_of_Islamic_Art_in_Doha,_Qatar_(32673171432).webp",
        ],
        description: '카타르의 수도 도하는 페르시아만에 면한 현대적인 도시로, 이슬람 미술관과 수크 와키프 전통시장, 초현대적 스카이라인이 어우러진 중동의 문화 허브입니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '도하',
      },
      {
        type: 'text',
        time: '09:00',
        text: '선사 기항지투어 OR 자유시간 (선택옵션)',
      },
      {
        type: 'text',
        time: '12:00',
        text: '크루즈 항구 복귀 및 휴식',
      },
      { type: 'meal', text: '중식 (선내식)' },
      {
        type: 'departure-notice',
        time: '17:00',
        text: '코스타 토스카나는 아부다비를 향해 출항합니다',
        details: [
          '현지 기상 및 선사 사정에 의해 출항 시간이 예고 없이 변동될 수 있습니다.',
          '원활한 출발을 위해 늦어도 출항 1시간 전까지는 반드시 탑승을 마쳐주세요.',
        ],
      },
      { type: 'meal', text: '석식 (선내식)' },
      { type: 'hotel', name: '코스타 토스카나' },
    ],
  },

  // ─── 7일차: 아부다비 관광 ───
  {
    day: 7,
    date: '01/16(금)',
    location: '아부다비',
    description: '상세 내용을 확인해보세요',
    items: [
      { type: 'meal', text: '조식 (선내식)' },
      { type: 'location-marker', label: '아부다비' },
      {
        type: 'text',
        time: '07:00',
        text: '아부다비 도착',
      },
      {
        type: 'text',
        time: '08:00',
        text: '아부다비 관광 출발 (전용차량)',
      },
      {
        type: 'tourist-spot',
        modalId: 'abudhabi',
        title: '[관광 정보] 아부다비 (Abu Dhabi)',
        shortTitle: '아부다비',
        images: [
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day7/Abu-Dhabi/06LOURVE-top-superJumbo.webp",
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day7/Abu-Dhabi/bbf8aa0b-city-9457-164d6a9147e.webp",
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day7/Abu-Dhabi/Sheikh-Zayed-Grand-Mosque-1.webp",
        ],
        description: '아랍에미리트의 수도 아부다비는 풍요로운 석유 부국의 위엄과 이슬람 문화의 정수가 어우러진 도시로, 세계적인 건축물과 문화 시설이 즐비합니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '아부다비',
      },
      {
        type: 'tourist-spot',
        modalId: 'louvreabudhabi',
        title: '[관광 정보] 루브르 아부다비 (Louvre Abu Dhabi)',
        shortTitle: '루브르 아부다비',
        images: [
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day7/Louvre-Abu-Dhabi/0b49858a-e085-449c-bd25-6d8fab79e2d8.webp",
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day7/Louvre-Abu-Dhabi/1577-Absolute-Museum-Gallery-Products-Louvre-Abu-Dhabi-Unsplash-8.webp",
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day7/Louvre-Abu-Dhabi/f89f8e611b37620db818d7049ea82840ecc81c1e0701cfc482be59f6ec4a2e55.webp",
        ],
        description: '파리 루브르 박물관과 프랑스 주요 박물관에서 빌려온 다양한 예술작품과 유물이 전시되어 있는 곳으로, 장 누벨이 설계한 돔 지붕의 \'빛의 비\' 효과가 인상적입니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '루브르 아부다비',
      },
      {
        type: 'tourist-spot',
        modalId: 'presidentialpalace',
        title: '[관광 정보] 카스르 알 와탄 (Qasr Al Watan)',
        shortTitle: '아부다비 왕궁',
        images: [
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day7/Presidential-Palace/3.webp",
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day7/Presidential-Palace/808x454_cmsv2_c380aae9-06c3-5cd6-847f-7ff459b4d825-4371986.webp",
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day7/Presidential-Palace/Qasr_Al_Watan_in_March_2022_02.webp",
        ],
        description: '아부다비의 대통령궁으로 일반에 공개된 카스르 알 와탄은 아라비안 건축 예술의 정수를 보여주며, 화려한 인테리어와 정원이 인상적입니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '아부다비 왕궁',
      },
      {
        type: 'tourist-spot',
        modalId: 'grandmosque',
        title: '[관광 정보] 그랜드 모스크 (Sheikh Zayed Grand Mosque)',
        shortTitle: '그랜드 모스크',
        images: [
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day7/Grand-Mosque/a74ce9e9-bee9-42a5-ada0-31a4cd2d5bc6.webp",
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day7/Grand-Mosque/sheikh-zayed-mosque-abu-dhabi-09.webp",
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day7/Grand-Mosque/UUHTXBU5DC262SDWZDTJLW7P54.webp",
        ],
        description: '82개의 하얀 돔과 1,000개의 기둥으로 이루어진 세계 최대급 모스크로, 세계 최대 규모의 수제 카펫과 스와로브스키 크리스탈 샹들리에가 있습니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '그랜드 모스크',
      },
      { type: 'meal', text: '중식 (한식)' },
      {
        type: 'text',
        text: '크루즈 항구 복귀 및 휴식',
        details: [
          '모스크 입장 시 긴치마, 긴바지 착용. 샌들, 슬리퍼 등 착용 불가.',
        ],
      },
      {
        type: 'departure-notice',
        time: '24:00',
        text: '코스타 토스카나는 두바이를 향해 출항합니다',
        details: [
          '현지 기상 및 선사 사정에 의해 출항 시간이 예고 없이 변동될 수 있습니다.',
          '원활한 출발을 위해 늦어도 출항 1시간 전까지는 반드시 탑승을 마쳐주세요.',
        ],
      },
      { type: 'meal', text: '석식 (선내식)' },
      { type: 'hotel', name: '코스타 토스카나' },
    ],
  },

  // ─── 8일차: 두바이 하선 + 관광 + 귀국 출발 ───
  {
    day: 8,
    date: '01/17(토)',
    location: '두바이 → 인천',
    description: '상세 내용을 확인해보세요',
    items: [
      { type: 'meal', text: '조식 (선내식)' },
      { type: 'location-marker', label: '두바이' },
      {
        type: 'text',
        time: '00:00',
        text: '두바이 도착',
      },
      {
        type: 'info-card',
        modalId: 'disembarkation',
        title: '크루즈 하선 수속 안내',
        emoji: '📢',
        mobileLabel: '[하선 안내]',
        mobileSublabel: '하선 수속 안내',
        sections: [
          {
            heading: '1. 선내 결제 비용 정산 (Settlement)',
            items: [
              { text: '하선 전날 저녁 또는 당일 아침, 선실로 상세 결제 내역서가 배달됩니다.', bold: '내역 확인:' },
              { text: '승선 시 등록한 신용카드로 자동 청구되므로, 내역에 이상이 없다면 별도의 하선 수속 없이 편안하게 대기하시면 됩니다. (현금 결제 희망 시 미화 달러 USD 사용 가능)', bold: '결제 방식:' },
              { text: '정산서를 받지 못하셨거나 청구 내역에 문의가 있으신 경우, 승선 카드를 지참하여 고객 안내 데스크(Guest Relations)를 방문해 주세요.', bold: '안내 데스크:' },
            ],
          },
          {
            heading: '2. 하선 전 수하물 위탁 (Luggage Drop-off)',
            items: [
              { text: '하선 전날 선실로 전달되는 \'전용 수하물 태그\'를 가방에 부착한 뒤, 선사가 지정한 시간까지 선실 문 밖에 내어주세요. 위탁하신 짐은 하선 후 크루즈 터미널에서 찾으실 수 있습니다.', bold: '수하물 내놓기:' },
              { text: '주의 사항: 하선 당일 입을 옷, 여권, 승선 카드, 신용카드, 귀중품 및 상비약 등은 절대 위탁 수하물에 넣지 마시고 반드시 본인이 직접 소지(핸드캐리)하여 하선해 주시기 바랍니다.', isWarning: true },
            ],
          },
        ],
      },
      {
        type: 'text',
        time: '09:00',
        text: '크루즈 하선 후 두바이 관광 출발 (전용차량)',
      },
      {
        type: 'tourist-spot',
        modalId: 'dubaipalace',
        title: '[관광 정보] 두바이 왕궁 (Zabeel Palace)',
        shortTitle: '두바이 왕궁',
        images: [
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day8/Dubai-Palace/127010866jabeel_palace.webp",
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day8/Dubai-Palace/5120be4a417cc970d706011d4a19f8202ec2b6848f42fe005903f0d725dfde66.webp",
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day8/Dubai-Palace/AF1QipObKD3oCTkXILa5dKw3IlryoRmSbCZP00HQcYwVw1024-h960-p-k-no.webp",
        ],
        description: '두바이 국왕이 실제 거주하는 왕궁으로, 외부에서 웅장한 건축물과 아름다운 정원을 조망할 수 있습니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '두바이 왕궁',
      },
      {
        type: 'tourist-spot',
        modalId: 'palmmonorail',
        title: '[관광 정보] 팜 모노레일 (Palm Monorail)',
        shortTitle: '팜 모노레일',
        images: [
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day8/Palm-Monorail/Dubai-Travel-Planner-CanvaPro-427.webp",
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day8/Palm-Monorail/Monorail_Train-Dubai_UAE-Andres_Larin.webp",
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day8/Palm-Monorail/palm-monorail-dubai-eventorganiser-aug-2024.webp",
        ],
        description: '팜 주메이라 인공 섬을 횡단하는 모노레일로, 아틀란티스 호텔과 두바이 마리나의 스카이라인을 한눈에 감상할 수 있는 독특한 교통수단입니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '팜 모노레일',
      },
      {
        type: 'tourist-spot',
        modalId: 'jbrwalk',
        title: '[관광 정보] JBR 더 워크 (JBR The Walk)',
        shortTitle: 'JBR 더 워크',
        images: [
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day8/JBR-The-Walk/0cf3da22ff96413bbc491b146cc5674335ceca433a935a6229413f975868617a.webp",
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day8/JBR-The-Walk/AinDubaiTicket.webp",
          "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/arabia-cruise/section6/day8/JBR-The-Walk/The-Walk-at-Jumeirah-Beach-Residence-JBR-1.webp",
        ],
        description: '주메이라 비치 레지던스(JBR) 해변을 따라 조성된 산책로로, 레스토랑과 카페, 상점이 늘어선 두바이의 대표적인 해변 라이프스타일 거리입니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: 'JBR 더 워크',
      },
      { type: 'meal', text: '중식 (한식)' },
      {
        type: 'text',
        time: '18:00',
        text: '두바이 국제공항으로 이동',
      },
      {
        type: 'text',
        time: '21:00',
        text: '두바이 국제공항 출발 — 인천 향발',
        details: [
          '교통편 : 대한항공',
          '비행시간 : 약 8시간 30분 소요',
        ],
      },
      { type: 'meal', text: '석식 (자유식)' },
    ],
  },

  // ─── 9일차: 인천 도착 ───
  {
    day: 9,
    date: '01/18(일)',
    location: '인천',
    description: '상세 내용을 확인해보세요',
    items: [
      { type: 'meal', text: '조식 (기내식)' },
      { type: 'location-marker', label: '인천', extraMarginTop: true },
      {
        type: 'text',
        time: '10:30',
        text: '인천 국제공항 도착',
        details: ['인천 국제공항 도착 후 개별 해산'],
        warning: '입국 심사 및 수하물 수취 시간에 따라 공항 밖으로 나가는 시간이 달라질 수 있습니다.',
      },
      { type: 'closing-message', text: '한세계 여행사와 함께 즐거운 여행이 되셨길 바랍니다.' },
    ],
  },
];

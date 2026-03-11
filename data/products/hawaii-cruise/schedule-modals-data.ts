import type { ModalData } from '@/data/types';

export const scheduleModalsData: ModalData[] = [
  // ═══════════════════════════════════════════
  // 승선 / 하선 Info Modals
  // ═══════════════════════════════════════════
  {
    type: "info",
    id: "boarding",
    title: "NCL 프라이드 오브 아메리카호 승선 수속 안내",
    sections: [
      {
        heading: "1. 수하물 위탁 (Luggage Drop-off)",
        items: [
          { text: "터미널 도착 후 큰 수하물을 위탁하시면 배정된 선실 앞으로 안전하게 배달됩니다." },
          { text: "여권, 승선 서류, 귀중품 및 파손 주의 물품은 반드시 직접 소지하고 탑승해 주세요." },
        ],
      },
      {
        heading: "2. 승선 수속 (Check-in & Boarding)",
        items: [
          { text: "준비물: 여권, 크루즈 승선 서류, 해외 결제 가능한 신용카드" },
          { text: "위탁 수속 후 체크인 카운터에서 본인 확인 및 수속을 진행합니다." },
          { text: "모든 탑승 수속은 크루즈 출발 시간 2시간 전까지 반드시 완료되어야 합니다." },
          { text: "선실 내에는 신분증, 결제 수단, 객실 키 역할을 하는 '승선 카드'가 비치되어 있습니다. (분실 시 안내 데스크에서 재발급 가능)" },
        ],
      },
      {
        heading: "3. 승선 후 유의사항 (After Boarding)",
        items: [
          {
            text: "필수 안전 교육(Safety Drill): 승선 후 안내에 따라 지정된 장소에서 위급 상황 대처 교육을 이수해야 합니다.",
          },
          {
            text: "미이수 시 발생하는 실제 상황 (필독)",
            subItems: [
              { text: "끝까지 찾아내는 실시간 추적: 선사 시스템은 실시간으로 미이수자를 파악합니다. 교육을 마칠 때까지 이름이 공공연하게 방송되거나, 승무원이 선실로 직접 찾아와 참여를 독촉합니다." },
              { text: "선상 카드 및 모든 유료 서비스 정지: 교육 미완료 시 선상 카드(SeaPass 등)가 정지됩니다. 이 경우 바(Bar)에서 음료 주문, 면세점 쇼핑, 카지노 이용 및 유료 레스토랑 예약 등 배 안의 모든 결제와 서비스 이용이 거부될 수 있습니다." },
              { text: "선장 권한에 의한 '강제 하선' 조치: 국제 해상법(SOLAS)에 의거, 끝내 불응할 경우 선장은 승객을 다음 기항지에서 강제로 내리게 할 권한이 있습니다." },
              { text: "환불 및 보상 불가: 규정 위반으로 인한 하선이므로 잔여 일정 환불이 전혀 안 되며, 집으로 돌아가는 항공편 비용도 본인이 직접 부담해야 하는 가장 심각한 상황이 발생할 수 있습니다.", isWarning: true },
            ],
          },
          { text: "선사에서 운영하는 기항지 투어(영어 진행)는 조기 마감될 수 있으므로 승선 첫날 신청하시기를 권장합니다. (변경/취소 시 수수료 발생 가능)", bold: "기항지 선택 관광:" },
        ],
      },
    ],
  },
  {
    type: "info",
    id: "disembarkation",
    title: "크루즈 하선 수속 안내",
    sections: [
      {
        heading: "1. 선내 결제 비용 정산 (Settlement)",
        items: [
          { text: "하선 전날 저녁 또는 당일 아침, 선실로 상세 결제 내역서가 배달됩니다.", bold: "내역 확인:" },
          { text: "승선 시 등록한 신용카드로 자동 청구되므로, 내역에 이상이 없다면 별도의 하선 수속 없이 편안하게 대기하시면 됩니다. (현금 결제 희망 시 미화 달러 USD 사용 가능)", bold: "결제 방식:" },
          { text: "정산서를 받지 못하셨거나 청구 내역에 문의가 있으신 경우, 승선 카드를 지참하여 고객 안내 데스크(Guest Relations)를 방문해 주세요.", bold: "안내 데스크:" },
        ],
      },
      {
        heading: "2. 하선 전 수하물 위탁 (Luggage Drop-off)",
        items: [
          { text: "하선 전날 선실로 전달되는 '전용 수하물 태그'를 가방에 부착한 뒤, 선사가 지정한 시간까지 선실 문 밖에 내어주세요. 위탁하신 짐은 하선 후 크루즈 터미널에서 찾으실 수 있습니다.", bold: "수하물 내놓기:" },
          { text: "주의 사항: 하선 당일 입을 옷, 여권, 승선 카드, 신용카드, 귀중품 및 상비약 등은 절대 위탁 수하물에 넣지 마시고 반드시 본인이 직접 소지(핸드캐리)하여 하선해 주시기 바랍니다.", isWarning: true },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════
  // Day 1: 호놀룰루
  // ═══════════════════════════════════════════
  {
    type: 'tourist-spot',
    id: 'honolulu-day1',
    title: '[관광정보] 호놀룰루 (HONOLULU)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '호놀룰루는 하와이주의 주도이자 오아후섬에 위치한 하와이 최대의 도시입니다. 와이키키 비치, 다이아몬드 헤드, 알로하 타워 등 하와이를 대표하는 관광 명소가 밀집해 있습니다.',
      '다운타운에는 이올라니 궁전과 카메하메하 대왕 동상이 있어 하와이 왕국의 역사를 느낄 수 있으며, 동부 해안을 따라 블로우홀과 샌디비치 등 자연의 절경을 만날 수 있습니다.',
      '연중 온화한 기후와 다양한 문화가 어우러진 호놀룰루는 세계적인 휴양지이자 하와이 관광의 출발점입니다.',
    ],
    infoTable: [
      { label: '도시', value: '미국 하와이주 호놀룰루' },
      { label: '주소', value: '' },
      { label: '홈페이지', value: '' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '' },
      { label: '오픈시간', value: '' },
    ],
    googleMapQuery: 'Honolulu,Oahu,Hawaii',
    googleMapEmbed: 'https://maps.google.com/maps?q=Honolulu,Oahu,Hawaii&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  {
    type: 'tourist-spot',
    id: 'iolanipalace',
    title: '[관광정보] 이올라니 궁전 (IOLANI PALACE)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '이올라니 궁전은 미국에서 유일한 궁전 건물로, 하와이 왕국의 마지막 두 군주가 거주했던 역사적인 장소입니다. 1882년 칼라카우아 왕에 의해 건설되었습니다.',
      '이탈리아 르네상스 양식으로 지어진 이 궁전은 당시 전화, 전등 등 최신 기술을 갖추고 있었으며, 하와이 왕국의 영광과 비극의 역사를 고스란히 간직하고 있습니다.',
    ],
    infoTable: [
      { label: '도시', value: '미국 하와이주 호놀룰루' },
      { label: '주소', value: '364 S King St, Honolulu, HI 96813' },
      { label: '홈페이지', value: 'https://www.iolanipalace.org' },
      { label: '연락처', value: '+1 808-522-0822' },
      { label: '입장료', value: '가이드 투어 성인 $32.95 / 오디오 투어 성인 $26.95' },
      { label: '오픈시간', value: '화~토 09:00~16:00 (일·월 휴관)' },
    ],
    googleMapQuery: 'Iolani Palace,Honolulu,Hawaii',
    googleMapEmbed: 'https://maps.google.com/maps?q=Iolani+Palace,Honolulu,Hawaii&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  {
    type: 'tourist-spot',
    id: 'kamehamehastatue',
    title: '[관광정보] 카메하메하 대왕 동상 (KING KAMEHAMEHA STATUE)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '카메하메하 대왕 동상은 하와이 제도를 하나의 왕국으로 통일한 카메하메하 1세를 기리기 위해 세워졌습니다. 호놀룰루 다운타운의 알리올라니 하레(대법원) 앞에 위치해 있습니다.',
      '금빛으로 빛나는 이 동상은 하와이의 가장 유명한 랜드마크 중 하나로, 매년 6월 11일 카메하메하 데이에는 꽃 레이로 장식되어 더욱 화려한 모습을 보여줍니다.',
    ],
    infoTable: [
      { label: '도시', value: '미국 하와이주 호놀룰루' },
      { label: '주소', value: '417 S King St, Honolulu, HI 96813' },
      { label: '홈페이지', value: '' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '무료' },
      { label: '오픈시간', value: '24시간' },
    ],
    googleMapQuery: 'King Kamehameha Statue,Honolulu,Hawaii',
    googleMapEmbed: 'https://maps.google.com/maps?q=King+Kamehameha+Statue,Honolulu,Hawaii&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // ═══════════════════════════════════════════
  // Day 2: 마우이 (관광)
  // ═══════════════════════════════════════════
  {
    type: 'tourist-spot',
    id: 'maui-day2',
    title: '[관광정보] 마우이 (MAUI)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '마우이는 하와이에서 두 번째로 큰 섬으로, "계곡의 섬"이라는 별칭을 가지고 있습니다. 할레아칼라 화산과 서마우이 산맥 사이에 형성된 중앙 계곡이 그 이름의 유래입니다.',
      '로맨틱 아일랜드라 불리는 마우이는 아름다운 해변, 웅장한 화산 경관, 그리고 풍성한 열대 식생이 어우러진 곳입니다. 특히 할레아칼라 국립공원의 일출은 세계적으로 유명합니다.',
      '카훌루이, 라하이나, 카아나팔리 등 각기 다른 매력을 지닌 마을들이 있으며, 겨울철에는 혹등고래 관찰의 명소이기도 합니다.',
    ],
    infoTable: [
      { label: '도시', value: '미국 하와이주 마우이' },
      { label: '주소', value: '' },
      { label: '홈페이지', value: '' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '' },
      { label: '오픈시간', value: '' },
    ],
    googleMapQuery: 'Maui,Hawaii',
    googleMapEmbed: 'https://maps.google.com/maps?q=Maui,Hawaii&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  {
    type: 'tourist-spot',
    id: 'kaanapali',
    title: '[관광정보] 카아나팔리 (KAANAPALI)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '카아나팔리는 마우이 서쪽 해안에 위치한 하와이 최초의 계획 리조트 지역으로, 약 5km에 달하는 아름다운 백사장이 펼쳐져 있습니다.',
      '투명한 바다에서 스노클링과 수영을 즐길 수 있으며, 블랙록(Puu Kekaa)에서의 절벽 다이빙은 카아나팔리의 명물입니다. 해변을 따라 고급 리조트와 레스토랑이 즐비합니다.',
    ],
    infoTable: [
      { label: '도시', value: '미국 하와이주 마우이' },
      { label: '주소', value: 'Kaanapali Beach, Lahaina, HI 96761' },
      { label: '홈페이지', value: '' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '무료' },
      { label: '오픈시간', value: '24시간' },
    ],
    googleMapQuery: 'Kaanapali Beach,Maui,Hawaii',
    googleMapEmbed: 'https://maps.google.com/maps?q=Kaanapali+Beach,Maui,Hawaii&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  {
    type: 'tourist-spot',
    id: 'iaovalley',
    title: '[관광정보] 이아오밸리 주립공원 (IAO VALLEY STATE PARK)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '이아오밸리 주립공원은 마우이 중부에 위치한 열대 우림 계곡으로, 높이 370m의 이아오 니들(바늘산)이 상징적인 랜드마크입니다.',
      '울창한 열대 식물과 맑은 계곡물이 흐르는 이곳은 고대 하와이인들에게 신성한 장소였으며, 1790년 카메하메하 대왕의 역사적인 전투가 벌어진 곳이기도 합니다.',
    ],
    infoTable: [
      { label: '도시', value: '미국 하와이주 마우이' },
      { label: '주소', value: '54 S High St, Wailuku, HI 96793' },
      { label: '홈페이지', value: '' },
      { label: '연락처', value: '+1 808-587-0300' },
      { label: '입장료', value: '비거주자 1인 $5 + 주차 $10 (사전 예약 필수)' },
      { label: '오픈시간', value: '매일 07:00~18:00' },
    ],
    googleMapQuery: 'Iao Valley State Park,Maui,Hawaii',
    googleMapEmbed: 'https://maps.google.com/maps?q=Iao+Valley+State+Park,Maui,Hawaii&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  {
    type: 'tourist-spot',
    id: 'hookipabeach',
    title: '[관광정보] 호오키파 비치 (HOOKIPA BEACH)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '호오키파 비치는 마우이 북쪽 해안에 위치한 세계적인 윈드서핑과 카이트서핑 명소입니다. "환대의 장소"라는 뜻의 이름답게 서퍼들에게 사랑받는 해변입니다.',
      '강한 파도와 바람이 서핑에 최적의 조건을 만들어 주며, 해변 위쪽 전망대에서는 바다거북(하와이 녹색거북)이 쉬고 있는 모습을 자주 볼 수 있습니다.',
    ],
    infoTable: [
      { label: '도시', value: '미국 하와이주 마우이' },
      { label: '주소', value: 'Hookipa Beach Park, Paia, HI 96779' },
      { label: '홈페이지', value: '' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '무료' },
      { label: '오픈시간', value: '매일 07:00~19:00' },
    ],
    googleMapQuery: 'Hookipa Beach Park,Maui,Hawaii',
    googleMapEmbed: 'https://maps.google.com/maps?q=Hookipa+Beach+Park,Maui,Hawaii&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // ═══════════════════════════════════════════
  // Day 3: 마우이 (자유시간)
  // ═══════════════════════════════════════════
  {
    type: 'tourist-spot',
    id: 'maui-day3',
    title: '[관광정보] 마우이 (MAUI)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '마우이에서의 자유시간을 즐기세요. 선택관광에 참여하거나 자유롭게 섬을 탐험할 수 있습니다.',
      '할레아칼라 국립공원까지 드라이브하거나, 라하이나 다운타운에서 쇼핑과 식사를 즐기거나, 해변에서 여유로운 시간을 보내보세요. 크루즈 선내에서 다양한 프로그램에 참여하실 수도 있습니다.',
    ],
    infoTable: [
      { label: '도시', value: '미국 하와이주 마우이' },
      { label: '주소', value: '' },
      { label: '홈페이지', value: '' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '' },
      { label: '오픈시간', value: '' },
    ],
    googleMapQuery: 'Kahului,Maui,Hawaii',
    googleMapEmbed: 'https://maps.google.com/maps?q=Kahului,Maui,Hawaii&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // ═══════════════════════════════════════════
  // Day 4: 힐로
  // ═══════════════════════════════════════════
  {
    type: 'tourist-spot',
    id: 'hilo',
    title: '[관광정보] 힐로 (HILO)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '힐로는 빅아일랜드(하와이섬)의 동쪽에 위치한 하와이 제2의 도시입니다. 미국에서 가장 비가 많이 오는 도시 중 하나로, 그 덕분에 울창한 열대 식생과 무지개가 자주 나타나 "무지개의 도시"라는 별명을 가지고 있습니다.',
      '힐로는 킬라우에아 화산과 마우나케아 천문대로 가는 관문이며, 일본계 이민의 역사가 깃든 릴리우오칼라니 가든과 다운타운의 파머스 마켓이 유명합니다.',
    ],
    infoTable: [
      { label: '도시', value: '미국 하와이주 힐로' },
      { label: '주소', value: '' },
      { label: '홈페이지', value: '' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '' },
      { label: '오픈시간', value: '' },
    ],
    googleMapQuery: 'Hilo,Big Island,Hawaii',
    googleMapEmbed: 'https://maps.google.com/maps?q=Hilo,Big+Island,Hawaii&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  {
    type: 'tourist-spot',
    id: 'liliuokalanigardens',
    title: '[관광정보] 릴리우오칼라니 가든 (LILIUOKALANI GARDENS)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '릴리우오칼라니 가든은 힐로 반유코 반도에 위치한 미국 최대 규모의 일본식 정원입니다. 하와이의 마지막 여왕 릴리우오칼라니의 이름을 따서 명명되었습니다.',
      '일본식 탑, 돌다리, 토리이 게이트 등이 조화롭게 배치된 이 정원은 20세기 초 하와이로 이주한 일본계 이민자들을 기리기 위해 조성되었으며, 힐로만의 아름다운 전망을 감상할 수 있습니다.',
    ],
    infoTable: [
      { label: '도시', value: '미국 하와이주 힐로' },
      { label: '주소', value: '189 Lihiwai St, Hilo, HI 96720' },
      { label: '홈페이지', value: '' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '무료' },
      { label: '오픈시간', value: '24시간' },
    ],
    googleMapQuery: 'Liliuokalani Gardens,Hilo,Hawaii',
    googleMapEmbed: 'https://maps.google.com/maps?q=Liliuokalani+Gardens,Hilo,Hawaii&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  {
    type: 'tourist-spot',
    id: 'rainbowfalls',
    title: '[관광정보] 무지개 폭포 (RAINBOW FALLS)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '레인보우 폭포(무지개 폭포)는 힐로 시내에서 가까운 와이아누에누에 주립공원 내에 위치한 폭포입니다. 높이 약 24m의 폭포로, 맑은 날 아침 햇살이 비추면 폭포수에 아름다운 무지개가 나타나는 것으로 유명합니다.',
      '하와이 전설에 따르면 이 폭포 아래 동굴에는 하와이의 달의 여신 히나가 살고 있다고 전해집니다. 주차장에서 짧은 산책로를 따라가면 폭포 전망대에 도달할 수 있어 접근성이 좋습니다.',
    ],
    infoTable: [
      { label: '도시', value: '미국 하와이주 힐로' },
      { label: '주소', value: 'Rainbow Falls, Hilo, HI 96720' },
      { label: '홈페이지', value: 'https://dlnr.hawaii.gov/dsp/parks/hawaii/wailuku-river-state-park/' },
      { label: '연락처', value: '+1 808-587-0400' },
      { label: '입장료', value: '1인 $5 + 차량 $10 (하와이 주민 무료)' },
      { label: '오픈시간', value: '매일 일출~일몰' },
    ],
    googleMapQuery: 'Rainbow Falls,Hilo,Hawaii',
    googleMapEmbed: 'https://maps.google.com/maps?q=Rainbow+Falls,Hilo,Hawaii&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  {
    type: 'tourist-spot',
    id: 'macadamianutfarm',
    title: '[관광정보] 마카다미아넛 농장 (MACADAMIA NUT FARM)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '하와이는 세계 최대의 마카다미아넛 생산지이며, 힐로 인근에는 유명한 마카다미아넛 농장과 공장이 자리하고 있습니다. 하와이 여행의 필수 기념품으로 손꼽히는 마카다미아넛을 직접 맛보고 구입할 수 있습니다.',
      '농장에서는 마카다미아넛의 재배부터 가공까지의 과정을 견학할 수 있으며, 초콜릿 코팅, 허니 로스팅 등 다양한 맛의 마카다미아넛을 시식할 수 있습니다.',
    ],
    infoTable: [
      { label: '도시', value: '미국 하와이주 힐로' },
      { label: '주소', value: 'Hilo, HI 96720' },
      { label: '홈페이지', value: '' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '무료' },
      { label: '오픈시간', value: '매일 08:30~17:00' },
    ],
    googleMapQuery: 'Mauna Loa Macadamia Nut Factory,Hilo,Hawaii',
    googleMapEmbed: 'https://maps.google.com/maps?q=Mauna+Loa+Macadamia+Nut+Factory,Hilo,Hawaii&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  {
    type: 'tourist-spot',
    id: 'hawaiivolcanoesnp',
    title: '[관광정보] 하와이 화산 국립공원 (HAWAII VOLCANOES NATIONAL PARK)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '하와이 화산 국립공원은 빅아일랜드 남동부에 위치한 유네스코 세계유산으로, 세계에서 가장 활발한 화산 중 하나인 킬라우에아 화산이 있는 곳입니다.',
      '크레이터 림 드라이브를 따라 화산 분화구의 웅장한 풍경을 감상하고, 서스턴 용암 동굴을 탐험하며, 때로는 실시간으로 화산 활동을 목격할 수도 있습니다. 1,000년 이상의 화산 활동으로 형성된 독특한 지형은 지구의 생성 과정을 생생하게 보여줍니다.',
    ],
    infoTable: [
      { label: '도시', value: '미국 하와이주 빅아일랜드' },
      { label: '주소', value: '1 Crater Rim Dr, Hawaii Volcanoes National Park, HI 96718' },
      { label: '홈페이지', value: 'https://www.nps.gov/havo' },
      { label: '연락처', value: '+1 808-985-6000' },
      { label: '입장료', value: '차량당 $30' },
      { label: '오픈시간', value: '24시간' },
    ],
    googleMapQuery: 'Hawaii Volcanoes National Park,Hawaii',
    googleMapEmbed: 'https://maps.google.com/maps?q=Hawaii+Volcanoes+National+Park,Hawaii&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // ═══════════════════════════════════════════
  // Day 5: 카일루아 코나
  // ═══════════════════════════════════════════
  {
    type: 'tourist-spot',
    id: 'kona',
    title: '[관광정보] 코나 (KONA)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '코나는 빅아일랜드 서쪽 해안에 위치한 휴양 도시로, 태고의 아름다움을 그대로 간직하고 있습니다. 맑은 날씨와 아름다운 석양으로 유명하며, 세계적으로 유명한 코나 커피의 산지입니다.',
      '알리 드라이브를 따라 펼쳐진 해안 마을에는 레스토랑, 상점, 역사적인 사원이 있으며, 인근에는 고대 하와이 문화를 느낄 수 있는 역사 유적지가 많습니다.',
    ],
    infoTable: [
      { label: '도시', value: '미국 하와이주 카일루아 코나' },
      { label: '주소', value: '' },
      { label: '홈페이지', value: '' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '' },
      { label: '오픈시간', value: '' },
    ],
    googleMapQuery: 'Kailua-Kona,Big Island,Hawaii',
    googleMapEmbed: 'https://maps.google.com/maps?q=Kailua-Kona,Big+Island,Hawaii&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  {
    type: 'tourist-spot',
    id: 'konacoffeefarm',
    title: '[관광정보] 코나 커피 농장 (KONA COFFEE FARM)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '코나 커피는 하와이 빅아일랜드의 코나 지역에서만 재배되는 세계 최고급 커피 중 하나입니다. 후알라라이 산과 마우나로아 산의 비옥한 화산 토양, 적절한 강수량, 그리고 오후의 구름이 만들어내는 자연 그늘이 최상의 커피를 만들어냅니다.',
      'UCC, Greenwell, Joe 등 유명 커피 농장을 방문하여 커피 재배 과정을 견학하고, 갓 볶은 코나 커피를 시음할 수 있습니다. 커피 마니아라면 놓칠 수 없는 하와이 필수 코스입니다.',
    ],
    infoTable: [
      { label: '도시', value: '미국 하와이주 카일루아 코나' },
      { label: '주소', value: 'Kona Coffee Belt, Kailua-Kona, HI' },
      { label: '홈페이지', value: '' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '무료 (시음 포함)' },
      { label: '오픈시간', value: '농장별 상이' },
    ],
    googleMapQuery: 'Kona Coffee Farm,Kailua-Kona,Hawaii',
    googleMapEmbed: 'https://maps.google.com/maps?q=Kona+Coffee+Farm,Kailua-Kona,Hawaii&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  {
    type: 'tourist-spot',
    id: 'puuhonuaohonaunau',
    title: "[관광정보] 푸우호누아 오 호나우나우 (PU'UHONUA O HONAUNAU)",
    images: ['/shared/placeholder.png'],
    descriptions: [
      "푸우호누아 오 호나우나우 국립 역사공원은 '피난처의 땅'이라는 뜻으로, 고대 하와이에서 카푸(금기)를 어긴 사람이 이곳에 도달하면 사면받을 수 있었던 신성한 장소입니다.",
      '해안가에 복원된 헤이아우(신전)와 키이 악카(나무 조각상)가 고대 하와이 문화의 정수를 보여주며, 투명한 바닷물에서는 바다거북과 열대어를 관찰할 수 있습니다. 하와이의 깊은 역사와 문화를 체험할 수 있는 필수 방문지입니다.',
    ],
    infoTable: [
      { label: '도시', value: '미국 하와이주 호나우나우' },
      { label: '주소', value: "1871 Trail, Honaunau, HI 96726" },
      { label: '홈페이지', value: 'https://www.nps.gov/puho' },
      { label: '연락처', value: '+1 808-328-2326' },
      { label: '입장료', value: '차량당 $20' },
      { label: '오픈시간', value: '매일 07:00~일몰' },
    ],
    googleMapQuery: "Pu'uhonua o Honaunau National Historical Park,Hawaii",
    googleMapEmbed: "https://maps.google.com/maps?q=Pu'uhonua+o+Honaunau+National+Historical+Park,Hawaii&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
  {
    type: 'tourist-spot',
    id: 'kailuakona',
    title: '[관광정보] 카일루아 코나 (KAILUA-KONA)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '카일루아 코나는 빅아일랜드 서해안의 중심 마을로, 알리 드라이브를 따라 해안 산책을 즐기기에 완벽한 곳입니다. 맑은 바다와 아름다운 석양이 방문객을 매료시킵니다.',
      '역사적인 후리헤에 궁전, 모쿠아이카우아 교회 등 하와이 왕족의 흔적이 남아 있으며, 와이콜로아 리조트 지역까지 이어지는 해안 드라이브는 빅아일랜드의 다양한 풍경을 한눈에 보여줍니다.',
    ],
    infoTable: [
      { label: '도시', value: '미국 하와이주 카일루아 코나' },
      { label: '주소', value: 'Kailua-Kona, HI 96740' },
      { label: '홈페이지', value: '' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '' },
      { label: '오픈시간', value: '' },
    ],
    googleMapQuery: 'Kailua-Kona,Hawaii',
    googleMapEmbed: 'https://maps.google.com/maps?q=Kailua-Kona,Hawaii&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // ═══════════════════════════════════════════
  // Day 6: 카우아이 (관광)
  // ═══════════════════════════════════════════
  {
    type: 'tourist-spot',
    id: 'kauai-day6',
    title: '[관광정보] 카우아이 (KAUAI)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '카우아이는 하와이 제도에서 가장 오래된 섬으로, "정원의 섬"이라는 별칭답게 울창한 열대 식물과 때묻지 않은 자연의 아름다움을 간직하고 있습니다.',
      '나팔리 코스트의 장엄한 해안 절벽, 태평양의 그랜드 캐년이라 불리는 와이메아 캐년, 그리고 세계에서 가장 비가 많이 오는 와이알레알레 산이 있어 풍부한 자연 경관을 자랑합니다.',
      '수많은 할리우드 영화의 촬영지로도 유명하며, 영화 쥬라기 공원, 캐리비안의 해적, 아바타 등의 배경이 되었습니다.',
    ],
    infoTable: [
      { label: '도시', value: '미국 하와이주 카우아이' },
      { label: '주소', value: '' },
      { label: '홈페이지', value: '' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '' },
      { label: '오픈시간', value: '' },
    ],
    googleMapQuery: 'Kauai,Hawaii',
    googleMapEmbed: 'https://maps.google.com/maps?q=Kauai,Hawaii&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  {
    type: 'tourist-spot',
    id: 'kalalaulookout',
    title: '[관광정보] 칼랄라우 전망대 (KALALAU LOOKOUT)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '칼랄라우 전망대는 카우아이 북서쪽 코케에 주립공원 끝에 위치한 전망대로, 해발 약 1,200m 높이에서 칼랄라우 계곡과 나팔리 코스트의 장엄한 전경을 감상할 수 있습니다.',
      '깎아지른 듯한 초록색 절벽이 태평양으로 이어지는 풍경은 카우아이 최고의 절경으로 손꼽히며, 맑은 날에는 계곡 깊숙한 곳까지 한눈에 내려다볼 수 있습니다.',
    ],
    infoTable: [
      { label: '도시', value: '미국 하와이주 카우아이' },
      { label: '주소', value: "Koke'e Rd, Waimea, HI 96796" },
      { label: '홈페이지', value: '' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '1인 $5 + 차량 $10 (하와이 주민 무료)' },
      { label: '오픈시간', value: '일출~일몰 (맑은 전망은 오전 권장)' },
    ],
    googleMapQuery: 'Kalalau Lookout,Kauai,Hawaii',
    googleMapEmbed: 'https://maps.google.com/maps?q=Kalalau+Lookout,Kauai,Hawaii&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  {
    type: 'tourist-spot',
    id: 'waimeacanyon',
    title: '[관광정보] 와이메아 캐년 (WAIMEA CANYON)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '와이메아 캐년은 "태평양의 그랜드 캐년"이라 불리는 카우아이의 대표 자연 명소입니다. 길이 약 22km, 깊이 약 1,100m, 폭 약 3.2km에 달하는 이 협곡은 수백만 년의 침식 작용으로 형성되었습니다.',
      '붉은 흙과 초록 식물이 어우러진 계곡의 다층적인 색감은 시시각각 변하며, 여러 전망대에서 협곡의 장관을 감상할 수 있습니다. 마크 트웨인이 "태평양의 그랜드 캐년"이라 칭했을 만큼 압도적인 스케일을 자랑합니다.',
    ],
    infoTable: [
      { label: '도시', value: '미국 하와이주 카우아이' },
      { label: '주소', value: 'Waimea Canyon Dr, Waimea, HI 96796' },
      { label: '홈페이지', value: '' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '1인 $5 + 차량 $10 (하와이 주민 무료)' },
      { label: '오픈시간', value: '일출~일몰' },
    ],
    googleMapQuery: 'Waimea Canyon,Kauai,Hawaii',
    googleMapEmbed: 'https://maps.google.com/maps?q=Waimea+Canyon,Kauai,Hawaii&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  {
    type: 'tourist-spot',
    id: 'poipubeach',
    title: '[관광정보] 포이푸 비치 (POIPU BEACH)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '포이푸 비치는 카우아이 남쪽 해안에 위치한 하와이 최고의 해변 중 하나로, 맑고 투명한 바다와 부드러운 금빛 모래사장이 매력적인 곳입니다.',
      '수영, 스노클링, 서핑에 적합하며, 해변에서 하와이안 몽크씰(멸종위기 물범)과 바다거북을 자주 볼 수 있습니다. 미국 여행 잡지에서 "미국 최고의 해변"으로 여러 차례 선정되었습니다.',
    ],
    infoTable: [
      { label: '도시', value: '미국 하와이주 카우아이' },
      { label: '주소', value: 'Poipu Beach Park, Koloa, HI 96756' },
      { label: '홈페이지', value: '' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '무료' },
      { label: '오픈시간', value: '24시간' },
    ],
    googleMapQuery: 'Poipu Beach,Kauai,Hawaii',
    googleMapEmbed: 'https://maps.google.com/maps?q=Poipu+Beach,Kauai,Hawaii&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // ═══════════════════════════════════════════
  // Day 7: 카우아이 (자유시간)
  // ═══════════════════════════════════════════
  {
    type: 'tourist-spot',
    id: 'kauai-day7',
    title: '[관광정보] 카우아이 (KAUAI)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '카우아이에서의 자유시간을 즐기세요. 선택관광에 참여하거나 자유롭게 정원의 섬을 탐험할 수 있습니다.',
      '나팔리 코스트 보트 투어, 와일루아 강 카약, 또는 리후에 타운에서의 쇼핑 등 다양한 활동을 자유롭게 즐기실 수 있습니다. 크루즈 선내에서 편안한 휴식을 취하셔도 좋습니다.',
    ],
    infoTable: [
      { label: '도시', value: '미국 하와이주 카우아이' },
      { label: '주소', value: '' },
      { label: '홈페이지', value: '' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '' },
      { label: '오픈시간', value: '' },
    ],
    googleMapQuery: 'Nawiliwili,Kauai,Hawaii',
    googleMapEmbed: 'https://maps.google.com/maps?q=Nawiliwili,Kauai,Hawaii&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // ═══════════════════════════════════════════
  // Day 8: 호놀룰루 (오아후 관광)
  // ═══════════════════════════════════════════
  {
    type: 'tourist-spot',
    id: 'honolulu-day8',
    title: '[관광정보] 호놀룰루 (HONOLULU)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '크루즈 하선 후 오아후 섬 일주 관광을 즐깁니다. 다이아몬드 헤드, 할로나 블로우 홀, 노스쇼어 등 오아후 섬의 다양한 뷰 포인트를 둘러봅니다.',
      '동쪽 해안의 드라마틱한 절벽과 해변, 북쪽 노스쇼어의 빈티지 마을 할레이바, 그리고 세계적인 돌 파인애플 플랜테이션까지 오아후 섬의 다채로운 매력을 만끽할 수 있습니다.',
    ],
    infoTable: [
      { label: '도시', value: '미국 하와이주 호놀룰루' },
      { label: '주소', value: '' },
      { label: '홈페이지', value: '' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '' },
      { label: '오픈시간', value: '' },
    ],
    googleMapQuery: 'Honolulu,Oahu,Hawaii',
    googleMapEmbed: 'https://maps.google.com/maps?q=Honolulu,Oahu,Hawaii&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  {
    type: 'tourist-spot',
    id: 'diamondhead',
    title: '[관광정보] 다이아몬드 헤드 (DIAMOND HEAD)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '다이아몬드 헤드는 호놀룰루의 상징적인 화산 분화구로, 와이키키 해변 동쪽 끝에 우뚝 솟아 있습니다. 약 30만 년 전 화산 폭발로 형성된 이 분화구는 19세기 영국 선원들이 분화구 벽의 방해석 결정을 다이아몬드로 오인하여 이름이 붙여졌습니다.',
      '전망대까지 약 1.3km의 트레일을 오르면 와이키키 해변, 호놀룰루 시내, 그리고 태평양의 파노라마 뷰를 360도로 감상할 수 있습니다.',
    ],
    infoTable: [
      { label: '도시', value: '미국 하와이주 호놀룰루' },
      { label: '주소', value: 'Diamond Head State Monument, Honolulu, HI 96816' },
      { label: '홈페이지', value: '' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '인당 $5' },
      { label: '오픈시간', value: '매일 06:00~18:00' },
    ],
    googleMapQuery: 'Diamond Head,Honolulu,Hawaii',
    googleMapEmbed: 'https://maps.google.com/maps?q=Diamond+Head,Honolulu,Hawaii&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  {
    type: 'tourist-spot',
    id: 'halonablowhole',
    title: '[관광정보] 할로나 블로우 홀 (HALONA BLOW HOLE)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '할로나 블로우 홀은 오아후 남동쪽 해안에 위치한 자연 명소로, 파도가 바위 틈 사이로 밀려들어가 높이 솟구치는 물기둥을 만들어내는 장관을 볼 수 있습니다.',
      '전망대에서는 블로우 홀과 함께 할로나 비치 코브의 아름다운 풍경을 감상할 수 있으며, 맑은 날에는 멀리 몰로카이와 라나이 섬까지 보입니다. 영화 "지상에서 영원으로"의 유명한 해변 장면이 촬영된 곳이기도 합니다.',
    ],
    infoTable: [
      { label: '도시', value: '미국 하와이주 호놀룰루' },
      { label: '주소', value: '8483 HI-72, Honolulu, HI 96825' },
      { label: '홈페이지', value: '' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '무료' },
      { label: '오픈시간', value: '24시간' },
    ],
    googleMapQuery: 'Halona Blow Hole,Honolulu,Hawaii',
    googleMapEmbed: 'https://maps.google.com/maps?q=Halona+Blow+Hole,Honolulu,Hawaii&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  {
    type: 'tourist-spot',
    id: 'sandybeach',
    title: '[관광정보] 샌디비치 (SANDY BEACH)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '샌디비치는 오아후 남동쪽 해안에 위치한 바디 서퍼들의 낙원입니다. 강한 파도가 해변까지 밀려오는 쇼어 브레이크로 유명하며, 숙련된 서퍼들이 즐겨 찾는 곳입니다.',
      '넓은 백사장과 청명한 바다 색깔이 아름다우며, 해변 주변 잔디밭에서 바베큐와 피크닉을 즐기는 현지인들의 모습도 볼 수 있습니다.',
    ],
    infoTable: [
      { label: '도시', value: '미국 하와이주 호놀룰루' },
      { label: '주소', value: '8801 Kalanianaole Hwy, Honolulu, HI 96825' },
      { label: '홈페이지', value: '' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '무료' },
      { label: '오픈시간', value: '24시간' },
    ],
    googleMapQuery: 'Sandy Beach Park,Honolulu,Hawaii',
    googleMapEmbed: 'https://maps.google.com/maps?q=Sandy+Beach+Park,Honolulu,Hawaii&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  {
    type: 'tourist-spot',
    id: 'mokoliiisland',
    title: '[관광정보] 모자섬 (MOKOLII ISLAND)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '모콜리이 섬, 일명 "중국인 모자섬"은 오아후 동쪽 해안 카네오헤만에 떠 있는 작은 무인도입니다. 중국인의 밀짚모자를 닮았다 하여 이 이름이 붙여졌으며, 쿠알로아 지역 공원에서 바라보는 전경이 아름답습니다.',
      '배경에 펼쳐진 코올라우 산맥의 녹색 절벽과 청록색 바다 위에 떠 있는 작은 섬의 조합은 오아후 동쪽 해안의 상징적인 풍경입니다.',
    ],
    infoTable: [
      { label: '도시', value: '미국 하와이주 카네오헤' },
      { label: '주소', value: "Kualoa Regional Park, Kaneohe, HI 96744" },
      { label: '홈페이지', value: '' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '무료' },
      { label: '오픈시간', value: '24시간' },
    ],
    googleMapQuery: 'Mokolii Island,Kaneohe,Hawaii',
    googleMapEmbed: 'https://maps.google.com/maps?q=Mokolii+Island,Kaneohe,Hawaii&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  {
    type: 'tourist-spot',
    id: 'haleiwa',
    title: '[관광정보] 할레이바 올드타운 (HALEIWA)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '할레이바는 오아후 북쪽 노스쇼어에 위치한 빈티지한 분위기의 서핑 마을입니다. 복고풍 건물들이 늘어선 메인 스트리트에는 갤러리, 서핑 숍, 쉐이브 아이스 가게 등이 가득합니다.',
      '겨울에는 세계적인 서핑 대회가 열리는 노스쇼어의 관문이며, 유명한 마쯔모토 쉐이브 아이스와 새우 트럭을 맛볼 수 있는 곳입니다. 와이키키의 번화함과는 대조적인 여유롭고 낭만적인 분위기가 매력입니다.',
    ],
    infoTable: [
      { label: '도시', value: '미국 하와이주 할레이바' },
      { label: '주소', value: 'Haleiwa, HI 96712' },
      { label: '홈페이지', value: '' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '' },
      { label: '오픈시간', value: '' },
    ],
    googleMapQuery: 'Haleiwa,North Shore,Oahu,Hawaii',
    googleMapEmbed: 'https://maps.google.com/maps?q=Haleiwa,North+Shore,Oahu,Hawaii&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  {
    type: 'tourist-spot',
    id: 'doleplantation',
    title: '[관광정보] 돌 파인애플 플랜테이션 (DOLE PLANTATION)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '돌 파인애플 플랜테이션은 1950년대부터 운영되어 온 하와이의 대표적인 관광 농장입니다. 세계적인 과일 회사 돌(Dole)의 하와이 파인애플 역사를 체험할 수 있는 곳으로, 연간 100만 명 이상이 방문합니다.',
      '기네스북에 등재된 세계 최대의 식물 미로, 파인애플 익스프레스 열차 투어, 플랜테이션 가든 투어 등 다양한 체험이 가능하며, 신선한 파인애플 아이스크림(돌 윕)은 방문객 필수 코스입니다.',
    ],
    infoTable: [
      { label: '도시', value: '미국 하와이주 와히아와' },
      { label: '주소', value: '64-1550 Kamehameha Hwy, Wahiawa, HI 96786' },
      { label: '홈페이지', value: 'https://www.doleplantation.com' },
      { label: '연락처', value: '+1 808-621-8408' },
      { label: '입장료', value: '무료 (투어/미로 별도)' },
      { label: '오픈시간', value: '매일 09:30~17:30' },
    ],
    googleMapQuery: 'Dole Plantation,Wahiawa,Hawaii',
    googleMapEmbed: 'https://maps.google.com/maps?q=Dole+Plantation,Wahiawa,Hawaii&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
];

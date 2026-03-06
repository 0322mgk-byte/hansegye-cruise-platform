import type { DayScheduleData } from '@/data/types';

export const scheduleDaysData: DayScheduleData[] = [
  // ── Day 1: 인천 → 이스탄불 ──
  {
    day: 1,
    date: '06/27(토)',
    location: '인천 → 이스탄불',
    description: '상세 내용을 확인해보세요',
    items: [
      { type: 'location-marker', label: '인천' },
      {
        type: 'text',
        time: '10:30',
        text: '인천 국제공항 미팅',
        details: [
          '출발 2시간 전까지 공항 미팅 장소 집결',
        ],
      },
      {
        type: 'text',
        time: '13:40',
        text: '인천 국제공항 출발 - 이스탄불 향발',
        details: [
          '교통편 : 대한항공',
          '비행시간 : 약 12시간 10분 소요',
          '시차 : 한국보다 6시간 느립니다.',
          '항공 시간 및 편수는 변경될 수 있습니다.',
        ],
        warning: '기내 좌석 배정은 항공사의 고유 권한입니다. 인솔자와 여행사의 권한이 없으므로 고객님이 원하시는 좌석으로 배정이 불가할 수 있음을 양해 부탁드립니다.',
      },
      { type: 'meal', text: '석식 (기내식)' },
      { type: 'location-marker', label: '이스탄불', extraMarginTop: true },
      {
        type: 'text',
        time: '19:40',
        text: '이스탄불 공항 도착',
      },
      { type: 'text', text: '호텔 이동 및 휴식' },
      { type: 'hotel', name: '호텔로 이동 및 휴식', note: '4성급 호텔 예정' },
    ],
  },

  // ── Day 2: 이스탄불 (승선일) ──
  {
    day: 2,
    date: '06/28(일)',
    location: '이스탄불',
    description: '상세 내용을 확인해보세요',
    items: [
      { type: 'meal', text: '조식 (호텔식)' },
      { type: 'location-marker', label: '이스탄불' },
      {
        type: 'text',
        time: '09:00',
        text: '이스탄불 시내 투어',
      },
      {
        type: 'tourist-spot',
        modalId: 'istanbul',
        title: '[관광 정보] 이스탄불 (Istanbul)',
        shortTitle: '이스탄불',
        images: ['/shared/placeholder.png'],
        description: '보스포루스 해협을 사이에 두고 유럽과 아시아 두 대륙에 걸쳐 있는 세계 유일의 대륙 횡단 도시로, 약 1,600년간 세 제국의 수도였습니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '이스탄불',
      },
      {
        type: 'text',
        time: '11:00',
        text: '크루즈 항구로 이동 후 크루즈 승선',
      },
      {
        type: 'info-card',
        modalId: 'boarding',
        title: '코스타 포르투나호 승선 수속 안내',
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
      {
        type: 'departure-notice',
        time: '18:00',
        text: '코스타 포르투나호 이스탄불 출항',
        details: [
          '현지 기상 및 선사 사정에 의해 출항 시간이 예고 없이 변동될 수 있습니다.',
          '원활한 출발을 위해 늦어도 출항 1시간 전까지는 반드시 탑승을 마쳐주세요.',
        ],
      },
      { type: 'meal', text: '중식 (선내식)' },
      { type: 'meal', text: '석식 (선내식)' },
      { type: 'hotel', name: '코스타 포르투나호' },
    ],
  },

  // ── Day 3: 미코노스 ──
  {
    day: 3,
    date: '06/29(월)',
    location: '미코노스',
    description: '상세 내용을 확인해보세요',
    items: [
      { type: 'meal', text: '조식 (선내식)' },
      { type: 'location-marker', label: '미코노스' },
      {
        type: 'text',
        time: '15:00',
        text: '미코노스 도착 후 인솔자와 함께 관광 출발',
      },
      {
        type: 'tourist-spot',
        modalId: 'mykonos',
        title: '[관광 정보] 미코노스 (Mykonos)',
        shortTitle: '미코노스',
        images: ['/shared/placeholder.png'],
        description: '에게해 중앙에 위치한 키클라데스 제도의 섬으로, 새하얀 회벽의 건축물과 좁은 미로 같은 골목길이 매력적인 그리스 대표 관광지입니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '미코노스',
      },
      {
        type: 'tourist-spot',
        modalId: 'littlevenice',
        title: '[관광 정보] 리틀 베니스 (Little Venice)',
        shortTitle: '리틀 베니스',
        images: ['/shared/placeholder.png'],
        description: '바다 바로 위에 알록달록한 집들이 돌출되어 세워진 미코노스의 상징적 해안 지구로, 에게해의 석양을 감상하기에 최적의 장소입니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '리틀 베니스',
      },
      {
        type: 'tourist-spot',
        modalId: 'mykonoswindmills',
        title: '[관광 정보] 카토 밀리 풍차 (Kato Mili)',
        shortTitle: '미코노스 풍차',
        images: ['/shared/placeholder.png'],
        description: '미코노스 타운 남쪽 언덕 위에 나란히 서 있는 7기의 풍차로, 16세기부터 곡물을 빻는 데 사용된 섬의 가장 유명한 랜드마크입니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '미코노스 풍차',
      },
      {
        type: 'tourist-spot',
        modalId: 'paraportiani',
        title: '[관광 정보] 파라포르티아니 교회 (Paraportiani)',
        shortTitle: '파라포르티아니 교회',
        images: ['/shared/placeholder.png'],
        description: '5개의 개별 예배당이 하나로 합쳐진 독특한 복합 건축물로, 1425년에 시작되어 200년에 걸쳐 완성된 키클라데스 건축의 정수입니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '파라포르티아니 교회',
      },
      { type: 'text', text: '마토야니 거리에서 자유 쇼핑' },
      { type: 'text', text: '미코노스 타운 올드타운 산책' },
      {
        type: 'departure-notice',
        time: '23:00',
        text: '코스타 포르투나호 미코노스를 출발합니다',
        details: [
          '현지 기상 및 선사 사정에 의해 출항 시간이 예고 없이 변동될 수 있습니다.',
          '원활한 출발을 위해 늦어도 출항 1시간 전까지는 반드시 탑승을 마쳐주세요.',
        ],
      },
      { type: 'meal', text: '중식 (선내식)' },
      { type: 'meal', text: '석식 (선내식)' },
      { type: 'hotel', name: '코스타 포르투나호' },
    ],
  },

  // ── Day 4: 크레타섬 헤라클리온 ──
  {
    day: 4,
    date: '06/30(화)',
    location: '크레타 헤라클리온',
    description: '상세 내용을 확인해보세요',
    items: [
      { type: 'meal', text: '조식 (선내식)' },
      { type: 'location-marker', label: '크레타 헤라클리온' },
      {
        type: 'text',
        time: '09:00',
        text: '크레타섬 헤라클리온 도착',
      },
      {
        type: 'tourist-spot',
        modalId: 'heraklion',
        title: '[관광 정보] 크레타 헤라클리온 (Heraklion)',
        shortTitle: '헤라클리온',
        images: ['/shared/placeholder.png'],
        description: '고대 미노아 문명의 심장부이자 크레타 최대 도시로, 크노소스 궁전과 그리스 신화의 흔적을 만날 수 있는 역사의 보고입니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '크레타 헤라클리온',
      },
      {
        type: 'text',
        text: '[기항지 선택관광] 미노아 문명 중심지이자 관광도시 크레타 관광',
      },
      {
        type: 'departure-notice',
        time: '19:00',
        text: '코스타 포르투나호 크레타 헤라클리온을 출발합니다',
        details: [
          '현지 기상 및 선사 사정에 의해 출항 시간이 예고 없이 변동될 수 있습니다.',
          '원활한 출발을 위해 늦어도 출항 1시간 전까지는 반드시 탑승을 마쳐주세요.',
        ],
      },
      { type: 'meal', text: '중식 (선내식)' },
      { type: 'meal', text: '석식 (선내식)' },
      { type: 'hotel', name: '코스타 포르투나호' },
    ],
  },

  // ── Day 5: 로도스 ──
  {
    day: 5,
    date: '07/01(수)',
    location: '로도스',
    description: '상세 내용을 확인해보세요',
    items: [
      { type: 'meal', text: '조식 (선내식)' },
      { type: 'location-marker', label: '로도스' },
      {
        type: 'text',
        time: '07:00',
        text: '로도스 도착',
      },
      {
        type: 'tourist-spot',
        modalId: 'rhodes',
        title: '[관광 정보] 로도스 (Rhodes)',
        shortTitle: '로도스',
        images: ['/shared/placeholder.png'],
        description: '유네스코 세계문화유산으로 지정된 중세 도시를 품은 역사의 섬으로, 성 요한 기사단의 요새와 고대 그리스의 흔적이 공존합니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '로도스',
      },
      {
        type: 'text',
        text: '[기항지 선택관광] 유네스코 세계문화유산 중세 도시 로도스 관광',
      },
      {
        type: 'departure-notice',
        time: '18:00',
        text: '코스타 포르투나호 로도스를 출발합니다',
        details: [
          '현지 기상 및 선사 사정에 의해 출항 시간이 예고 없이 변동될 수 있습니다.',
          '원활한 출발을 위해 늦어도 출항 1시간 전까지는 반드시 탑승을 마쳐주세요.',
        ],
      },
      { type: 'meal', text: '중식 (선내식)' },
      { type: 'meal', text: '석식 (선내식)' },
      { type: 'hotel', name: '코스타 포르투나호' },
    ],
  },

  // ── Day 6: 산토리니 ──
  {
    day: 6,
    date: '07/02(목)',
    location: '산토리니',
    description: '상세 내용을 확인해보세요',
    items: [
      { type: 'meal', text: '조식 (선내식)' },
      { type: 'location-marker', label: '산토리니' },
      {
        type: 'text',
        time: '07:00',
        text: '산토리니 도착',
      },
      {
        type: 'tourist-spot',
        modalId: 'santorini',
        title: '[관광 정보] 산토리니 (Santorini)',
        shortTitle: '산토리니',
        images: ['/shared/placeholder.png'],
        description: '에게해의 보석이라 불리는 화산섬으로, 하얀 집과 파란 돔이 이어지는 절경과 세계 3대 일몰 명소로 유명합니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '산토리니',
      },
      {
        type: 'text',
        text: '인솔자와 함께 그리스에서 가장 유명한 절경의 섬 투어',
        details: [
          '하얀 집과 파란 돔이 이어지는 풍경',
          '포카리스웨트 CF 배경이 된 곳',
        ],
      },
      {
        type: 'departure-notice',
        time: '18:00',
        text: '코스타 포르투나호 산토리니를 출발합니다',
        details: [
          '현지 기상 및 선사 사정에 의해 출항 시간이 예고 없이 변동될 수 있습니다.',
          '원활한 출발을 위해 늦어도 출항 1시간 전까지는 반드시 탑승을 마쳐주세요.',
        ],
      },
      { type: 'meal', text: '중식 (선내식)' },
      { type: 'meal', text: '석식 (선내식)' },
      { type: 'hotel', name: '코스타 포르투나호' },
    ],
  },

  // ── Day 7: 아테네 ──
  {
    day: 7,
    date: '07/03(금)',
    location: '아테네',
    description: '상세 내용을 확인해보세요',
    items: [
      { type: 'meal', text: '조식 (선내식)' },
      { type: 'location-marker', label: '아테네' },
      {
        type: 'text',
        time: '07:00',
        text: '아테네 도착',
      },
      {
        type: 'text',
        time: '10:00',
        text: '한국인 가이드 미팅 후 아테네 관광 출발',
      },
      {
        type: 'tourist-spot',
        modalId: 'athens',
        title: '[관광 정보] 아테네 (Athens)',
        shortTitle: '아테네',
        images: ['/shared/placeholder.png'],
        description: '서양 문명의 발상지이자 민주주의의 요람으로, 약 3,400년의 역사를 간직한 그리스의 수도입니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '아테네',
      },
      {
        type: 'tourist-spot',
        modalId: 'panathenaic',
        title: '[관광 정보] 파나티나이코 스타디움 (Panathenaic Stadium)',
        shortTitle: '올림픽 경기장',
        images: ['/shared/placeholder.png'],
        description: '1896년 제1회 근대 올림픽이 개최된 역사적인 경기장으로, 세계에서 유일하게 전체가 대리석으로 만들어진 경기장입니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '파나티나이코 스타디움',
      },
      {
        type: 'tourist-spot',
        modalId: 'acropolis',
        title: '[관광 정보] 아크로폴리스 (Acropolis)',
        shortTitle: '아크로폴리스',
        images: ['/shared/placeholder.png'],
        description: '해발 156m의 석회암 언덕 위에 세워진 고대 그리스 최고의 성채로, 파르테논 신전을 비롯한 유네스코 세계문화유산입니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '아크로폴리스',
      },
      {
        type: 'tourist-spot',
        modalId: 'syntagma',
        title: '[관광 정보] 신타그마 광장 (Syntagma Square)',
        shortTitle: '신타그마 광장',
        images: ['/shared/placeholder.png'],
        description: '현대 아테네의 중심 광장으로, 무명용사의 비와 에브조네스 근위병 교대식이 유명한 그리스 정치의 상징적 장소입니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '신타그마 광장',
      },
      {
        type: 'departure-notice',
        time: '23:00',
        text: '코스타 포르투나호 아테네를 출발합니다',
        details: [
          '현지 기상 및 선사 사정에 의해 출항 시간이 예고 없이 변동될 수 있습니다.',
          '원활한 출발을 위해 늦어도 출항 1시간 전까지는 반드시 탑승을 마쳐주세요.',
        ],
      },
      { type: 'meal', text: '중식 (선내식)' },
      { type: 'meal', text: '석식 (선내식)' },
      { type: 'hotel', name: '코스타 포르투나호' },
    ],
  },

  // ── Day 8: 전일 해상 ──
  {
    day: 8,
    date: '07/04(토)',
    location: '해상',
    description: '상세 내용을 확인해보세요',
    items: [
      { type: 'meal', text: '조식 (선내식)' },
      { type: 'location-marker', label: '해상', extraMarginTop: true },
      {
        type: 'cruise-at-sea',
        modalId: 'cruiseatsea',
        title: '코스타 포르투나호 전일 해상',
        images: ['/shared/placeholder.png'],
        description: '선내 자유시간: 수준 높은 무료 공연 관람 및 다채로운 부대시설 이용',
        bulletPoints: [
          '프리미엄 스파에서 여행의 피로를 부드럽게 풀어보세요.',
          '탁 트인 야외 수영장에서 일광욕을 즐기며 여유롭게 책을 읽어보세요.',
          '오션뷰 조깅 트랙을 달리거나 최신식 피트니스 센터에서 상쾌하게 땀을 흘려보세요.',
          '따뜻한 자쿠지에 몸을 담그고 와인 한 잔의 여유를 만끽해 보세요.',
        ],
        closingText: '잔잔한 바다 한가운데서 누리는 이 모든 휴식이 크루즈 여행의 진정한 매력입니다.',
        mobileLabel: '🚢 전일 해상',
        mobileSublabel: '코스타 포르투나호',
      },
      { type: 'meal', text: '중식 (선내식)' },
      { type: 'meal', text: '석식 (선내식)' },
      { type: 'hotel', name: '코스타 포르투나호' },
    ],
  },

  // ── Day 9: 이스탄불 (하선일) ──
  {
    day: 9,
    date: '07/05(일)',
    location: '이스탄불',
    description: '상세 내용을 확인해보세요',
    items: [
      { type: 'meal', text: '조식 (선내식)' },
      { type: 'location-marker', label: '이스탄불' },
      {
        type: 'text',
        time: '07:00',
        text: '이스탄불 도착',
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
        text: '크루즈 하선 후 한국인가이드와 현지가이드 미팅',
      },
      {
        type: 'tourist-spot',
        modalId: 'istanbul',
        title: '[관광 정보] 이스탄불 (Istanbul)',
        shortTitle: '이스탄불',
        images: ['/shared/placeholder.png'],
        description: '보스포루스 해협을 사이에 두고 유럽과 아시아 두 대륙에 걸쳐 있는 세계 유일의 대륙 횡단 도시로, 약 1,600년간 세 제국의 수도였습니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '이스탄불',
      },
      {
        type: 'tourist-spot',
        modalId: 'hagiasophia',
        title: '[관광 정보] 하기아 소피아 (Hagia Sophia)',
        shortTitle: '하기아 소피아',
        images: ['/shared/placeholder.png'],
        description: '537년 비잔틴 황제 유스티니아누스 1세가 건립한 세계 건축사의 걸작으로, 약 1,000년간 세계 최대의 성당이었습니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '하기아 소피아',
      },
      {
        type: 'tourist-spot',
        modalId: 'bluemosque',
        title: '[관광 정보] 블루 모스크 (Blue Mosque)',
        shortTitle: '블루 모스크',
        images: ['/shared/placeholder.png'],
        description: '20,000장 이상의 이즈니크 타일로 장식된 오스만 제국의 대표적인 이슬람 사원으로, 세계 유일의 6개 미나렛을 갖추고 있습니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '블루 모스크',
      },
      {
        type: 'tourist-spot',
        modalId: 'topkapipalace',
        title: '[관광 정보] 톱카프 궁전 (Topkapi Palace)',
        shortTitle: '톱카프 궁전',
        images: ['/shared/placeholder.png'],
        description: '약 400년간 오스만 제국 술탄들의 공식 거처이자 행정 중심지로, 보스포루스 해협을 내려다보는 장엄한 궁전 복합체입니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '톱카프 궁전',
      },
      {
        type: 'tourist-spot',
        modalId: 'hippodrome',
        title: '[관광 정보] 히포드롬 광장 (Hippodrome)',
        shortTitle: '히포드롬 광장',
        images: ['/shared/placeholder.png'],
        description: '약 10만 명을 수용했던 고대 전차 경기장으로, 이집트 오벨리스크와 뱀 기둥 등 고대 유물이 보존되어 있습니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '히포드롬 광장',
      },
      { type: 'text', text: '이스탄불 공항으로 이동' },
      { type: 'meal', text: '중식 (현지식)' },
      { type: 'meal', text: '석식 (현지식)' },
      {
        type: 'text',
        time: '21:20',
        text: '이스탄불 공항 출발 - 인천 향발',
        details: [
          '교통편 : 대한항공',
          '비행시간 : 약 10시간 05분 소요',
        ],
      },
    ],
  },

  // ── Day 10: 인천 도착 ──
  {
    day: 10,
    date: '07/06(월)',
    location: '인천',
    description: '상세 내용을 확인해보세요',
    items: [
      { type: 'meal', text: '조식 (기내식)' },
      { type: 'location-marker', label: '인천', extraMarginTop: true },
      {
        type: 'text',
        time: '13:25',
        text: '인천 국제공항 도착',
        details: ['인천국제공항 도착 후 개별해산'],
        warning: '입국 수속 및 수하물 수취 후 자유 해산입니다. 여행 중 즐거운 추억이 되셨길 바랍니다.',
      },
      { type: 'closing-message', text: '한세계 여행사와 함께 즐거운 여행이 되셨길 바랍니다.' },
    ],
  },
];

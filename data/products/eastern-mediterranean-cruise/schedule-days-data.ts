import type { DayScheduleData } from '@/data/types';

export const scheduleDaysData: DayScheduleData[] = [
  // ── Day 1: 인천 → 도하 ──
  {
    day: 1,
    date: '05/29(금)',
    location: '인천 → 도하',
    description: '상세 내용을 확인해보세요',
    items: [
      { type: 'location-marker', label: '인천' },
      {
        type: 'text',
        time: '14:00',
        text: '인천 국제 공항 집결 (제1터미널 3층)',
      },
      {
        type: 'text',
        time: '17:30',
        text: '인천 국제 공항 출발 - 도하 향발',
        details: [
          '교통편 : 카타르 항공 (Qatar Airways)',
          '시차 : 한국보다 7시간 느립니다.',
          '항공 시간 및 편수는 변경될 수 있습니다.',
        ],
        warning: '기내 좌석 배정은 항공사의 고유 권한입니다. 인솔자와 여행사의 권한이 없으므로 고객님이 원하시는 좌석으로 배정이 불가할 수 있음을 양해 부탁드립니다.',
      },
      { type: 'meal', text: '중식 (기내식)' },
      { type: 'meal', text: '석식 (기내식)' },
      { type: 'location-marker', label: '도하', extraMarginTop: true },
      {
        type: 'text',
        time: '21:30',
        text: '도하 국제 공항 도착',
      },
    ],
  },

  // ── Day 2: 도하 → 아테네 ──
  {
    day: 2,
    date: '05/30(토)',
    location: '도하 → 아테네',
    description: '상세 내용을 확인해보세요',
    items: [
      { type: 'location-marker', label: '도하' },
      {
        type: 'text',
        time: '03:50',
        text: '도하 국제 공항 출발 - 아테네 향발',
      },
      { type: 'meal', text: '조식 (기내식)' },
      { type: 'location-marker', label: '아테네', extraMarginTop: true },
      {
        type: 'text',
        time: '08:30',
        text: '아테네 국제 공항 도착',
      },
      {
        type: 'text',
        time: '09:30',
        text: '가이드 미팅 후 고린도 운하로 이동',
      },
      {
        type: 'tourist-spot',
        modalId: 'athens-day2',
        title: '[관광 정보] 아테네 (Athens)',
        shortTitle: '아테네',
        images: ['/shared/placeholder.png'],
        description: '서양 문명의 요람이자 민주주의의 발상지인 그리스의 수도. 아크로폴리스를 비롯한 고대 유적이 도시 곳곳에 산재해 있으며, 3,400년이 넘는 역사를 간직하고 있습니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '아테네',
      },
      {
        type: 'tourist-spot',
        modalId: 'corinthcanal',
        title: '[관광 정보] 고린도 운하 (Corinth Canal)',
        shortTitle: '고린도 운하',
        images: ['/shared/placeholder.png'],
        description: '그리스 본토와 펠로폰네소스 반도를 잇는 길이 6.34km의 인공 수로. 폭 25m, 높이 80m의 수직 절벽이 아찔한 장관을 연출합니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '고린도 운하',
      },
      {
        type: 'tourist-spot',
        modalId: 'templeofzeus',
        title: '[관광 정보] 제우스 신전 (Temple of Olympian Zeus)',
        shortTitle: '제우스 신전',
        images: ['/shared/placeholder.png'],
        description: '올림포스 최고의 신 제우스에게 헌정된 고대 신전 유적. 638년에 걸쳐 완성되었으며, 현재 15개의 기둥이 당시의 웅장함을 전하고 있습니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '제우스 신전',
      },
      { type: 'meal', text: '중식 (현지식)' },
      {
        type: 'tourist-spot',
        modalId: 'syntagmasquare',
        title: '[관광 정보] 신타그마 광장 (Syntagma Square)',
        shortTitle: '신타그마 광장',
        images: ['/shared/placeholder.png'],
        description: '아테네의 중심, 헌법 광장. 그리스 국회의사당 앞에서 매시 정각에 에브조네스 근위병 교대식이 거행됩니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '신타그마 광장',
      },
      {
        type: 'text',
        text: '대통령 관저, 오모니아 광장 경유',
      },
      { type: 'meal', text: '석식 (현지식)' },
      { type: 'hotel', name: '호텔로 이동 및 휴식', note: '정규 1급 호텔 (2인1실)' },
    ],
  },

  // ── Day 3: 아테네 (승선일) ──
  {
    day: 3,
    date: '05/31(일)',
    location: '아테네 (승선)',
    description: '상세 내용을 확인해보세요',
    items: [
      { type: 'meal', text: '조식 (호텔식)' },
      { type: 'location-marker', label: '아테네' },
      {
        type: 'text',
        time: '07:00',
        text: '기상, 조식 후 가이드 미팅',
      },
      {
        type: 'text',
        time: '08:00',
        text: '고대 아테네 관광',
      },
      {
        type: 'tourist-spot',
        modalId: 'athens-day3',
        title: '[관광 정보] 아테네 (Athens)',
        shortTitle: '아테네',
        images: ['/shared/placeholder.png'],
        description: '서양 문명의 요람이자 민주주의의 발상지. 소크라테스, 플라톤, 아리스토텔레스가 활동하던 철학과 예술의 도시입니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '아테네',
      },
      {
        type: 'tourist-spot',
        modalId: 'acropolis',
        title: '[관광 정보] 아크로폴리스 (Acropolis)',
        shortTitle: '아크로폴리스',
        images: ['/shared/placeholder.png'],
        description: '유네스코 세계문화유산 1호. 파르테논 신전이 있는 해발 150m의 고대 성채로, 서양 건축과 예술의 최고봉입니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '아크로폴리스',
      },
      {
        type: 'tourist-spot',
        modalId: 'ancientagora',
        title: '[관광 정보] 아고라 (Ancient Agora)',
        shortTitle: '아고라',
        images: ['/shared/placeholder.png'],
        description: '고대 아테네의 정치·상업·문화 중심지. 소크라테스와 플라톤이 철학적 대화를 나누었던 역사적 장소입니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '아고라',
      },
      {
        type: 'tourist-spot',
        modalId: 'prisonofsocrates',
        title: '[관광 정보] 소크라테스 감옥 (Prison of Socrates)',
        shortTitle: '소크라테스 감옥',
        images: ['/shared/placeholder.png'],
        description: '필로파포스 언덕의 암벽 동굴 유적. 소크라테스가 독배를 마시고 최후를 맞이한 장소로 전해집니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '소크라테스 감옥',
      },
      {
        type: 'text',
        time: '11:30',
        text: '아테네 피레우스항으로 이동',
      },
      {
        type: 'text',
        time: '12:00',
        text: '크루즈 승선 수속',
      },
      {
        type: 'info-card',
        modalId: 'boarding',
        title: '스칼렛 레이디호 승선 수속 안내',
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
      { type: 'meal', text: '중식 (크루즈식)' },
      {
        type: 'text',
        time: '16:00',
        text: '크루즈 투어',
      },
      {
        type: 'departure-notice',
        time: '19:00',
        text: '스칼렛 레이디호는 산토리니를 향해 출발합니다',
        details: [
          '현지 기상 및 선사 사정에 의해 출항 시간이 예고 없이 변동될 수 있습니다.',
          '원활한 출발을 위해 늦어도 출항 1시간 전까지는 반드시 탑승을 마쳐주세요.',
        ],
      },
      { type: 'meal', text: '석식 (크루즈식)' },
      { type: 'hotel', name: '스칼렛 레이디호' },
    ],
  },

  // ── Day 4: 산토리니 ──
  {
    day: 4,
    date: '06/01(월)',
    location: '산토리니',
    description: '상세 내용을 확인해보세요',
    items: [
      { type: 'meal', text: '조식 (크루즈식)' },
      { type: 'location-marker', label: '산토리니' },
      {
        type: 'text',
        time: '09:00',
        text: '산토리니 도착',
      },
      {
        type: 'text',
        text: '케이블카 타고 피라 마을로 이동',
      },
      {
        type: 'tourist-spot',
        modalId: 'santorini',
        title: '[관광 정보] 산토리니 (Santorini)',
        shortTitle: '산토리니',
        images: ['/shared/placeholder.png'],
        description: '에게해 남부의 화산 군도. 약 3,600년 전 화산 폭발로 형성된 칼데라와 새하얀 건물, 파란 돔 지붕이 세계적으로 가장 아름다운 풍경 중 하나로 손꼽힙니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '산토리니',
      },
      {
        type: 'tourist-spot',
        modalId: 'oia',
        title: '[관광 정보] 이아 마을 (Oia)',
        shortTitle: '이아 마을',
        images: ['/shared/placeholder.png'],
        description: '산토리니 최북서쪽의 마을. 세계 3대 석양 명소로 유명하며, 칼데라 절벽 위에 새하얀 동굴 주택과 파란 돔 교회가 미로처럼 얽혀 있습니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '이아 마을',
      },
      {
        type: 'tourist-spot',
        modalId: 'fira',
        title: '[관광 정보] 피라 마을 (Fira)',
        shortTitle: '피라 마을',
        images: ['/shared/placeholder.png'],
        description: '산토리니의 수도이자 최대 중심지. 해발 400m 칼데라 절벽 위에 자리하며, 케이블카로 구항구와 연결됩니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '피라 마을',
      },
      {
        type: 'text',
        text: '크루즈 재승선',
      },
      { type: 'meal', text: '중식 (자유식)' },
      {
        type: 'departure-notice',
        time: '22:00',
        text: '산토리니 석양 감상 후 스칼렛 레이디호 출항',
        details: [
          '현지 기상 및 선사 사정에 의해 출항 시간이 예고 없이 변동될 수 있습니다.',
          '원활한 출발을 위해 늦어도 출항 1시간 전까지는 반드시 탑승을 마쳐주세요.',
        ],
      },
      { type: 'meal', text: '석식 (크루즈식)' },
      { type: 'hotel', name: '스칼렛 레이디호' },
    ],
  },

  // ── Day 5: 로도스 ──
  {
    day: 5,
    date: '06/02(화)',
    location: '로도스',
    description: '상세 내용을 확인해보세요',
    items: [
      { type: 'meal', text: '조식 (크루즈식)' },
      { type: 'location-marker', label: '로도스' },
      {
        type: 'text',
        time: '09:00',
        text: '로도스항 도착',
      },
      {
        type: 'text',
        text: '한국인 가이드 미팅 후 기항지 관광',
      },
      {
        type: 'tourist-spot',
        modalId: 'rhodes',
        title: '[관광 정보] 로도스 (Rhodes)',
        shortTitle: '로도스',
        images: ['/shared/placeholder.png'],
        description: '도데카니사 제도 최대의 섬. 세계 7대 불가사의 \'로도스의 거상\'이 있었던 곳으로, 유네스코 세계문화유산 중세 도시가 잘 보존되어 있습니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '로도스',
      },
      {
        type: 'tourist-spot',
        modalId: 'lindosacropolis',
        title: '[관광 정보] 린도스 아크로폴리스 (Lindos Acropolis)',
        shortTitle: '린도스 아크로폴리스',
        images: ['/shared/placeholder.png'],
        description: '116m 높이의 절벽 꼭대기에 자리한 고대 유적지. 기원전 300년경의 아테나 린디아 신전과 360도 파노라마 전망이 압도적입니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '린도스 아크로폴리스',
      },
      {
        type: 'tourist-spot',
        modalId: 'rhodesoldtown',
        title: '[관광 정보] 로도스 구시가지 (Rhodes Old Town)',
        shortTitle: '로도스 구시가지',
        images: ['/shared/placeholder.png'],
        description: '유럽에서 가장 잘 보존된 중세 도시 중 하나. 약 4km 성벽에 둘러싸인 그랜드 마스터 궁전과 기사단의 거리가 인상적입니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '로도스 구시가지',
      },
      {
        type: 'text',
        time: '16:00',
        text: '크루즈 재승선',
      },
      { type: 'meal', text: '중식 (크루즈식)' },
      {
        type: 'departure-notice',
        time: '18:00',
        text: '스칼렛 레이디호는 보드럼을 향해 출발합니다',
        details: [
          '현지 기상 및 선사 사정에 의해 출항 시간이 예고 없이 변동될 수 있습니다.',
          '원활한 출발을 위해 늦어도 출항 1시간 전까지는 반드시 탑승을 마쳐주세요.',
        ],
      },
      { type: 'meal', text: '석식 (크루즈식)' },
      { type: 'hotel', name: '스칼렛 레이디호' },
    ],
  },

  // ── Day 6: 보드럼 (터키) ──
  {
    day: 6,
    date: '06/03(수)',
    location: '보드럼 (터키)',
    description: '상세 내용을 확인해보세요',
    items: [
      { type: 'meal', text: '조식 (크루즈식)' },
      { type: 'location-marker', label: '보드럼' },
      {
        type: 'text',
        text: '보드럼항 도착',
      },
      {
        type: 'tourist-spot',
        modalId: 'bodrum',
        title: '[관광 정보] 보드럼 (Bodrum)',
        shortTitle: '보드럼',
        images: ['/shared/placeholder.png'],
        description: '고대 할리카르나소스. 세계 7대 불가사의 마우솔레움이 있었던 곳으로, 에게해의 투명한 바다와 하얀 벽 건물이 아름다운 항구 도시입니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '보드럼',
      },
      {
        type: 'tourist-spot',
        modalId: 'bodrumcastle',
        title: '[관광 정보] 보드럼 성 (Bodrum Castle)',
        shortTitle: '보드럼 성',
        images: ['/shared/placeholder.png'],
        description: '15세기 성 요한 기사단이 건설한 십자군 성채. 세계 최대 규모의 수중 고고학 박물관으로 운영되고 있습니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '보드럼 성',
      },
      {
        type: 'text',
        text: '크루즈 재승선',
      },
      {
        type: 'departure-notice',
        text: '스칼렛 레이디호는 미코노스를 향해 출발합니다',
        details: [
          '현지 기상 및 선사 사정에 의해 출항 시간이 예고 없이 변동될 수 있습니다.',
          '원활한 출발을 위해 늦어도 출항 1시간 전까지는 반드시 탑승을 마쳐주세요.',
        ],
      },
      { type: 'meal', text: '중식 (크루즈식)' },
      { type: 'meal', text: '석식 (크루즈식)' },
      { type: 'hotel', name: '스칼렛 레이디호' },
    ],
  },

  // ── Day 7: 전일 해상 ──
  {
    day: 7,
    date: '06/04(목)',
    location: '전일 해상',
    description: '상세 내용을 확인해보세요',
    items: [
      { type: 'meal', text: '조식 (크루즈식)' },
      { type: 'location-marker', label: '전일 해상' },
      {
        type: 'text',
        text: '▣ 전일해상 이란?\n다음 기항지를 향해 온종일 바다 위를 항해하는 시간입니다. 다채로운 선내 이벤트와 수준 높은 공연이 쉴 틈 없이 펼쳐지며, 이동하는 순간조차 완벽한 여행이 되는 진정한 크루즈의 낭만을 경험하실 수 있습니다.',
      },
      {
        type: 'cruise-at-sea',
        modalId: 'cruiseatsea',
        title: '스칼렛 레이디호 전일 해상',
        images: ['/shared/placeholder.png'],
        description: '선내 자유시간: 수준 높은 무료 공연 관람 및 다채로운 부대시설 이용',
        bulletPoints: [
          'Redemption Spa의 머드룸, 솔트룸, 사우나에서 여행의 피로를 풀어보세요.',
          '255m 야외 러닝 트랙이나 풀데크에서 에게해의 수평선을 감상하세요.',
        ],
        closingText: '잔잔한 바다 한가운데서 누리는 이 모든 휴식이 크루즈 여행의 진정한 매력입니다.',
        mobileLabel: '🚢 전일 해상',
        mobileSublabel: '스칼렛 레이디호',
      },
      { type: 'meal', text: '중식 (크루즈식)' },
      { type: 'meal', text: '석식 (크루즈식)' },
      { type: 'hotel', name: '스칼렛 레이디호' },
    ],
  },

  // ── Day 8: 미코노스 (1일차) ──
  {
    day: 8,
    date: '06/05(금)',
    location: '미코노스',
    description: '상세 내용을 확인해보세요',
    items: [
      { type: 'meal', text: '조식 (크루즈식)' },
      { type: 'location-marker', label: '미코노스' },
      {
        type: 'text',
        time: '09:00',
        text: '미코노스 도착',
      },
      {
        type: 'tourist-spot',
        modalId: 'mykonos-day8',
        title: '[관광 정보] 미코노스 (Mykonos)',
        shortTitle: '미코노스',
        images: ['/shared/placeholder.png'],
        description: '에게해 키클라데스 제도의 보석. 새하얀 회반죽 벽과 좁은 골목, 파란 에게해가 어우러진 그리스 대표 관광지입니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '미코노스',
      },
      {
        type: 'tourist-spot',
        modalId: 'windmills',
        title: '[관광 정보] 미코노스 풍차 (Windmills of Mykonos)',
        shortTitle: '미코노스 풍차',
        images: ['/shared/placeholder.png'],
        description: '16세기 베네치아 시대에 건설된 하얀 풍차군. 리틀 베니스와 에게해를 내려다보며, 일몰 시간대에 특히 장관을 이룹니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '미코노스 풍차',
      },
      {
        type: 'tourist-spot',
        modalId: 'littlevenice',
        title: '[관광 정보] 리틀 베니스 (Little Venice)',
        shortTitle: '리틀 베니스',
        images: ['/shared/placeholder.png'],
        description: '호라 서쪽 해안의 역사적 해변 마을. 바다 위에 세워진 다채로운 건물들이 베네치아를 연상시키며, 미코노스에서 가장 낭만적인 일몰 명소입니다.',
        mobileLabel: '[관광정보]',
        mobileSublabel: '리틀 베니스',
      },
      { type: 'meal', text: '중식 (크루즈식)' },
      { type: 'meal', text: '석식 (크루즈식)' },
      { type: 'hotel', name: '스칼렛 레이디호' },
    ],
  },

  // ── Day 9: 미코노스 (2일차) ──
  {
    day: 9,
    date: '06/06(토)',
    location: '미코노스',
    description: '상세 내용을 확인해보세요',
    items: [
      { type: 'meal', text: '조식 (크루즈식)' },
      { type: 'location-marker', label: '미코노스' },
      {
        type: 'text',
        text: '미코노스 시내 자유 관광 또는 선상 자유 시간',
      },
      {
        type: 'text',
        time: '13:00',
        text: '크루즈 재승선',
      },
      {
        type: 'departure-notice',
        time: '14:00',
        text: '스칼렛 레이디호는 아테네를 향해 출발합니다',
        details: [
          '현지 기상 및 선사 사정에 의해 출항 시간이 예고 없이 변동될 수 있습니다.',
          '원활한 출발을 위해 늦어도 출항 1시간 전까지는 반드시 탑승을 마쳐주세요.',
        ],
      },
      { type: 'meal', text: '중식 (크루즈식)' },
      { type: 'meal', text: '석식 (크루즈식)' },
      { type: 'hotel', name: '스칼렛 레이디호' },
    ],
  },

  // ── Day 10: 아테네 → 도하 ──
  {
    day: 10,
    date: '06/07(일)',
    location: '아테네 → 도하',
    description: '상세 내용을 확인해보세요',
    items: [
      { type: 'meal', text: '조식 (크루즈식)' },
      { type: 'location-marker', label: '아테네' },
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
        time: '07:00',
        text: '아테네 피레우스항 도착',
      },
      {
        type: 'text',
        time: '09:30',
        text: '버스 미팅, 시내 기념품 쇼핑 (올리브 제품 등)',
      },
      { type: 'meal', text: '중식 (현지식)' },
      {
        type: 'text',
        time: '12:00',
        text: '공항으로 이동',
      },
      {
        type: 'text',
        time: '13:00',
        text: '공항 도착, 출국 수속',
      },
      {
        type: 'text',
        time: '16:20',
        text: '아테네 국제 공항 출발 - 도하 향발',
      },
      { type: 'meal', text: '석식 (기내식)' },
      { type: 'location-marker', label: '도하', extraMarginTop: true },
      {
        type: 'text',
        time: '20:40',
        text: '도하 국제 공항 도착',
      },
    ],
  },

  // ── Day 11: 도하 → 인천 ──
  {
    day: 11,
    date: '06/08(월)',
    location: '도하 → 인천',
    description: '상세 내용을 확인해보세요',
    items: [
      { type: 'location-marker', label: '도하' },
      {
        type: 'text',
        time: '03:50',
        text: '도하 국제 공항 출발 - 인천 향발',
      },
      { type: 'meal', text: '조식 (기내식)' },
      { type: 'location-marker', label: '인천', extraMarginTop: true },
      {
        type: 'text',
        time: '18:05',
        text: '인천 국제 공항 도착',
        details: ['인천국제공항 도착 후 개별해산'],
      },
      { type: 'closing-message', text: '한세계 여행사와 함께 즐거운 여행이 되셨길 바랍니다.' },
    ],
  },
];

import type { ModalData } from '@/data/types';

export const scheduleModalsData: ModalData[] = [
  // ── 아테네 도시 개요 (Day 2) ──
  {
    type: 'tourist-spot',
    id: 'athens-day2',
    title: '[관광정보] 아테네 (ATHENS)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '아테네는 그리스의 수도이자 최대 도시로, 3,400년이 넘는 역사를 지닌 세계에서 가장 오래된 도시 중 하나입니다. 서양 문명의 요람이자 민주주의의 발상지로서, 소크라테스, 플라톤, 아리스토텔레스 등 위대한 철학자들이 활동하며 인류 문명의 지적 토대를 놓았습니다.',
      '아크로폴리스 위에 우뚝 서 있는 파르테논 신전을 비롯해, 고대 아고라, 올림피아 제우스 신전, 하드리아누스 문 등 고대 그리스와 로마 시대의 유적이 도시 곳곳에 산재해 있습니다. 유네스코 세계문화유산으로 등재된 아크로폴리스는 서양 세계에서 가장 중요한 고대 유적지로 평가받습니다.',
      '현대의 아테네는 고대 유적과 현대적인 도시 문화가 조화를 이루는 대도시로, 플라카 지구의 조약돌 골목길, 모나스티라키 벼룩시장, 리카비토스 언덕의 파노라마 전망 등은 여행자들에게 다채로운 경험을 선사합니다.',
    ],
    infoTable: [
      { label: '도시', value: '유럽 그리스 아테네' },
      { label: '주소', value: 'Athens, Greece' },
      { label: '홈페이지', value: 'https://www.thisisathens.org' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '' },
      { label: '오픈시간', value: '' },
    ],
    googleMapQuery: 'Athens, Greece',
    googleMapEmbed: 'https://maps.google.com/maps?q=Athens,+Greece&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // ── 고린도 운하 ──
  {
    type: 'tourist-spot',
    id: 'corinthcanal',
    title: '[관광정보] 고린도 운하 (CORINTH CANAL)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '고린도 운하(코린토스 운하)는 그리스 본토와 펠로폰네소스 반도를 잇는 좁은 지협을 가로질러 건설된 인공 수로로, 서쪽의 이오니아 해와 동쪽의 에게 해를 연결합니다. 총 길이 6.34km, 폭 25m, 수면에서 양쪽 절벽 꼭대기까지의 높이가 약 80m에 달하며, 파나마 운하, 수에즈 운하와 함께 세계 3대 운하로 불립니다.',
      '운하 건설의 역사는 고대로 거슬러 올라갑니다. 기원전 7세기 코린토스의 참주 페리안드로스가 최초로 구상했으나 좌절되었고, 이후 네로 황제가 기원후 67년 수천 명의 노예를 동원해 착공했으나 중단되었습니다. 결국 1882년 프랑스 기업이 공사를 시작해 1893년에 마침내 완공했습니다.',
      '현재 운하는 주로 관광용 여객선과 소형 선박이 이용하고 있으며, 운하 북쪽 끝 다리 위에서 바라보는 아찔한 수직 절벽 풍경이 가장 유명한 포토 스폿입니다.',
    ],
    infoTable: [
      { label: '도시', value: '이스트미아(Isthmia), 코린티아 / 그리스' },
      { label: '주소', value: 'Isthmia Korinthias, 20100, Greece' },
      { label: '홈페이지', value: 'https://corinthcanal.com' },
      { label: '연락처', value: '+30 27410 30880' },
      { label: '입장료', value: '무료 (도보 관람 기준)' },
      { label: '오픈시간', value: '24시간 개방' },
    ],
    googleMapQuery: 'Corinth Canal, Isthmia, Greece',
    googleMapEmbed: 'https://maps.google.com/maps?q=Corinth+Canal,+Isthmia,+Greece&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // ── 제우스 신전 ──
  {
    type: 'tourist-spot',
    id: 'templeofzeus',
    title: '[관광정보] 제우스 신전 (TEMPLE OF OLYMPIAN ZEUS)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '올림피아 제우스 신전(올림피에이온)은 그리스 아테네 시내에 위치한 고대 신전 유적으로, 올림포스 최고의 신 제우스에게 헌정된 곳입니다. 길이 108m, 너비 41m에 달하는 거대한 규모를 자랑하며, 완공 당시 104개의 코린트식 기둥이 신전을 둘러싸고 있었습니다.',
      '이 신전의 건설은 기원전 6세기에 시작되어 무려 638년이 흘러 로마 황제 하드리아누스가 기원후 131년에 마침내 봉헌식을 거행했습니다. 현재는 15개의 기둥만이 남아 있으며, 특히 석양 무렵 황금빛으로 물드는 기둥의 모습이 인상적입니다.',
      '아크로폴리스에서 남동쪽으로 약 500m 거리에 위치해 있어 도보로 쉽게 이동할 수 있으며, 인접한 하드리아누스 문(Hadrian\'s Arch)과 함께 둘러보는 것이 일반적입니다.',
    ],
    infoTable: [
      { label: '도시', value: '유럽 그리스 아테네' },
      { label: '주소', value: 'Vassilisis Olgas Avenue, Athens 105 57, Greece' },
      { label: '홈페이지', value: 'https://odysseus.culture.gr/h/3/eh355.jsp?obj_id=2488' },
      { label: '연락처', value: '+30 210 9226330' },
      { label: '입장료', value: '일반 €6 / 할인 €3 (통합권 €30 — 아크로폴리스 포함 8개 유적지)' },
      { label: '오픈시간', value: '하절기(4~10월) 08:00~20:00 / 동절기(11~3월) 08:00~15:00' },
    ],
    googleMapQuery: 'Temple of Olympian Zeus, Athens, Greece',
    googleMapEmbed: 'https://maps.google.com/maps?q=Temple+of+Olympian+Zeus,+Athens,+Greece&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // ── 신타그마 광장 ──
  {
    type: 'tourist-spot',
    id: 'syntagmasquare',
    title: '[관광정보] 신타그마 광장 (SYNTAGMA SQUARE)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '신타그마 광장은 아테네의 중심부에 위치한 헌법 광장으로, \'신타그마\'는 그리스어로 \'헌법\'을 의미합니다. 1834년 이곳에서 그리스 최초의 헌법이 공포된 것에서 이름이 유래했으며, 이후 그리스 근현대사의 주요 정치적 사건들이 벌어진 역사적 무대입니다.',
      '광장 동쪽에는 그리스 국회의사당(구 왕궁)이 자리하고 있으며, 건물 앞 무명 용사의 무덤에서는 매시간 정각에 에브조네스(Evzones) 대통령 근위병의 교대식이 거행됩니다. 특히 매주 일요일 오전 11시에 진행되는 대규모 교대식은 전통 의상을 입은 병사들의 독특한 행진이 장관을 이룹니다.',
      '지하철 2호선·3호선 신타그마 역이 광장 바로 아래에 위치해 교통의 요충지 역할을 하며, 광장 주변으로 에르무 거리 쇼핑가, 플라카 지구, 국립정원 등 주요 관광지가 밀집해 있습니다.',
    ],
    infoTable: [
      { label: '도시', value: '유럽 그리스 아테네' },
      { label: '주소', value: 'Pl. Sintagmatos, Athina 105 63, Greece' },
      { label: '홈페이지', value: 'https://www.thisisathens.org/attractions/syntagma-square' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '무료' },
      { label: '오픈시간', value: '24시간 개방 (근위병 교대식: 매시 정각 / 일요일 대규모 교대식 11:00)' },
    ],
    googleMapQuery: 'Syntagma Square, Athens, Greece',
    googleMapEmbed: 'https://maps.google.com/maps?q=Syntagma+Square,+Athens,+Greece&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // ── 아테네 도시 개요 (Day 3) ──
  {
    type: 'tourist-spot',
    id: 'athens-day3',
    title: '[관광정보] 아테네 (ATHENS)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '아테네는 그리스의 수도이자 최대 도시로, 3,400년이 넘는 역사를 지닌 세계에서 가장 오래된 도시 중 하나입니다. 서양 문명의 요람이자 민주주의의 발상지로서, 소크라테스, 플라톤, 아리스토텔레스 등 위대한 철학자들이 활동하며 인류 문명의 지적 토대를 놓았습니다.',
      '아크로폴리스 위에 우뚝 서 있는 파르테논 신전을 비롯해, 고대 아고라, 올림피아 제우스 신전, 하드리아누스 문 등 고대 그리스와 로마 시대의 유적이 도시 곳곳에 산재해 있습니다. 유네스코 세계문화유산으로 등재된 아크로폴리스는 서양 세계에서 가장 중요한 고대 유적지로 평가받습니다.',
      '현대의 아테네는 고대 유적과 현대적인 도시 문화가 조화를 이루는 대도시로, 플라카 지구의 조약돌 골목길, 모나스티라키 벼룩시장, 리카비토스 언덕의 파노라마 전망 등은 여행자들에게 다채로운 경험을 선사합니다.',
    ],
    infoTable: [
      { label: '도시', value: '유럽 그리스 아테네' },
      { label: '주소', value: 'Athens, Greece' },
      { label: '홈페이지', value: 'https://www.thisisathens.org' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '' },
      { label: '오픈시간', value: '' },
    ],
    googleMapQuery: 'Athens, Greece',
    googleMapEmbed: 'https://maps.google.com/maps?q=Athens,+Greece&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // ── 아크로폴리스 ──
  {
    type: 'tourist-spot',
    id: 'acropolis',
    title: '[관광정보] 아크로폴리스 (ACROPOLIS)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '아테네의 아크로폴리스는 해발 약 150m의 석회암 바위 언덕 위에 조성된 고대 성채로, 1987년 유네스코 세계문화유산에 등재되었습니다. 파르테논 신전, 에레크테이온, 프로필라이아(성문), 아테나 니케 신전 등 기원전 5세기 아테네 황금기의 걸작 건축물들이 모여 있습니다.',
      '파르테논 신전은 아테네의 수호 여신 아테나에게 헌정된 건물로, 기원전 447년에 착공되었습니다. 도리아 양식과 이오니아 양식을 융합한 건축의 정수로 \'황금 비율의 건축물\'이라는 별칭을 가지고 있으며, 46개의 외부 기둥과 정교한 조각 등은 고전 그리스 미학의 절정을 보여줍니다.',
      '현재 시간제 입장 시스템이 도입되어 온라인으로 특정 시간대를 예약한 후 방문해야 합니다. 아크로폴리스 역(지하철 2호선)에서 도보 약 10분 거리에 위치하며, 언덕 아래에는 2009년 개관한 아크로폴리스 박물관이 있습니다.',
    ],
    infoTable: [
      { label: '도시', value: '유럽 그리스 아테네' },
      { label: '주소', value: 'Athens 105 58, Greece' },
      { label: '홈페이지', value: 'https://odysseus.culture.gr/h/3/eh355.jsp?obj_id=2384' },
      { label: '연락처', value: '+30 210 9238747' },
      { label: '입장료', value: '일반 €30 (통합권 €30 — 8개 유적지 포함)' },
      { label: '오픈시간', value: '하절기(4~10월) 08:00~20:00 / 동절기(11~3월) 08:00~17:00 (시간대별 예약 필수)' },
    ],
    googleMapQuery: 'Acropolis, Athens, Greece',
    googleMapEmbed: 'https://maps.google.com/maps?q=Acropolis,+Athens,+Greece&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // ── 아고라 ──
  {
    type: 'tourist-spot',
    id: 'ancientagora',
    title: '[관광정보] 아고라 (ANCIENT AGORA)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '아테네의 고대 아고라는 아크로폴리스 북서쪽에 자리한 약 10헥타르 규모의 유적지로, 고대 아테네의 정치·상업·사법·문화 활동이 집중되었던 중심지입니다. 시민들이 모여 토론하고, 물건을 사고팔고, 재판을 받던 도시의 심장부였습니다.',
      '유적지 내에서 가장 잘 보존된 건축물은 헤파이스토스 신전으로, 고대 그리스 신전 중 가장 완전한 형태를 유지하고 있습니다. 아탈로스 스토아는 1950년대에 충실히 복원되어 현재 아고라 박물관으로 사용되고 있으며, 발굴된 각종 도자기, 동전, 일상 유물 등을 전시하고 있습니다.',
      '아크로폴리스와 매우 가까운 거리에 위치해 함께 둘러보기 좋으며, 넓은 유적지 안에 올리브 나무와 녹지가 어우러져 있어 산책하며 둘러보기에 쾌적합니다.',
    ],
    infoTable: [
      { label: '도시', value: '유럽 그리스 아테네' },
      { label: '주소', value: '24 Adrianou Street, Athens 105 55, Greece' },
      { label: '홈페이지', value: 'https://odysseus.culture.gr/h/3/eh355.jsp?obj_id=2485' },
      { label: '연락처', value: '+30 210 3210185' },
      { label: '입장료', value: '하절기 €10 / 동절기 €5 (통합권 €30 — 8개 유적지 포함)' },
      { label: '오픈시간', value: '하절기(4~10월) 08:00~20:00 / 동절기(11~3월) 08:00~17:00' },
    ],
    googleMapQuery: 'Ancient Agora, Athens, Greece',
    googleMapEmbed: 'https://maps.google.com/maps?q=Ancient+Agora,+Athens,+Greece&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // ── 소크라테스 감옥 ──
  {
    type: 'tourist-spot',
    id: 'prisonofsocrates',
    title: '[관광정보] 소크라테스 감옥 (PRISON OF SOCRATES)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '소크라테스 감옥은 아테네의 필로파포스 언덕 중턱에 위치한 암벽 동굴 유적으로, 기원전 399년 소크라테스가 투옥되어 독배를 마시고 최후를 맞이한 장소로 전해집니다. 플라톤의 대화편 \'파이돈\'에 영혼의 불멸에 관한 마지막 대화가 기록되어 있습니다.',
      '현재 이곳에는 바위를 깎아 만든 여러 개의 석실이 남아 있습니다. 역사학자들은 실제 국가 감옥은 아고라 인근에 있었을 것으로 추정하지만, 서양 철학의 아버지가 마지막을 보낸 곳이라는 전설은 이 장소에 깊은 의미를 부여합니다.',
      '필로파포스 언덕은 아크로폴리스에서 남서쪽으로 도보 약 10분 거리에 있으며, 정상에서는 아크로폴리스와 아테네 시가지, 멀리 피레우스 항구와 에게 해까지 파노라마 전망을 감상할 수 있습니다.',
    ],
    infoTable: [
      { label: '도시', value: '유럽 그리스 아테네' },
      { label: '주소', value: 'Philopappos Hill, Athens, Greece' },
      { label: '홈페이지', value: '' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '무료' },
      { label: '오픈시간', value: '24시간 개방 (야외 유적지, 연중무휴)' },
    ],
    googleMapQuery: 'Prison of Socrates, Athens, Greece',
    googleMapEmbed: 'https://maps.google.com/maps?q=Prison+of+Socrates,+Athens,+Greece&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // ── 승선 수속 안내 ──
  {
    type: 'info',
    id: 'boarding',
    title: '스칼렛 레이디호 승선 수속 안내',
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

  // ── 산토리니 도시 개요 ──
  {
    type: 'tourist-spot',
    id: 'santorini',
    title: '[관광정보] 산토리니 (SANTORINI)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '산토리니는 그리스 에게해 남부에 위치한 화산 군도로, 키클라데스 제도에서 가장 유명한 관광지 중 하나입니다. 약 3,600년 전 대규모 화산 폭발로 섬 중앙부가 함몰되면서 거대한 칼데라가 형성되었고, 이 분화는 인류 역사상 가장 큰 화산 폭발 중 하나로 기록됩니다.',
      '섬의 서쪽 절벽 위에는 새하얀 회벽 건물과 파란 돔 지붕의 교회가 칼데라를 향해 층층이 들어서 있어, 세계적으로 가장 아름다운 풍경 중 하나로 손꼽힙니다. 동쪽 해안에는 카마리, 페리사 등 검은 화산 모래 해변이 펼쳐져 있습니다.',
      '독특한 화산 토양에서 재배하는 아시르티코 품종의 와인으로도 유명하며, 고대 도시 아크로티리 유적은 "그리스의 폼페이"로 불리며 미노아 시대의 벽화와 유물이 보존되어 있습니다.',
    ],
    infoTable: [
      { label: '도시', value: '유럽 그리스 산토리니' },
      { label: '주소', value: 'Santorini, Greece' },
      { label: '홈페이지', value: 'https://www.greeka.com/cyclades/santorini/' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '' },
      { label: '오픈시간', value: '' },
    ],
    googleMapQuery: 'Santorini, Greece',
    googleMapEmbed: 'https://maps.google.com/maps?q=Santorini,+Greece&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // ── 이아 마을 ──
  {
    type: 'tourist-spot',
    id: 'oia',
    title: '[관광정보] 이아 마을 (OIA)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '이아는 산토리니 최북서쪽 끝에 자리한 마을로, 산토리니를 상징하는 대부분의 사진이 이곳에서 촬영될 정도로 섬에서 가장 아름다운 마을입니다. 칼데라 절벽 위에 새하얀 동굴 주택과 파란 돔 교회가 미로처럼 얽혀 있습니다.',
      '이아는 세계적으로 유명한 석양 명소로 알려져 있습니다. 섬의 최서단에 위치하여 에게해 수평선 너머로 지는 일몰을 정면으로 감상할 수 있으며, "세계 3대 석양"으로 손꼽힙니다. 매일 일몰 시간이 가까워지면 비잔틴 성채 유적 주변 전망대에 수천 명의 관광객이 몰려듭니다.',
      '주요 관광 포인트로는 비잔틴 성채 유적 전망대, 해양 박물관, 아무디 만으로 내려가는 계단길, 그리고 피라까지 이어지는 약 10km의 칼데라 트레킹 코스 등이 있습니다.',
    ],
    infoTable: [
      { label: '도시', value: '산토리니, 그리스' },
      { label: '주소', value: 'Oia, Santorini 847 02, Greece' },
      { label: '홈페이지', value: 'https://oiasantorini.gr/' },
      { label: '연락처', value: '+30 22860 71954' },
      { label: '입장료', value: '무료 (마을 자체는 개방된 공간)' },
      { label: '오픈시간', value: '24시간 개방' },
    ],
    googleMapQuery: 'Oia, Santorini, Greece',
    googleMapEmbed: 'https://maps.google.com/maps?q=Oia,+Santorini,+Greece&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // ── 피라 마을 ──
  {
    type: 'tourist-spot',
    id: 'fira',
    title: '[관광정보] 피라 마을 (FIRA)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '피라는 산토리니의 수도이자 최대 중심지로, 해발 약 400m의 칼데라 절벽 위에 자리하고 있습니다. 키클라데스 양식의 하얀 입방체 건물과 파란 장식이 어우러진 전형적인 그리스 섬 풍경을 보여주며, 절벽 가장자리의 카페에서는 칼데라와 화산섬의 파노라마 전망을 즐길 수 있습니다.',
      '피라의 가장 대표적인 교통수단은 케이블카(Teleferico)로, 절벽 위의 마을과 구항구를 약 3분 만에 연결합니다. 구항구에서는 화산섬 보트 투어, 온천 해수욕, 일몰 크루즈 등 다양한 해상 액티비티가 출발합니다.',
      '테라 고고학 박물관과 선사시대 테라 박물관에서 아크로티리 유적 출토품을 관람할 수 있으며, 밤에는 절벽 위의 바와 클럽이 산토리니 최고의 나이트라이프를 제공합니다.',
    ],
    infoTable: [
      { label: '도시', value: '산토리니, 그리스' },
      { label: '주소', value: 'Fira, Santorini 847 00, Greece' },
      { label: '홈페이지', value: 'https://www.santorini-view.com/fira/' },
      { label: '연락처', value: '+30 22860 22977 (산토리니 케이블카 공식)' },
      { label: '입장료', value: '마을 무료 / 케이블카 편도: 성인 €10, 어린이 €5' },
      { label: '오픈시간', value: '마을: 24시간 / 케이블카: 6~8월 07:00~23:00, 5·9~10월 07:00~22:00' },
    ],
    googleMapQuery: 'Fira, Santorini, Greece',
    googleMapEmbed: 'https://maps.google.com/maps?q=Fira,+Santorini,+Greece&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // ── 로도스 도시 개요 ──
  {
    type: 'tourist-spot',
    id: 'rhodes',
    title: '[관광정보] 로도스 (RHODES)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '로도스는 그리스 남동부 에게해에 위치한 도데카니사 제도 최대의 섬으로, 면적 약 1,401km²에 인구 약 11만 5천 명이 거주하고 있습니다. 세계 7대 불가사의 중 하나인 \'로도스의 거상\'이 있었던 곳으로, 고대 헬레니즘 시대부터 동지중해 교역의 핵심 거점으로 번성했습니다.',
      '로도스의 가장 큰 매력은 살아 있는 중세 도시를 직접 걸어볼 수 있다는 점입니다. 1309년부터 1523년까지 성 요한 기사단이 통치하며 건설한 구시가지는 약 4km에 달하는 웅장한 성벽으로 둘러싸여 있으며, 1988년 유네스코 세계문화유산에 등재되었습니다.',
      '크루즈 기항지로서도 인기가 높아, 항구에서 도보로 구시가지까지 접근할 수 있는 편리함이 큰 장점입니다.',
    ],
    infoTable: [
      { label: '도시', value: '유럽 그리스 로도스' },
      { label: '주소', value: 'Rhodes, Greece' },
      { label: '홈페이지', value: 'https://www.rhodesguide.com/' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '' },
      { label: '오픈시간', value: '' },
    ],
    googleMapQuery: 'Rhodes, Greece',
    googleMapEmbed: 'https://maps.google.com/maps?q=Rhodes,+Greece&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // ── 린도스 아크로폴리스 ──
  {
    type: 'tourist-spot',
    id: 'lindosacropolis',
    title: '[관광정보] 린도스 아크로폴리스 (LINDOS ACROPOLIS)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '린도스 아크로폴리스는 로도스 섬 남동쪽 린도스 마을 위 116m 높이의 가파른 절벽 꼭대기에 자리한 고대 유적지입니다. 기원전 10세기부터 신성한 장소로 여겨졌으며, 도리아 시대부터 성 요한 기사단 시대까지 수천 년의 역사가 켜켜이 쌓여 있습니다.',
      '유적지에는 기원전 300년경 건축된 아테나 린디아 신전, 헬레니즘 시대의 거대한 열주랑(스토아), 14세기 기사단의 요새 성벽 등이 남아 있습니다. 절벽 정상에서 내려다보는 360도 파노라마 전망은 압도적이며, 세인트 폴 만의 에메랄드빛 해변이 한눈에 들어옵니다.',
      '마을에서 아크로폴리스까지는 도보로 약 20~30분 정도 가파른 오르막길을 올라야 하며, 당나귀를 타고 올라가는 것도 린도스만의 독특한 경험입니다.',
    ],
    infoTable: [
      { label: '도시', value: '린도스, 로도스 섬, 그리스' },
      { label: '주소', value: 'Acropolis of Lindos, Lindos 851 07, Rhodes, Greece' },
      { label: '홈페이지', value: 'https://lindos-rhodes.gr/lindos-acropolis/' },
      { label: '연락처', value: '+30 2241 065200' },
      { label: '입장료', value: '성인 €12~€20 (시즌별 상이)' },
      { label: '오픈시간', value: '하절기(4~8월) 매일 08:00~20:00 / 동절기(11~3월) 08:30~15:10 (화요일 휴무)' },
    ],
    googleMapQuery: 'Lindos Acropolis, Rhodes, Greece',
    googleMapEmbed: 'https://maps.google.com/maps?q=Lindos+Acropolis,+Rhodes,+Greece&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // ── 로도스 구시가지 ──
  {
    type: 'tourist-spot',
    id: 'rhodesoldtown',
    title: '[관광정보] 로도스 구시가지 (RHODES OLD TOWN)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '로도스 구시가지는 유럽에서 현재까지 사람이 거주하고 있는 가장 오래된 중세 도시로, 1988년 유네스코 세계문화유산에 등재되었습니다. 약 4km에 달하는 거대한 성벽 안에 기사단의 궁전, 교회, 병원, 상업 거리 등 중세 도시의 완전한 모습이 고스란히 보존되어 있습니다.',
      '핵심 명소인 그랜드 마스터 궁전은 14세기에 건설된 기사단장의 거처이자 행정 중심지로, 거대한 원형 탑과 두꺼운 성벽이 인상적입니다. 궁전에서 이어지는 기사단의 거리는 유럽에서 가장 잘 보존된 중세 거리로, 15세기 기사단 각 분파의 숙소가 양쪽으로 줄지어 서 있습니다.',
      '구시가지는 크루즈 항구에서 도보로 접근할 수 있어 기항지 관광에 최적입니다. 성벽 위를 걷는 월 워크에서는 도시의 전경을 조망할 수 있고, 소크라투스 거리에는 기념품 가게와 카페가 즐비합니다.',
    ],
    infoTable: [
      { label: '도시', value: '로도스, 그리스' },
      { label: '주소', value: 'Medieval City of Rhodes, 851 31, Rhodes, Greece' },
      { label: '홈페이지', value: 'https://whc.unesco.org/en/list/493' },
      { label: '연락처', value: '+30 2241 365270' },
      { label: '입장료', value: '구시가지 진입 무료 / 그랜드 마스터 궁전: 성인 €12~€20 / 성벽 워크: €2' },
      { label: '오픈시간', value: '구시가지: 24시간 / 궁전 하절기 08:00~20:00, 동절기 08:30~15:30' },
    ],
    googleMapQuery: 'Rhodes Old Town, Rhodes, Greece',
    googleMapEmbed: 'https://maps.google.com/maps?q=Rhodes+Old+Town,+Rhodes,+Greece&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // ── 보드럼 도시 개요 ──
  {
    type: 'tourist-spot',
    id: 'bodrum',
    title: '[관광정보] 보드럼 (BODRUM)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '보드럼은 튀르키예 남서부 에게해 연안의 항구 도시로, 고대에는 할리카르나소스라 불렸습니다. 세계 7대 불가사의 중 하나인 \'할리카르나소스의 마우솔레움\'이 세워졌던 곳으로, 오늘날에도 마우솔레움 유적지가 도심에 남아 있습니다.',
      '에게해의 투명한 푸른 바다, 하얀 벽에 부겐빌레아가 만발한 골목길, 그리고 15세기 십자군 성채(보드럼 성)가 어우러진 풍경은 방문객에게 깊은 인상을 남깁니다. 보드럼 반도는 약 210km에 달하는 해안선을 따라 수많은 만과 해변이 이어져 있습니다.',
      '미슐랭 가이드가 선정한 튀르키예 3대 미식 도시 중 하나이며, 시내 남쪽 언덕의 보드럼 고대 극장(약 2,400년)에서는 보드럼 시내와 항구의 파노라마 전망을 감상할 수 있습니다.',
    ],
    infoTable: [
      { label: '도시', value: '보드럼, 튀르키예' },
      { label: '주소', value: 'Bodrum, Muğla, Turkey' },
      { label: '홈페이지', value: 'https://www.bodrum.bel.tr' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '무료 (시내 도보 관광 기준)' },
      { label: '오픈시간', value: '상시 개방' },
    ],
    googleMapQuery: 'Bodrum, Turkey',
    googleMapEmbed: 'https://maps.google.com/maps?q=Bodrum,+Turkey&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // ── 보드럼 성 ──
  {
    type: 'tourist-spot',
    id: 'bodrumcastle',
    title: '[관광정보] 보드럼 성 (BODRUM CASTLE)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '보드럼 성은 1402년부터 성 요한 기사단에 의해 건설된 15세기 십자군 성채로, \'성 베드로 성\'이라고도 불립니다. 보드럼 항구 입구의 반도 위에 전략적으로 자리 잡고 있으며, 독일·스페인·프랑스·이탈리아·영국 등 5개 탑과 여러 안뜰로 구성되어 있습니다.',
      '1962년 수중 고고학 박물관으로 전환된 이후, 세계에서 가장 크고 중요한 수중 고고학 전문 박물관 중 하나로 자리매김했습니다. 14개 전시실에 기원전 16세기부터 기원후 16세기까지의 에게해 침몰선 유물이 전시되어 있으며, 특히 기원전 14세기의 울루부룬 난파선 유물이 유명합니다.',
      '성 내부에는 비잔틴 시대의 기초가 유리 바닥 아래로 보이는 예배당, 974개 이상의 고대 저장 용기를 모아놓은 암포라 저장소 등 다양한 볼거리가 있으며, 성 꼭대기에서는 보드럼 시내와 에게해의 탁 트인 파노라마를 감상할 수 있습니다.',
    ],
    infoTable: [
      { label: '도시', value: '보드럼, 튀르키예' },
      { label: '주소', value: 'Çarşı Mahallesi, Kale Caddesi, Bodrum/Muğla, Turkey' },
      { label: '홈페이지', value: 'https://www.bodrum-museum.com' },
      { label: '연락처', value: '+90 252 316 2516' },
      { label: '입장료', value: '약 €20 (외국인 기준, 세르체 항구 유리 전시관 별도 €6)' },
      { label: '오픈시간', value: '하절기(6~10월) 08:30~22:00 / 동절기(10~6월) 08:30~17:30 / 연중무휴' },
    ],
    googleMapQuery: 'Bodrum Castle, Bodrum, Turkey',
    googleMapEmbed: 'https://maps.google.com/maps?q=Bodrum+Castle,+Bodrum,+Turkey&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // ── 전일 해상 ──
  {
    type: 'cruise-at-sea',
    id: 'cruiseatsea',
    title: '스칼렛 레이디호 전일 해상',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '오늘은 종일 해상에서 보내는 날입니다. 스칼렛 레이디호의 다양한 시설을 마음껏 즐겨보세요.',
      'The Red Room에서 펼쳐지는 오리지널 공연을 관람하거나, The Manor에서 화려한 밤바다의 낭만을 즐겨보세요. 255m 야외 러닝 트랙과 Aquatic Club 풀데크에서 활기 넘치는 아침을 시작하고, Redemption Spa의 머드룸과 솔트룸에서 깊은 휴식을 경험하세요.',
      '20개 이상의 레스토랑에서 세계 각국의 요리를 즐기시고, 야외 데크에서 광활한 에게해의 풍경을 감상하며 특별한 하루를 보내시기 바랍니다.',
    ],
    bulletPoints: [
      'Redemption Spa의 머드룸, 솔트룸, 사우나에서 여행의 피로를 풀어보세요.',
      '255m 야외 러닝 트랙이나 풀데크에서 에게해의 수평선을 감상하세요.',
    ],
    closingText: '잔잔한 바다 한가운데서 누리는 이 모든 휴식이 크루즈 여행의 진정한 매력입니다.',
    infoTable: [
      { label: '선박', value: '스칼렛 레이디호 (Scarlet Lady)' },
      { label: '주요 시설', value: 'The Red Room, The Manor, Aquatic Club, Redemption Spa, Athletic Club' },
      { label: '식사', value: '20개 이상 레스토랑 (올인클루시브)' },
      { label: '드레스코드', value: '캐주얼 (스마트 캐주얼 권장)' },
    ],
  },

  // ── 미코노스 도시 개요 (Day 8) ──
  {
    type: 'tourist-spot',
    id: 'mykonos-day8',
    title: '[관광정보] 미코노스 (MYKONOS)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '미코노스는 그리스 에게해 키클라데스 제도에 위치한 섬으로, 산토리니와 함께 그리스를 대표하는 관광지입니다. 새하얀 회반죽 벽과 아기자기한 사각형 건축물, 그리고 짙푸른 에게해가 어우러진 독특한 경관으로 전 세계 여행자들의 사랑을 받고 있습니다.',
      '중심지인 호라는 좁고 미로 같은 골목 사이로 부티크 숍, 갤러리, 레스토랑이 빼곡히 들어서 있습니다. 호라의 서쪽 해안에는 리틀 베니스가 있고, 언덕 위에는 미코노스의 상징인 하얀 풍차들이 에게해를 내려다보며 서 있습니다. 섬 곳곳에 약 360개의 교회가 흩어져 있으며, 그중 파나야 파라포르티아니 교회가 가장 유명합니다.',
      '미코노스에서 페리로 약 30분 거리에 있는 델로스 섬은 그리스 신화에서 아폴론과 아르테미스가 태어난 곳으로, 유네스코 세계문화유산입니다.',
    ],
    infoTable: [
      { label: '도시', value: '유럽 그리스 미코노스' },
      { label: '주소', value: 'Mykonos, Greece' },
      { label: '홈페이지', value: '' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '' },
      { label: '오픈시간', value: '' },
    ],
    googleMapQuery: 'Mykonos, Greece',
    googleMapEmbed: 'https://maps.google.com/maps?q=Mykonos,+Greece&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // ── 미코노스 풍차 ──
  {
    type: 'tourist-spot',
    id: 'windmills',
    title: '[관광정보] 미코노스 풍차 (WINDMILLS OF MYKONOS)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '미코노스 풍차(Kato Mili)는 호라 남쪽의 언덕 위에 일렬로 늘어선 하얀 원통형 풍차군으로, 미코노스를 상징하는 가장 대표적인 랜드마크입니다. 대부분 16세기 베네치아 통치 시기에 건설되었으며, 에게해의 강한 바람을 이용해 약 400년간 밀가루를 생산했습니다.',
      '원래 섬 전체에 28개의 풍차가 있었으나 현재 16개가 남아 있고, 그중 7개가 호라의 이 유명한 언덕에 모여 있습니다. 풍차 아래로는 리틀 베니스의 다채로운 건물들과 푸른 에게해가 한눈에 펼쳐져, 일몰 시간대에 특히 장관을 이룹니다.',
      '내부를 방문할 수 있는 풍차 중 보니스 밀은 16세기에 건축된 석조 풍차로, 미코노스 농업 박물관의 일부로 운영되어 전통 밀가루 제조 과정을 배울 수 있습니다.',
    ],
    infoTable: [
      { label: '도시', value: '미코노스, 그리스' },
      { label: '주소', value: 'Kato Mili, Chora, Mykonos 846 00, Greece' },
      { label: '홈페이지', value: 'https://www.mykonosfolkloremuseum.gr/en/agricultural-museum-mylos-tou-boni/' },
      { label: '연락처', value: '+30 6944 201 290' },
      { label: '입장료', value: '무료 (외부 관람 및 박물관 모두 무료)' },
      { label: '오픈시간', value: '풍차 외부: 24시간 / 보니스 밀 박물관: 7~9월 매일 16:00~20:00' },
    ],
    googleMapQuery: 'Windmills of Mykonos, Mykonos, Greece',
    googleMapEmbed: 'https://maps.google.com/maps?q=Windmills+of+Mykonos,+Mykonos,+Greece&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // ── 리틀 베니스 ──
  {
    type: 'tourist-spot',
    id: 'littlevenice',
    title: '[관광정보] 리틀 베니스 (LITTLE VENICE)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '리틀 베니스는 미코노스 호라의 서쪽 해안에 위치한 역사적인 해변 마을로, 미코노스에서 가장 낭만적이고 사진이 많이 찍히는 장소입니다. 13세기부터 18세기 중반에 걸쳐 건설된 이 지구의 건물들은 키클라데스 전통의 하얀 벽 대신 다채로운 색상으로 칠해져 있습니다.',
      '건물들은 바다 바로 위에 세워져 파도가 기초를 적시고, 발코니가 바다를 향해 돌출되어 있어 마치 물 위에 떠 있는 듯한 인상을 줍니다. 원래 상인들이 바다에서 직접 물품을 하역할 수 있도록 지은 것으로, 오늘날에는 개성 있는 바, 카페, 레스토랑으로 운영되고 있습니다.',
      '특히 일몰 시간에 방문하면 절정의 아름다움을 경험할 수 있습니다. 해가 에게해 수평선 아래로 내려앉을 때, 다채로운 건물들이 따뜻한 빛에 물들고 파도 위로 반사되는 황금빛이 거의 마법 같은 분위기를 연출합니다.',
    ],
    infoTable: [
      { label: '도시', value: '미코노스, 그리스' },
      { label: '주소', value: 'Mikri Venetia (Alefkandra), Chora, Mykonos 846 00, Greece' },
      { label: '홈페이지', value: '' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '무료 (야외 공개 지역)' },
      { label: '오픈시간', value: '24시간 자유 방문' },
    ],
    googleMapQuery: 'Little Venice, Mykonos, Greece',
    googleMapEmbed: 'https://maps.google.com/maps?q=Little+Venice,+Mykonos,+Greece&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // ── 하선 수속 안내 ──
  {
    type: 'info',
    id: 'disembarkation',
    title: '크루즈 하선 수속 안내',
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
];

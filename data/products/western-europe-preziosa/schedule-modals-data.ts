import type { ModalData } from '@/data/types';

export const scheduleModalsData: ModalData[] = [
  // ===== 파리 (Day 2) =====
  {
    type: 'tourist-spot',
    id: 'paris',
    title: '[관광정보] 파리 (PARIS)',
    images: [
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day2/Paris/image.webp',
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day2/Paris/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques,_Paris_ao%C3%BBt_2014_(2).webp',
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day2/Paris/stock-photo-notre-dame-de-paris-cathedral-and-seine-river-554484274.webp',
    ],
    descriptions: [
      '파리는 프랑스의 수도이자 세계에서 가장 많은 관광객이 찾는 도시 중 하나입니다. 센강을 중심으로 양쪽에 펼쳐진 이 도시는 에펠탑, 개선문, 루브르 박물관 등 누구나 한 번쯤 들어본 명소가 곳곳에 자리하고 있습니다. 오래된 건물과 넓은 가로수길이 어우러진 거리를 걷다 보면, 왜 파리를 \'세계에서 가장 아름다운 도시\'라고 부르는지 자연스럽게 느끼게 됩니다.',
      '파리는 단순한 관광지가 아니라 예술, 패션, 미식의 중심지이기도 합니다. 오르세 미술관에서 인상파 그림을 감상하고, 몽마르트르 언덕에서 파리 시내를 내려다보고, 세느강변 카페에서 크루아상과 커피를 즐기는 것 — 이런 경험 하나하나가 파리 여행의 매력입니다.',
      '쇼핑을 좋아한다면 샹젤리제 거리와 갤러리 라파예트 백화점, 역사에 관심이 있다면 노트르담 대성당과 베르사유 궁전까지 당일치기로 다녀올 수 있습니다. 지하철(메트로)이 시내 전역을 촘촘히 연결하고 있어 이동도 편리합니다.',
    ],
    infoTable: [
      { label: '도시', value: '유럽 프랑스 파리' },
      { label: '주소', value: '' },
      { label: '홈페이지', value: '' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '' },
      { label: '오픈시간', value: '' },
    ],
    googleMapQuery: 'Paris,France',
    googleMapEmbed: 'https://maps.google.com/maps?q=Paris,France&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  {
    type: 'tourist-spot',
    id: 'eiffeltower',
    title: '[관광정보] 에펠탑 (EIFFEL TOWER)',
    images: [
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day2/Eiffel-Tower/eiffel-tower-paris-france-champ-de-mars-view.webp',
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day2/Eiffel-Tower/GettyImages-468366251.webp',
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day2/Eiffel-Tower/paris-champs-de-mars-eiffel-tower-hd.webp',
    ],
    descriptions: [
      '에펠탑은 파리를 대표하는 상징이자, 전 세계에서 가장 유명한 건축물 중 하나입니다. 1889년 프랑스 혁명 100주년을 기념해 열린 파리 만국박람회를 위해 건설되었으며, 높이 약 330미터, 철골 구조물 특유의 우아한 곡선이 멀리서도 한눈에 들어옵니다.',
      '에펠탑은 총 3개 층으로 나뉘어 있습니다. 2층까지는 엘리베이터 또는 계단(674계단)으로 올라갈 수 있고, 꼭대기(정상)는 엘리베이터로만 갈 수 있습니다. 정상까지 올라가면 맑은 날 반경 70킬로미터까지 보이는 탁 트인 전망을 즐길 수 있습니다.',
      '해질 무렵 방문하면 석양에 물든 파리 시내와 매 정시마다 반짝이는 에펠탑 조명쇼를 함께 감상할 수 있어 특히 인기가 많습니다. 티켓은 최대 60일 전부터 공식 홈페이지에서 예약할 수 있습니다.',
    ],
    infoTable: [
      { label: '도시', value: '파리, 프랑스' },
      { label: '주소', value: 'Champ de Mars, 5 Avenue Anatole France, 75007 Paris' },
      { label: '홈페이지', value: 'https://www.toureiffel.paris' },
      { label: '연락처', value: '+33 1 44 11 23 33' },
      { label: '입장료', value: '계단(2층) 성인 €14.80 / 엘리베이터(정상) 성인 €36.70' },
      { label: '오픈시간', value: '매일 09:30~23:00 (시즌별 변동)' },
    ],
    googleMapQuery: 'Eiffel Tower,Paris,France',
    googleMapEmbed: 'https://maps.google.com/maps?q=Eiffel+Tower,Paris,France&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  {
    type: 'tourist-spot',
    id: 'arcdetriomphe',
    title: '[관광정보] 개선문 (ARC DE TRIOMPHE)',
    images: [
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day2/Arc-de-Triomphe/arc-de-triomphe-du-caroussel-2017-07-05-mc-2024-1000-2x1.webp',
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day2/Arc-de-Triomphe/arc-de-triumph-paris-france.webp',
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day2/Arc-de-Triomphe/paul_henri-outlook-3865428_1920.webp',
    ],
    descriptions: [
      '개선문은 나폴레옹이 1806년 전쟁 승리를 기념하기 위해 건설을 명령한 기념물로, 완공까지 30년이 걸렸습니다. 높이 약 50미터, 너비 약 45미터의 거대한 아치 형태이며, 벽면에는 프랑스 혁명과 나폴레옹 전쟁의 주요 장면이 정교하게 조각되어 있습니다.',
      '개선문 내부 계단(284계단) 또는 엘리베이터를 이용해 옥상 전망대에 오르면 파리 시내를 360도로 조망할 수 있습니다. 특히 개선문을 중심으로 12개 대로가 별 모양으로 뻗어나가는 장관이 인상적이며, 샹젤리제 거리 끝에서 에펠탑까지 이어지는 파리의 스카이라인을 감상할 수 있습니다.',
      '개선문 바로 아래에는 제1차 세계대전에서 전사한 무명 용사의 묘가 있으며, 매일 저녁 추모의 불꽃이 켜집니다. 개선문이 위치한 샤를 드 골 광장은 차량 통행이 매우 많으므로, 반드시 지하 통로를 이용해 개선문으로 건너가야 합니다.',
    ],
    infoTable: [
      { label: '도시', value: '파리, 프랑스' },
      { label: '주소', value: 'Place Charles de Gaulle, 75008 Paris' },
      { label: '홈페이지', value: 'https://www.paris-arc-de-triomphe.fr' },
      { label: '연락처', value: 'reservations.arcdetriomphe@monuments-nationaux.fr' },
      { label: '입장료', value: '성인 €16~22 (시즌별 상이) / 18세 미만 무료' },
      { label: '오픈시간', value: '수~월 10:00~23:00, 화 11:00~23:00 (시즌별 변동)' },
    ],
    googleMapQuery: 'Arc de Triomphe,Paris,France',
    googleMapEmbed: 'https://maps.google.com/maps?q=Arc+de+Triomphe,Paris,France&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  {
    type: 'tourist-spot',
    id: 'champselysees',
    title: '[관광정보] 샹젤리제 거리 (AVENUE DES CHAMPS-ÉLYSÉES)',
    images: [
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day2/Avenue-des-Champs-Elysees/2.webp',
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day2/Avenue-des-Champs-Elysees/s5Cufamt0f2UGZihsRukami_OLKFCM3aU3tSpyqxSFo_lOwJePFoe9VqfUmsD9XucHPsi_ZosfdKAg36l8okOw.webp',
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day2/Avenue-des-Champs-Elysees/sondage.-pour-30-des-parisiens-les-champs-elysees-ne-sont-pas-la-plus-belle-avenue-du-monde.webp',
    ],
    descriptions: [
      '샹젤리제 거리는 \'세계에서 가장 아름다운 대로\'라는 별명을 가진 파리의 대표적인 거리입니다. 콩코르드 광장에서 개선문까지 약 1.9킬로미터에 걸쳐 뻗어 있으며, 양쪽으로 가로수가 늘어선 너비 70미터의 넓은 대로를 따라 고급 브랜드 매장, 카페, 극장이 빼곡하게 들어서 있습니다.',
      '루이비통 플래그십 매장, 카르티에, 티파니 등 세계적인 명품 브랜드부터 자라, 나이키, 세포라 같은 대중적인 브랜드까지 다양한 쇼핑을 즐길 수 있습니다. 프랑스 대표 디저트 브랜드 라뒤레에서 마카롱을 맛보거나, 거리 곳곳의 노천 카페에서 여유를 즐기는 것도 샹젤리제만의 특별한 경험입니다.',
      '매년 7월 14일 프랑스 혁명 기념일에는 화려한 군사 퍼레이드가 열리고, 투르 드 프랑스의 마지막 구간 결승선도 이곳에 있습니다. 크리스마스 시즌에는 거리 전체가 조명으로 장식되어 환상적인 분위기를 자아냅니다.',
    ],
    infoTable: [
      { label: '도시', value: '파리, 프랑스' },
      { label: '주소', value: 'Avenue des Champs-Élysées, 75008 Paris' },
      { label: '홈페이지', value: 'https://comite-champs-elysees.com' },
      { label: '연락처', value: '+33 1 53 83 10 40' },
      { label: '입장료', value: '없음 (공공 거리, 자유 보행)' },
      { label: '오픈시간', value: '24시간 개방 (상점별 영업시간은 상이)' },
    ],
    googleMapQuery: 'Avenue des Champs-Élysées,Paris,France',
    googleMapEmbed: 'https://maps.google.com/maps?q=Avenue+des+Champs-Élysées,Paris,France&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // ===== 사우샘프턴/영국 (Day 3) =====
  {
    type: 'tourist-spot',
    id: 'southampton',
    title: '[관광정보] 사우샘프턴 (SOUTHAMPTON)',
    images: [
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day3/Southampton/city-1697264693700.webp',
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day3/Southampton/stock-photo-long-walk-to-windsor-castle-in-spring-london-suburbs-uk-1011533713.webp',
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day3/Southampton/Where_to_Stay_Header_Harbour_Hotel_Southampton_Evening_1920x927_46ea2c83-1951-40bc-a3d7-69c75534ab0c.webp',
    ],
    descriptions: [
      '사우샘프턴은 영국 남부 해안에 자리한 항구 도시로, 유럽에서 가장 바쁜 크루즈 항구 중 하나입니다. 매년 약 250만 명의 크루즈 승객이 이곳을 거쳐 갈 만큼 크루즈 여행의 중심지로 불리며, 총 5개의 크루즈 터미널을 갖추고 있습니다.',
      '1912년 타이타닉호가 첫 항해를 떠난 항구로도 유명해, 도시 곳곳에서 타이타닉의 흔적을 만날 수 있습니다. 시시티 뮤지엄(SeaCity Museum)에서는 타이타닉 관련 전시물을 직접 볼 수 있고, 타이타닉 트레일이라는 도보 코스도 있습니다.',
      '크루즈 기항지로서 사우샘프턴의 진짜 매력은 영국을 대표하는 관광지로 가는 출발점이라는 데 있습니다. 차로 약 1시간이면 스톤헨지에, 약 1시간 30분~2시간이면 런던 시내에 도착할 수 있어 당일치기 투어로 알차게 활용할 수 있습니다.',
    ],
    infoTable: [
      { label: '도시', value: '유럽 영국 사우샘프턴' },
      { label: '주소', value: '' },
      { label: '홈페이지', value: '' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '' },
      { label: '오픈시간', value: '' },
    ],
    googleMapQuery: 'Southampton,United Kingdom',
    googleMapEmbed: 'https://maps.google.com/maps?q=Southampton,United+Kingdom&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  {
    type: 'tourist-spot',
    id: 'stonehenge',
    title: '[관광정보] 스톤헨지 (STONEHENGE)',
    images: [
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day3/Stonehenge/4c9fa155-5b3e-4849-96ec-fb45b94c9d7f-1758033797685-311887.webp',
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day3/Stonehenge/Stonehenge-aerial-1.webp',
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day3/Stonehenge/Stonehenge2007_07_30.webp',
    ],
    descriptions: [
      '스톤헨지는 약 5,000년 전에 세워진 거대한 돌기둥 유적으로, 영국을 대표하는 세계문화유산입니다. 수십 톤짜리 거대한 돌들이 원형으로 배치되어 있는데, 어떻게, 왜 이 돌들을 이곳까지 옮겨 세웠는지는 아직까지 완전히 밝혀지지 않았습니다.',
      '사우샘프턴 크루즈 터미널에서 차로 약 1시간 거리에 있어 기항 당일 방문하기에 적합합니다. 입장권에는 방문자 센터, 신석기 시대 움집 재현 전시, 돌기둥까지의 셔틀버스, 그리고 무료 오디오 가이드가 모두 포함되어 있습니다.',
      '넓은 초원 위에 우뚝 선 돌기둥들을 직접 마주하면, 사진으로 보던 것과는 차원이 다른 웅장함을 느낄 수 있습니다. 특히 해 질 녘 황금빛 햇살이 돌기둥 사이로 비치는 풍경은 잊기 어려울 만큼 인상적입니다.',
    ],
    infoTable: [
      { label: '도시', value: '윌트셔, 영국' },
      { label: '주소', value: 'Near Amesbury, Wiltshire SP4 7DE, United Kingdom' },
      { label: '홈페이지', value: 'https://www.english-heritage.org.uk/visit/places/stonehenge/' },
      { label: '연락처', value: '+44 370 333 1181' },
      { label: '입장료', value: '성인 £25~31.50 / 어린이(5~17세) £16~20 (시즌별 변동)' },
      { label: '오픈시간', value: '매일 09:30~17:00 또는 18:00 (시즌별 변동)' },
    ],
    googleMapQuery: 'Stonehenge,Wiltshire,United Kingdom',
    googleMapEmbed: 'https://maps.google.com/maps?q=Stonehenge,Wiltshire,United+Kingdom&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  {
    type: 'tourist-spot',
    id: 'londoncitytour',
    title: '[관광정보] 런던 시내 투어 (LONDON CITY TOUR)',
    images: [
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day3/London-City-Tour/229_1.webp',
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day3/London-City-Tour/london-hop-on-bus.webp',
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day3/London-City-Tour/Round-London-Sightseeing-Tour-1.webp',
    ],
    descriptions: [
      '사우샘프턴에서 차로 약 1시간 30분~2시간이면 도착하는 런던은, 크루즈 기항 시 당일치기로 다녀올 수 있는 세계적인 관광 도시입니다. 빅벤(엘리자베스 타워)은 템스강변 국회의사당 옆에 우뚝 서 있는 시계탑으로, 런던 하면 가장 먼저 떠오르는 상징입니다.',
      '버킹엄 궁전은 영국 국왕의 공식 거주지로, 매일 오전 11시에 열리는 근위병 교대식이 가장 큰 볼거리입니다. 화려한 제복을 입은 근위병들이 군악대 연주에 맞춰 교대하는 장면은 영국에서만 볼 수 있는 특별한 경험입니다.',
      '타워브릿지는 빅토리아 시대 양식의 개폐교로, 다리 위 유리 바닥 전망대에서 템스강을 발밑으로 내려다보는 스릴 넘치는 경험을 할 수 있습니다. 이 명소들은 서로 가까운 거리에 있어 하루 동안 효율적으로 둘러볼 수 있습니다.',
    ],
    infoTable: [
      { label: '도시', value: '런던, 영국' },
      { label: '주소', value: 'Westminster, London (대표 지역)' },
      { label: '홈페이지', value: 'https://www.visitlondon.com/' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '빅벤 투어 £35 / 버킹엄 궁전 £32 / 타워브릿지 £16 (각 별도)' },
      { label: '오픈시간', value: '명소별 상이 (외관 관람은 상시 가능)' },
    ],
    googleMapQuery: 'Big Ben,London,United Kingdom',
    googleMapEmbed: 'https://maps.google.com/maps?q=Big+Ben,London,United+Kingdom&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // ===== 함부르크 (Day 5) =====
  {
    type: 'tourist-spot',
    id: 'hamburg',
    title: '[관광정보] 함부르크 (HAMBURG)',
    images: [
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/north-europe-cruise/sectrion6/day2/Hamburg/hamburg_1.webp',
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/north-europe-cruise/sectrion6/day2/Hamburg/hamburg_2.webp',
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/north-europe-cruise/sectrion6/day2/Hamburg/hamburg_3.webp',
    ],
    descriptions: [
      '함부르크는 독일 북부에 위치한 독일 제2의 도시이자 유럽 최대 규모의 항구 도시입니다. 엘베강 하구에 자리 잡은 덕분에 12세기 한자동맹 시대부터 유럽 해상 무역의 중심지로 성장했고, 지금도 \'세계로 향하는 관문\'이라는 별명으로 불립니다.',
      '도시 곳곳을 운하가 가로지르고 있어 \'독일의 베네치아\'라는 애칭을 갖고 있으며, 다리가 무려 2,500개 이상으로 암스테르담, 베네치아, 런던을 합친 것보다 많습니다.',
      '19세기 붉은 벽돌 창고가 늘어선 슈파이허슈타트부터 파도 모양 유리 지붕이 인상적인 엘프필하모니까지, 1,200년 역사의 전통과 현대적 감각이 공존하는 매력적인 도시입니다.',
    ],
    infoTable: [
      { label: '도시', value: '유럽 독일 함부르크' },
      { label: '주소', value: '' },
      { label: '홈페이지', value: '' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '' },
      { label: '오픈시간', value: '' },
    ],
    googleMapQuery: 'Hamburg,Germany',
    googleMapEmbed: 'https://maps.google.com/maps?q=Hamburg,Germany&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  {
    type: 'tourist-spot',
    id: 'speicherstadt',
    title: '[관광정보] 슈파이허슈타트 (SPEICHERSTADT)',
    images: [
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day5/Speicherstadt/hamburg-speicherstadt-1l-jpg_header-210823.webp',
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day5/Speicherstadt/speicherstadt274.webp',
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day5/Speicherstadt/The_Wasserschloss_at_sunset.webp',
    ],
    descriptions: [
      '슈파이허슈타트는 세계 최대 규모의 창고 지구로, 2015년 유네스코 세계유산에 등재된 함부르크의 대표 명소입니다. 1883년부터 1920년대 후반까지 수천 개의 참나무 말뚝 위에 지어졌으며, 총 면적 26만 제곱미터에 달하는 붉은 벽돌 건물들이 운하를 따라 이어지는 풍경이 인상적입니다.',
      '건설 당시 약 2만 4천 명의 주민이 이주하고 1,100채의 주택이 철거될 만큼 대규모 프로젝트였으며, 1888년 빌헬름 2세 황제가 직접 개장식에 참석했습니다.',
      '오늘날 일부 건물은 여전히 창고로 사용되고 있지만, 나머지는 박물관, 카페, 전시 공간 등으로 변신했습니다. 세계 최대 모형 철도관인 미니어처 원더랜드, 함부르크 던전, 향신료 박물관 등 다양한 볼거리가 있습니다.',
    ],
    infoTable: [
      { label: '도시', value: '함부르크, 독일' },
      { label: '주소', value: 'Brook, 20457 Hamburg, Germany' },
      { label: '홈페이지', value: 'https://worldheritage.hamburg/speicherstadt/' },
      { label: '연락처', value: '+49 40 321191 (슈파이허슈타트 박물관)' },
      { label: '입장료', value: '거리/운하 산책 무료 / 박물관 성인 €5' },
      { label: '오픈시간', value: '24시간 개방 / 박물관 10:00~17:00 (주말 ~18:00)' },
    ],
    googleMapQuery: 'Speicherstadt,Hamburg,Germany',
    googleMapEmbed: 'https://maps.google.com/maps?q=Speicherstadt,Hamburg,Germany&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  {
    type: 'tourist-spot',
    id: 'elbphilharmonie',
    title: '[관광정보] 엘프필하모니 (ELBPHILHARMONIE)',
    images: [
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day5/Elbphilharmonie/Elbphilharmonie,_Hamburg.webp',
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day5/Elbphilharmonie/170428_elbphilharmonie_grosser_saal_foto_michael_zapf.jpg__1794x897_q85_crop_subject_location-3680,2453_subsampling-2_upscale.webp',
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day5/Elbphilharmonie/kopie_von_06-3_liebermann_grand-opening-elbphilharmonie_photo-ralph-larmann_0.jpg__1420x696_q85_crop_subject_location-960,640_subsam.webp',
    ],
    descriptions: [
      '엘프필하모니는 엘베강 위에 우뚝 솟은 함부르크의 상징적인 콘서트홀입니다. 1963년에 지어진 붉은 벽돌 창고 건물 위에 파도 모양의 유리 구조물을 얹은 독특한 디자인으로, 스위스의 세계적 건축사무소 헤르초크 & 드 뫼롱이 설계했습니다.',
      '건물 중간 높이인 지상 37미터 지점에는 누구나 무료로 방문할 수 있는 전망 광장 \'플라자(Plaza)\'가 있습니다. 이곳에서 함부르크 항구와 도시 전경을 360도로 감상할 수 있어 하루 평균 1만 7천 명이 찾는 인기 명소입니다.',
      '건물 내부에는 2,100석 규모의 대공연장을 비롯해 여러 공연장이 있어 세계 정상급 클래식 공연이 열립니다. 플라자의 카페에서 커피 한잔 하며 엘베강 위로 지는 석양을 바라보는 것도 잊지 못할 경험입니다.',
    ],
    infoTable: [
      { label: '도시', value: '함부르크, 독일' },
      { label: '주소', value: 'Platz der Deutschen Einheit 4, 20457 Hamburg' },
      { label: '홈페이지', value: 'https://www.elbphilharmonie.de/en/' },
      { label: '연락처', value: '+49 40 357 666 66' },
      { label: '입장료', value: '플라자 무료 / 온라인 사전 예약 €3 / 가이드 투어 €15' },
      { label: '오픈시간', value: '플라자 매일 10:00~24:00' },
    ],
    googleMapQuery: 'Elbphilharmonie,Hamburg,Germany',
    googleMapEmbed: 'https://maps.google.com/maps?q=Elbphilharmonie,Hamburg,Germany&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // ===== 브뤼헤 (Day 7) =====
  {
    type: 'tourist-spot',
    id: 'bruges',
    title: '[관광정보] 브뤼헤 (BRUGES)',
    images: [
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day7/Bruges/fd990803e362d8f6e088f14df250680dea4ead4915d0a6777973b0b87bca6f8d.webp',
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day7/Bruges/shutterstock_1421308190.webp',
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day7/Bruges/_Bruges-3.webp',
    ],
    descriptions: [
      '브뤼헤는 벨기에 북서부에 자리한 중세 운하 도시입니다. 도시 곳곳을 가로지르는 운하와 돌다리, 수백 년 된 벽돌 건물이 어우러져 "중세 동화 마을"이라는 별명으로 불립니다.',
      '브뤼헤 구시가지 전체가 유네스코 세계문화유산으로 지정되어 있을 만큼, 중세 건축물의 보존 상태가 뛰어납니다. 좁은 골목을 걷다 보면 초콜릿 가게, 레이스 공방, 아늑한 카페가 줄지어 나타나고, 운하 위로 비치는 건물 그림자가 그림엽서 같은 풍경을 만들어냅니다.',
      '크루즈 기항지인 제브뤼헤에서 버스로 약 20분이면 도착할 수 있어, 반나절 관광으로도 충분히 브뤼헤의 매력을 즐길 수 있습니다. 주요 관광지가 도보 15분 거리 안에 모여 있어 짧은 시간에도 알차게 둘러볼 수 있습니다.',
    ],
    infoTable: [
      { label: '도시', value: '유럽 벨기에 브뤼헤' },
      { label: '주소', value: '' },
      { label: '홈페이지', value: '' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '' },
      { label: '오픈시간', value: '' },
    ],
    googleMapQuery: 'Bruges,Belgium',
    googleMapEmbed: 'https://maps.google.com/maps?q=Bruges,Belgium&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  {
    type: 'tourist-spot',
    id: 'brugescanaltour',
    title: '[관광정보] 브뤼헤 운하 투어 (BRUGES CANAL TOUR)',
    images: [
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day7/Bruges-Canal-Tour/Boat-ride-in-Bruges.webp',
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day7/Bruges-Canal-Tour/Bruges-canal-boat-(5).webp',
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day7/Bruges-Canal-Tour/Bruges-Canal-Tour-Whale-Art-Installation.webp',
    ],
    descriptions: [
      '브뤼헤 운하 투어는 이 도시를 가장 아름답게 감상하는 방법입니다. 약 30분간 소형 보트를 타고 도시 중심부의 운하를 따라 이동하며, 양쪽으로 늘어선 중세 건축물과 돌다리, 버드나무가 만들어내는 풍경을 물 위에서 편안하게 즐길 수 있습니다.',
      '보트는 얀 반 에이크 광장부터 베긴회 수도원 사이 구간을 운항합니다. 도시 곳곳에 5개의 선착장이 있어 가까운 곳에서 탑승하면 됩니다. 선장이 영어와 네덜란드어로 주요 건물과 역사에 대해 설명해줍니다.',
      '별도의 온라인 예약 없이 선착장 매표소에서 당일 티켓을 구매하는 방식입니다. 날씨가 좋은 날에는 대기 줄이 길어질 수 있으니, 오전 시간대에 방문하면 비교적 여유롭게 탑승할 수 있습니다.',
    ],
    infoTable: [
      { label: '도시', value: '브뤼헤, 벨기에' },
      { label: '주소', value: 'Nieuwstraat 11, 8000 Bruges' },
      { label: '홈페이지', value: 'https://www.boottochten-brugge.be/en/' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '성인 €15 / 어린이(4~11세) €9' },
      { label: '오픈시간', value: '매일 10:00~18:00 (2월 중순~12월 말 운영)' },
    ],
    googleMapQuery: 'Canal Tour,Bruges,Belgium',
    googleMapEmbed: 'https://maps.google.com/maps?q=Canal+Tour,Bruges,Belgium&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  {
    type: 'tourist-spot',
    id: 'marktsquarebelfry',
    title: '[관광정보] 마르크트 광장 & 종탑 (MARKT SQUARE & BELFRY)',
    images: [
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day7/Markt-Square-Belfry/Bruges-Markt-Square-in-Belgium.webp',
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day7/Markt-Square-Belfry/caption.webp',
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day7/Markt-Square-Belfry/JanDHondt_2600_1-MARKT-PANO-2018-%C2%A9-JAN-D\'HONDT-BAD.jpg.webp',
    ],
    descriptions: [
      '마르크트 광장은 브뤼헤의 심장부이자 도시 관광의 출발점입니다. 광장을 둘러싼 알록달록한 삼각지붕 건물들은 중세 시대 길드(상인 조합) 건물로, 마치 동화 속 한 장면을 보는 듯합니다.',
      '광장 중앙에 우뚝 솟은 83m 높이의 종탑(벨포르트)은 브뤼헤의 상징입니다. 13세기에 짓기 시작해 15세기 말에 완성된 이 탑은, 총 366개의 계단을 올라가면 브뤼헤 시내와 주변 들판을 360도로 내려다보는 전망이 펼쳐집니다.',
      '종탑 안에는 총 47개의 종으로 이루어진 카리용이 설치되어 있습니다. 수요일, 토요일, 일요일 오전 11시부터 정오까지 전문 연주자가 직접 종을 연주하며, 광장에서도 맑은 종소리를 들을 수 있습니다.',
    ],
    infoTable: [
      { label: '도시', value: '브뤼헤, 벨기에' },
      { label: '주소', value: 'Markt 7, 8000 Bruges' },
      { label: '홈페이지', value: 'https://www.museabrugge.be/en/visit/locations/belfort' },
      { label: '연락처', value: '+32 50 44 87 43' },
      { label: '입장료', value: '성인 €12 / 청소년(6~25세) €10 (광장은 무료)' },
      { label: '오픈시간', value: '매일 09:30~18:00' },
    ],
    googleMapQuery: 'Belfry of Bruges,Bruges,Belgium',
    googleMapEmbed: 'https://maps.google.com/maps?q=Belfry+of+Bruges,Bruges,Belgium&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // ===== 로테르담 (Day 8) =====
  {
    type: 'tourist-spot',
    id: 'rotterdam',
    title: '[관광정보] 로테르담 (ROTTERDAM)',
    images: [
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day8/Rotterdam/rotterdam-travel-guide.webp',
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day8/Rotterdam/rotterdam.webp',
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day8/Rotterdam/Rotterdam_Skyline_Robin_Utrecht_b15126c706.webp',
    ],
    descriptions: [
      '로테르담은 네덜란드 제2의 도시이자 유럽 최대 항구 도시입니다. 제2차 세계대전 당시 폭격으로 도심이 거의 완전히 파괴되었는데, 이 아픔을 딛고 처음부터 다시 도시를 설계하면서 \'현대 건축의 실험장\'이라 불리는 독특한 도시로 재탄생했습니다.',
      '도시 전체가 마치 야외 건축 전시장 같다는 평을 받을 만큼, 큐브하우스, 마르크트할, 에라스무스 다리 등 세계적인 건축가들의 작품이 거리 곳곳에 자리하고 있습니다.',
      '로테르담 근교에는 유네스코 세계유산인 킨더다이크 풍차 마을이 있어, 현대 건축과 네덜란드 전통 풍경을 하루에 모두 경험할 수 있습니다.',
    ],
    infoTable: [
      { label: '도시', value: '유럽 네덜란드 로테르담' },
      { label: '주소', value: '' },
      { label: '홈페이지', value: '' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '' },
      { label: '오픈시간', value: '' },
    ],
    googleMapQuery: 'Rotterdam,Netherlands',
    googleMapEmbed: 'https://maps.google.com/maps?q=Rotterdam,Netherlands&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  {
    type: 'tourist-spot',
    id: 'cubehousesmarkthal',
    title: '[관광정보] 큐브하우스 & 마르크트할 (CUBE HOUSES & MARKTHAL)',
    images: [
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day8/Cube-Houses-Markthal/2014-markthal-2t8c9067-ossip-van-duivenbode.webp',
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day8/Cube-Houses-Markthal/shutterstock_1121237345.webp',
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day8/Cube-Houses-Markthal/b6.webp',
    ],
    descriptions: [
      '큐브하우스는 네덜란드 건축가 피에트 블롬이 설계한, 정육면체를 45도로 기울여 올린 독특한 주거 건물입니다. 노란색 큐브 모양의 집들이 나무 기둥 위에 올려진 듯한 모습이 인상적인데, 실제로 사람이 살고 있는 주거 공간이라는 점이 놀랍습니다.',
      '큐브하우스 바로 옆에는 2014년에 문을 연 마르크트할이 있습니다. 거대한 말발굽 모양의 아치형 건물 안에 약 100개의 식품 매장과 레스토랑이 모여 있는 실내 시장인데, 천장 전체를 덮은 초대형 벽화가 압도적인 볼거리를 선사합니다.',
      '두 곳은 블라크(Blaak) 역에서 도보 1~3분 거리에 바로 붙어 있어 함께 둘러보기 좋습니다. 큐브하우스에서 독특한 건축을 감상한 뒤, 마르크트할에서 네덜란드식 크로켓이나 신선한 해산물을 맛보는 코스를 추천합니다.',
    ],
    infoTable: [
      { label: '도시', value: '로테르담, 네덜란드' },
      { label: '주소', value: 'Overblaak 70, 3011 MH Rotterdam (큐브하우스)' },
      { label: '홈페이지', value: 'https://www.kubuswoning.nl' },
      { label: '연락처', value: '+31 10 414 2285' },
      { label: '입장료', value: '큐브하우스 박물관 €3.50 / 마르크트할 무료' },
      { label: '오픈시간', value: '큐브하우스 11:00~17:00 / 마르크트할 10:00~20:00' },
    ],
    googleMapQuery: 'Cube Houses,Rotterdam,Netherlands',
    googleMapEmbed: 'https://maps.google.com/maps?q=Cube+Houses,Rotterdam,Netherlands&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  {
    type: 'tourist-spot',
    id: 'kinderdijk',
    title: '[관광정보] 킨더다이크 풍차 마을 (KINDERDIJK)',
    images: [
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day8/Kinderdijk/48.webp',
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day8/Kinderdijk/Kinderdijk_2025_Guido_Pijper_webres__8_.webp',
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day8/Kinderdijk/Kinderdijk_Middelkade_fietsers_wandelen_bezoekers_2022-1920x1080.webp',
    ],
    descriptions: [
      '킨더다이크는 로테르담에서 차로 약 30분 거리에 있는 유네스코 세계유산 마을로, 18세기에 만들어진 19기의 풍차가 나란히 늘어선 네덜란드 대표 풍경을 만날 수 있는 곳입니다.',
      '넓은 들판 위로 풍차가 줄지어 서 있고 그 사이를 운하가 흐르는 풍경은, 날씨가 좋은 날이면 엽서 그 자체입니다. 입장권을 구매하면 풍차 내부 박물관 2곳, 양수장, 영상 상영, 보트 투어까지 포함되어 있어 알차게 즐길 수 있습니다.',
      '풍차 사이의 산책로와 자전거 도로는 24시간 무료로 개방되어 있으므로, 입장권 없이 바깥에서 풍차를 배경으로 사진만 찍는 것도 가능합니다. 온라인 사전 구매 시 10% 할인이 적용됩니다.',
    ],
    infoTable: [
      { label: '도시', value: '킨더다이크, 네덜란드' },
      { label: '주소', value: 'Nederwaard 1b, 2961 AS Kinderdijk' },
      { label: '홈페이지', value: 'https://kinderdijk.nl' },
      { label: '연락처', value: '+31 78 691 2830' },
      { label: '입장료', value: '성인 €21 / 어린이(4~12세) €9 (온라인 10% 할인)' },
      { label: '오픈시간', value: '3~10월 09:00~17:30 / 11~12월 10:30~16:00' },
    ],
    googleMapQuery: 'Kinderdijk,Netherlands',
    googleMapEmbed: 'https://maps.google.com/maps?q=Kinderdijk,Netherlands&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // ===== 선박 정보 =====
  {
    type: 'ship-info',
    id: 'mscpreziosa',
    title: 'MSC 프레지오사호 (MSC Preziosa)',
    images: [
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day2/MSC-Preziosa/788-large-e183251d9905d59b0a030ce6ce5793a4.webp',
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day2/MSC-Preziosa/MSC13015323.webp',
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day2/MSC-Preziosa/MSC_Preziosa-food-drink-3_u3zd0r.webp',
    ],
    descriptions: [
      'MSC 크루즈의 판타지아 클래스에 속하는 MSC 프레지오사호는 2013년 3월에 첫 항해를 시작했습니다.',
      '총 톤수 139,072톤, 길이 333m의 대형 선박으로, 최대 4,345명의 승객과 1,388명의 승무원이 함께합니다. 18층 높이의 갑판에는 4개의 수영장, 12개의 자쿠지, 약 120m의 버티고 워터슬라이드, 2층 규모의 플래티넘 극장, 약 1,700m²의 아우레아 스파 등 다채로운 시설이 갖춰져 있습니다.',
    ],
    infoTable: [
      { label: '선박명', value: 'MSC 프레지오사호 (MSC Preziosa)' },
      { label: '선사', value: 'MSC Cruises' },
      { label: '총 톤수', value: '139,072톤' },
      { label: '승객 정원', value: '4,345명' },
      { label: '승무원 수', value: '1,388명' },
      { label: '주요 시설', value: '수영장 4개, 자쿠지 12개, 카지노, 스파, 극장, 워터슬라이드' },
      { label: '식사', value: '메인 다이닝룸, 뷔페 레스토랑' },
      { label: '드레스코드', value: '캐주얼 (스마트 캐주얼 권장)' },
    ],
  },

  // ===== 전일 해상 =====
  {
    type: 'cruise-at-sea',
    id: 'cruiseatsea',
    title: 'MSC 프레지오사호 전일 해상',
    images: [
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day4/578640c8a5bfc813096369.webp',
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day4/day-and-night-activities-4d-cinema.webp',
      'https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/products/western-europe-cruise/section6/day4/filters_format(webp)_quality(60).webp',
    ],
    descriptions: [
      '오늘은 종일 해상에서 보내는 날입니다. MSC 프레지오사호의 다양한 시설을 마음껏 즐겨보세요.',
      '2층 규모의 플래티넘 극장에서 매일 달라지는 브로드웨이 스타일 공연을 관람하고, 18층에서 출발하는 약 120m의 버티고 워터슬라이드에서 짜릿한 스릴을 느껴보세요. 4개의 수영장과 12개의 자쿠지, 약 1,700m² 규모의 MSC 아우레아 스파까지, 하루가 모자랄 만큼 다채로운 즐길 거리가 기다리고 있습니다.',
      '메인 다이닝룸과 뷔페 레스토랑에서 세계 각국의 요리를 즐기시고, 야외 데크에서 광활한 바다의 풍경을 감상하며 특별한 하루를 보내시기 바랍니다.',
    ],
    bulletPoints: [
      '플래티넘 극장에서 브로드웨이 스타일의 공연을 감상해 보세요.',
      '약 120m 길이의 버티고 워터슬라이드에서 짜릿한 스릴을 경험해 보세요.',
      'MSC 아우레아 스파에서 바다를 바라보며 힐링 마사지를 받아보세요.',
    ],
    closingText: '잔잔한 바다 한가운데서 누리는 이 모든 휴식이 크루즈 여행의 진정한 매력입니다.',
    infoTable: [
      { label: '선박', value: 'MSC 프레지오사호 (MSC Preziosa)' },
      { label: '주요 시설', value: '수영장 4개, 자쿠지 12개, 카지노, 스파, 극장, 워터슬라이드' },
      { label: '식사', value: '메인 다이닝룸, 뷔페 레스토랑' },
      { label: '드레스코드', value: '캐주얼 (스마트 캐주얼 권장)' },
    ],
  },

  // ===== 승선 수속 안내 =====
  {
    type: 'info',
    id: 'boarding',
    title: 'MSC 프레지오사호 승선 수속 안내',
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

  // ===== 하선 수속 안내 =====
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

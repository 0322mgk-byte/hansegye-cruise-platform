import type { ModalData } from '@/data/types';

export const scheduleModalsData: ModalData[] = [
  // ── 이스탄불 도시 개요 ──
  {
    type: 'tourist-spot',
    id: 'istanbul',
    title: '[관광정보] 이스탄불 (ISTANBUL)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '이스탄불은 보스포루스 해협을 사이에 두고 유럽과 아시아 두 대륙에 걸쳐 있는 세계 유일의 대륙 횡단 도시입니다. 약 1,600년간 로마 제국, 비잔틴 제국, 오스만 제국의 수도로 번영했으며, 그 찬란한 역사가 도시 곳곳에 켜켜이 남아 있습니다.',
      '술탄아흐메트(Sultanahmet) 지구에는 하기아 소피아, 블루 모스크, 톱카프 궁전, 히포드롬 광장 등 비잔틴과 오스만 시대의 핵심 유적이 집중되어 있어 걸어서도 충분히 둘러볼 수 있습니다. 그랜드 바자르와 스파이스 바자르 같은 전통 시장에서는 수공예품, 향신료, 터키 카펫 등을 합리적인 가격에 구매할 수 있으며, 활기찬 흥정 문화도 여행의 즐거움입니다.',
      '케밥, 바클라바, 터키식 조식(카흐발트), 시미트(참깨빵) 등 터키 미식 문화의 정수를 이스탄불에서 경험할 수 있습니다. 보스포루스 해협 크루즈를 타면 유럽 쪽의 돌마바흐체 궁전과 아시아 쪽의 외스퀴다르 해안을 동시에 감상할 수 있습니다.',
    ],
    infoTable: [
      { label: '도시', value: '유럽/아시아 튀르키예 이스탄불' },
      { label: '주소', value: '' },
      { label: '홈페이지', value: 'https://visitistanbul.com' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '' },
      { label: '오픈시간', value: '' },
    ],
    googleMapQuery: 'Istanbul,Turkey',
    googleMapEmbed: 'https://maps.google.com/maps?q=Istanbul,Turkey&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // ── 하기아 소피아 ──
  {
    type: 'tourist-spot',
    id: 'hagiasophia',
    title: '[관광정보] 하기아 소피아 (HAGIA SOPHIA)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '하기아 소피아는 537년 비잔틴 황제 유스티니아누스 1세에 의해 건립된 세계 건축사의 걸작으로, 약 1,000년 동안 세계 최대의 성당으로 군림했습니다. 직경 31미터, 높이 56미터의 거대한 중앙 돔은 건축학적 혁신의 상징이며, 내부에 들어서면 돔을 통해 쏟아지는 자연광이 황금빛 모자이크를 비추어 경이로운 분위기를 자아냅니다.',
      '1453년 오스만 제국의 콘스탄티노플 정복 이후 모스크로 전환되었으며, 4개의 미나렛이 추가되었습니다. 1934년 아타튀르크에 의해 박물관으로 변경되었다가, 2020년 다시 모스크로 재전환되어 현재 활동 중인 이슬람 예배 장소입니다. 비잔틴 시대의 기독교 모자이크와 이슬람 캘리그래피가 공존하는 독특한 내부 장식은 전 세계 어디에서도 볼 수 없는 특별한 경험입니다.',
      '2024년부터 관광객에게 유료 입장이 적용되었으며, 상층 갤러리에서 비잔틴 모자이크를 가까이에서 감상할 수 있습니다. 이슬람 예배가 진행 중인 모스크이므로 방문 시 복장 규정(여성 머리 스카프 착용, 신발 탈의)을 반드시 준수해야 하며, 금요일 정오 예배 시간(약 12:00~14:30)에는 관광객 입장이 제한됩니다.',
    ],
    infoTable: [
      { label: '도시', value: '유럽 튀르키예 이스탄불' },
      { label: '주소', value: 'Sultanahmet, Ayasofya Meydani No:1, Fatih, Istanbul, Turkey' },
      { label: '홈페이지', value: 'https://www.ayasofyacamii.gov.tr' },
      { label: '연락처', value: '+90 212 522 17 50' },
      { label: '입장료', value: '성인 25유로 (약 37,000원)' },
      { label: '오픈시간', value: '매일 09:00~19:00 (금요일 12:00~14:30 관광객 출입 제한)' },
    ],
    googleMapQuery: 'Hagia Sophia,Istanbul,Turkey',
    googleMapEmbed: 'https://maps.google.com/maps?q=Hagia+Sophia,Istanbul,Turkey&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // ── 블루 모스크 ──
  {
    type: 'tourist-spot',
    id: 'bluemosque',
    title: '[관광정보] 블루 모스크 (SULTAN AHMED MOSQUE)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '블루 모스크는 1609년에서 1616년 사이 오스만 술탄 아흐메트 1세의 명에 의해 건설된 이스탄불의 대표적인 이슬람 사원입니다. 세계에서 유일하게 6개의 미나렛을 갖춘 모스크로, 하기아 소피아 바로 맞은편에 위치하여 두 건축물이 서로 마주보는 장관을 이룹니다.',
      '"블루 모스크"라는 별명은 내부를 장식한 20,000장 이상의 이즈니크(Iznik) 타일에서 유래합니다. 튤립, 장미, 카네이션 등의 꽃 문양이 푸른빛과 흰빛으로 어우러져 있으며, 260개의 창문을 통해 들어오는 자연광이 타일에 반사되면서 신비로운 푸른 빛으로 내부 공간을 물들입니다.',
      '현재도 활발하게 사용되는 이슬람 예배 장소이므로, 하루 다섯 차례의 예배 시간에는 관광객 출입이 제한됩니다. 입장은 무료이지만 어깨와 무릎을 가리는 복장이 필요하며, 모스크 입구에서 스카프와 긴 치마를 무료로 대여할 수 있습니다.',
    ],
    infoTable: [
      { label: '도시', value: '유럽 튀르키예 이스탄불' },
      { label: '주소', value: 'Sultan Ahmet, Atmeydani Cd. No:7, 34122 Fatih, Istanbul, Turkey' },
      { label: '홈페이지', value: 'https://www.sultanahmetcamii.org' },
      { label: '연락처', value: '+90 212 458 44 68' },
      { label: '입장료', value: '무료' },
      { label: '오픈시간', value: '매일 08:30~11:30, 13:00~14:30, 15:30~16:45 (예배 시간 제외)' },
    ],
    googleMapQuery: 'Blue Mosque,Istanbul,Turkey',
    googleMapEmbed: 'https://maps.google.com/maps?q=Blue+Mosque,Istanbul,Turkey&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // ── 톱카프 궁전 ──
  {
    type: 'tourist-spot',
    id: 'topkapipalace',
    title: '[관광정보] 톱카프 궁전 (TOPKAPI PALACE)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '톱카프 궁전은 1459년부터 약 400년간 오스만 제국 술탄들의 공식 거처이자 행정 중심지로 사용된 거대한 궁전 복합체입니다. 보스포루스 해협과 골든혼(Halic)이 만나는 세라글리오 곶에 위치하여, 궁전에서 바라보는 해양 파노라마가 장엄합니다. 약 70만 제곱미터의 부지에 4개의 정원(안뜰)과 수많은 건물로 구성되어 있습니다.',
      '궁전 내부에는 예언자 무함마드의 유물이 보관된 성스러운 유물 전시실, 86캐럿의 "스푼 제조자의 다이아몬드"를 비롯한 보물 전시실, 중국과 일본 도자기 컬렉션 등 오스만 제국의 방대한 문화유산이 전시되어 있습니다. 특히 하렘(Harem) 구역은 술탄의 사적 생활 공간으로, 화려한 이즈니크 타일 장식과 정교한 내부 공간이 인상적입니다.',
      '모든 전시실을 꼼꼼히 관람하려면 최소 3시간 이상 소요되므로 여유로운 일정을 잡는 것이 좋습니다. 매주 화요일은 휴관입니다.',
    ],
    infoTable: [
      { label: '도시', value: '유럽 튀르키예 이스탄불' },
      { label: '주소', value: 'Cankurtaran, 34122 Fatih, Istanbul, Turkey' },
      { label: '홈페이지', value: 'https://muze.gen.tr/muze-detay/topkapi' },
      { label: '연락처', value: '+90 212 512 04 80' },
      { label: '입장료', value: '통합권 2,750 TL (약 50유로, 궁전+하렘+하기아 이레네 포함)' },
      { label: '오픈시간', value: '하절기(4~10월) 09:00~18:30 / 동절기(11~3월) 09:00~16:30 / 매주 화요일 휴관' },
    ],
    googleMapQuery: 'Topkapi Palace,Istanbul,Turkey',
    googleMapEmbed: 'https://maps.google.com/maps?q=Topkapi+Palace,Istanbul,Turkey&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // ── 히포드롬 광장 ──
  {
    type: 'tourist-spot',
    id: 'hippodrome',
    title: '[관광정보] 히포드롬 광장 (HIPPODROME OF CONSTANTINOPLE)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '히포드롬 광장은 203년 로마 황제 셉티미우스 세베루스에 의해 건설이 시작되고, 330년 콘스탄티누스 대제가 대대적으로 확장한 고대 전차 경기장입니다. 전성기에는 약 10만 명의 관중을 수용할 수 있었으며, 비잔틴 제국 시대 공공 생활과 정치적 갈등의 중심 무대였습니다. 현재는 술탄아흐메트 광장이라는 이름으로 블루 모스크 바로 앞에 자리하고 있습니다.',
      '광장에는 기원전 15세기에 제작되어 이집트 룩소르의 카르나크 신전에서 옮겨온 "테오도시우스 오벨리스크", 기원전 479년 델포이 신전에서 가져온 "뱀 기둥(Serpent Column)", 그리고 10세기에 제작된 "벽돌 오벨리스크" 등 고대 유물이 보존되어 있습니다.',
      '히포드롬 광장은 야외 개방형 공공 광장으로 입장료 없이 24시간 자유롭게 방문할 수 있습니다. 블루 모스크, 하기아 소피아, 톱카프 궁전 등 주요 관광지와 도보 수분 거리에 있어 술탄아흐메트 역사 지구 관광의 중심 거점입니다.',
    ],
    infoTable: [
      { label: '도시', value: '유럽 튀르키예 이스탄불' },
      { label: '주소', value: 'Binbirdirek, Sultan Ahmet Parki No:2, 34122 Fatih, Istanbul, Turkey' },
      { label: '홈페이지', value: '' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '무료 (야외 개방형 광장)' },
      { label: '오픈시간', value: '24시간 (야외 개방)' },
    ],
    googleMapQuery: 'Hippodrome of Constantinople,Istanbul,Turkey',
    googleMapEmbed: 'https://maps.google.com/maps?q=Hippodrome+of+Constantinople,Istanbul,Turkey&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // ── 미코노스 도시 개요 ──
  {
    type: 'tourist-spot',
    id: 'mykonos',
    title: '[관광정보] 미코노스 (MYKONOS)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '미코노스는 그리스 에게해 중앙에 위치한 키클라데스 제도의 섬으로, 산토리니와 함께 그리스를 대표하는 세계적인 관광지입니다. 섬 이름은 그리스 신화 속 아폴로의 손자 뮈코노스(Mykonos)에서 유래했으며, 새하얀 회벽의 키클라데스식 건축물, 좁고 미로처럼 얽힌 골목길, 그리고 에메랄드빛 에게해가 어우러져 "바람의 섬"이라는 별명으로도 불립니다.',
      '미코노스 타운(호라, Chora)은 섬의 심장부로, 상징적인 카토 밀리 풍차, 리틀 베니스 해안가, 파라포르티아니 교회 등 주요 랜드마크가 도보 거리 내에 밀집해 있어 걸어 다니며 관광하기에 최적입니다. 특히 리틀 베니스에서 바라보는 석양은 세계에서 가장 아름다운 일몰 중 하나로 손꼽힙니다.',
      '유네스코 세계문화유산인 델로스 섬이 불과 2km 거리에 위치해 고대 그리스 문명의 흔적을 함께 탐방할 수 있습니다. 파라다이스 비치, 슈퍼 파라다이스 비치 등 개성 넘치는 해변들이 섬 곳곳에 펼쳐져 있어 해양 레저 활동도 풍성합니다.',
    ],
    infoTable: [
      { label: '도시', value: '그리스 키클라데스 미코노스' },
      { label: '주소', value: '' },
      { label: '홈페이지', value: '' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '' },
      { label: '오픈시간', value: '' },
    ],
    googleMapQuery: 'Mykonos,Greece',
    googleMapEmbed: 'https://maps.google.com/maps?q=Mykonos,Greece&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // ── 리틀 베니스 ──
  {
    type: 'tourist-spot',
    id: 'littlevenice',
    title: '[관광정보] 리틀 베니스 (LITTLE VENICE)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '리틀 베니스는 미코노스 타운 남서쪽 끝에 위치한 해안 지구로, 16~18세기에 지어진 색색의 건물들이 바다 바로 위에 돌출되어 세워져 있는 것이 특징입니다. 이탈리아 베네치아를 연상시킨다 하여 "리틀 베니스"라는 이름이 붙었으며, 공식 명칭은 알레프칸드라(Alefkandra)입니다.',
      '과거 선원과 상인들의 거주지였던 이 건물들은 현재 트렌디한 바, 레스토랑, 아트 갤러리로 변모하여 활기찬 분위기를 자아냅니다. 특히 늦은 오후부터 저녁 시간대에는 에게해 위로 펼쳐지는 장엄한 석양을 감상하려는 방문객들로 북적이며, 미코노스에서 가장 낭만적인 일몰 명소로 사랑받고 있습니다.',
      '리틀 베니스 뒤편에는 좁은 골목길이 미로처럼 이어져 있고, 숨겨진 부티크와 기념품 가게들이 자리 잡고 있어 산책의 즐거움이 있습니다. 인접한 카토 밀리 풍차와 파라포르티아니 교회까지 도보 5분 이내 거리에 있어 미코노스 타운 관광의 핵심 동선에 포함되는 필수 방문 장소입니다.',
    ],
    infoTable: [
      { label: '도시', value: '그리스 미코노스' },
      { label: '주소', value: 'Alefkandra, Mykonos Town (Chora), Mikonos 846 00, Greece' },
      { label: '홈페이지', value: '' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '무료 (야외 해안가 지구)' },
      { label: '오픈시간', value: '상시 개방 (24시간, 야외 공간)' },
    ],
    googleMapQuery: 'Little Venice,Mykonos,Greece',
    googleMapEmbed: 'https://maps.google.com/maps?q=Little+Venice,Mykonos,Greece&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // ── 미코노스 풍차 ──
  {
    type: 'tourist-spot',
    id: 'mykonoswindmills',
    title: '[관광정보] 카토 밀리 풍차 (KATO MILI WINDMILLS)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '카토 밀리(Kato Mili)는 미코노스 타운 남쪽 언덕 위에 나란히 서 있는 7기의 풍차로, 미코노스 섬을 상징하는 가장 유명한 랜드마크입니다. 16세기부터 20세기 초까지 에게해에서 불어오는 강한 바람을 이용하여 곡물을 빻는 데 사용되었으며, 미코노스 경제의 핵심 시설이었습니다.',
      '7기의 풍차 중 게로니모스 밀(Geronymos Mill)은 1700년에 지어진 가장 오래된 풍차로, 1960년대까지 실제로 밀가루를 생산했습니다. 보니스 밀(Bonis Mill)은 그리스 최초의 농업 박물관으로 개조되어 7~9월 사이 무료로 관람할 수 있습니다.',
      '풍차 언덕에서는 리틀 베니스와 미코노스 항구, 에게해를 한눈에 내려다볼 수 있어 일몰 시간대에 특히 인기가 높습니다. 미코노스 타운 올드 포트에서 도보 약 10분 거리에 위치해 있으며, 리틀 베니스와 바로 인접해 있어 두 명소를 함께 방문하는 것이 일반적입니다.',
    ],
    infoTable: [
      { label: '도시', value: '그리스 미코노스' },
      { label: '주소', value: 'Kato Mili, Mikonos 846 00, Greece' },
      { label: '홈페이지', value: '' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '외부 관람 무료 / 보니스 밀 농업박물관 무료' },
      { label: '오픈시간', value: '외부 상시 / 보니스 밀 박물관: 7~9월 매일 16:00~20:00' },
    ],
    googleMapQuery: 'Kato Mili Windmills,Mykonos,Greece',
    googleMapEmbed: 'https://maps.google.com/maps?q=Kato+Mili+Windmills,Mykonos,Greece&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // ── 파라포르티아니 교회 ──
  {
    type: 'tourist-spot',
    id: 'paraportiani',
    title: '[관광정보] 파라포르티아니 교회 (PANAGIA PARAPORTIANI)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '파라포르티아니 교회는 미코노스 타운 카스트로(Kastro) 지구에 위치한 그리스 정교회 성당으로, 미코노스에서 가장 사진이 많이 찍히는 건축물이자 세계에서 가장 아름다운 교회 중 하나로 평가받습니다. 1425년에 건축이 시작되어 17세기에 완성되었으며, 약 200년에 걸쳐 지어진 독특한 역사를 지니고 있습니다.',
      '이 교회의 가장 큰 특징은 실제로 5개의 개별 예배당이 하나로 합쳐진 복합 건축물이라는 점입니다. 1층에 4개의 예배당이 자리하고, 그 위에 성모 마리아에게 봉헌된 5번째 예배당이 올려져 있습니다. 비대칭적이면서도 유기적인 곡선이 어우러진 순백의 외관은 키클라데스 건축의 정수를 보여줍니다.',
      '교회 내부는 종교 행사 때를 제외하고는 대부분 닫혀 있어 외부에서 감상하는 것이 일반적이지만, 새하얀 회벽이 아침 햇살과 석양빛에 따라 다채로운 색조로 물드는 모습만으로도 충분히 감동적입니다.',
    ],
    infoTable: [
      { label: '도시', value: '그리스 미코노스' },
      { label: '주소', value: 'Kastro, Chora, Mikonos 846 00, Greece' },
      { label: '홈페이지', value: '' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '무료 (내부 개방 시 기부 환영)' },
      { label: '오픈시간', value: '외부 상시 / 내부 비정기 개방' },
    ],
    googleMapQuery: 'Panagia Paraportiani,Mykonos,Greece',
    googleMapEmbed: 'https://maps.google.com/maps?q=Panagia+Paraportiani,Mykonos,Greece&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // ── 크레타 헤라클리온 도시 개요 ──
  {
    type: 'tourist-spot',
    id: 'heraklion',
    title: '[관광정보] 크레타 헤라클리온 (HERAKLION, CRETE)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '고대 미노아 문명의 심장부, 크레타 헤라클리온. 그리스 최대의 섬 크레타의 수도이자 최대 도시인 헤라클리온은 약 5,000년의 역사를 간직한 유서 깊은 도시입니다.',
      '유럽에서 가장 오래된 문명인 미노아 문명의 정치적·문화적 중심지였으며, 도시에서 남쪽으로 약 5km 거리에 위치한 크노소스 궁전은 미노아 문명의 영광을 오늘날까지 전하고 있습니다. 기원전 2000년경 지어진 크노소스 궁전은 가로세로 160~170m에 달하는 거대한 규모에 1,000개가 넘는 방이 복잡하게 배치되어 있어, 예로부터 "미궁(라비린토스)"이라 불려왔습니다.',
      '그리스 신화에서 크레타의 왕 미노스는 건축가 다이달로스에게 명하여 미궁을 짓고 그 중심에 미노타우로스를 가두었다고 전해집니다. 아테네의 영웅 테세우스가 아리아드네 공주의 도움으로 미궁에 들어가 미노타우로스를 물리친 전설은 크노소스 궁전의 복잡한 구조에서 비롯된 것으로 여겨집니다. 헤라클리온 고고학 박물관에는 미노아 미술의 걸작으로 손꼽히는 프레스코화와 토기, 보석류가 전시되어 있습니다.',
    ],
    infoTable: [
      { label: '도시', value: '그리스 크레타섬 헤라클리온' },
      { label: '주소', value: '' },
      { label: '홈페이지', value: '' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '' },
      { label: '오픈시간', value: '' },
    ],
    googleMapQuery: 'Heraklion,Crete,Greece',
    googleMapEmbed: 'https://maps.google.com/maps?q=Heraklion,Crete,Greece&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // ── 로도스 도시 개요 ──
  {
    type: 'tourist-spot',
    id: 'rhodes',
    title: '[관광정보] 로도스 (RHODES)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '중세 기사단의 요새가 살아 숨 쉬는 섬, 로도스. 에게해 남동쪽에 위치한 로도스는 그리스에서 네 번째로 큰 섬으로, 고대 세계 7대 불가사의 중 하나인 "로도스의 거상"이 세워졌던 곳입니다.',
      '로도스 구시가지는 유럽에서 가장 잘 보존된 중세 도시 중 하나로, 1988년 유네스코 세계문화유산으로 등재되었습니다. 1309년 성 요한 기사단이 로도스에 도착하여 약 200년간 이 섬을 본거지로 삼으며, 기독교 순례자를 보호하고 오스만 제국에 맞서는 지중해의 방파제 역할을 수행했습니다.',
      '기사단 시대의 심장부인 "기사의 거리(Street of the Knights)"에는 다양한 유적이 남아 있으며, 14세기 기사단이 건설한 그랜드 마스터 궁전은 고딕과 르네상스 양식이 조화를 이룬 웅장한 건축물입니다. 성벽 안에 수천 명의 주민이 거주하며 상점, 레스토랑, 카페가 활발하게 운영되는 살아 있는 중세 도시입니다.',
    ],
    infoTable: [
      { label: '도시', value: '그리스 로도스섬' },
      { label: '주소', value: '' },
      { label: '홈페이지', value: '' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '' },
      { label: '오픈시간', value: '' },
    ],
    googleMapQuery: 'Rhodes,Greece',
    googleMapEmbed: 'https://maps.google.com/maps?q=Rhodes,Greece&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // ── 산토리니 도시 개요 ──
  {
    type: 'tourist-spot',
    id: 'santorini',
    title: '[관광정보] 산토리니 (SANTORINI)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '에게해의 보석, 화산이 빚어낸 절경의 섬 산토리니. 그리스 키클라데스 제도 최남단에 위치한 산토리니는 기원전 17세기경 초대형 화산 폭발로 형성된 깊이 400m의 칼데라 지형과 높이 300m의 수직 절벽 위에 세워진 마을들로 유명합니다.',
      '산토리니를 상징하는 하얀 벽의 큐브형 집들과 파란 돔 지붕의 교회들은 칼데라 절벽 위에 촘촘히 들어서 에게해의 코발트빛 바다와 극적인 대비를 이루며 세계에서 가장 아름다운 풍경 중 하나로 손꼽힙니다. 특히 이아(Oia) 마을은 세계 3대 일몰 명소로 유명합니다.',
      '섬의 수도 피라(Fira) 마을은 칼데라 절벽 위에 매달리듯 자리 잡고 있어 에게해와 화산섬을 한눈에 조망할 수 있으며, 남쪽의 아크로티리 유적지는 기원전 20세기~17세기의 선사시대 도시가 화산재에 덮여 "에게해의 폼페이"라 불리며 고대 문명의 증거를 생생하게 보존하고 있습니다.',
    ],
    infoTable: [
      { label: '도시', value: '그리스 산토리니(티라)섬' },
      { label: '주소', value: '' },
      { label: '홈페이지', value: '' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '' },
      { label: '오픈시간', value: '' },
    ],
    googleMapQuery: 'Santorini,Greece',
    googleMapEmbed: 'https://maps.google.com/maps?q=Santorini,Greece&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // ── 아테네 도시 개요 ──
  {
    type: 'tourist-spot',
    id: 'athens',
    title: '[관광정보] 아테네 (ATHENS)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '서양 문명의 발상지이자 민주주의의 요람, 아테네. 약 3,400년의 역사를 간직한 그리스의 수도 아테네는 고대 그리스 철학, 예술, 학문의 중심지로서 소크라테스, 플라톤, 아리스토텔레스가 활동한 곳입니다. 도시 곳곳에 고대 유적이 현대 도시와 어우러져 있어, 카페에 앉아 커피를 마시며 2,500년 전 신전을 바라보는 독특한 경험을 선사합니다.',
      '아크로폴리스 언덕 위의 파르테논 신전을 필두로, 올림피아 제우스 신전, 고대 아고라, 하드리아누스 도서관 등 수많은 고대 유적지가 밀집해 있으며, 국립 고고학 박물관과 아크로폴리스 박물관에서는 고대 그리스 문명의 정수를 만나볼 수 있습니다.',
      '플라카(Plaka), 모나스티라키(Monastiraki), 프시리(Psyrri) 등 개성 넘치는 구시가지 골목에서는 전통 타베르나에서의 식사와 활기찬 야시장, 옥상 바에서의 야경까지 다채로운 경험이 기다립니다.',
    ],
    infoTable: [
      { label: '도시', value: '유럽 그리스 아테네' },
      { label: '주소', value: '' },
      { label: '홈페이지', value: '' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '' },
      { label: '오픈시간', value: '' },
    ],
    googleMapQuery: 'Athens,Greece',
    googleMapEmbed: 'https://maps.google.com/maps?q=Athens,Greece&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // ── 파나티나이코 스타디움 ──
  {
    type: 'tourist-spot',
    id: 'panathenaic',
    title: '[관광정보] 파나티나이코 스타디움 (PANATHENAIC STADIUM)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '1896년 제1회 근대 올림픽이 개최된 역사적인 경기장으로, 세계에서 유일하게 전체가 대리석으로 만들어진 경기장입니다. 그리스어로 "칼리마르마로(Kallimarmaro)", 즉 "아름다운 대리석"이라는 별명으로도 불리며, 약 5만 명을 수용할 수 있는 U자형 구조를 갖추고 있습니다.',
      '원래 기원전 330년경 고대 아테네의 파나테나이아 축제를 위해 건설된 경기장으로, 기원후 144년 헤로데스 아티쿠스에 의해 대리석으로 재건되었습니다. 이후 천 년 이상 방치되었다가 1869년부터 대규모 복원 공사를 거쳐 1896년 제1회 근대 올림픽의 무대가 되었습니다. 2004년 아테네 올림픽에서는 양궁 경기와 마라톤 결승 지점으로 사용되었습니다.',
      '경기장 내부에는 올림픽의 역사를 한눈에 살펴볼 수 있는 소규모 박물관이 있으며, 한국어를 포함한 11개 국어 오디오 가이드를 통해 풍부한 해설을 들을 수 있습니다. 트랙 위에 서서 올림픽 선수의 기분을 느끼고, 시상대에 올라 기념사진을 찍는 것은 방문객들에게 특별한 추억이 됩니다.',
    ],
    infoTable: [
      { label: '도시', value: '그리스 아테네' },
      { label: '주소', value: 'Archimidous 16, Pangrati, Athens 116 35, Greece' },
      { label: '홈페이지', value: 'https://www.panathenaicstadium.gr' },
      { label: '연락처', value: '+30 210 752 2984' },
      { label: '입장료', value: '성인 €10 / 65세 이상·학생 €5 / 6세 미만 무료' },
      { label: '오픈시간', value: '3월~10월 매일 08:00~19:00 / 11월~2월 매일 08:00~17:00' },
    ],
    googleMapQuery: 'Panathenaic Stadium,Athens,Greece',
    googleMapEmbed: 'https://maps.google.com/maps?q=Panathenaic+Stadium,Athens,Greece&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // ── 아크로폴리스 ──
  {
    type: 'tourist-spot',
    id: 'acropolis',
    title: '[관광정보] 아크로폴리스 (ACROPOLIS OF ATHENS)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '해발 156m의 석회암 언덕 위에 세워진 고대 그리스 최고의 성채로, 유네스코 세계문화유산이자 서양 문명을 대표하는 상징적인 유적지입니다. "높은 도시"를 뜻하는 아크로폴리스는 기원전 5세기 아테네의 황금기에 페리클레스의 지휘 아래 건설되었으며, 2,500년이 넘는 세월 동안 아테네의 스카이라인을 지배해 왔습니다.',
      '언덕 위에는 아테나 여신에게 봉헌된 파르테논 신전을 중심으로, 승리의 여신 니케를 모신 아테나 니케 신전, 성스러운 입구인 프로필레아, 그리고 카리아티드 여인상으로 유명한 에레크테이온 신전이 자리하고 있습니다. 각 건축물은 고대 그리스 건축의 정수인 도리아식·이오니아식 기둥 양식을 완벽하게 구현하고 있습니다.',
      '이른 아침이나 늦은 오후에 방문하면 인파를 피해 여유롭게 관람할 수 있으며, 언덕 위에서 아테네 시내 전경을 360도 파노라마로 감상할 수 있습니다. 인근의 아크로폴리스 박물관에서는 신전에서 출토된 원본 조각품들을 가까이에서 살펴볼 수 있습니다.',
    ],
    infoTable: [
      { label: '도시', value: '그리스 아테네' },
      { label: '주소', value: 'West Slope entrance, near Theorias Street, Athens, Greece' },
      { label: '홈페이지', value: 'https://etickets.tap.gr' },
      { label: '연락처', value: '+30 210 321 4172' },
      { label: '입장료', value: '성인 €30 (시간대별 사전 예약 필수)' },
      { label: '오픈시간', value: '4월~8월 08:00~20:00 / 11월~3월 08:00~17:00' },
    ],
    googleMapQuery: 'Acropolis,Athens,Greece',
    googleMapEmbed: 'https://maps.google.com/maps?q=Acropolis,Athens,Greece&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // ── 신타그마 광장과 국회의사당 ──
  {
    type: 'tourist-spot',
    id: 'syntagma',
    title: '[관광정보] 신타그마 광장 (SYNTAGMA SQUARE & HELLENIC PARLIAMENT)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '신타그마 광장은 "헌법 광장"이라는 뜻으로, 현대 아테네에서 가장 중요한 정치적·역사적 광장입니다. 1843년 국왕 오토 1세가 이곳에서 헌법을 선포한 데서 이름이 유래하였으며, 광장 정면에는 19세기 왕궁 건물을 개조한 그리스 국회의사당이 위풍당당하게 자리하고 있습니다.',
      '국회의사당 정면에는 1932년에 건립된 무명용사의 비가 있으며, 조국을 위해 희생한 모든 무명의 용사들을 기리고 있습니다. 비석에는 고대 그리스 장례 조각을 본뜬 쓰러진 전사의 부조가 새겨져 있으며, 양쪽에는 투키디데스의 "펠로폰네소스 전쟁사"에서 발췌한 페리클레스의 추도 연설문이 각인되어 있습니다.',
      '매시 정각에 에브조네스(Evzones) 근위병의 교대식이 거행되며, 특히 매주 일요일 오전 11시에는 군악대 연주와 함께 대규모 교대식이 펼쳐져 장관을 이룹니다. 에브조네스는 키 187cm 이상의 엘리트 병사들로 구성되며, 전통 그리스 군복인 파우스타넬라와 폼폼이 달린 구두를 착용합니다.',
    ],
    infoTable: [
      { label: '도시', value: '그리스 아테네' },
      { label: '주소', value: 'Plateia Syntagmatos, Athens 105 63, Greece' },
      { label: '홈페이지', value: 'https://www.hellenicparliament.gr/en/' },
      { label: '연락처', value: '+30 210 370 7000' },
      { label: '입장료', value: '무료 (광장·무명용사의 비·교대식 관람)' },
      { label: '오픈시간', value: '광장·교대식 상시 개방 (교대식 매시 정각, 일요일 대규모 교대식 11:00)' },
    ],
    googleMapQuery: 'Syntagma Square,Athens,Greece',
    googleMapEmbed: 'https://maps.google.com/maps?q=Syntagma+Square,Athens,Greece&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // ── 전일 해상 모달 ──
  {
    type: 'cruise-at-sea',
    id: 'cruiseatsea',
    title: '코스타 포르투나호 전일 해상',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '오늘은 종일 해상에서 보내는 날입니다. 코스타 포르투나호의 다양한 시설을 마음껏 즐겨보세요.',
      '3개의 수영장과 6개의 자쿠지에서 일광욕을 즐기며 여유를 만끽하고, 프리미엄 스파에서 여행의 피로를 부드럽게 풀어보세요. 오션뷰 조깅 트랙을 달리거나 최신식 피트니스 센터에서 상쾌하게 땀을 흘리며, 대극장에서 화려한 공연도 관람하실 수 있습니다.',
      '메인 다이닝룸과 뷔페 레스토랑에서 세계 각국의 요리를 즐기시고, 야외 데크에서 광활한 바다의 풍경을 감상하며 특별한 하루를 보내시기 바랍니다.',
    ],
    infoTable: [
      { label: '선박', value: '코스타 포르투나호 (COSTA Fortuna)' },
      { label: '주요 시설', value: '수영장 3개, 자쿠지 6개, 카지노, 극장, 스파' },
      { label: '식사', value: '메인 다이닝룸, 뷔페 레스토랑' },
      { label: '드레스코드', value: '캐주얼 (스마트 캐주얼 권장)' },
    ],
  },

  // ── 승선 수속 안내 모달 ──
  {
    type: 'info',
    id: 'boarding',
    title: '코스타 포르투나호 승선 수속 안내',
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

  // ── 하선 수속 안내 모달 ──
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

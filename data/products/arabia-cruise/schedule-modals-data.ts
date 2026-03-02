import type { ModalData } from '@/data/types';

export const scheduleModalsData: ModalData[] = [
  // ═══════════════════════════════════════════
  // 도시 개요 모달 (4개)
  // ═══════════════════════════════════════════

  {
    type: 'tourist-spot',
    id: 'dubai',
    title: '[관광정보] 두바이 (DUBAI)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '두바이는 아랍에미리트(UAE)의 7개 에미리트 중 하나로, 페르시아만 연안에 위치한 세계적인 관광 및 비즈니스 도시입니다. 세계 최고층 빌딩인 부르즈 칼리파, 인공섬 팜 주메이라, 두바이 프레임 등 초현대적인 랜드마크가 즐비합니다.',
      '전통적인 수크(시장)와 문화 체험부터 럭셔리 쇼핑, 사막 사파리까지 다양한 볼거리와 즐길 거리를 갖추고 있어 매년 약 2천만 명의 해외 관광객이 방문하는 명실상부한 글로벌 관광 도시입니다.',
      '두바이 월드컵, 럭비 세븐스, F1 그랑프리 등 세계적인 스포츠 이벤트도 다수 개최되어 스포츠 관광 분야의 글로벌 리더로 자리매김하고 있습니다.',
    ],
    infoTable: [
      { label: '도시', value: '아시아 아랍에미리트 두바이' },
      { label: '주소', value: '' },
      { label: '홈페이지', value: 'https://www.visitdubai.com' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '' },
      { label: '오픈시간', value: '' },
    ],
    googleMapQuery: 'Dubai,UAE',
    googleMapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462562.65159522237!2d54.89784062652893!3d25.07575945005498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2z65GQ67CU7J20!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr',
  },
  {
    type: 'tourist-spot',
    id: 'muscat',
    title: '[관광정보] 무스카트 (MUSCAT)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '무스카트는 오만의 수도이자 최대 도시로, 오만만(Gulf of Oman) 연안에 위치하고 있습니다. 톱니 모양의 산맥과 해안선이 어우러진 독특한 지형 속에 여러 작은 도시와 마을이 약 25km에 걸쳐 펼쳐져 있습니다.',
      '찬란한 수크와 뛰어난 해산물 요리로 유명하며, 술탄 카부스 그랜드 모스크의 황금빛 돔, 미로 같은 무트라 수크에서의 쇼핑, 해안가의 돌고래 관찰 체험 등이 대표적인 관광 활동입니다.',
      '방문하기 가장 좋은 시기는 9월부터 3월까지이며, 이 기간에는 기온이 25~30도로 쾌적합니다. 신밧드의 모험으로 유명한 역사적인 도시입니다.',
    ],
    infoTable: [
      { label: '도시', value: '아시아 오만 무스카트' },
      { label: '주소', value: '' },
      { label: '홈페이지', value: '' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '' },
      { label: '오픈시간', value: '' },
    ],
    googleMapQuery: 'Muscat,Oman',
    googleMapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232917.8587544!2d58.295!3d23.598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91ffc32e8b5555%3A0xb12e2c59e8e1b3ed!2sMuscat%2C%20Oman!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae',
  },
  {
    type: 'tourist-spot',
    id: 'doha',
    title: '[관광정보] 도하 (DOHA)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '도하는 카타르의 수도이자 최대 도시로, 페르시아만 연안에 위치한 다문화 도시입니다. 진주 채취, 어업, 해상 무역에 의존하던 항구 정착지에서 출발하여, 석유 산업의 발전과 함께 급속한 현대화의 길을 걸어왔습니다.',
      '이슬람 예술 박물관, 사막 장미 형태의 카타르 국립 박물관, 전통 시장 수크 와키프, 7km의 해안 산책로 코르니시 등 다양한 문화·역사 관광지가 있습니다. 더 펄-카타르와 카타라 문화 마을 등 현대적인 명소도 인상적입니다.',
      '방문 성수기는 11월부터 2월까지이며, 사막 사파리, 전통 다우(dhow) 크루즈, 수상 스포츠 등 다양한 액티비티도 즐길 수 있습니다.',
    ],
    infoTable: [
      { label: '도시', value: '아시아 카타르 도하' },
      { label: '주소', value: '' },
      { label: '홈페이지', value: '' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '' },
      { label: '오픈시간', value: '' },
    ],
    googleMapQuery: 'Doha,Qatar',
    googleMapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232917.8587544!2d51.453!3d25.286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x44d9319f78cfd4b1!2sDoha%2C%20Qatar!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae',
  },
  {
    type: 'tourist-spot',
    id: 'abudhabi',
    title: '[관광정보] 아부다비 (ABU DHABI)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '아부다비는 아랍에미리트(UAE)의 연방 수도이자 7개 에미리트 중 가장 큰 에미리트입니다. 약 200개의 섬으로 구성되어 있으며, 해안 섬부터 끝없는 사막 풍경까지 다양한 자연경관을 자랑합니다.',
      '사디야트 문화 지구에는 루브르 아부다비를 비롯하여 건설 중인 구겐하임 박물관과 자연사 박물관이 있어 글로벌 예술·문화 허브로 성장하고 있습니다. 야스 아일랜드에는 F1 레이스 트랙, 테마파크, 골프 코스 등이 갖추어져 있습니다.',
      '셰이크 자이드 그랜드 모스크는 아부다비에서 가장 유명한 문화적 랜드마크이며, 카스르 알 와탄(대통령궁)도 일반에 공개되어 방문 가능합니다.',
    ],
    infoTable: [
      { label: '도시', value: '아시아 아랍에미리트 아부다비' },
      { label: '주소', value: '' },
      { label: '홈페이지', value: '' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '' },
      { label: '오픈시간', value: '' },
    ],
    googleMapQuery: 'Abu Dhabi,UAE',
    googleMapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232917.8587544!2d54.644!3d24.453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e440f723ef2b9%3A0xc7cc2e9341971108!2sAbu%20Dhabi%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae',
  },

  // ═══════════════════════════════════════════
  // 2일차: 두바이 개별 관광지 모달 (3개)
  // ═══════════════════════════════════════════

  {
    type: 'tourist-spot',
    id: 'museumofthefuture',
    title: '두바이 미래 박물관 (Museum of the Future)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '두바이 미래 박물관은 셰이크 자이드 로드에 위치한 두바이의 대표적인 랜드마크로, 2022년에 개관했습니다. 독특한 토러스(원환체) 형태의 은색 건물 외관에 아랍어 캘리그래피가 새겨져 있으며, "세계에서 가장 아름다운 건물" 중 하나로 평가받고 있습니다.',
      '내부에서는 우주 탐사, 기후 변화, 생태계, 건강과 웰빙 등 인류의 미래에 대한 다양한 주제를 몰입형 체험으로 경험할 수 있습니다. 각 층마다 서로 다른 미래 시나리오를 제시하며, 최첨단 기술을 활용한 인터랙티브 전시가 관람객을 사로잡습니다.',
      '두바이 메트로 레드 라인의 에미리트 타워스 역에서 연결 다리를 통해 직접 접근할 수 있어 대중교통 이용이 매우 편리합니다.',
    ],
    infoTable: [
      { label: '도시', value: '아시아 아랍에미리트 두바이' },
      { label: '주소', value: 'Sheikh Zayed Road, Trade Centre 2, Dubai, UAE' },
      { label: '홈페이지', value: 'https://museumofthefuture.ae' },
      { label: '연락처', value: '800 2071' },
      { label: '입장료', value: '성인 AED 149 (약 55,000원)' },
      { label: '오픈시간', value: '매일 09:30~21:00' },
    ],
    googleMapQuery: 'Museum of the Future,Dubai,UAE',
    googleMapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.8!2d55.2805!3d25.2204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4282cb82e1c7%3A0x4c0a35b7e89805aa!2sMuseum%20of%20the%20Future!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae',
  },
  {
    type: 'tourist-spot',
    id: 'palmjumeirah',
    title: '팜 주메이라 전망대 (The View at The Palm)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '더 뷰 앳 더 팜은 팜 주메이라의 팜 타워 52층에 위치한 전망대로, 240미터 높이에서 팜 주메이라 인공섬의 장대한 전경을 360도로 감상할 수 있는 명소입니다.',
      '인터랙티브 디스플레이와 멀티미디어 체험을 통해 팜 주메이라의 건설 과정과 역사를 배울 수 있습니다. 특히 일몰 시간대(프라임 타임 16:30~18:30)에 방문하면 황금빛으로 물드는 두바이의 절경을 감상할 수 있어 가장 인기가 높습니다.',
      '나킬 몰(Nakheel Mall)과 직접 연결되어 있어 쇼핑과 식사를 함께 즐기기에도 편리합니다.',
    ],
    infoTable: [
      { label: '도시', value: '아시아 아랍에미리트 두바이' },
      { label: '주소', value: 'Level 52, The Palm Tower, Palm Jumeirah, Dubai' },
      { label: '홈페이지', value: 'https://www.theviewpalm.ae' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '성인 AED 100~ (약 37,000원~)' },
      { label: '오픈시간', value: '매일 08:00~20:00' },
    ],
    googleMapQuery: 'The View at The Palm,Palm Jumeirah,Dubai,UAE',
    googleMapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.5!2d55.1380!3d25.1970!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6a5e7f12b1e5%3A0x62f7e3e1f8a7c0c1!2sThe%20View%20at%20The%20Palm!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae',
  },
  {
    type: 'tourist-spot',
    id: 'desertsafari',
    title: '사막 사파리 투어 (Desert Safari Dubai)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '두바이 사막 사파리는 도심에서 약 45분 거리의 사막에서 스릴 넘치는 모험과 아라비아 전통 문화를 동시에 체험할 수 있는 두바이 최고 인기 액티비티입니다.',
      '4WD 차량을 타고 모래 언덕을 오르내리는 듄 배싱(Dune Bashing)이 대표적이며, 샌드보딩, 낙타 라이딩, 매사냥 체험 등도 포함됩니다. 사막 캠프에서 아라비아 전통 바비큐 저녁 식사와 벨리댄스, 탄누라 댄스 공연을 관람할 수 있습니다.',
      '간편한 점퍼류 및 슬리퍼나 샌들을 준비하시면 좋습니다.',
    ],
    infoTable: [
      { label: '도시', value: '아시아 아랍에미리트 두바이' },
      { label: '주소', value: '사막 지역 (호텔 픽업 서비스 제공)' },
      { label: '홈페이지', value: 'https://www.arabian-adventures.com' },
      { label: '연락처', value: '+971 4 303 4888' },
      { label: '입장료', value: 'AED 99~350+ (투어 종류에 따라 상이)' },
      { label: '오픈시간', value: '이브닝 사파리: 15:00~21:00' },
    ],
    googleMapQuery: 'Desert Safari Dubai,Al Awir,Dubai,UAE',
    googleMapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57750.0!2d55.4!3d25.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5e4b0f1f0001%3A0x1a2b3c4d5e6f7890!2sDubai%20Desert%20Conservation%20Reserve!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae',
  },

  // ═══════════════════════════════════════════
  // 3일차: 두바이 올드타운 관광지 모달 (7개)
  // ═══════════════════════════════════════════

  {
    type: 'tourist-spot',
    id: 'alseef',
    title: '알시프 (Al Seef)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '알시프는 역사적인 두바이 크릭(Dubai Creek) 해안을 따라 1.8km에 걸쳐 조성된 워터프론트 산책로입니다. 전통 아라비아 건축 양식을 재현한 구역과 현대적인 건축물이 공존하며, 두바이의 과거와 현재를 동시에 경험할 수 있습니다.',
      '다양한 레스토랑, 카페, 부티크 상점이 즐비하며, 크릭을 따라 산책하면서 전통 아브라(수상택시)를 감상하거나 직접 탈 수 있습니다. 에미리트 전통 요리를 맛볼 수 있는 알 파나르(Al Fanar) 레스토랑도 인기 있습니다.',
    ],
    infoTable: [
      { label: '도시', value: '아시아 아랍에미리트 두바이' },
      { label: '주소', value: 'Al Seef St, Al Hamriya, Dubai, UAE' },
      { label: '홈페이지', value: 'https://soukalseef.ae' },
      { label: '연락처', value: '800 637227 (Meraas)' },
      { label: '입장료', value: '무료 (개방형 공공 구역)' },
      { label: '오픈시간', value: '24시간 / 상점: 10:00~22:00' },
    ],
    googleMapQuery: 'Al Seef,Dubai Creek,Dubai,UAE',
    googleMapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.5!2d55.2960!3d25.2585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xd5ef1c1fa79d8f04!2sAl%20Seef!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae',
  },
  {
    type: 'tourist-spot',
    id: 'alfahidi',
    title: '알파히디 역사 지구 (Al Fahidi Historical Neighbourhood)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '알파히디 역사 지구는 두바이에서 가장 오래된 주거 지역 중 하나로, 1800년대에 건설된 전통적인 아랍식 바람탑(Wind Tower) 건축물이 잘 보존되어 있습니다.',
      '두바이 박물관(알 파히디 요새), 커피 박물관, 동전 박물관 등 다양한 소규모 박물관과 갤러리가 있으며, 두바이의 진주 채취 시대와 교역 역사를 생생하게 느낄 수 있는 문화 유산 지구입니다.',
    ],
    infoTable: [
      { label: '도시', value: '아시아 아랍에미리트 두바이' },
      { label: '주소', value: 'Al Fahidi St, Bur Dubai, Dubai, UAE' },
      { label: '홈페이지', value: 'https://dubaiculture.gov.ae' },
      { label: '연락처', value: '+971 4 515 5555' },
      { label: '입장료', value: '무료 (일부 박물관 별도)' },
      { label: '오픈시간', value: '24시간 / 박물관: 08:00~20:00' },
    ],
    googleMapQuery: 'Al Fahidi Historical Neighbourhood,Dubai,UAE',
    googleMapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.8!2d55.2970!3d25.2635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348c4f4c15%3A0x7de423ef952f1f0c!2sAl%20Fahidi%20Historical%20Neighbourhood!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae',
  },
  {
    type: 'tourist-spot',
    id: 'dubaiframe',
    title: '두바이 프레임 (Dubai Frame)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '두바이 프레임은 높이 150미터, 너비 93미터의 거대한 액자 형태의 랜드마크로, "세계에서 가장 큰 액자"로 기네스 세계 기록에 등재되어 있습니다.',
      '꼭대기 스카이데크의 유리 바닥 통로에서 한쪽으로는 올드 두바이(데이라, 부르 두바이), 반대쪽으로는 신도시(셰이크 자이드 로드, 다운타운)의 파노라마 전경을 감상할 수 있습니다.',
    ],
    infoTable: [
      { label: '도시', value: '아시아 아랍에미리트 두바이' },
      { label: '주소', value: 'Gate 4, Al Wasl Road, Zabeel Park, Dubai' },
      { label: '홈페이지', value: 'https://www.dubaiframe.ae' },
      { label: '연락처', value: '+971 800 72453' },
      { label: '입장료', value: '성인 AED 50 (약 18,500원)' },
      { label: '오픈시간', value: '매일 09:00~21:00' },
    ],
    googleMapQuery: 'Dubai Frame,Zabeel Park,Dubai,UAE',
    googleMapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.5!2d55.3005!3d25.2350!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cdb3b0cb08f%3A0x4f9b3e4a2f63c4e5!2sDubai%20Frame!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae',
  },
  {
    type: 'tourist-spot',
    id: 'abra',
    title: '아브라 수상택시 (Abra Water Taxi)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '아브라(Abra)는 두바이 크릭을 오가는 전통 목조 수상택시로, 150척 이상이 버 두바이와 데이라를 잇는 크릭 양안을 수시로 운행합니다. 불과 1디르함(약 370원)의 요금으로 두바이의 역사적인 수로를 건너는 짧지만 인상적인 체험입니다.',
      '크릭을 건너면 한쪽에는 전통 수크와 올드 두바이의 풍경이, 반대편에는 현대적인 스카이라인이 어우러져 두바이의 과거와 현재를 한눈에 볼 수 있습니다.',
    ],
    infoTable: [
      { label: '도시', value: '아시아 아랍에미리트 두바이' },
      { label: '주소', value: 'Bur Dubai Abra Station ~ Deira Old Souk Abra Station' },
      { label: '홈페이지', value: 'https://www.rta.ae' },
      { label: '연락처', value: '8009090 (RTA)' },
      { label: '입장료', value: '편도 AED 1 (약 370원)' },
      { label: '오픈시간', value: '매일 05:00~24:00' },
    ],
    googleMapQuery: 'Abra Water Taxi Station,Dubai Creek,Dubai,UAE',
    googleMapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.5!2d55.2955!3d25.2665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434ef23e7dd7%3A0x2e5b0a3c8f1d5e2a!2sBur%20Dubai%20Abra%20Station!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae',
  },
  {
    type: 'tourist-spot',
    id: 'goldsouq',
    title: '골드수크 (Gold Souq, Deira)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '데이라 골드수크는 세계 최대의 금 시장으로, 300개 이상의 보석상과 금세공 상점이 밀집해 있습니다. 황금빛으로 반짝이는 쇼윈도가 양쪽으로 늘어선 아케이드 골목을 걷는 것만으로도 눈이 즐겁습니다.',
      '두바이는 금에 대한 부가가치세(VAT)가 5%로 매우 낮아 세계 어디보다 합리적인 가격으로 금을 구매할 수 있습니다. 가격 흥정이 일반적이며, 금의 순도와 품질은 두바이 정부가 엄격하게 관리합니다.',
    ],
    infoTable: [
      { label: '도시', value: '아시아 아랍에미리트 두바이' },
      { label: '주소', value: 'Gold Souq, Al Khor St, Al Ras, Deira, Dubai' },
      { label: '홈페이지', value: 'https://www.visitdubai.com' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '무료 (개방형 시장)' },
      { label: '오픈시간', value: '토~목 10:00~22:00, 금 16:00~22:00' },
    ],
    googleMapQuery: 'Gold Souq,Deira,Dubai,UAE',
    googleMapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.0!2d55.2960!3d25.2718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4343b3c0a4c5%3A0x1a3b5c7d9e0f1234!2sGold%20Souk!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae',
  },
  {
    type: 'tourist-spot',
    id: 'soukmedinatjumeirah',
    title: '수크 메디나 쥬메이라 (Souk Madinat Jumeirah)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '수크 메디나 쥬메이라는 마디나 주메이라 리조트 단지 내에 위치한 고급 전통 스타일 시장으로, 수공예품, 기념품, 향신료, 패션 아이템 등을 판매하는 부티크가 들어서 있습니다.',
      '가장 큰 매력은 수크에서 바라보는 버즈 알아랍(Burj Al Arab)의 전경으로, 특히 석양 무렵에는 최고의 포토 스팟으로 인기를 누립니다. 수로 위의 전통 아브라(목조 보트) 탑승도 가능합니다.',
    ],
    infoTable: [
      { label: '도시', value: '아시아 아랍에미리트 두바이' },
      { label: '주소', value: '6 Al Sufouh Rd, Madinat Jumeirah, Dubai' },
      { label: '홈페이지', value: 'https://www.soukmadinatjumeirah.ae' },
      { label: '연락처', value: '+971 4 366 8888' },
      { label: '입장료', value: '무료' },
      { label: '오픈시간', value: '상점: 10:00~23:00' },
    ],
    googleMapQuery: 'Souk Madinat Jumeirah,Dubai,UAE',
    googleMapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.0!2d55.1855!3d25.1335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b7c3e1f2345%3A0xa1b2c3d4e5f67890!2sSouk%20Madinat%20Jumeirah!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae',
  },
  {
    type: 'tourist-spot',
    id: 'burjalarab',
    title: '버즈 알아랍 (Burj Al Arab)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '버즈 알아랍은 1999년에 개장한 두바이의 상징적인 초호화 호텔로, 높이 321미터의 돛 형태 건축물이 주메이라 해안에서 280미터 떨어진 인공섬 위에 세워져 있습니다. 세계 유일의 "7성급 호텔"로 불립니다.',
      '내부에는 24캐럿 금박 장식과 크리스탈 천장이 있어 극도의 럭셔리를 상징합니다. 최근 일반 대중에게 "인사이드 버즈 알아랍" 가이드 투어가 공개되어 로열 스위트를 포함한 호텔 내부를 둘러볼 수 있습니다.',
    ],
    infoTable: [
      { label: '도시', value: '아시아 아랍에미리트 두바이' },
      { label: '주소', value: 'Jumeirah Street, Umm Suqeim 3, Dubai' },
      { label: '홈페이지', value: 'https://www.jumeirah.com' },
      { label: '연락처', value: '+971 4 301 7777' },
      { label: '입장료', value: '투어 AED 249~ (약 92,000원~)' },
      { label: '오픈시간', value: '투어 매일 10:00~19:00' },
    ],
    googleMapQuery: 'Burj Al Arab,Dubai,UAE',
    googleMapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.2!2d55.1853!3d25.1412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6a576f635331%3A0x53abe44f0f3dc0e6!2sBurj%20Al%20Arab!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae',
  },

  // ═══════════════════════════════════════════
  // 7일차: 아부다비 관광지 모달 (3개)
  // ═══════════════════════════════════════════

  {
    type: 'tourist-spot',
    id: 'louvreabudhabi',
    title: '루브르 아부다비 (Louvre Abu Dhabi)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '루브르 아부다비는 사디야트 섬의 문화 지구에 위치한 세계적인 미술관으로, 장 누벨이 설계한 지름 180미터의 거대한 돔이 특징적입니다. 돔의 기하학적 패턴을 통해 쏟아지는 빛이 "빛의 비(Rain of Light)"라는 환상적인 효과를 만들어냅니다.',
      '선사시대부터 현대에 이르기까지 인류 문명의 역사를 조명하는 600여 점의 상설 전시 작품을 소장하고 있으며, 레오나르도 다 빈치, 클로드 모네, 반 고흐 등 서양 거장의 작품부터 이슬람 예술까지 다양한 문화권의 작품을 한 공간에서 만날 수 있습니다.',
      '건물 자체가 바다 위에 떠 있는 듯한 구조로, 박물관 외부의 해안 산책로와 수변 공간도 인상적입니다.',
    ],
    infoTable: [
      { label: '도시', value: '아시아 아랍에미리트 아부다비' },
      { label: '주소', value: 'Saadiyat Cultural District, Saadiyat Island, Abu Dhabi' },
      { label: '홈페이지', value: 'https://www.louvreabudhabi.ae' },
      { label: '연락처', value: '+971 600 56 55 66' },
      { label: '입장료', value: '성인 AED 63 (약 23,000원), 13세 미만 무료' },
      { label: '오픈시간', value: '화~일 10:00~18:30, 월요일 휴관' },
    ],
    googleMapQuery: 'Louvre Abu Dhabi,Saadiyat Island,Abu Dhabi,UAE',
    googleMapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.0!2d54.3983!3d24.5336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e65e54b3d368b%3A0x6c7505e3f7a0e4a7!2sLouvre%20Abu%20Dhabi!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae',
  },
  {
    type: 'tourist-spot',
    id: 'presidentialpalace',
    title: '카스르 알 와탄 — 아부다비 대통령궁 (Qasr Al Watan)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '카스르 알 와탄은 "국가의 궁전"이라는 뜻으로, 실제로 사용 중인 UAE 대통령 관저이면서 2019년부터 일반 대중에게 공개된 매우 특별한 문화 명소입니다.',
      '순백의 대리석과 화강암으로 지어진 웅장한 건물 내부에는 그레이트 홀, 대통령 선물 전시실, 도서관 등이 있습니다. 그레이트 홀의 거대한 돔과 정교한 기하학적 패턴의 장식은 감탄을 자아냅니다.',
      '"팰리스 인 모션(Palace in Motion)" 쇼는 궁전 외벽을 캔버스로 활용한 야간 빛 공연으로, 방문의 하이라이트입니다.',
    ],
    infoTable: [
      { label: '도시', value: '아시아 아랍에미리트 아부다비' },
      { label: '주소', value: 'Ras Al Akhdar, Abu Dhabi, UAE' },
      { label: '홈페이지', value: 'https://www.qasralwatan.ae' },
      { label: '연락처', value: '+971 600 544 442' },
      { label: '입장료', value: '성인 AED 65 (약 24,000원), 어린이 AED 30' },
      { label: '오픈시간', value: '매일 11:00~18:30' },
    ],
    googleMapQuery: 'Qasr Al Watan,Abu Dhabi,UAE',
    googleMapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.5!2d54.3168!3d24.4624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e6600af4b5b07%3A0x4d34e3b8f3a5c0e4!2sQasr%20Al%20Watan!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae',
  },
  {
    type: 'tourist-spot',
    id: 'grandmosque',
    title: '셰이크 자이드 그랜드 모스크 (Sheikh Zayed Grand Mosque)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '셰이크 자이드 그랜드 모스크는 82개의 돔, 4개의 미나렛(높이 107미터), 1,000개 이상의 기둥으로 이루어진 세계 최대급 모스크로, 최대 40,000명을 수용할 수 있습니다.',
      '내부에는 세계 최대의 수제 카펫(5,627m², 무게 35톤)과 세계에서 가장 큰 샹들리에 중 하나(직경 10미터, 스와로브스키 크리스탈)가 있습니다. 대리석 바닥의 정교한 꽃 모자이크 문양도 예술적 가치가 매우 높습니다.',
      '무슬림이 아닌 방문객도 자유롭게 입장 가능하며 입장료는 무료입니다. 단, 긴 소매와 발목까지 오는 헐렁한 옷 착용 필수이며, 여성은 머리 스카프를 착용해야 합니다.',
    ],
    infoTable: [
      { label: '도시', value: '아시아 아랍에미리트 아부다비' },
      { label: '주소', value: 'Sheikh Rashid Bin Saeed St, Abu Dhabi, UAE' },
      { label: '홈페이지', value: 'https://www.szgmc.gov.ae' },
      { label: '연락처', value: '+971 2 419 1919' },
      { label: '입장료', value: '무료' },
      { label: '오픈시간', value: '토~목 09:00~21:00, 금 09:00~12:00·15:00~21:00' },
    ],
    googleMapQuery: 'Sheikh Zayed Grand Mosque,Abu Dhabi,UAE',
    googleMapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.0!2d54.4743!3d24.4128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e441f42415109%3A0x56b2edf44fe1401e!2sSheikh%20Zayed%20Grand%20Mosque!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae',
  },

  // ═══════════════════════════════════════════
  // 8일차: 두바이 관광지 모달 (3개)
  // ═══════════════════════════════════════════

  {
    type: 'tourist-spot',
    id: 'dubaipalace',
    title: '두바이 왕궁 (Zabeel Palace)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '자빌 궁전(Zabeel Palace)은 두바이 통치 가문인 알 막툼 가문의 공식 거주지이자 행정 본부로, 현재 두바이 통치자 셰이크 모하메드 빈 라시드 알 막툼의 거처이기도 합니다.',
      '왕궁 자체는 일반 대중에게 개방되지 않지만, 긴 진입로를 따라 궁전 정문까지 접근하여 웅장한 외관과 아름다운 정원을 감상할 수 있습니다. 궁전 인근의 자빌 공원은 두바이 최대의 공원입니다.',
    ],
    infoTable: [
      { label: '도시', value: '아시아 아랍에미리트 두바이' },
      { label: '주소', value: "Zaa'beel Palace St, Za'abeel 2, Dubai" },
      { label: '홈페이지', value: '' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '무료 (외부 관람만 가능)' },
      { label: '오픈시간', value: '주간 시간대 외부 관람 권장' },
    ],
    googleMapQuery: 'Zabeel Palace,Dubai,UAE',
    googleMapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.5!2d55.3050!3d25.2280!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cf8e0b4c8d5%3A0x2a3b4c5d6e7f8901!2sZabeel%20Palace!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae',
  },
  {
    type: 'tourist-spot',
    id: 'palmmonorail',
    title: '팜 모노레일 (Palm Monorail)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '팜 모노레일은 팜 주메이라 인공섬을 관통하는 5.45km 길이의 자동 운행 모노레일 시스템으로, 2009년에 개통되었습니다. 편도 약 5~10분이 소요되며, 팜 주메이라의 독특한 인공섬 경관을 차창 밖으로 감상할 수 있습니다.',
      '게이트웨이 역에서 아틀란티스 아쿠아벤처까지 4개의 역을 연결하며, 양쪽의 프론드(야자나무 잎 모양)와 주거 지역의 전경을 한눈에 볼 수 있는 독특한 교통수단입니다.',
    ],
    infoTable: [
      { label: '도시', value: '아시아 아랍에미리트 두바이' },
      { label: '주소', value: 'Palm Jumeirah, Gateway Station, Dubai' },
      { label: '홈페이지', value: 'https://www.palmmonorail.com' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '편도 AED 5~ (약 1,850원~)' },
      { label: '오픈시간', value: '09:00~22:00' },
    ],
    googleMapQuery: 'Palm Monorail Gateway Station,Palm Jumeirah,Dubai,UAE',
    googleMapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.5!2d55.1480!3d25.1120!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6a4c3e2d1b09%3A0x4a5b6c7d8e9f0123!2sPalm%20Monorail%20Gateway%20Station!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae',
  },
  {
    type: 'tourist-spot',
    id: 'jbrwalk',
    title: 'JBR 더 워크 (The Walk at JBR)',
    images: ['/shared/placeholder.png'],
    descriptions: [
      'JBR 더 워크는 주메이라 비치 레지던스 단지 내에 위치한 1.7km 길이의 해변 워터프론트 산책로입니다. 다양한 상점, 레스토랑, 카페가 밀집해 있어 두바이에서 가장 활기찬 아웃도어 쇼핑·다이닝 공간 중 하나입니다.',
      '해변과 바로 접해 있어 산책로에서 곧바로 JBR 비치로 나갈 수 있으며, 수상 스포츠, 선탠, 해변 산책 등을 즐길 수 있습니다. 주말에는 야외 시장과 거리 공연이 열리기도 합니다.',
    ],
    infoTable: [
      { label: '도시', value: '아시아 아랍에미리트 두바이' },
      { label: '주소', value: 'The Walk, Jumeirah Beach Residence (JBR), Dubai' },
      { label: '홈페이지', value: 'https://jbr.ae' },
      { label: '연락처', value: '' },
      { label: '입장료', value: '무료 (개방형 공공 구역)' },
      { label: '오픈시간', value: '24시간 / 상점: 10:00~23:00' },
    ],
    googleMapQuery: 'JBR The Walk,Jumeirah Beach Residence,Dubai,UAE',
    googleMapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.5!2d55.1320!3d25.0780!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b5e5c3a2d17%3A0x8e9f0a1b2c3d4e5f!2sThe%20Walk%20-%20JBR!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae',
  },

  // ═══════════════════════════════════════════
  // 전일 해상 모달 (1개)
  // ═══════════════════════════════════════════

  {
    type: 'cruise-at-sea',
    id: 'cruiseatsea',
    title: '코스타 토스카나 전일 해상',
    images: ['/shared/placeholder.png'],
    descriptions: [
      '선내 자유시간: 수준 높은 무료 공연 관람 및 다채로운 부대시설 이용',
    ],
    bulletPoints: [
      '솔레미오 스파에서 탈라소테라피와 사우나로 여행의 피로를 부드럽게 풀어보세요.',
      '4개의 수영장과 자쿠지에서 일광욕을 즐기며 여유롭게 휴식을 취해보세요.',
      '유리 바닥 스카이워크에서 발아래 펼쳐진 바다를 감상해 보세요.',
      '폴트로나 프라우 아레나 극장에서 화려한 공연을 관람해 보세요.',
      '댄스 강좌, 요가, 빙고 등 매일 다채롭게 열리는 선내 프로그램에 참여해 보세요.',
    ],
    closingText: '잔잔한 바다 한가운데서 누리는 이 모든 휴식이 크루즈 여행의 진정한 매력입니다.',
    infoTable: [
      { label: '선박', value: '코스타 토스카나 (Costa Toscana)' },
      { label: '주요 시설', value: '4개 수영장, 스파, 카지노, 극장, 워터슬라이드' },
      { label: '식사', value: '13개 레스토랑, 19개 바/라운지' },
      { label: '드레스코드', value: '캐주얼 (스마트 캐주얼 권장)' },
    ],
  },

  // ═══════════════════════════════════════════
  // 승선/하선 수속 안내 모달 (2개)
  // ═══════════════════════════════════════════

  {
    type: 'info',
    id: 'boarding',
    title: '코스타 토스카나 승선 수속 안내',
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
            text: '승선 후 안내에 따라 지정된 장소에서 위급 상황 대처 교육을 이수해야 합니다.',
            bold: '필수 안전 교육(Safety Drill):',
            subItems: [
              { text: '미이수 시 발생하는 실제 상황 (필독)', isWarning: true },
              { text: '선사 시스템은 실시간으로 미이수자를 파악합니다. 교육을 마칠 때까지 이름이 공공연하게 방송되거나, 승무원이 선실로 직접 찾아와 참여를 독촉합니다.', bold: '끝까지 찾아내는 실시간 추적:' },
              { text: '교육 미완료 시 선상 카드(SeaPass 등)가 정지됩니다. 이 경우 바(Bar)에서 음료 주문, 면세점 쇼핑, 카지노 이용 및 유료 레스토랑 예약 등 배 안의 모든 결제와 서비스 이용이 거부될 수 있습니다.', bold: '선상 카드 및 모든 유료 서비스 정지:' },
              { text: '국제 해상법(SOLAS)에 의거, 끝내 불응할 경우 선장은 승객을 다음 기항지에서 강제로 내리게 할 권한이 있습니다.', bold: '선장 권한에 의한 \'강제 하선\' 조치:' },
              { text: '규정 위반으로 인한 하선이므로 잔여 일정 환불이 전혀 안 되며, 집으로 돌아가는 항공편 비용도 본인이 직접 부담해야 하는 가장 심각한 상황이 발생할 수 있습니다.', isWarning: true, bold: '환불 및 보상 불가:' },
            ],
          },
          { text: '선사에서 운영하는 기항지 투어(영어 진행)는 조기 마감될 수 있으므로 승선 첫날 신청하시기를 권장합니다. (변경/취소 시 수수료 발생 가능)', bold: '기항지 선택 관광:' },
        ],
      },
    ],
  },
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

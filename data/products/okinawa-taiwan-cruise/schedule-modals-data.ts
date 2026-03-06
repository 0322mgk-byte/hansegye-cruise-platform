import type { ModalData } from '@/data/types';

export const scheduleModalsData: ModalData[] = [
  // ── Tourist Spot Modals ──

  // Day 1: 대만
  {
    type: "tourist-spot",
    id: "taiwan",
    title: "[관광정보] 대만 (TAIWAN)",
    images: ["/shared/placeholder.png"],
    descriptions: [
      "대만 북부는 수도 타이베이(Taipei)를 중심으로 신베이(New Taipei City), 지룽(Keelung) 일대를 아우르는 대만 최대의 관광 권역이다.",
      "도심을 벗어나면 북부 해안과 산간 지역에 자연경관과 역사가 어우러진 매력적인 당일 여행지가 펼쳐진다. 기암괴석이 늘어선 예류지질공원, 하늘로 천등을 날리는 스펀, 홍등으로 물든 계단 골목의 지우펀 등은 타이베이에서 1~1.5시간 거리에 위치해 당일치기 코스로 큰 인기를 얻고 있다.",
      "대만 북부를 여행하기 가장 좋은 시기는 기온이 온화하고 강수량이 적은 가을(9~12월)이다. 여름에는 고온다습한 날씨가 이어지지만, 야시장 먹거리와 망고 빙수 등 열대 미식을 즐기기에 최적이다.",
    ],
    infoTable: [
      { label: "도시", value: "아시아 대만 북부" },
      { label: "주소", value: "" },
      { label: "홈페이지", value: "" },
      { label: "연락처", value: "" },
      { label: "입장료", value: "" },
      { label: "오픈시간", value: "" },
    ],
    googleMapQuery: "Northern Taiwan",
    googleMapEmbed: "https://maps.google.com/maps?q=Northern+Taiwan&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
  {
    type: "tourist-spot",
    id: "yehliu",
    title: "[관광정보] 예류지질공원 (YEHLIU GEOPARK)",
    images: ["/shared/placeholder.png"],
    descriptions: [
      "예류지질공원은 대만 북부 해안 만리(Wanli) 지역에 위치한 세계적인 지질 명소로, 약 1,700m 길이의 곶 위에 수천만 년에 걸친 해식·풍식 작용이 빚어낸 기암괴석이 줄지어 서 있다.",
      "그중에서도 버섯 모양으로 깎인 '여왕머리바위(Queen's Head)'가 가장 유명한데, 오랜 침식으로 목 부분이 점차 가늘어지고 있어 머지않아 자연 붕괴가 예상되므로 지금이 방문 적기라 할 수 있다.",
      "공원 내부에는 여왕머리바위 외에도 촛대바위, 버섯바위, 아이스크림바위, 공주바위 등 독특한 형상의 암석이 약 180여 개 분포하며, 해안 산책로를 따라 태평양의 탁 트인 바다 풍경을 감상할 수 있다.",
    ],
    infoTable: [
      { label: "위치", value: "신베이시 만리구, 대만" },
      { label: "주소", value: "No. 167-1, Kantung Rd., Yehliu Village, Wanli District, New Taipei City" },
      { label: "홈페이지", value: "https://www.ylgeopark.org.tw" },
      { label: "연락처", value: "+886-2-2492-2016" },
      { label: "입장료", value: "성인 NT$80 (약 3,500원)" },
      { label: "오픈시간", value: "매일 08:00~17:00 (5~8월은 08:00~18:00)" },
    ],
    googleMapQuery: "Yehliu Geopark,Wanli,New Taipei,Taiwan",
    googleMapEmbed: "https://maps.google.com/maps?q=Yehliu+Geopark,Wanli,New+Taipei,Taiwan&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
  {
    type: "tourist-spot",
    id: "shifen",
    title: "[관광정보] 스펀 (SHIFEN)",
    images: ["/shared/placeholder.png"],
    descriptions: [
      "스펀(十分)은 타이베이 동쪽 핑시(Pingxi) 산간 지역에 자리한 작은 철도 마을로, 기찻길 양옆으로 상점이 빼곡히 늘어선 스펀 올드스트리트가 대표 명소이다.",
      "이곳의 가장 큰 매력은 철도 위에서 직접 천등(sky lantern)에 소원을 적어 하늘로 날리는 체험으로, 열기구 원리로 떠오르는 형형색색의 천등이 산골짜기 하늘을 수놓는 장면은 대만 여행의 상징적 풍경이 되었다.",
      "올드스트리트에서 도보 약 20~30분 거리에는 '대만의 나이아가라'라 불리는 스펀 폭포도 있으며, 기차가 올드스트리트 한가운데를 통과하는 독특한 풍경도 이곳만의 볼거리이다.",
    ],
    infoTable: [
      { label: "위치", value: "신베이시 핑시구, 대만" },
      { label: "주소", value: "No. 81, Shifen St., Pingxi District, New Taipei City" },
      { label: "홈페이지", value: "https://newtaipei.travel/en/attractions/detail/111989" },
      { label: "연락처", value: "" },
      { label: "입장료", value: "무료 (천등 체험 NT$150~250)" },
      { label: "오픈시간", value: "연중 개방, 상점 09:00~18:00" },
    ],
    googleMapQuery: "Shifen Old Street,Pingxi,New Taipei,Taiwan",
    googleMapEmbed: "https://maps.google.com/maps?q=Shifen+Old+Street,Pingxi,New+Taipei,Taiwan&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
  {
    type: "tourist-spot",
    id: "jiufen",
    title: "[관광정보] 지우펀 (JIUFEN)",
    images: ["/shared/placeholder.png"],
    descriptions: [
      "지우펀(九份)은 신베이시 루이팡구의 산비탈에 자리한 옛 금광 마을로, 19세기 말 골드러시 시절 번성했다가 광산 폐쇄 이후 쇠락한 뒤, 1989년 영화 '비정성시(A City of Sadness)'의 촬영지로 알려지며 다시 관광 명소로 부활했다.",
      "좁은 계단식 골목 양쪽으로 붉은 홍등이 빼곡히 걸린 풍경이 스튜디오 지브리 애니메이션 '센과 치히로의 행방불명'의 배경을 연상시킨다고 하여 일본과 한국 관광객 사이에서 폭발적 인기를 얻고 있다.",
      "메인 거리인 지산제(基山街)에는 토란 경단, 어묵, 땅콩 아이스크림 롤 등 대만 전통 간식을 파는 상점이 줄지어 있으며, 해질녘에 홍등이 하나둘 켜지기 시작하면 마을 전체가 황금빛으로 물드는 환상적인 야경을 만끽할 수 있다.",
    ],
    infoTable: [
      { label: "위치", value: "신베이시 루이팡구, 대만" },
      { label: "주소", value: "Jishan Street, Ruifang District, New Taipei City, Taiwan" },
      { label: "홈페이지", value: "https://newtaipei.travel/en/attractions/detail/402755" },
      { label: "연락처", value: "+886-2-2406-3270" },
      { label: "입장료", value: "무료" },
      { label: "오픈시간", value: "상점 10:00~20:00 (주말 ~21:00)" },
    ],
    googleMapQuery: "Jiufen Old Street,Ruifang,New Taipei,Taiwan",
    googleMapEmbed: "https://maps.google.com/maps?q=Jiufen+Old+Street,Ruifang,New+Taipei,Taiwan&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },

  // Day 3: 미야코지마
  {
    type: "tourist-spot",
    id: "miyakojima",
    title: "[관광정보] 미야코지마 (MIYAKOJIMA)",
    images: ["/shared/placeholder.png"],
    descriptions: [
      "미야코지마는 일본 오키나와현 남서쪽 해상에 자리한 산호초 섬으로, 일본에서 가장 아름다운 해변을 품고 있는 열대 낙원이다.",
      "'동양의 몰디브'라는 별명답게 요나하 마에하마 해변, 스나야마 해변, 요시노 해안 등 일본 최고 수준의 백사장 해변이 줄지어 있으며, 섬에는 높은 산이나 큰 하천이 없어 토사가 바다로 유입되지 않기 때문에 에메랄드빛으로 빛나는 투명한 바닷물이 연중 유지된다.",
      "이라부 대교(3.5km), 이게마 대교(1.4km), 구리마 대교(1.7km) 등 인접 섬들과 연결된 장대한 다리들이 코발트빛 바다 위를 가로지르며 그 자체로 절경을 이루며, 일본 최대 규모의 산호초 군락인 '야비지'에서는 스노클링과 다이빙을 즐길 수 있다.",
    ],
    infoTable: [
      { label: "도시", value: "오키나와현 미야코지마시, 일본" },
      { label: "주소", value: "" },
      { label: "면적", value: "약 158.7km² (미야코섬 본섬 기준)" },
      { label: "인구", value: "약 53,000명" },
      { label: "기후", value: "아열대 해양성 기후, 연평균 기온 약 23°C" },
    ],
    googleMapQuery: "Miyakojima,Okinawa,Japan",
    googleMapEmbed: "https://maps.google.com/maps?q=Miyakojima,Okinawa,Japan&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },

  // Day 4: 나하
  {
    type: "tourist-spot",
    id: "naha",
    title: "[관광정보] 나하 (NAHA)",
    images: ["/shared/placeholder.png"],
    descriptions: [
      "나하는 일본 최남단에 위치한 오키나와현의 행정, 경제, 문화 중심지로, 약 32만 명의 인구가 거주하는 활기찬 도시이다.",
      "과거 류큐 왕국(1429~1879)의 수도로서 500년 이상의 독자적인 역사와 문화를 간직하고 있으며, 동남아시아, 중국, 일본 본토를 잇는 해상 무역의 거점 역할을 해왔다.",
      "세계문화유산 슈리성을 비롯한 역사 유적, 아열대 기후가 만들어낸 아름다운 자연, 그리고 독특한 류큐 문화가 어우러져 매년 수백만 명의 관광객이 찾는 인기 여행지이다. 오키나와 고유의 음식 문화(소키소바, 고야찬푸루, 아와모리 등)와 전통 공예(류큐 유리, 시사 도자기, 빈가타 염색) 체험도 나하 여행의 큰 매력이다.",
    ],
    infoTable: [
      { label: "도시", value: "오키나와현 나하시, 일본" },
      { label: "주소", value: "" },
      { label: "인구", value: "약 320,000명" },
      { label: "기후", value: "아열대 해양성 기후, 연평균 기온 약 23°C" },
      { label: "주요 관광지", value: "슈리성, 국제거리, 마키시 공설시장" },
    ],
    googleMapQuery: "Naha,Okinawa,Japan",
    googleMapEmbed: "https://maps.google.com/maps?q=Naha,Okinawa,Japan&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
  {
    type: "tourist-spot",
    id: "dmmkariyushi",
    title: "[관광정보] DMM카리유시 수족관 (DMM KARIYUSHI AQUARIUM)",
    images: ["/shared/placeholder.png"],
    descriptions: [
      "DMM카리유시 수족관은 2020년 5월에 오픈한 오키나와의 차세대 체험형 수족관으로, '살아있는 것과의 교감'을 컨셉으로 최신 영상기술과 실제 생물 전시를 결합한 새로운 형태의 엔터테인먼트 수족관이다.",
      "약 190종, 5,000점 이상의 생물을 전시하며, 관람 동선은 '바다의 세계'와 '숲의 세계' 두 가지 존으로 나뉜다. 바닥이 투명한 유리로 된 수조 위를 걸으며 상어와 가오리를 내려다보는 체험, 펭귄과 나무늘보를 가까이에서 관찰하는 코너가 인기가 높다.",
      "나하 공항에서 자동차로 약 20분 거리에 있어 접근성이 우수하며, 같은 건물 내 이아스 쇼핑몰에서 식사와 쇼핑을 함께 즐길 수 있어 가족 여행객과 커플에게 특히 추천된다.",
    ],
    infoTable: [
      { label: "위치", value: "토미구스쿠시, 오키나와현, 일본" },
      { label: "주소", value: "〒901-0225 沖縄県豊見城市豊崎3-35" },
      { label: "홈페이지", value: "https://kariyushi-aquarium.com/" },
      { label: "연락처", value: "+81-98-996-4844" },
      { label: "입장료", value: "성인 2,800엔 / 중인(13~17세) 2,200엔 / 소인(4~12세) 1,700엔" },
      { label: "오픈시간", value: "매일 09:00~19:00" },
    ],
    googleMapQuery: "DMM Kariyushi Aquarium,Okinawa,Japan",
    googleMapEmbed: "https://maps.google.com/maps?q=DMM+Kariyushi+Aquarium,Okinawa,Japan&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
  {
    type: "tourist-spot",
    id: "iiasokinawa",
    title: "[관광정보] 이아스 이온몰 (IIAS OKINAWA TOYOSAKI)",
    images: ["/shared/placeholder.png"],
    descriptions: [
      "이아스 오키나와 토요사키는 2020년 6월에 오키나와 남부 토미구스쿠시에 오픈한 대형 복합 쇼핑몰로, 오키나와 남부 최대 규모를 자랑한다.",
      "약 150개 이상의 점포가 입점해 있으며, 패션, 잡화, 가전, 식료품 등 다양한 분야의 쇼핑을 한곳에서 즐길 수 있다. 건물 내에는 DMM카리유시 수족관도 함께 위치하고 있어 쇼핑과 레저를 동시에 즐길 수 있는 복합 문화 공간이다.",
      "오키나와 향토 요리점부터 일식, 양식, 카페까지 다양한 레스토랑이 입점해 있으며, 면세 쇼핑 서비스(택스프리)도 제공하여 외국인 관광객에게 특히 인기가 높다. 토요사키 해변과도 인접해 있어 해양 레저 후 쇼핑을 즐기기에도 안성맞춤이다.",
    ],
    infoTable: [
      { label: "위치", value: "토미구스쿠시, 오키나와현, 일본" },
      { label: "주소", value: "〒901-0225 沖縄県豊見城市豊崎3-35" },
      { label: "홈페이지", value: "https://toyosaki.iias.jp/" },
      { label: "연락처", value: "+81-98-840-6900" },
      { label: "입장료", value: "무료 (쇼핑몰 입장 무료, 주차장 무료)" },
      { label: "오픈시간", value: "매장 10:00~21:00 / 레스토랑 11:00~23:00" },
    ],
    googleMapQuery: "iias OKINAWA TOYOSAKI,Okinawa,Japan",
    googleMapEmbed: "https://maps.google.com/maps?q=iias+OKINAWA+TOYOSAKI,Okinawa,Japan&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
  {
    type: "tourist-spot",
    id: "shuricastle",
    title: "[관광정보] 슈리성 (SHURI CASTLE)",
    images: ["/shared/placeholder.png"],
    descriptions: [
      "슈리성은 14세기 말에 창건되어 약 500년간 류큐 왕국의 정치, 외교, 문화의 중심지 역할을 한 궁전으로, 2000년에 유네스코 세계문화유산 '류큐 왕국의 구스쿠 및 관련 유산군'의 일부로 등재되었다.",
      "나하 시내가 한눈에 내려다보이는 구릉 위에 자리 잡고 있으며, 선명한 주홍색의 정전(正殿)은 중국과 일본 건축 양식이 융합된 류큐 특유의 건축미를 보여준다. 2019년 화재로 정전이 소실되었으며, 현재 2026년 가을 완공을 목표로 복원 공사가 진행 중이다.",
      "화재 피해를 입지 않은 성벽, 성문(슈레이몬, 칸카이몬 등), 정원 등은 정상적으로 관람할 수 있으며, 복원 과정 자체가 하나의 관광 콘텐츠로 방문객들에게 공개되고 있다.",
    ],
    infoTable: [
      { label: "위치", value: "나하시, 오키나와현, 일본" },
      { label: "주소", value: "〒903-0815 沖縄県那覇市首里金城町1-2" },
      { label: "홈페이지", value: "https://oki-park.jp/shurijo/" },
      { label: "연락처", value: "+81-98-886-2020" },
      { label: "입장료", value: "성인 400엔 / 고등학생 300엔 / 초중학생 160엔" },
      { label: "오픈시간", value: "08:00~18:30 (계절별 변동, 7~9월 ~20:30)" },
    ],
    googleMapQuery: "Shuri Castle,Naha,Okinawa,Japan",
    googleMapEmbed: "https://maps.google.com/maps?q=Shuri+Castle,Naha,Okinawa,Japan&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
  {
    type: "tourist-spot",
    id: "kokusaistreet",
    title: "[관광정보] 국제거리 (KOKUSAI STREET)",
    images: ["/shared/placeholder.png"],
    descriptions: [
      "국제거리(코쿠사이도리)는 나하 시내 중심부를 관통하는 약 1.6km 길이의 메인 스트리트로, 오키나와 최대의 번화가이자 관광 쇼핑 거리이다. 제2차 세계대전 후 폐허에서 가장 빠르게 부흥한 거리라는 의미에서 '기적의 1마일'이라는 별명으로 불린다.",
      "약 600여 개의 상점, 레스토랑, 호텔, 기념품 가게가 밀집해 있으며, 시사(수호신) 장식품, 자색 고구마 타르트, 추라우미 소금, 아와모리(전통 증류주) 등 오키나와 대표 기념품을 한곳에서 구입할 수 있다.",
      "헤이와도리 상점가와 마키시 공설시장도 반드시 방문해야 할 명소이다. 마키시 공설시장은 '나하 시민의 부엌'으로 불리며, 1층에서 신선한 열대 생선과 오키나와 식재료를 구입한 후 2층 식당에서 바로 조리해 먹을 수 있는 독특한 시스템을 운영하고 있다.",
    ],
    infoTable: [
      { label: "위치", value: "나하시 마키시, 오키나와현, 일본" },
      { label: "주소", value: "沖縄県那覇市牧志 (켄초마에 교차로~아사토 삼거리 약 1.6km)" },
      { label: "홈페이지", value: "https://naha-kokusaidori.okinawa/en/" },
      { label: "연락처", value: "+81-98-868-4887" },
      { label: "입장료", value: "무료 (공공 거리)" },
      { label: "오픈시간", value: "24시간 개방 (상점 10:00~22:00)" },
    ],
    googleMapQuery: "Kokusai Street,Naha,Okinawa,Japan",
    googleMapEmbed: "https://maps.google.com/maps?q=Kokusai+Street,Naha,Okinawa,Japan&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },

  // Day 5: 이시가키
  {
    type: "tourist-spot",
    id: "ishigaki",
    title: "[관광정보] 이시가키 (ISHIGAKI)",
    images: ["/shared/placeholder.png"],
    descriptions: [
      "이시가키섬은 일본 오키나와현의 남서쪽, 야에야마 제도의 중심에 위치한 아열대 섬으로, 도쿄에서 남쪽으로 약 1,941km 떨어져 있다.",
      "미쉐린 그린가이드에서 별점을 받은 세계적 수준의 해안 경관과, 투명한 에메랄드빛 바다, 풍부한 산호초, 그리고 맹그로브 숲이 어우러진 천혜의 자연환경이 이 섬의 가장 큰 매력이다. 특히 가비라만(川平湾)은 이시가키 최고의 절경으로 유명하다.",
      "류큐 왕국 시절부터 이어져 온 독특한 문화유산도 간직하고 있으며, 이시가키 소고기는 고베 소고기에 버금가는 품질로 유명하다. 페리로 15분 거리의 다케토미섬, 45분 거리의 이리오모테섬 등 주변 섬으로의 당일 여행도 이시가키 관광의 큰 매력이다.",
    ],
    infoTable: [
      { label: "도시", value: "오키나와현 이시가키시, 일본" },
      { label: "주소", value: "" },
      { label: "인구", value: "약 49,000명" },
      { label: "기후", value: "아열대 해양성 기후, 겨울에도 평균 19~20°C" },
      { label: "주요 관광지", value: "가비라만, 이시가키 종유동, 야이마무라 민속촌" },
    ],
    googleMapQuery: "Ishigaki Island,Okinawa,Japan",
    googleMapEmbed: "https://maps.google.com/maps?q=Ishigaki+Island,Okinawa,Japan&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
  {
    type: "tourist-spot",
    id: "limestonecave",
    title: "[관광정보] 이시가키 종유동 (ISHIGAKI LIMESTONE CAVE)",
    images: ["/shared/placeholder.png"],
    descriptions: [
      "이시가키 종유동은 약 20만 년 전 해저의 산호초가 지각변동에 의해 융기하면서 형성된, 일본 최남단의 관광 종유동굴이다. 동굴의 총 연장은 약 3.2km로 이시가키섬에서 가장 큰 동굴이며, 이 중 약 660m 구간이 관광 코스로 공개되어 있다.",
      "동굴 내부에는 '신들의 조각 숲'이라 불리는 거대한 석순 군락이 있으며, '토토로 종유석', '떨어지지 않는 바위' 등 독특한 형상의 종유석들이 관람 포인트로 인기가 높다. 물방울이 떨어지며 맑은 소리를 내는 수금굴의 청아한 울림도 빼놓을 수 없다.",
      "동굴 내부는 연중 약 23도의 일정한 온도를 유지하므로 무더운 여름이나 비 오는 날에도 쾌적하게 관람할 수 있다. 이시가키 시내에서 차로 약 8분 거리에 위치해 접근성도 뛰어나다.",
    ],
    infoTable: [
      { label: "위치", value: "이시가키시, 오키나와현, 일본" },
      { label: "주소", value: "〒907-0023 沖縄県石垣市石垣1666" },
      { label: "홈페이지", value: "https://www.ishigaki-cave.com/" },
      { label: "연락처", value: "0980-83-1550" },
      { label: "입장료", value: "대인 1,200엔 / 소인(4~15세) 600엔" },
      { label: "오픈시간", value: "09:00~18:30 (최종 입장 18:00), 연중무휴" },
    ],
    googleMapQuery: "Ishigaki Limestone Cave,Ishigaki,Okinawa,Japan",
    googleMapEmbed: "https://maps.google.com/maps?q=Ishigaki+Limestone+Cave,Ishigaki,Okinawa,Japan&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
  {
    type: "tourist-spot",
    id: "yaimavillage",
    title: "[관광정보] 야이마무라 민속촌 (YAIMA VILLAGE)",
    images: ["/shared/placeholder.png"],
    descriptions: [
      "야이마무라(石垣やいま村)는 이시가키섬 나구라만이 내려다보이는 언덕 위에 자리 잡은, 일본 최남단이자 최서단의 테마파크이다. 국가 유형문화재로 등록된 붉은 기와지붕의 전통 민가가 여러 채 복원되어 있으며, 샤미센 음악과 함께 옛 야에야마의 정취를 느낄 수 있다.",
      "민속촌 내에는 볼리비아산 다람쥐원숭이가 자유롭게 뛰어노는 '리스자루의 숲'이 있어 가족 단위 방문객에게 특히 인기가 높다. 류큐 전통의상 체험, 시사 색칠 체험, 야에야마 직조 체험 등 다양한 문화 체험 프로그램도 마련되어 있다.",
      "바다거북 관찰 코너와 맹그로브 숲 산책로도 조성되어 있어 이시가키섬의 아열대 자연을 가까이에서 체험할 수 있으며, 전통 오키나와 소바 등 향토 요리를 맛볼 수 있는 레스토랑도 있다.",
    ],
    infoTable: [
      { label: "위치", value: "이시가키시, 오키나와현, 일본" },
      { label: "주소", value: "〒907-0021 沖縄県石垣市名蔵967-1" },
      { label: "홈페이지", value: "https://www.yaimamura.com/" },
      { label: "연락처", value: "0980-82-8798" },
      { label: "입장료", value: "대인 1,200엔 / 소인(3~12세) 600엔" },
      { label: "오픈시간", value: "09:00~17:30 (최종 입장 17:00), 연중무휴" },
    ],
    googleMapQuery: "Yaima Village,Ishigaki,Okinawa,Japan",
    googleMapEmbed: "https://maps.google.com/maps?q=Yaima+Village,Ishigaki,Okinawa,Japan&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },

  // ── Ship Info Modal ──
  {
    type: "ship-info",
    id: "mscbellissima",
    title: "MSC 벨리시마 (MSC BELLISSIMA)",
    images: ["/shared/placeholder.png"],
    descriptions: [
      "MSC 크루즈의 대표 선박, MSC 벨리시마.",
      "총 톤수 171,598톤, 전장 315.8m, 최대 5,686명의 승객을 수용하는 초대형 크루즈 선박입니다. 2019년 취항한 메라비글리아 클래스 2번선으로, 프랑스 생나제르 조선소에서 건조되었습니다.",
      "선내에는 태양의 서커스(Cirque du Soleil) 전용 극장, 80m LED 돔 천장의 갤러리아 프롬나드, 4개의 수영장과 워터파크, 임페리얼 카지노, 아우레아 스파 등 풍부한 부대시설이 갖추어져 있어 항해 중에도 다채로운 즐거움을 누리실 수 있습니다.",
    ],
    infoTable: [
      { label: "선사", value: "MSC 크루즈 (MSC Cruises)" },
      { label: "취항", value: "2019년 3월" },
      { label: "총 톤수", value: "171,598톤" },
      { label: "승객 정원", value: "최대 5,686명" },
      { label: "승무원", value: "약 1,536명" },
      { label: "전장", value: "315.8m / 19층 (데크 기준)" },
    ],
  },

  // ── Info Modals ──
  {
    type: "info",
    id: "boarding",
    title: "MSC 벨리시마호 승선 수속 안내",
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
];

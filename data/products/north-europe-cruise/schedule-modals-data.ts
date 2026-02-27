import type { ModalData } from '@/data/types';

export const scheduleModalsData: ModalData[] = [
  // ── Tourist Spot Modals ──

  // 함부르크 (Hamburg) - Day 2
  {
    type: "tourist-spot",
    id: "hamburg",
    title: "[관광정보] 함부르크 (HAMBURG)",
    images: [
      "/products/north-europe-cruise/sectrion6/day2/Hamburg/hamburg_1.webp",
      "/products/north-europe-cruise/sectrion6/day2/Hamburg/hamburg_2.webp",
      "/products/north-europe-cruise/sectrion6/day2/Hamburg/hamburg_3.webp",
    ],
    descriptions: [
      "독일 북부 최대의 항구도시, 함부르크.",
      "엘베강 하구에 자리한 함부르크는 독일 제2의 도시이자 유럽 최대 항구 중 하나로, 800년이 넘는 해상 무역의 역사를 간직하고 있습니다. 운하와 다리가 촘촘히 엮인 이 도시는 '물 위의 도시'라는 별명답게 베네치아와 암스테르담보다 더 많은 2,500여 개의 다리를 품고 있습니다.",
      "네오르네상스 양식의 웅장한 시청사, 함부르크의 상징인 성미카엘 교회, 세계 최대의 창고 도시 슈파이허슈타트(Speicherstadt), 그리고 현대 건축의 걸작 엘브필하모니(Elbphilharmonie)까지 역사와 현대가 조화롭게 어우러진 매력적인 도시입니다.",
    ],
    infoTable: [
      { label: "도시", value: "유럽 독일 함부르크" },
      { label: "인구", value: "약 1,900,000명" },
      { label: "주요 관광지", value: "함부르크 시청, 성미카엘 교회, 알터 엘베 터널, 플란텐 운 블로멘 공원" },
      { label: "기후", value: "7-8월 평균 18°C (해양성 기후, 여름에도 선선)" },
    ],
    googleMapQuery: "Hamburg,Germany",
    googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75589.29880507686!2d9.9019376!3d53.5510846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b161837e1813b9%3A0x4263df27bd63aa0!2z7ZWo67aA66W07YGs!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr",
  },
  {
    type: "tourist-spot",
    id: "hamburgerrathaus",
    title: "네오르네상스의 걸작, 함부르크 시청 (HAMBURGER RATHAUS)",
    images: [
      "/products/north-europe-cruise/sectrion6/day2/Hamburg/rathaus_1.webp",
      "/products/north-europe-cruise/sectrion6/day2/Hamburg/rathaus_2.webp",
      "/products/north-europe-cruise/sectrion6/day2/Hamburg/rathaus_3.webp",
    ],
    descriptions: [
      "1842년 대화재로 옛 시청이 소실된 후, 7명의 건축가가 참여하여 1886년부터 11년간 건설해 1897년에 완공한 네오르네상스 양식의 걸작입니다.",
      "높이 112m의 탑이 도시 스카이라인을 지배하며, 내부에는 647개의 화려하게 장식된 방이 17,000㎡에 걸쳐 펼쳐져 있습니다. 정면 파사드에는 신성로마제국 황제 20인의 조각상이 늘어서 있고, 시민의 덕목을 상징하는 알레고리 조각들이 함부르크의 역사를 이야기합니다.",
      "현재도 함부르크 시의회와 주정부 청사로 사용되고 있으며, 로비는 콘서트와 전시회 등 시민 문화공간으로 활용됩니다. 내부 가이드 투어를 통해 대연회장과 시장 집무실 등을 관람할 수 있습니다.",
    ],
    infoTable: [
      { label: "위치", value: "Rathausmarkt 1, 20095 Hamburg" },
      { label: "입장료", value: "건물 로비 무료 / 가이드 투어 약 EUR 5" },
      { label: "오픈시간", value: "월~일 08:00 ~ 18:00" },
      { label: "홈페이지", value: "" },
      { label: "연락처", value: "" },
    ],
    googleMapQuery: "Hamburger+Rathaus,Hamburg,Germany",
    googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d9.9927!3d53.5503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18f11a8589741%3A0x4864d0e3d1d839e0!2sHamburg%20City%20Hall!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr",
  },
  {
    type: "tourist-spot",
    id: "stmichaelis",
    title: "함부르크의 상징, 성미카엘 교회 (ST. MICHAELIS KIRCHE)",
    images: [
      "/products/north-europe-cruise/sectrion6/day2/Hamburg/stmichaelis_1.webp",
      "/products/north-europe-cruise/sectrion6/day2/Hamburg/stmichaelis_2.webp",
      "/products/north-europe-cruise/sectrion6/day2/Hamburg/stmichaelis_3.webp",
    ],
    descriptions: [
      "함부르크 시민들이 애칭으로 '미헬(Michel)'이라 부르는 성미카엘 교회는 북독일 바로크 건축의 대표작이자 함부르크의 가장 유명한 랜드마크입니다.",
      "높이 132m의 구리 지붕 첨탑은 수세기 동안 엘베강을 항해하는 선원들에게 함부르크 도착을 알리는 이정표 역할을 해왔습니다. 1647년에 처음 건립된 이래 벼락과 화재로 두 차례 파괴되었으나 그때마다 재건되어, 현재의 건물은 1912년에 완공된 세 번째 건물입니다.",
      "전망대까지 올라가면 함부르크 시내와 항구, 알스터 호수의 장대한 파노라마를 한눈에 감상할 수 있습니다. 지하 납골당(크립트)에서는 작곡가 카를 필리프 에마누엘 바흐의 묘소도 만나볼 수 있습니다.",
    ],
    infoTable: [
      { label: "위치", value: "Englische Planke 1, 20459 Hamburg" },
      { label: "입장료", value: "교회 기부금 EUR 2 / 전망탑 성인 EUR 8" },
      { label: "오픈시간", value: "5~9월 09:00~20:00 / 11~3월 10:00~18:00" },
      { label: "홈페이지", value: "" },
      { label: "연락처", value: "" },
    ],
    googleMapQuery: "St+Michaelis+Kirche,Hamburg,Germany",
    googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d9.9789!3d53.5484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18f1076e4c5c1%3A0x5765a709d936e0a9!2sSt.%20Michaels%20Church!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr",
  },
  {
    type: "tourist-spot",
    id: "alterelbtunnel",
    title: "유럽 최초의 수중 터널, 알터 엘베 터널 (ALTER ELBTUNNEL)",
    images: [
      "/products/north-europe-cruise/sectrion6/day2/Hamburg/elbtunnel_1.webp",
      "/products/north-europe-cruise/sectrion6/day2/Hamburg/elbtunnel_2.webp",
      "/products/north-europe-cruise/sectrion6/day2/Hamburg/elbtunnel_3.webp",
    ],
    descriptions: [
      "1907년 착공하여 1911년에 개통된 알터 엘베 터널은 유럽 대륙 최초의 하저(河底) 터널로, 엘베강 수면 아래 24m 깊이에 건설된 토목 공학의 걸작입니다.",
      "길이 426.5m의 이 터널은 란둥스브뤼켄(Landungsbrucken) 북안과 슈타인베르더(Steinwerder) 남안을 연결하며, 양쪽 입구에 설치된 거대한 돔형 엘리베이터 홀과 타일 장식의 터널 내부가 20세기 초 산업 미학의 정수를 보여줍니다.",
      "개통 당시 하루 2만 명의 항구 노동자들이 이 터널을 통해 출퇴근했습니다. 오늘날에도 보행자와 자전거 이용자에게 24시간 무료로 개방되어 있으며, 남쪽 출구에서 바라보는 함부르크 항구와 스카이라인 전경이 특히 아름답습니다.",
    ],
    infoTable: [
      { label: "위치", value: "Bei den St. Pauli-Landungsbrucken 6, 20359 Hamburg" },
      { label: "입장료", value: "무료 (보행자 및 자전거 기준)" },
      { label: "오픈시간", value: "보행자/자전거: 24시간 상시 개방" },
      { label: "길이", value: "426.5m (수면 아래 24m)" },
      { label: "연락처", value: "" },
    ],
    googleMapQuery: "Alter+Elbtunnel,Hamburg,Germany",
    googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d9.9665!3d53.5458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18f6c1d3e1a89%3A0x3f6a7c9e5d3f8b0a!2sAlter%20Elbtunnel!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr",
  },
  {
    type: "tourist-spot",
    id: "plantenunblomen",
    title: "도심 속 초록빛 오아시스, 플란텐 운 블로멘 (PLANTEN UN BLOMEN)",
    images: [
      "/products/north-europe-cruise/sectrion6/day2/Hamburg/planten_1.webp",
      "/products/north-europe-cruise/sectrion6/day2/Hamburg/planten_2.webp",
      "/products/north-europe-cruise/sectrion6/day2/Hamburg/planten_3.webp",
    ],
    descriptions: [
      "'플란텐 운 블로멘'은 저지 독일어로 '식물과 꽃'이라는 뜻으로, 함부르크 도심 한가운데 47헥타르에 펼쳐진 시민의 휴식처입니다.",
      "유럽 최대 규모의 일본식 정원, 열대 식물이 가득한 온실, 장미 정원, 약초 정원 등 다채로운 테마 정원이 산책로를 따라 이어집니다. 특히 5월부터 9월까지 매일 저녁 열리는 수상 음악분수 쇼(Wasserlichtkonzerte)는 함부르크의 여름 밤 명물입니다.",
      "어린이 놀이터, 미니 골프장, 롤러스케이트장, 카페 등 편의시설도 잘 갖추어져 있어 가족 단위 여행객에게 특히 추천하는 곳입니다.",
    ],
    infoTable: [
      { label: "위치", value: "Marseiller Strasse, 20355 Hamburg" },
      { label: "입장료", value: "무료" },
      { label: "오픈시간", value: "5~9월 07:00~23:00 / 11~3월 07:00~20:00" },
      { label: "특별 행사", value: "수상 음악분수 쇼 (5~9월 매일 22:00)" },
      { label: "연락처", value: "" },
    ],
    googleMapQuery: "Planten+un+Blomen,Hamburg,Germany",
    googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5000!2d9.9822!3d53.5607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18f44c5e1b3a7%3A0x4263df27bd63bb0!2sPlanten%20un%20Blomen!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr",
  },

  // 코펜하겐 (Copenhagen) - Day 4
  {
    type: "tourist-spot",
    id: "copenhagen",
    title: "[관광정보] 코펜하겐 (COPENHAGEN)",
    images: [
      "/products/north-europe-cruise/sectrion6/day4/Copenhagen/copenhagen_1.webp",
      "/products/north-europe-cruise/sectrion6/day4/Copenhagen/copenhagen_2.webp",
      "/products/north-europe-cruise/sectrion6/day4/Copenhagen/copenhagen_3.webp",
    ],
    descriptions: [
      "동화의 나라 덴마크의 수도, 코펜하겐.",
      "북유럽 스칸디나비아 반도 동쪽, 셸란섬에 자리한 코펜하겐은 안데르센 동화의 고향이자 세계에서 가장 살기 좋은 도시 중 하나로 꼽힙니다. 17~18세기 아름다운 건축물과 운하, 왕궁, 자전거 문화가 어우러진 이 도시는 매년 수백만 명의 크루즈 승객과 관광객이 찾는 북유럽 최대의 크루즈 허브입니다.",
      "시내에는 랑겔리니 해안의 인어공주 동상, 북유럽 신화를 형상화한 게피온 분수, 덴마크 왕실의 아말리엔보르 궁전, 그리고 알록달록한 건물이 늘어선 뉘하운 운하 등 도보로 둘러볼 수 있는 다채로운 볼거리가 가득합니다.",
    ],
    infoTable: [
      { label: "도시", value: "유럽 덴마크 코펜하겐" },
      { label: "인구", value: "약 650,000명 (광역 약 1,400,000명)" },
      { label: "주요 관광지", value: "인어공주 동상, 게피온 분수, 아말리엔보르 궁전, 뉘하운 운하" },
      { label: "기후", value: "8월 평균 18°C (온화하고 쾌적)" },
    ],
    googleMapQuery: "Copenhagen,Denmark",
    googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d72000!2d12.5655!3d55.6759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652533c5c803d23%3A0x4dd7edde69467b8!2z7L2U7Y6Y7ZWY6rKQ!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr",
  },
  {
    type: "tourist-spot",
    id: "littlemermaid",
    title: "코펜하겐의 상징, 인어공주 동상 (DEN LILLE HAVFRUE)",
    images: [
      "/products/north-europe-cruise/sectrion6/day4/Copenhagen/mermaid_1.webp",
      "/products/north-europe-cruise/sectrion6/day4/Copenhagen/mermaid_2.webp",
      "/products/north-europe-cruise/sectrion6/day4/Copenhagen/mermaid_3.webp",
    ],
    descriptions: [
      "한스 크리스티안 안데르센의 동화 '인어공주'에서 영감을 받아 1913년 조각가 에드바르드 에릭센이 제작한 브론즈 상으로, 코펜하겐의 가장 대표적인 상징물입니다.",
      "높이 1.25m, 무게 175kg의 아담한 크기로 랑겔리니 해안의 바위 위에 앉아 있으며, 100년이 넘는 세월 동안 여러 차례 훼손과 복원을 거쳤지만 여전히 매년 100만 명 이상의 관광객이 찾는 덴마크 최고의 명소입니다.",
      "인근 랑겔리니 부두는 크루즈 선박이 정박하는 항구이기도 하여, 크루즈 승객들이 가장 먼저 만나는 코펜하겐의 명소이기도 합니다.",
    ],
    infoTable: [
      { label: "위치", value: "Langelinie, 2100 Kobenhavn O, Denmark" },
      { label: "입장료", value: "무료 (야외 조형물)" },
      { label: "오픈시간", value: "상시 개방 (24시간)" },
      { label: "추천 관람시간", value: "15~30분" },
      { label: "연락처", value: "" },
    ],
    googleMapQuery: "The+Little+Mermaid,Copenhagen,Denmark",
    googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d12.5991!3d55.6929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46525314b1e3aefb%3A0x37cbe297f7a62c78!2z7J247Ja06rO17KO8IOuPmeyCsQ!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr",
  },
  {
    type: "tourist-spot",
    id: "gefionfountain",
    title: "북유럽 신화의 웅장한 분수, 게피온 분수 (GEFION FOUNTAIN)",
    images: [
      "/products/north-europe-cruise/sectrion6/day4/Copenhagen/gefion_1.webp",
      "/products/north-europe-cruise/sectrion6/day4/Copenhagen/gefion_2.webp",
      "/products/north-europe-cruise/sectrion6/day4/Copenhagen/gefion_3.webp",
    ],
    descriptions: [
      "덴마크 조각가 안데르스 분가르드가 1908년에 완성한 코펜하겐 최대 규모의 분수로, 북유럽 신화 속 여신 게피온이 네 마리 황소를 몰아 땅을 쟁기질하는 장면을 역동적으로 표현하고 있습니다.",
      "전설에 따르면 게피온 여신이 스웨덴 왕으로부터 하룻밤 동안 쟁기질할 수 있는 만큼의 땅을 약속받고, 네 아들을 황소로 변신시켜 거대한 땅덩어리를 떼어냈는데, 그것이 바로 코펜하겐이 자리한 셸란(Zealand) 섬이 되었다고 합니다.",
      "인어공주 동상에서 도보 약 3분 거리인 처칠 공원(Churchillparken) 내에 위치해 있어 함께 둘러보기 좋습니다.",
    ],
    infoTable: [
      { label: "위치", value: "Churchillparken, 1263 Kobenhavn K, Denmark" },
      { label: "입장료", value: "무료 (야외 분수)" },
      { label: "오픈시간", value: "상시 개방 (24시간)" },
      { label: "추천 관람시간", value: "10~20분" },
      { label: "연락처", value: "" },
    ],
    googleMapQuery: "Gefion+Fountain,Copenhagen,Denmark",
    googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d12.5976!3d55.6893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46525310eab72ec3%3A0x2c49e5a9e4e7f2b0!2z6rKM7ZS87Jio67aE7IiY!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr",
  },
  {
    type: "tourist-spot",
    id: "amalienborg",
    title: "덴마크 왕실의 거처, 아말리엔보르 궁전 (AMALIENBORG PALACE)",
    images: [
      "/products/north-europe-cruise/sectrion6/day4/Copenhagen/amalienborg_1.webp",
      "/products/north-europe-cruise/sectrion6/day4/Copenhagen/amalienborg_2.webp",
      "/products/north-europe-cruise/sectrion6/day4/Copenhagen/amalienborg_3.webp",
    ],
    descriptions: [
      "1794년 크리스티안보르 궁전 화재 이후 덴마크 왕실의 공식 거처가 된 아말리엔보르 궁전은, 팔각형 광장을 중심으로 네 개의 동일한 로코코 양식 건물이 대칭을 이루는 18세기 건축의 걸작입니다.",
      "매일 정오(12:00)에 펼쳐지는 근위병 교대식은 코펜하겐 관광의 하이라이트로, 근위병들은 로젠보르 성에서 11:30에 출발해 시내를 행진하며 아말리엔보르까지 이동합니다.",
      "궁전 내 아말리엔보르 박물관에서는 19세기부터 현재까지 덴마크 왕실의 생활상과 화려한 인테리어를 관람할 수 있으며, 광장 중앙에는 프레데릭 5세의 기마상이 서 있습니다.",
    ],
    infoTable: [
      { label: "위치", value: "Amalienborg Slotsplads 5, 1257 Kobenhavn K" },
      { label: "입장료", value: "성인 125 DKK (약 24,000원) / 18세 미만 무료" },
      { label: "오픈시간", value: "화~일 10:00~16:00 (월요일 휴관)" },
      { label: "추천 관람시간", value: "약 1시간" },
      { label: "연락처", value: "" },
    ],
    googleMapQuery: "Amalienborg+Palace,Copenhagen,Denmark",
    googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d12.5893!3d55.6841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652531280f6eaf3%3A0xa0baa8e15f0aad5!2z7JWE66eQ66as7JeU67O0IOq2gOyghA!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr",
  },
  {
    type: "tourist-spot",
    id: "nyhavn",
    title: "동화 같은 알록달록 운하, 뉘하운 (NYHAVN)",
    images: [
      "/products/north-europe-cruise/sectrion6/day4/Copenhagen/nyhavn_1.webp",
      "/products/north-europe-cruise/sectrion6/day4/Copenhagen/nyhavn_2.webp",
      "/products/north-europe-cruise/sectrion6/day4/Copenhagen/nyhavn_3.webp",
    ],
    descriptions: [
      "1670~1673년 크리스티안 5세 국왕의 명으로 건설된 뉘하운(Nyhavn, '새 항구')은 바다에서 도심으로 물자를 운반하기 위한 운하였으며, 한때 선원들과 술집으로 붐비던 항구 거리였습니다.",
      "동화작가 한스 크리스티안 안데르센이 이곳 18번, 20번, 67번지에 살며 '성냥팔이 소녀', '공주와 완두콩' 등 초기 대표작을 집필한 것으로 유명합니다.",
      "오늘날 뉘하운은 17~18세기의 알록달록한 타운하우스, 야외 카페, 레스토랑이 운하를 따라 늘어선 코펜하겐에서 가장 사진이 많이 찍히는 장소이자, 운하 투어 보트의 출발점이기도 합니다.",
    ],
    infoTable: [
      { label: "위치", value: "Nyhavn, 1051 Kobenhavn K, Denmark" },
      { label: "입장료", value: "무료 (야외 거리)" },
      { label: "오픈시간", value: "상시 개방 (레스토랑/카페 개별 운영)" },
      { label: "추천 관람시간", value: "30분~1시간" },
      { label: "연락처", value: "" },
    ],
    googleMapQuery: "Nyhavn,Copenhagen,Denmark",
    googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d12.5908!3d55.6799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652531329a4baa5%3A0xd9444444443fe81!2z64S07ZWY7Jq0!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr",
  },

  // 게이랑에르 (Geirangerfjord) - Day 6
  {
    type: "tourist-spot",
    id: "geirangerfjord",
    title: "[관광정보] 게이랑에르 피요르드 (GEIRANGERFJORD)",
    images: [
      "/products/north-europe-cruise/sectrion6/day6/Geirangerfjord/geirangerfjord_1.webp",
      "/products/north-europe-cruise/sectrion6/day6/Geirangerfjord/geirangerfjord_2.webp",
      "/products/north-europe-cruise/sectrion6/day6/Geirangerfjord/geirangerfjord_3.webp",
    ],
    descriptions: [
      "노르웨이 서부 피요르드의 보석, 게이랑에르.",
      "2005년 유네스코 세계자연유산으로 등재된 게이랑에르 피요르드는 길이 약 15km, 깊이 최대 700m에 달하는 장대한 피요르드입니다. 양쪽으로 최대 1,400m 높이의 가파른 절벽이 솟아 있으며, 일곱 자매 폭포, 구혼자 폭포, 신부의 면사포 폭포 등 수많은 폭포가 절벽을 타고 흘러내리는 장관을 연출합니다.",
      "게이랑에르 마을은 피요르드 안쪽 끝에 자리한 인구 약 250명의 소박한 마을이지만, 매년 여름 40만 명 이상의 크루즈 승객이 방문하는 노르웨이 최고의 관광 명소입니다.",
    ],
    infoTable: [
      { label: "도시", value: "유럽 노르웨이 게이랑에르" },
      { label: "인구", value: "약 250명 (여름 관광 시즌 수십만 명 방문)" },
      { label: "주요 관광지", value: "달스니바 전망대, 이글 로드, 게이랑에르 피요르드 크루징" },
      { label: "기후", value: "8월 평균 11~15°C (서늘하고 비가 잦음)" },
    ],
    googleMapQuery: "Geiranger,Norway",
    googleMapEmbed: "https://maps.google.com/maps?q=62.1008,7.2059&z=12&hl=ko&output=embed",
  },
  {
    type: "tourist-spot",
    id: "dalsnibba",
    title: "유럽에서 가장 높은 피요르드 전망, 달스니바 전망대 (MT DALSNIBBA)",
    images: [
      "/products/north-europe-cruise/sectrion6/day6/Geirangerfjord/dalsnibba_1.webp",
      "/products/north-europe-cruise/sectrion6/day6/Geirangerfjord/dalsnibba_2.webp",
      "/products/north-europe-cruise/sectrion6/day6/Geirangerfjord/dalsnibba_3.webp",
    ],
    descriptions: [
      "해발 1,500m에서 내려다보는 유럽 최고의 피요르드 전망대입니다.",
      "달스니바는 게이랑에르 마을에서 남쪽으로 약 7km 떨어진 산 정상에 위치하며, 도로로 접근할 수 있는 유럽 최고 높이의 피요르드 전망 지점입니다. 2016년에 개장한 '게이랑에르 스카이워크'는 유리 난간과 독특한 바닥 구조로 마치 피요르드 위에 떠 있는 듯한 짜릿한 경험을 선사합니다.",
      "니베베겐 유료 도로를 따라 해발 1,030m의 듀프바트네트(Djupvatnet) 호수를 지나 정상에 도달하면, 눈 덮인 산봉우리와 발아래 펼쳐진 유네스코 세계자연유산 게이랑에르 피요르드의 파노라마가 한눈에 들어옵니다.",
    ],
    infoTable: [
      { label: "위치", value: "게이랑에르 마을 남쪽 약 7km, 해발 1,500m" },
      { label: "입장료", value: "통행료 차량 1대당 330 NOK (약 4만원)" },
      { label: "운영 시즌", value: "5월 하순 ~ 10월 (적설 상황에 따라 변동)" },
      { label: "주의사항", value: "고도가 높아 한여름에도 방한복 필요" },
      { label: "연락처", value: "" },
    ],
    googleMapQuery: "Dalsnibba+Geiranger+Skywalk+Norway",
    googleMapEmbed: "https://maps.google.com/maps?q=62.0472,7.2822&z=13&hl=ko&output=embed",
  },
  {
    type: "tourist-spot",
    id: "ornesvingen",
    title: "독수리의 길 위에서 만나는 절경, 이글 로드 & 오르네스빙엔 전망대 (EAGLE ROAD)",
    images: [
      "/products/north-europe-cruise/sectrion6/day6/Geirangerfjord/eagleroad_1.webp",
      "/products/north-europe-cruise/sectrion6/day6/Geirangerfjord/eagleroad_2.webp",
      "/products/north-europe-cruise/sectrion6/day6/Geirangerfjord/eagleroad_3.webp",
    ],
    descriptions: [
      "게이랑에르에서 에이즈달을 잇는 11개의 급커브 산악 도로, 이글 로드입니다.",
      "1955년에 개통된 이글 로드(오르네베겐)는 해발 620m까지 가파른 산비탈을 올라가는 11개의 헤어핀 커브로 이루어진 노르웨이 국가 관광 도로입니다. 정상 부근의 오르네스빙엔 전망대에서는 게이랑에르 피요르드의 가장 상징적인 파노라마를 감상할 수 있습니다.",
      "전망대에서는 발아래로 게이랑에르 마을과 피요르드, 수직으로 떨어지는 일곱 자매 폭포, 그리고 크니브스플로 산악 농장의 전경이 한눈에 들어옵니다.",
    ],
    infoTable: [
      { label: "위치", value: "게이랑에르 ~ 에이즈달 간 산악 도로 정상 (해발 약 620m)" },
      { label: "입장료", value: "무료 (공공 도로 위 전망대)" },
      { label: "오픈시간", value: "상시 개방 (동절기 적설로 도로 폐쇄 시 제외)" },
      { label: "운영 시즌", value: "5월 ~ 10월" },
      { label: "연락처", value: "" },
    ],
    googleMapQuery: "Ornesvingen+viewpoint+Geiranger+Norway",
    googleMapEmbed: "https://maps.google.com/maps?q=62.1125,7.1547&z=14&hl=ko&output=embed",
  },

  // 베르겐 (Bergen) - Day 7
  {
    type: "tourist-spot",
    id: "bergen",
    title: "[관광정보] 베르겐 (BERGEN)",
    images: [
      "/products/north-europe-cruise/sectrion6/day7/Bergen/bergen_1.webp",
      "/products/north-europe-cruise/sectrion6/day7/Bergen/bergen_2.webp",
      "/products/north-europe-cruise/sectrion6/day7/Bergen/bergen_3.webp",
      "/products/north-europe-cruise/sectrion6/day7/Bergen/bergen_4.webp",
    ],
    descriptions: [
      "노르웨이 제2의 도시이자 피오르의 관문, 베르겐.",
      "노르웨이 서남부에 위치한 베르겐은 13세기에는 노르웨이의 수도였으며, 한자동맹의 주요 무역 거점으로 번영했던 역사적인 항구 도시입니다. 일곱 개의 산으로 둘러싸여 있어 '일곱 산의 도시'라는 별명을 가지고 있으며, 유네스코 세계문화유산 브뤼겐을 비롯한 풍부한 문화유산이 가득합니다.",
      "플로엔산 후니쿨라에서 내려다보는 알록달록한 목조 가옥과 피오르의 절경, 활기 넘치는 피쉬 마켓, 그리고 한자동맹의 역사가 살아 숨 쉬는 브뤼겐 등 크루즈 기항지로서 걸어서 충분히 돌아볼 수 있는 매력적인 도시입니다.",
    ],
    infoTable: [
      { label: "도시", value: "유럽 노르웨이 베르겐" },
      { label: "인구", value: "약 294,000명" },
      { label: "주요 관광지", value: "브뤼겐 한자 빌딩, 플로엔산 후니쿨라, 베르겐 피쉬 마켓" },
      { label: "기후", value: "8월 평균 16°C (해양성 기후, 비 잦음)" },
    ],
    googleMapQuery: "Bergen+Norway",
    googleMapEmbed: "https://maps.google.com/maps?q=60.3913,5.3221&z=13&hl=ko&output=embed",
  },
  {
    type: "tourist-spot",
    id: "floibanen",
    title: "베르겐의 상징, 플로엔산 후니쿨라 (FLOIBANEN FUNICULAR)",
    images: [
      "/products/north-europe-cruise/sectrion6/day7/Bergen/floibanen_1.webp",
      "/products/north-europe-cruise/sectrion6/day7/Bergen/floibanen_2.webp",
      "/products/north-europe-cruise/sectrion6/day7/Bergen/floibanen_3.webp",
    ],
    descriptions: [
      "베르겐 시내 중심부에서 해발 320m의 플로엔산 정상까지 약 6분 만에 올라가는 산악 케이블 열차입니다.",
      "1918년에 처음 개통된 플로이바넨 후니쿨라는 100년이 넘는 역사를 자랑하며, 매년 약 200만 명이 이용하는 베르겐 최고의 인기 관광지입니다. 정상에 오르면 알록달록한 목조 가옥들이 늘어선 베르겐 시가지, 푸른 피오르와 주변 섬들이 한눈에 내려다보이는 압도적인 파노라마 전망이 펼쳐집니다.",
      "산 정상에는 카페와 레스토랑, 기념품 가게가 있으며, 숲속 산책로와 트롤 조각상이 있는 트롤 숲 등 가족 단위 방문객에게도 즐길 거리가 풍부합니다.",
    ],
    infoTable: [
      { label: "위치", value: "베르겐 시내 중심부, Vetrlidsallmenningen 21" },
      { label: "입장료", value: "왕복 성인 NOK 200~220 / 어린이 NOK 100~110" },
      { label: "오픈시간", value: "5~8월: 평일 08:30-21:00, 주말 09:00-21:00" },
      { label: "소요시간", value: "편도 약 6분 (15분 간격 운행)" },
      { label: "연락처", value: "" },
    ],
    googleMapQuery: "Floibanen+Funicular+Bergen+Norway",
    googleMapEmbed: "https://maps.google.com/maps?q=60.3934,5.3260&z=15&hl=ko&output=embed",
  },
  {
    type: "tourist-spot",
    id: "bergenfishmarket",
    title: "활기 넘치는 해산물의 천국, 베르겐 피쉬 마켓 (BERGEN FISH MARKET)",
    images: [
      "/products/north-europe-cruise/sectrion6/day7/Bergen/fishmarket_1.webp",
      "/products/north-europe-cruise/sectrion6/day7/Bergen/fishmarket_2.webp",
      "/products/north-europe-cruise/sectrion6/day7/Bergen/fishmarket_3.webp",
    ],
    descriptions: [
      "베르겐 항구 바로 앞에 자리한 노르웨이에서 가장 유명한 수산시장으로, 1276년부터 이어져 온 약 750년의 역사를 자랑합니다.",
      "실내 시장과 야외 노점으로 구성되어 있으며, 신선한 연어, 킹크랩, 새우, 고래 고기 등 노르웨이의 다양한 해산물을 현장에서 맛볼 수 있습니다.",
      "크루즈 터미널에서 도보로 약 10분 거리에 위치해 있어 기항지 관광의 첫 번째 코스로 안성맞춤입니다.",
    ],
    infoTable: [
      { label: "위치", value: "베르겐 항구 앞, Torget 5" },
      { label: "입장료", value: "무료 (음식 구매 시 별도)" },
      { label: "오픈시간", value: "실내: 09:00-21:00 / 야외: 5~9월 운영" },
      { label: "추천 음식", value: "킹크랩, 연어, 새우, 피쉬 수프" },
      { label: "연락처", value: "" },
    ],
    googleMapQuery: "Bergen+Fish+Market+Fisketorget+Norway",
    googleMapEmbed: "https://maps.google.com/maps?q=60.3954,5.3246&z=16&hl=ko&output=embed",
  },
  {
    type: "tourist-spot",
    id: "bryggen",
    title: "유네스코 세계문화유산, 브뤼겐 한자 빌딩 (BRYGGEN HANSEATIC WHARF)",
    images: [
      "/products/north-europe-cruise/sectrion6/day7/Bergen/bryggen_1.webp",
      "/products/north-europe-cruise/sectrion6/day7/Bergen/bryggen_2.webp",
      "/products/north-europe-cruise/sectrion6/day7/Bergen/bryggen_3.webp",
    ],
    descriptions: [
      "1979년 유네스코 세계문화유산으로 지정된 브뤼겐은 14세기부터 16세기까지 한자동맹의 주요 무역 거점이었던 베르겐의 옛 부두 지구입니다.",
      "약 1070년경 바이킹 시대 직후부터 형성된 이 지역은 한자동맹이 해외에 설립한 4개의 사무소 중 유일하게 현재까지 보존되어 있는 곳으로, 북부 노르웨이산 건어 무역을 독점하며 약 400년간 상업을 지배했습니다.",
      "수차례의 대화재에도 불구하고 전통적인 목조 건축 양식을 유지하며 재건되어, 현재 약 62개의 건물이 남아 있습니다. 알록달록한 목조 건물 안에는 부티크, 갤러리, 카페, 한자박물관 등이 자리하고 있습니다.",
    ],
    infoTable: [
      { label: "위치", value: "베르겐 항구 북측, Bryggen 지구" },
      { label: "입장료", value: "무료 (야외 거리) / 한자박물관 별도" },
      { label: "오픈시간", value: "상시 개방" },
      { label: "유네스코 등재", value: "1979년 세계문화유산" },
      { label: "연락처", value: "" },
    ],
    googleMapQuery: "Bryggen+Hanseatic+Wharf+Bergen+Norway",
    googleMapEmbed: "https://maps.google.com/maps?q=60.3976,5.3238&z=16&hl=ko&output=embed",
  },
  {
    type: "tourist-spot",
    id: "bergencathedral",
    title: "900년 역사의 베르겐 대성당 (BERGEN CATHEDRAL)",
    images: [],
    descriptions: [
      "약 1150년경 노르웨이의 수호성인 성 올라프에게 봉헌된 교회로 시작된 베르겐 대성당은 약 900년의 역사를 간직한 노르웨이에서 가장 오래된 성당 중 하나입니다.",
      "수차례의 대화재를 겪으며 파괴와 재건을 반복했으며, 현재의 모습은 1880년대 대대적인 복원 공사를 거친 것입니다. 고딕 양식과 로마네스크 양식이 혼합된 건축미가 특징입니다.",
      "1665년 베르겐 해전 당시 서쪽 벽에 박힌 포탄이 지금까지 남아 있어, 격동의 역사를 생생하게 증언하고 있습니다.",
    ],
    infoTable: [
      { label: "위치", value: "베르겐 시내 중심부, Domkirkeplassen 1" },
      { label: "입장료", value: "NOK 40 (16세 미만 무료)" },
      { label: "오픈시간", value: "6~8월: 월~금 10:00-16:00" },
      { label: "건축 양식", value: "로마네스크 + 고딕 혼합" },
      { label: "연락처", value: "" },
    ],
    googleMapQuery: "Bergen+Cathedral+Domkirken+Norway",
    googleMapEmbed: "https://maps.google.com/maps?q=60.3919,5.3310&z=16&hl=ko&output=embed",
  },
  {
    type: "tourist-spot",
    id: "bergenhusfortress",
    title: "750년 역사의 베르겐 요새 (BERGENHUS FORTRESS)",
    images: [],
    descriptions: [
      "베르겐 항구 입구에 자리한 베르겐후스 요새는 노르웨이에서 가장 오래되고 보존 상태가 좋은 석조 요새 중 하나로, 750년이 넘는 역사를 간직하고 있습니다.",
      "요새의 핵심 건물인 호콘왕의 홀은 1247~1261년 호콘 호콘손 왕이 왕실 연회장으로 건설한 것이며, 1560년대에 증축된 로젠크란츠 탑은 방어용 탑으로 왕실 거주 공간과 감옥이 함께 있던 독특한 구조입니다.",
      "요새 부지는 무료로 개방되어 있으며, 잔디밭에서 베르겐 항구와 피오르의 아름다운 전망을 감상할 수 있습니다.",
    ],
    infoTable: [
      { label: "위치", value: "베르겐 항구 입구, Bergenhus Festning" },
      { label: "입장료", value: "요새 부지 무료 / 호콘왕의 홀 NOK 120" },
      { label: "오픈시간", value: "여름: 08:00-21:00 / 겨울: 09:00-일몰" },
      { label: "주요 건물", value: "호콘왕의 홀(1261), 로젠크란츠 탑(1560년대)" },
      { label: "연락처", value: "" },
    ],
    googleMapQuery: "Bergenhus+Fortress+Bergen+Norway",
    googleMapEmbed: "https://maps.google.com/maps?q=60.3994,5.3180&z=16&hl=ko&output=embed",
  },

  // 스타방에르 (Stavanger) - Day 8
  {
    type: "tourist-spot",
    id: "stavanger",
    title: "[관광정보] 스타방에르 (STAVANGER)",
    images: [
      "/products/north-europe-cruise/sectrion6/day8/Stavanger/stavanger_1.webp",
      "/products/north-europe-cruise/sectrion6/day8/Stavanger/stavanger_2.webp",
      "/products/north-europe-cruise/sectrion6/day8/Stavanger/stavanger_3.webp",
    ],
    descriptions: [
      "노르웨이 석유 산업의 수도, 스타방에르.",
      "노르웨이 남서부에 위치한 스타방에르는 노르웨이에서 네 번째로 큰 도시로, 18~19세기의 하얀 목조 가옥이 보존된 올드 타운과 노르웨이에서 가장 오래된 성당이 자리한 역사적인 항구 도시입니다.",
      "크루즈 선박은 도심 중심부의 항구에 정박하며, 올드 스타방에르, 스타방에르 성당 등 주요 관광지까지 도보로 5~10분이면 접근할 수 있습니다. 뤼세피요르드로 가는 유람선 또한 같은 항구에서 출발합니다.",
    ],
    infoTable: [
      { label: "도시", value: "유럽 노르웨이 스타방에르" },
      { label: "인구", value: "약 144,000명" },
      { label: "주요 관광지", value: "올드 스타방에르, 스타방에르 성당, 뤼세피요르드 유람선" },
      { label: "기후", value: "8월 평균 15°C (해양성 기후, 온화하나 비 잦음)" },
    ],
    googleMapQuery: "Stavanger+Norway",
    googleMapEmbed: "https://maps.google.com/maps?q=58.9700,5.7331&z=12&hl=ko&output=embed",
  },
  {
    type: "tourist-spot",
    id: "gamlestavanger",
    title: "북유럽 최대의 목조 가옥 마을, 올드 스타방에르 (GAMLE STAVANGER)",
    images: [
      "/products/north-europe-cruise/sectrion6/day8/Stavanger/oldstavanger_1.webp",
      "/products/north-europe-cruise/sectrion6/day8/Stavanger/oldstavanger_2.webp",
      "/products/north-europe-cruise/sectrion6/day8/Stavanger/oldstavanger_3.webp",
    ],
    descriptions: [
      "18~19세기에 지어진 173채의 하얀 목조 가옥이 자갈 깔린 좁은 골목을 따라 늘어선 북유럽 최대의 목조 건축 보존 지구입니다.",
      "원래 청어잡이 어부와 통조림 공장 노동자들이 거주하던 서민 주거지였으나, 도시 건축가 에이나르 헤덴의 헌신적인 보존 운동 덕분에 철거를 면했습니다. 1975년 유네스코 건축유산의 해에 보존 가치를 공식 인정받았습니다.",
      "현재는 갤러리, 공예품 가게, 노르웨이 통조림 박물관 등이 자리하고 있으며, 창가마다 색색의 꽃이 장식된 아름다운 거리는 산책만으로도 충분히 매력적입니다.",
    ],
    infoTable: [
      { label: "위치", value: "스타방에르 항구 서쪽, 크루즈 터미널 도보 약 10분" },
      { label: "입장료", value: "무료 (야외 거리)" },
      { label: "오픈시간", value: "상시 개방" },
      { label: "홈페이지", value: "" },
      { label: "연락처", value: "" },
    ],
    googleMapQuery: "Gamle+Stavanger+Old+Town+Norway",
    googleMapEmbed: "https://maps.google.com/maps?q=58.9740,5.7230&z=16&hl=ko&output=embed",
  },
  {
    type: "tourist-spot",
    id: "stavangerdomkirke",
    title: "노르웨이에서 가장 오래된 성당, 스타방에르 성당 (STAVANGER DOMKIRKE)",
    images: [
      "/products/north-europe-cruise/sectrion6/day8/Stavanger/domkirke_1.webp",
      "/products/north-europe-cruise/sectrion6/day8/Stavanger/domkirke_2.webp",
      "/products/north-europe-cruise/sectrion6/day8/Stavanger/domkirke_3.webp",
    ],
    descriptions: [
      "1125년경 영국 윈체스터 출신으로 추정되는 레이날드 주교에 의해 건축이 시작되어 약 1150년에 완공된 노르웨이 최고(最古)의 성당입니다.",
      "원래 로마네스크 양식으로 지어졌으나, 1272년 스타방에르 대화재로 큰 피해를 입은 후 고딕 양식으로 재건되어 두 양식이 독특하게 조화를 이루고 있습니다.",
      "스타방에르 교구의 주교좌 성당으로서 약 900년의 역사를 간직하고 있으며, 도심 한가운데 자리하여 크루즈 항구에서 도보로 쉽게 접근할 수 있습니다.",
    ],
    infoTable: [
      { label: "위치", value: "Haakon VIIs gate 2, 4005 Stavanger" },
      { label: "입장료", value: "무료 ~ 약 75 NOK (시즌에 따라 변동)" },
      { label: "오픈시간", value: "6~8월: 매일 11:00~19:00" },
      { label: "건축 양식", value: "로마네스크 + 고딕 혼합" },
      { label: "연락처", value: "" },
    ],
    googleMapQuery: "Stavanger+Cathedral+Domkirke+Norway",
    googleMapEmbed: "https://maps.google.com/maps?q=58.9697,5.7331&z=17&hl=ko&output=embed",
  },
  {
    type: "tourist-spot",
    id: "lysefjordcruise",
    title: "노르웨이 피요르드의 진수, 뤼세피요르드 유람선 (LYSEFJORD CRUISE)",
    images: [
      "/products/north-europe-cruise/sectrion6/day8/Stavanger/lysefjord_1.webp",
      "/products/north-europe-cruise/sectrion6/day8/Stavanger/lysefjord_2.webp",
      "/products/north-europe-cruise/sectrion6/day8/Stavanger/lysefjord_3.webp",
    ],
    descriptions: [
      "스타방에르 도심 항구에서 출발하여 약 3시간 동안 42km 길이의 뤼세피요르드를 탐험하는 유람선 투어입니다.",
      "해발 604m의 수직 절벽 위에 돌출된 프레이케스톨렌(Pulpit Rock)을 바다에서 올려다보는 장관이 하이라이트이며, 웅장한 폭포와 깎아지른 산악 지형이 이어집니다.",
      "현지 운항사가 연중 정기적으로 운항하며, 일부 노선은 친환경 전기 선박으로 운영됩니다. 선내 카페에서 현지 베이커리의 빵과 음료를 즐기며 피요르드 절경을 감상할 수 있습니다.",
    ],
    infoTable: [
      { label: "출발지", value: "Strandkaien, Stavanger (도심 항구)" },
      { label: "소요시간", value: "약 3시간" },
      { label: "요금", value: "성인 약 NOK 890 / 아동(4~15세) 약 NOK 445" },
      { label: "운항사", value: "Rodne Fjord Cruise 외" },
      { label: "연락처", value: "" },
    ],
    googleMapQuery: "Lysefjord+Norway",
    googleMapEmbed: "https://maps.google.com/maps?q=59.0500,6.2300&z=11&hl=ko&output=embed",
  },

  // ── Ship Info Modal ──
  {
    type: "ship-info",
    id: "costadiadema",
    title: "코스타 디아데마 (COSTA DIADEMA)",
    images: [
      "/products/north-europe-cruise/sectrion6/day3/costa_diadema_1.webp",
      "/products/north-europe-cruise/sectrion6/day3/costa_diadema_2.webp",
      "/products/north-europe-cruise/sectrion6/day3/costa_diadema_3.webp",
      "/products/north-europe-cruise/sectrion6/day3/costa_diadema_4.webp",
    ],
    descriptions: [
      "코스타 크루즈의 플래그십 선박, 코스타 디아데마.",
      "총 톤수 132,500톤, 전장 306m, 최대 4,947명의 승객을 수용하는 대형 크루즈 선박입니다. 2014년 이탈리아 핀칸티에리 조선소에서 건조되어 이탈리아 국적 크루즈 선박 중 최대 규모를 자랑합니다.",
      "선내에는 500m 이상의 야외 산책로(프롬나드), 6,200m² 규모의 삼사라 스파, 1,600석 규모의 에메랄드 시어터, 골든 주빌리 카지노, 수영장 및 자쿠지 등 이탈리아 특유의 우아함과 세련된 디자인이 돋보이는 풍부한 부대시설이 갖추어져 있습니다.",
    ],
    infoTable: [
      { label: "선사", value: "코스타 크루즈 (Costa Cruises)" },
      { label: "취항", value: "2014년" },
      { label: "총 톤수", value: "132,500톤" },
      { label: "승객 정원", value: "최대 4,947명" },
      { label: "승무원", value: "약 1,253명" },
      { label: "전장", value: "306m / 20층" },
    ],
  },

  // ── Cruise At Sea Modals ──
  {
    type: "cruise-at-sea",
    id: "cruiseinterior",
    title: "코스타 디아데마 전일 해상",
    images: [
      "/products/north-europe-cruise/sectrion6/day5/day5_1.webp",
      "/products/north-europe-cruise/sectrion6/day5/day5_2.webp",
      "/products/north-europe-cruise/sectrion6/day5/day5_3.webp",
      "/products/north-europe-cruise/sectrion6/day5/day5_4.webp",
    ],
    descriptions: [
      "오늘은 종일 해상에서 보내는 날입니다. 코스타 디아데마의 다양한 시설을 마음껏 즐겨보세요.",
      "500m 이상의 야외 프롬나드에서 바닷바람을 맞으며 산책하고, 6,200m² 규모의 삼사라 스파에서 깊은 휴식을 경험하세요. 1,600석 규모의 에메랄드 시어터에서는 코스타 디아데마 전용 오리지널 공연이 매일 펼쳐집니다.",
      "메인 다이닝룸과 뷔페 레스토랑에서 이탈리아 정통 요리를 즐기시고, 야외 데크에서 광활한 바다의 풍경을 감상하며 특별한 하루를 보내시기 바랍니다.",
    ],
    infoTable: [
      { label: "선박", value: "코스타 디아데마 (Costa Diadema)" },
      { label: "주요 시설", value: "수영장, 삼사라 스파, 카지노, 에메랄드 시어터, 프롬나드" },
      { label: "식사", value: "메인 다이닝룸, 뷔페, 피제리아, 철판구이 등" },
      { label: "드레스코드", value: "캐주얼 (스마트 캐주얼 권장)" },
    ],
  },
  {
    type: "cruise-at-sea",
    id: "cruiseatsea",
    title: "코스타 디아데마 전일 해상",
    images: [
      "/products/north-europe-cruise/sectrion6/day5/day5_1.webp",
      "/products/north-europe-cruise/sectrion6/day5/day5_2.webp",
      "/products/north-europe-cruise/sectrion6/day5/day5_3.webp",
      "/products/north-europe-cruise/sectrion6/day5/day5_4.webp",
    ],
    descriptions: [
      "선내 자유시간: 수준 높은 무료 공연 관람 및 다채로운 부대시설 이용",
    ],
    bulletPoints: [
      "삼사라 스파에서 탈라소테라피와 마사지로 여행의 피로를 부드럽게 풀어보세요.",
      "탁 트인 야외 수영장에서 일광욕을 즐기며 여유롭게 책을 읽어보세요.",
      "500m 야외 프롬나드를 달리거나 최신식 피트니스 센터에서 상쾌하게 땀을 흘려보세요.",
      "따뜻한 자쿠지에 몸을 담그고 와인 한 잔의 여유를 만끽해 보세요.",
      "에메랄드 시어터에서 코스타 디아데마 전용 오리지널 공연을 관람해 보세요.",
    ],
    closingText: "잔잔한 바다 한가운데서 누리는 이 모든 휴식이 크루즈 여행의 진정한 매력입니다.",
    infoTable: [
      { label: "선박", value: "코스타 디아데마 (Costa Diadema)" },
      { label: "주요 시설", value: "수영장, 삼사라 스파, 카지노, 에메랄드 시어터, 프롬나드" },
      { label: "식사", value: "메인 다이닝룸, 뷔페, 피제리아, 철판구이 등" },
      { label: "드레스코드", value: "캐주얼 (스마트 캐주얼 권장)" },
    ],
  },

  // ── Shore Excursion Modals ──
  /* COMMENTED_OUT: shore-excursion for all ports - 현재 일정에 기항지 선택관광이 포함되지 않음 */

  // ── Info Modals ──
  {
    type: "info",
    id: "boarding",
    title: "코스타 디아데마호 승선 수속 안내",
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
            text: "승선 후 안내에 따라 지정된 장소에서 위급 상황 대처 교육을 이수해야 합니다.",
            bold: "필수 안전 교육(Safety Drill):",
            subItems: [
              { text: "미이수 시 발생하는 실제 상황 (필독)", isWarning: true },
              { text: "선사 시스템은 실시간으로 미이수자를 파악합니다. 교육을 마칠 때까지 이름이 공공연하게 방송되거나, 승무원이 선실로 직접 찾아와 참여를 독촉합니다.", bold: "끝까지 찾아내는 실시간 추적:" },
              { text: "교육 미완료 시 선상 카드(SeaPass 등)가 정지됩니다. 이 경우 바(Bar)에서 음료 주문, 면세점 쇼핑, 카지노 이용 및 유료 레스토랑 예약 등 배 안의 모든 결제와 서비스 이용이 거부될 수 있습니다.", bold: "선상 카드 및 모든 유료 서비스 정지:" },
              { text: "국제 해상법(SOLAS)에 의거, 끝내 불응할 경우 선장은 승객을 다음 기항지에서 강제로 내리게 할 권한이 있습니다.", bold: "선장 권한에 의한 '강제 하선' 조치:" },
              { text: "규정 위반으로 인한 하선이므로 잔여 일정 환불이 전혀 안 되며, 집으로 돌아가는 항공편 비용도 본인이 직접 부담해야 하는 가장 심각한 상황이 발생할 수 있습니다.", isWarning: true, bold: "환불 및 보상 불가:" },
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

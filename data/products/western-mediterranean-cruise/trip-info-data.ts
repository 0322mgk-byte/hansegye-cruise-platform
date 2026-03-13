import type { TripInfoData } from '@/data/types';

export const tripInfoData: TripInfoData = {
  title: "여행 주요 일정",
  subtitle: "로마에서 출발하는 서부 지중해 9박 10일의 항해",
  labels: {
    schedule: "여행 일정",
    departKorea: "한국 출발",
    arriveLocal: "현지 도착",
    departLocal: "현지 출발",
    arriveKorea: "한국 도착",
    routeRegion: "여행 지역",
    reservationStatus: "예약 현황",
    reservationCountUnit: "명",
    escort: "인솔자",
    meetingPlace: "미팅 장소",
  },
  scheduleOverview: {
    title: "9박 10일 투어 가이드",
    lines: [
      "•  출국: 인천 → 현지 도착 (약 13시간 40분 소요)",
      "•  귀국: 현지 출발 → 인천 (약 11시간 55분 소요)",
    ],
    note: "※ 정확한 출발 날짜와 상세 동선은 하단 [상세 일정]에서 확인하실 수 있습니다",
  },
  airlineInfo: {
    label: "항공 정보",
    text: "✈️ 대한항공 또는 동급 외항사 예정",
    note: "※ 출발 일정 및 항공사 사정에 따라 변동될 수 있습니다",
  },
  routeCities: ["로마", "팔레르모", "해상", "이비자", "바르셀로나", "마르세유", "제노아", "로마"],
  reservationStatus: "출발확정",
  reservationCount: "16",
  escortInfo: "인솔자 1명이 동행합니다.",
  meetingPlace: "인천 공항 집결",
};

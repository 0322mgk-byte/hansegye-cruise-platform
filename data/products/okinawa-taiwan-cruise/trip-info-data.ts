import type { TripInfoData } from '@/data/types';

export const tripInfoData: TripInfoData = {
  title: "여행 주요 일정",
  subtitle: "대만에서 오키나와까지 5박 6일의 항해",
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
  flights: {
    outbound: [
      {
        airline: "에어로케이",
        flightCode: "",
        departureTime: "09:40",
        departureDate: "01/16 (금)",
        arrivalTime: "11:30",
        arrivalDate: "01/16 (금)",
        duration: "총 2시간 45분 소요",
      },
    ],
    inbound: [
      {
        airline: "에어로케이",
        flightCode: "",
        departureTime: "12:40",
        departureDate: "01/21 (수)",
        arrivalTime: "16:05",
        arrivalDate: "01/21 (수)",
        duration: "총 2시간 30분 소요",
      },
    ],
  },
  routeCities: ["대만", "미야코", "나하", "이시가키", "기륭"],
  reservationStatus: "출발확정",
  reservationCount: "16",
  escortInfo: "인솔자 1명이 동행합니다.",
  meetingPlace: "인천 공항 집결",
};

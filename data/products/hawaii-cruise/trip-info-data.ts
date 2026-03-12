import type { TripInfoData } from '@/data/types';

export const tripInfoData: TripInfoData = {
  title: "여행 주요 일정",
  subtitle: "호놀룰루에서 하와이 4개 섬 8박 10일의 항해",
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
        airline: "대한항공",
        flightCode: "KE0053",
        departureTime: "20:35",
        departureDate: "03/21 (토)",
        arrivalTime: "09:30",
        arrivalDate: "03/21 (토)",
        duration: "총 7시간 55분 소요",
      },
    ],
    inbound: [
      {
        airline: "대한항공",
        flightCode: "KE0054",
        departureTime: "12:15",
        departureDate: "03/29 (일)",
        arrivalTime: "18:20",
        arrivalDate: "03/30 (월)",
        duration: "총 11시간 05분 소요",
      },
    ],
  },
  routeCities: ["호놀룰루", "마우이", "힐로", "카일루아 코나", "리후에", "호놀룰루"],
  reservationStatus: "출발확정",
  reservationCount: "16",
  escortInfo: "인솔자 1명이 동행합니다.",
  meetingPlace: "인천 공항 집결",
};

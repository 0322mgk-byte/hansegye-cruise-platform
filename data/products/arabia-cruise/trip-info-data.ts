import type { TripInfoData } from '@/data/types';

export const tripInfoData: TripInfoData = {
  title: "여행 주요 일정",
  subtitle: "두바이, 오만, 카타르 아라비아 크루즈 7박 9일",
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
        flightCode: "KE951",
        departureTime: "12:45",
        departureDate: "01/10 (토)",
        arrivalTime: "18:40",
        arrivalDate: "01/10 (토)",
        duration: "총 10시간 55분 소요",
      },
    ],
    inbound: [
      {
        airline: "대한항공",
        flightCode: "KE952",
        departureTime: "21:00",
        departureDate: "01/17 (토)",
        arrivalTime: "10:30",
        arrivalDate: "01/18 (일)",
        duration: "총 8시간 30분 소요",
      },
    ],
  },
  routeCities: ["두바이", "두바이", "무스카트", "해상", "도하", "아부다비", "두바이"],
  reservationStatus: "출발확정",
  reservationCount: "20",
  escortInfo: "인솔자 1명이 동행합니다.",
  meetingPlace: "인천 공항 집결",
};

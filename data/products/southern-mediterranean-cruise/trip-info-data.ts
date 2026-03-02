import type { TripInfoData } from '@/data/types';

export const tripInfoData: TripInfoData = {
  title: "여행 주요 일정",
  subtitle: "이스탄불에서 그리스 에게해까지 8박 10일의 항해",
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
        departureTime: "13:40",
        departureDate: "06/27 (토)",
        arrivalTime: "19:40",
        arrivalDate: "06/27 (토)",
        duration: "총 12시간 10분 소요",
      },
    ],
    inbound: [
      {
        airline: "대한항공",
        departureTime: "21:20",
        departureDate: "07/05 (일)",
        arrivalTime: "13:25",
        arrivalDate: "07/06 (월)",
        duration: "총 10시간 05분 소요",
      },
    ],
  },
  routeCities: ["이스탄불", "미코노스", "헤라클리온", "로도스", "산토리니", "아테네", "해상", "이스탄불"],
  reservationStatus: "출발확정",
  reservationCount: "20",
  escortInfo: "인솔자 1명이 동행합니다.",
  meetingPlace: "인천 공항 집결",
};

import { AxiosResponse } from "axios";
import http from "./httpService";
import {
  BookingAppointmentProps,
  BookingResponse,
  SingleBookingResponse,
} from "@/components/schema & types/booking/booking-appointment.types";

// public booking
export default function bookingAppointmentApi(
  newBookingIntake: FormData,
): Promise<BookingAppointmentProps> {
  return http
    .post("/public/booking-intake", newBookingIntake, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then(({ data }: AxiosResponse<BookingAppointmentProps>) => data);
}

// walk-in booking
export function walkInBookingAppointmentApi(
  newWalkInBooking: FormData,
): Promise<BookingAppointmentProps> {
  return http
    .post("/admin/bookings/walk-in", newWalkInBooking, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then(({ data }: AxiosResponse<BookingAppointmentProps>) => data);
}

// get all bookings
export function getAllBookingsApi(): Promise<BookingResponse> {
  return http
    .get("/admin/bookings")
    .then(({ data }: AxiosResponse<BookingResponse>) => data);
}

// get single booking
export function getBookingByIdApi(
  bookingId: string,
): Promise<SingleBookingResponse> {
  return http
    .get(`/admin/bookings/${bookingId}`)
    .then(({ data }: AxiosResponse<SingleBookingResponse>) => data);
}

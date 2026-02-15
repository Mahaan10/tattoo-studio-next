import { AxiosResponse } from "axios"
import http from "./httpService"
import { BookingAppointmentProps } from "@/components/schema & types/booking/booking-appointment.types"

export default function BookingAppointmentApi(newBookingIntake: FormData): Promise<BookingAppointmentProps> {
    return http.post("/public/booking-intake", newBookingIntake, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).then(({ data }: AxiosResponse<BookingAppointmentProps>) => data)
}

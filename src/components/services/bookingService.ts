import { AxiosResponse } from "axios"
import http from "./httpService"
import { MakeBookingAppointmentSchema } from "@/components/schema/booking/make-booking-appointement.schema"

export default function makeBookingAppointmentApi(newBookingIntake: FormData): Promise<MakeBookingAppointmentSchema> {
    return http.post("/public/booking-intake", newBookingIntake, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).then(({ data }: AxiosResponse<MakeBookingAppointmentSchema>) => data)
}

import { AxiosResponse } from "axios";
import {
  ConsultSlotResponse,
  ConsultSlotsProps,
  PublicConsultAvailabiltyResponse,
} from "../schema & types/consultSlot/consultSlot.types";
import http from "./httpService";

// public availability
export default function getConsultAvailabilityApi(
  month: string,
): Promise<PublicConsultAvailabiltyResponse> {
  return http
    .get("/public/availability", {
      params: { month },
    })
    .then(({ data }: AxiosResponse<PublicConsultAvailabiltyResponse>) => data);
}

// create consult slot
export function createNewConsultSlotApi(
  newConsultSlot: ConsultSlotsProps,
): Promise<ConsultSlotsProps> {
  return http
    .post("/admin/consult-slots", newConsultSlot)
    .then(({ data }: AxiosResponse<ConsultSlotsProps>) => data);
}

// get consult slots
export function getConsultSlotsApi(): Promise<ConsultSlotResponse> {
  return http
    .get("/admin/consult-slots")
    .then(({ data }: AxiosResponse<ConsultSlotResponse>) => data);
}

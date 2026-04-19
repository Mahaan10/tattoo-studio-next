import {
  GuestArtistBooking,
  GuestArtistBookingResponse,
  GuestArtistTableAvailability,
  GuestsArtistDateProps,
} from "../schema & types/guest-artist/guest-artist.types";
import http from "./httpService";
import { AxiosResponse } from "axios";

export default function getGuestArtistTableAvailabilityApi({
  startDate,
  endDate,
}: GuestsArtistDateProps): Promise<GuestArtistTableAvailability> {
  return http
    .get("/guest-bookings/availability", {
      params: {
        startDate,
        endDate,
      },
    })
    .then(({ data }: AxiosResponse<GuestArtistTableAvailability>) => data);
}

export function guestArtistBookingTableApi(
  newBookingTable: GuestArtistBooking,
): Promise<GuestArtistBookingResponse> {
  return http
    .post("/guest-bookings", newBookingTable)
    .then(({ data }: AxiosResponse<GuestArtistBookingResponse>) => data);
}

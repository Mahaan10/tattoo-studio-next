import { AxiosResponse } from "axios";
import http from "./httpService";
import { ArtistsResponse } from "../schema & types/artist/artist.types";

export default function getArtistsApi(): Promise<ArtistsResponse> {
  return http
    .get("/artists")
    .then(({ data }: AxiosResponse<ArtistsResponse>) => data);
}

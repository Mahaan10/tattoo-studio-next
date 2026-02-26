import { AxiosResponse } from "axios";
import http from "./httpService";
import { ArtistsResponse } from "../schema & types/artist/artist.types";

export default function getArtistsApi(): Promise<ArtistsResponse> {
  return http
    .get("/artists")
    .then(({ data }: AxiosResponse<ArtistsResponse>) => data);
}

export function getArtistBySlugApi(slug: string): Promise<ArtistsResponse> {
  return http.get(`/artists?q=${slug}`).then(({ data }: AxiosResponse<ArtistsResponse>) => data)
}

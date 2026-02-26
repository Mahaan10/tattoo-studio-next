import { AxiosResponse } from "axios";
import http from "./httpService";
import {
  ArtistsResponse,
  SingleArtistResponse,
} from "../schema & types/artist/artist.types";

export default function getArtistsApi(): Promise<ArtistsResponse> {
  return http
    .get("/public/artists/lookbook")
    .then(({ data }: AxiosResponse<ArtistsResponse>) => data);
}

export function getArtistBySlugApi(
  slug: string,
): Promise<SingleArtistResponse> {
  return http
    .get(`/public/artists/${slug}`)
    .then(({ data }: AxiosResponse<SingleArtistResponse>) => data);
}

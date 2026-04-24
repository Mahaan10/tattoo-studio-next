import { AxiosResponse } from "axios";
import http from "./httpService";
import {
  ArtistFormDataProps,
  ArtistInfo,
  ArtistResponse,
  LookbookResponse,
  SingleArtistResponse,
} from "../schema & types/artist/artist.types";

interface EditArtistArgs {
  artistId: string;
  newArtist: FormData | object;
}

// get public artist lookbook
export function getArtistsLookbookApi(): Promise<LookbookResponse> {
  return http
    .get("/public/artists/lookbook")
    .then(({ data }: AxiosResponse<LookbookResponse>) => data);
}

// get single public artist
export function getArtistBySlugApi(
  slug: string,
): Promise<SingleArtistResponse> {
  return http
    .get(`/public/artists/${slug}`)
    .then(({ data }: AxiosResponse<SingleArtistResponse>) => data);
}

// get all artists
export function getAllArtistsApi(): Promise<ArtistResponse> {
  return http
    .get("/artists")
    .then(({ data }: AxiosResponse<ArtistResponse>) => data);
}

// create new artist
export function createNewArtistApi(
  newArtist: FormData,
): Promise<ArtistFormDataProps> {
  return http
    .post("/artists", newArtist, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then(({ data }: AxiosResponse<ArtistFormDataProps>) => data);
}

// update artist
export function editArtistApi({
  artistId,
  newArtist,
}: EditArtistArgs): Promise<ArtistFormDataProps> {
  const isFormData =
    typeof FormData !== "undefined" && newArtist instanceof FormData;

  return http
    .patch(`/artists/${artistId}`, newArtist, {
      headers:
        isFormData && (newArtist.has("cover") || newArtist.has("works"))
          ? {
              "Content-Type": "multipart/form-data",
            }
          : undefined,
    })
    .then(({ data }: AxiosResponse<ArtistFormDataProps>) => data);
}

// get single artist
export function getArtistByIdApi(artistId: string): Promise<ArtistInfo> {
  return http
    .get(`/artists/${artistId}`)
    .then(({ data }: AxiosResponse<ArtistInfo>) => data);
}

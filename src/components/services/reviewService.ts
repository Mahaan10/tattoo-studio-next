import { AxiosResponse } from "axios";
import { GoogleReviews } from "../schema & types/review/review.types";
import http from "./httpService";

export default function getReviewsApi(): Promise<GoogleReviews> {
  return http
    .get("/public/reviews/google")
    .then(({ data }: AxiosResponse<GoogleReviews>) => data);
}

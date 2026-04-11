import { AxiosResponse } from "axios";
import { ArticlesResponse } from "../schema & types/article/article.types";
import http from "./httpService";

export default function getArticlesApi(): Promise<ArticlesResponse> {
  return http
    .get("/public/articles")
    .then(({ data }: AxiosResponse<ArticlesResponse>) => data);
}

export function getArticleBySlugApi(slug: string): Promise<any> {
  return http
    .get(`/public/articles/${slug}`)
    .then(({ data }: AxiosResponse<any>) => data);
}

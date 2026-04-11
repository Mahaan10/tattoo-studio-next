export interface ArticleProps {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverUrl: string;
  tags: string[];
  status?: string;
  publishedAt: string | null;
}

export interface ArticlesResponse {
  page: number;
  limit: number;
  total: number;
  items: ArticleProps[];
}

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

// Admin

export interface ArticleFormDataProps {
  title: string;
  excerpt: string;
  content: string;
  status: string;
  cover: File;
  tags: string[];
}

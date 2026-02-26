export interface Artist {
  id?: string;
  displayName: string;
  email: string;
  avatarUrl: string;
  bio: string;
  handle: string;
  phone: string;
  status: string;
  studioId?: string | null;
}

export interface ArtistsResponse {
  page: number;
  limit: number;
  total: number;
  items: Artist[];
}

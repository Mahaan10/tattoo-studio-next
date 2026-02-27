export interface ArtistWork {
  id: string;
  title: string;
  coverUrl: string;
  tags: string[];
  createdAt?: string;
}

export interface LookbookArtist {
  id: string;
  slug: string;
  handle: string;
  displayName: string;
  avatarUrl: string;
  coverUrl: string;
  worksCount: number;
  latestWorks: ArtistWork[];
}

export interface LookbookResponse {
  page: number;
  limit: number;
  total: number;
  items: LookbookArtist[];
}

export interface ArtistsResponse {
  page: number;
  limit: number;
  total: number;
  items: any[];
}

export interface ArtistWorksResponse {
  page: number;
  limit: number;
  total: number;
  hasMore: boolean;
  items: ArtistWork[];
}

export interface SingleArtistResponse {
  artist: {
    id: string;
    slug: string;
    handle: string;
    displayName: string;
    avatarUrl: string;
    coverUrl: string;
    bio: string;
  };
  works: ArtistWorksResponse;
}

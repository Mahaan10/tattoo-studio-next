export interface ArtistWork {
  id?: string;
  title?: string;
  coverUrl: string;
  tags: string[];
}

export interface LatestArtistWorks extends ArtistWork {}

export interface Artist {
  id?: string;
  displayName: string;
  email?: string;
  avatarUrl: string;
  coverUrl: string;
  worksCount?: number;
  bio?: string;
  handle?: string;
  slug: string;
  phone?: string;
  status?: string;
  studioId?: string | null;
  latestWorks: LatestArtistWorks[];
}

export interface ArtistsResponse {
  page: number;
  limit: number;
  total: number;
  items: Artist[];
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

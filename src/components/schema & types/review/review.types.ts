export interface review {
  authorName: string;
  authorPhotoUrl: string;
  rating: number;
  text: string;
  time: number;
  relativeTimeDescription: string;
}

export interface GoogleReviews {
  rating: number;
  totalRatings: number;
  reviews: review[];
  cachedAt: Date;
}

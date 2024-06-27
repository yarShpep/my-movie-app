export interface Movie {
    id: string;
    name: string;
    poster: { url: string };
    year: number;
    rating: number;
    description?: string;
    genres?: { name: string }[];
  }
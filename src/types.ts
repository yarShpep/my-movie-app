export interface Genre {
    name: string;
}

export interface Rating {
    kp: number;
    imdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number;
}

export interface Movie {
    id: number;
    name: string;
    year: number;
    description: string;
    poster: { url: string };
    genres: Genre[];
    rating: Rating;
}

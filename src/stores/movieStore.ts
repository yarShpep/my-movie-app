import { makeAutoObservable } from 'mobx';
import { getMovies, getMovieById } from '../services/movieService';
import { Movie } from '../types';

class MovieStore {
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
  movieDetail: Movie | null = null;
  favorites: Set<Movie> = new Set();

  constructor() {
    makeAutoObservable(this);
  }

  async fetchMovies(page: number = 1) {
    try {
      const data = await getMovies(page);
      this.movies = data.docs;
      this.filteredMovies = data.docs;
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }

  async fetchMovieDetail(id: string) {
    try {
      const data = await getMovieById(id);
      this.movieDetail = data;
    } catch (error) {
      console.error('Error fetching movie detail:', error);
    }
  }

  filterMovies({ genre, rating, year }: { genre: string; rating: string; year: string }) {
    this.filteredMovies = this.movies.filter(movie => {
      return (
        (genre ? movie.genres?.some(g => g.name.includes(genre)) : true) &&
        (rating ? movie.rating >= parseFloat(rating) : true) &&
        (year ? movie.year.toString().includes(year) : true)
      );
    });
  }

  addFavorite(movie: Movie) {
    this.favorites.add(movie);
  }

  removeFavorite(movie: Movie) {
    this.favorites.delete(movie);
  }
}

const movieStore = new MovieStore();
export default movieStore;
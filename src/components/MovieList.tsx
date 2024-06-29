import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import movieStore from '../stores/movieStore';
import MovieCard from './MovieCard';
import './MovieList.css';

const MovieList: React.FC = observer(() => {
  useEffect(() => {
    movieStore.fetchMovies();
  }, []);

  return (
    <div className="movie-list">
      {movieStore.movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
});

export default MovieList;

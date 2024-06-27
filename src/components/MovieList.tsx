import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import movieStore from '../stores/movieStore';
import MovieCard from './MovieCard';

const MovieList: React.FC = observer(() => {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await movieStore.fetchMovies();
      } catch (error) {
        setError('Failed to load movies. Please try again later.');
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {movieStore.filteredMovies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
});

export default MovieList;
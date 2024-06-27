import React from 'react';
import { observer } from 'mobx-react-lite';
import movieStore from '../stores/movieStore';
import MovieCard from './MovieCard';
import { Movie } from '../types';

const Favorites: React.FC = observer(() => {
  return (
    <div>
      {Array.from(movieStore.favorites).map((movie: Movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
});

export default Favorites;
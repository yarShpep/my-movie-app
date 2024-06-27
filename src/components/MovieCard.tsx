import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/movie/${movie.id}`)}>
      <img src={movie.poster?.url} alt={movie.name} />
      <h3>{movie.name}</h3>
      <p>{movie.year}</p>
      <p>{movie.rating}</p>
    </div>
  );
};

export default MovieCard;
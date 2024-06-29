import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Movie } from '../types';
import './MovieCard.css';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const navigate = useNavigate();

  const renderGenres = () => {
    if (!movie.genres) return null;
    const genresToShow = movie.genres.slice(0, 2);
    const remainingGenres = movie.genres.length - genresToShow.length;
    return (
      <span>
        {genresToShow.map(genre => genre.name).join(', ')}
        {remainingGenres > 0 && '...'}
      </span>
    );
  };

  return (
    <div className="movie-card" onClick={() => navigate(`/movie/${movie.id}`)}>
      <img src={movie.poster?.url} alt={movie.name} />
      <div className="movie-info">
        <h3>{movie.name}</h3>
        <p>{movie.year}</p>
        <p>KP Rating: {movie.rating?.kp}</p>
        <p>Genres: {renderGenres()}</p>
      </div>
    </div>
  );
};

export default MovieCard;

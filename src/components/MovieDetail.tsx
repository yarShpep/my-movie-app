import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import movieStore from '../stores/movieStore';

const MovieDetail: React.FC = observer(() => {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      movieStore.fetchMovieDetail(id);
    }
  }, [id]);

  useEffect(() => {
    console.log("Movie detail:", movieStore.movieDetail); // Логирование данных
  }, [movieStore.movieDetail]);

  if (!movieStore.movieDetail) return <div>Loading...</div>;

  const { poster, name, description, year, genres, rating } = movieStore.movieDetail;

  return (
    <div>
      <img src={poster?.url} alt={name} />
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{year}</p>
      <p>{genres?.map(genre => genre.name).join(', ')}</p>
      <div>
        <h2>Ratings</h2>
        <p>KP: {rating?.kp}</p>
        <p>IMDB: {rating?.imdb}</p>
        <p>Film Critics: {rating?.filmCritics}</p>
        <p>Russian Film Critics: {rating?.russianFilmCritics}</p>
      </div>
    </div>
  );
});

export default MovieDetail;

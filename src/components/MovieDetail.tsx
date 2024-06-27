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

  if (!movieStore.movieDetail) return <div>Loading...</div>;

  const { poster, name, description, year, genres } = movieStore.movieDetail;

  return (
    <div>
      <img src={poster?.url} alt={name} />
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{year}</p>
      <p>{genres?.map(genre => genre.name).join(', ')}</p>
    </div>
  );
});

export default MovieDetail;
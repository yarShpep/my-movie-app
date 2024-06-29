import React from 'react';
import MovieList from '../components/MovieList';
import Filter from '../components/Filter';

const Home: React.FC = () => {
  return (
    <div>
      <Filter />
      <MovieList />
    </div>
  );
};

export default Home;

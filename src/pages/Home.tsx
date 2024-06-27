import React from 'react';
import MovieList from '../components/MovieList';
import Filter from '../components/Filter';

const Home = () => {
  return (
    <div>
      <Filter />
      <MovieList />
    </div>
  );
};

export default Home;
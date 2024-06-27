import React, { useState } from 'react';
import movieStore from '../stores/movieStore';

const Filter: React.FC = () => {
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');
  const [year, setYear] = useState('');

  const handleFilter = () => {
    // Логика фильтрации фильмов в movieStore
    movieStore.filterMovies({ genre, rating, year });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <input
        type="text"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default Filter;
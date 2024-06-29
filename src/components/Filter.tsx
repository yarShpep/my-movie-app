import React, { useState } from 'react';
import movieStore from '../stores/movieStore';
import './Filter.css';

const Filter: React.FC = () => {
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');
  const [year, setYear] = useState('');
  const [showFilter, setShowFilter] = useState(false);

  const handleFilter = () => {
    movieStore.filterMovies({ genre, rating, year });
    console.log('Filter applied:', { genre, rating, year });
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div>
      <button onClick={toggleFilter} className="nav-button">
        {showFilter ? 'Скрыть фильтр' : 'Показать фильтр'}
      </button>
      {showFilter && (
        <div className="filter-container">
          <input
            type="text"
            placeholder="Жанр"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="filter-input"
          />
          <input
            type="text"
            placeholder="Рейтинг"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="filter-input"
          />
          <input
            type="text"
            placeholder="Год"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="filter-input"
          />
          <button onClick={handleFilter} className="apply-button">Применить</button>
        </div>
      )}
    </div>
  );
};

export default Filter;

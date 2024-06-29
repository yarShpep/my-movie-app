import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import FavoritesPage from './pages/FavoritesPage';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <nav className="navigation">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'nav-button active' : 'nav-button')}
        >
          Фильмы
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) => (isActive ? 'nav-button active' : 'nav-button')}
        >
          Избранное
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Router>
  );
};

export default App;

import './App.scss';
import React, { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [visibleMovies, setVisibleMovies] = useState(moviesFromServer);
  const [searchQuery, setSearchQuery] = useState('');

  function ordenar(query) {
    setVisibleMovies(
      moviesFromServer.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()))
    );
  }

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    ordenar(value);
  };

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            <label htmlFor="search-query" className="label">
              Search movie
            </label>
            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                value={searchQuery}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <MoviesList movies={visibleMovies} />
      </div>
      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};

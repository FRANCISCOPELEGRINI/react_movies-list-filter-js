import './App.scss';
import React, { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [visibleMovies, setVisibleMovies] = useState(moviesFromServer);
  let inpute = '';

  function ordenar(movies, setar, inputa) {
    setar(movies.filter(r => r.title.includes(inputa)));
  }

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
              />
              {() => {
                inpute = document.getElementsByClassName('control').value;
                ordenar(visibleMovies, setVisibleMovies, inpute);
              }}
            </div>
          </div>
        </div>
        <MoviesList movies={visibleMovies} />
      </div>
      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};

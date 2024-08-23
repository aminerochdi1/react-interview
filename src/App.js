import logo from './logo.svg';
import './App.css';
// [Font]
// import '@fontsource/inter';

import React, { useState,useEffect } from 'react';

import MoviesPerPage from './components/MoviesPerPage';

// Redux
import { Provider,useSelector  } from 'react-redux';
import store from './redux/store';
import MoviesList from './components/MoviesList';
import { useDispatch } from 'react-redux';
import { setMovies } from './redux/actions/moviesActions';
import { movies$ } from './data/movies'; 

import CategoryFilter from './components/CategoryFilter';
import Pagination from './components/Pagination';


const App = () => {
// Start[Pagination]
  const [moviesPerPage,setMoviesPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  const movies = useSelector(state => state.movies.filteredMovies);
  const totalMovies = movies.length;

  useEffect(() => {
    movies$.then(fetchedMovies => {
      dispatch(setMovies(fetchedMovies));
    });
  }, [dispatch]);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);
  // End[Pagination]

  return (

      <div className="App">

        <CategoryFilter/>
        <MoviesList movies={currentMovies} />
        <MoviesPerPage/>
        <Pagination
        totalMovies={totalMovies}
        moviesPerPage={moviesPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        />

      </div>

  );
};

export default App;

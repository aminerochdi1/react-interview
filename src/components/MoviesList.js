import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from '../redux/actions/moviesActions';
import { movies$ } from '../data/movies'; 
import MovieCard from './MovieCard';

const MoviesList = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies.filteredMovies);

  useEffect(() => {
    movies$.then(movies => {
      dispatch(setMovies(movies));
    });
  }, [dispatch]);

  return (
    <div className="movies-list">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesList;

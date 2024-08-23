import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from '../redux/actions/moviesActions';
import { movies$ } from '../data/movies'; 
import MovieCard from './MovieCard';

const MoviesList = ({ movies }) => {
  // const dispatch = useDispatch();
  // const movies = useSelector(state => state.movies.filteredMovies);

  // useEffect(() => {
  //   movies$.then(movies => {
  //     dispatch(setMovies(movies));
  //   });
  // }, [dispatch]);
  // const movies = useSelector(state => state.movies.filteredMovies);

  return (
    <div className="movies-list">
       {movies.length > 0 ? (
        movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))
      ) : (
        <p>No movies available</p>
      )}
    </div>
  );
};

export default MoviesList;

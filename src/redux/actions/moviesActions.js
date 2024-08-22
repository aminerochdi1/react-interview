
export const setMovies = (movies) => ({
    type: 'SET_MOVIES',
    payload: movies,
  });
  
  export const deleteMovie = (id) => ({
    type: 'DELETE_MOVIE',
    payload: id,
  });
  
  export const toggleLikeDislike = (id) => ({
    type: 'TOGGLE_LIKE_DISLIKE',
    payload: id,
  });
  
  export const filterByCategory = (categories) => ({
    type: 'FILTER_BY_CATEGORY',
    payload: categories,
  });
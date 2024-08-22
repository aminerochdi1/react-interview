const initialState = {
    movies: [],
    filteredMovies: [],
    categories: [],
  };
  
  const moviesReducer = (state = initialState, action) => {
    switch (action.type) {

        // Start[Modifier un film]
      case 'SET_MOVIES':
        const categories = [...new Set(action.payload.map(movie => movie.category))];
        return {
          ...state,
          movies: action.payload,
          filteredMovies: action.payload,
          categories,
        };
        // End[Modifier un film]

        // Start[Supprimer un film]
      case 'DELETE_MOVIE':
        const updatedMovies = state.filteredMovies.filter(movie => movie.id !== action.payload);
        const updatedCategories = [...new Set(updatedMovies.map(movie => movie.category))];
        return {
          ...state,
          filteredMovies: updatedMovies,
          categories: updatedCategories,
        };
        // End[Supprimer un film]

        // Start[favoriser/disfavoriser un film]
      case 'TOGGLE_LIKE_DISLIKE':
        return {
          ...state,
          filteredMovies: state.filteredMovies.map(movie =>
            movie.id === action.payload
              ? { ...movie, liked: !movie.liked, likes: movie.liked ? movie.likes - 1 : movie.likes + 1 }
              : movie
          ),
        };

            // End[favoriser/disfavoriser un film]

                // Start[Filtrer par Categorie]
      case 'FILTER_BY_CATEGORY':
        const filtered = action.payload.length === 0
          ? state.movies
          : state.movies.filter(movie => action.payload.includes(movie.category));
        return {
          ...state,
          filteredMovies: filtered,
        };
      default:
        return state;
    }
  };
        // End[Filtrer par Categorie]
  
  export default moviesReducer;
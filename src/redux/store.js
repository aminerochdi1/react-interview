import { 
    configureStore as createStore,
     combineReducers } from 'redux';
import moviesReducer from './reducers/moviesReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
});

const store = createStore(rootReducer);

export default store;
import logo from './logo.svg';
import './App.css';
// [Font]
// import '@fontsource/inter';

import React, { useState, useEffect } from 'react';

// Redux
import { Provider,useSelector  } from 'react-redux';
import store from './redux/store';
import MoviesList from './components/MoviesList';
import CategoryFilter from './components/CategoryFilter';
import Pagination from './components/Pagination';

const App = () => {

  return (
    <Provider store={store}>
      <div className="App">

        <CategoryFilter/>
        <MoviesList/>

      </div>
    </Provider>
  );
};

export default App;

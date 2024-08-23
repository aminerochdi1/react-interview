import React, { useState } from 'react';

// {MaterialUI}
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const MoviePagination = ({ totalMovies, moviesPerPage, currentPage, setCurrentPage }) => {
  // [Calcule le nombre totale des pages]
  const totalPages = Math.ceil(totalMovies / moviesPerPage);


  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className="pagination" style={{display: 'flex', justifyContent: 'center',margin: '20px'}}>
      <Stack spacing={2}>
        <Pagination 
          count={totalPages} 
          page={currentPage}
          onChange={handlePageChange} 
          size="medium" 
        />
      </Stack>
    </div>
  );
};

export default MoviePagination;
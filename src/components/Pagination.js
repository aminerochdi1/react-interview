import React, { useState } from 'react';

const Pagination = ({ totalMovies, moviesPerPage, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(totalMovies / moviesPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="pagination">
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        Prev
      </button>
      <span>{currentPage}/{totalPages}</span>
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;

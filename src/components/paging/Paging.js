import React from 'react';
import PropTypes from 'prop-types';

function Paging({ currentPage, totalPages, nextPage, children }) {
  return (
    <>
      {currentPage > 1 && 
          <button onClick={() => nextPage(currentPage - 1)}>Previous Page</button>}
      {`${currentPage} / ${totalPages}`}
      {currentPage < totalPages &&
          <button onClick={() => nextPage(currentPage + 1)}>Next Page</button>}
      {children}
    </>
  );
}

Paging.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  nextPage: PropTypes.func.isRequired,
  children: PropTypes.node
};

export default Paging;

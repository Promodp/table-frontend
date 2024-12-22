import { useState } from 'react';

const usePagination = (items, itemsPerPage = 5) => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(items.length / itemsPerPage);
  
  const currentItems = items.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
  );
  
  const handleNextPage = () => {
      if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  
  const handlePrevPage = () => {
      if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  
  const handleGoToPage = (page) => {
      if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return {
      currentItems,
      handleNextPage,
      handlePrevPage,
      handleGoToPage,
      currentPage,
      totalPages
  };
};

export default usePagination;

import React, { useState } from "react";

interface PaginationProps {
  data: Array<any>;
  dataLimit: number;
  setCurrentPage: any;
  currentPage: any;
}

const Pagination: React.FC<PaginationProps> = ({
  data,
  dataLimit,
  setCurrentPage,
  currentPage,
}) => {
  const [pages, setPages] = useState(Math.ceil(data.length / dataLimit));

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const changePage = (e) => {
    const pageNumber = Number(e.target.textContent);
    setCurrentPage(pageNumber);
  };

  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / dataLimit); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {/* previous button */}
      <button
        onClick={goToPreviousPage}
        className={`prev ${currentPage === 1 ? "disabled" : ""}`}
        data-testid="prev-button"
      >
        Previous
      </button>

      {/* show page number */}
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={changePage}
          className={`paginationItem ${
            currentPage === number ? "active" : null
          }`}
          data-testid="page-number"
        >
          <span>{number}</span>
        </button>
      ))}

      {/* next button */}
      <button
        onClick={goToNextPage}
        className={`next ${currentPage === pages ? "disabled" : ""}`}
        data-testid="next-button"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

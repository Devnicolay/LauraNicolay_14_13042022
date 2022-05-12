import React, { useState } from "react";

interface PaginationProps {
  data: Array<any>;
  dataLimit: number;
  pageLimit: number;
  setCurrentPage: any;
  currentPage: any;
}

const Pagination: React.FC<PaginationProps> = ({
  data,
  dataLimit,
  pageLimit,
  setCurrentPage,
  currentPage,
}) => {
  const [pages, setPages] = useState(Math.ceil(data.length / dataLimit));
  //   const [currentPage, setCurrentPage] = useState(1);

  console.log(pages, data.length, dataLimit);
  const goToNextPage = () => {
    console.log("page suivante");
    setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    console.log("page précédente");
    setCurrentPage(currentPage - 1);
  };

  const changePage = (e) => {
    const pageNumber = Number(e.target.textContent);
    setCurrentPage(pageNumber);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };
  return (
    <div className="pagination">
      {/* previous button */}
      <button
        onClick={goToPreviousPage}
        className={`prev ${currentPage === 1 ? "disabled" : ""}`}
      >
        Previous
      </button>

      {/* show page number */}
      {getPaginationGroup().map((item, index) => (
        <button
          key={index}
          onClick={changePage}
          className={`paginationItem ${currentPage === item ? "active" : null}`}
        >
          <span>{item}</span>
        </button>
      ))}

      {/* next button */}
      <button
        onClick={goToNextPage}
        className={`next ${currentPage === pages ? "disabled" : ""}`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

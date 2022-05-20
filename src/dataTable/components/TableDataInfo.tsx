import React from "react";

interface TableDataInfoProps {
  dataLimit: number;
  dataLength: number;
  currentPage: number;
}

const TableDataInfo: React.FC<TableDataInfoProps> = ({
  dataLimit,
  dataLength,
  currentPage,
}) => {
  const indexDataStartForPage = dataLimit * currentPage - dataLimit + 1;
  const dataLengthPage = dataLimit * currentPage;

  return (
    <div className="dataTable-info">
      {dataLengthPage < dataLength ? (
        <p>
          Showing {indexDataStartForPage} to {dataLengthPage} of {dataLength}{" "}
          entries
        </p>
      ) : (
        <p>
          Showing {indexDataStartForPage} to {dataLength} of {dataLength}{" "}
          entries
        </p>
      )}
    </div>
  );
};

export default TableDataInfo;

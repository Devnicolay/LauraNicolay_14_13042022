import React, { useEffect, useState } from "react";
// @ts-ignore
import Pagination from "./Pagination.tsx";
// @ts-ignore
import TableBody from "./TableBody.tsx";
// @ts-ignore
import TableDataInfo from "./TableDataInfo.tsx";
// @ts-ignore
import TableHead from "./TableHead.tsx";
// @ts-ignore
import TableLength from "./TableLength.tsx";
// @ts-ignore
import TableSearch from "./TableSearch.tsx";
import { getFilterData } from "../services/returnData.js";

interface TableProps {
  data: Array<any>;
  columns: Array<any>;
}

const DataTable: React.FC<TableProps> = ({ data, columns }) => {
  const [valueSearch, setValueSearch] = useState("");
  const [order, setOrder] = useState({
    order: "ASC",
    column: null,
    type: null,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [dataLimit, setDataLimit] = useState(10);

  /**
   * Get value for search input ok dataTable
   * @param valueTarget value for search input
   */
  const onChangeSearch = (valueTarget) => {
    setValueSearch(valueTarget);
  };

  /**
   * Get value for select entries of dataTable
   * @param valueTarget value for select entries
   */
  const onChangeSelect = (valueTarget) => {
    setDataLimit(valueTarget);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [valueSearch, dataLimit]);

  const filterData = getFilterData(
    data,
    order,
    valueSearch,
    currentPage,
    dataLimit
  );

  return (
    <div className="container-data-table">
      <div className="data-table-head">
        <TableLength onChangeSelect={onChangeSelect} />
        <TableSearch onChangeSearch={onChangeSearch} />
      </div>
      <table id="data-table">
        <TableHead columns={columns} order={order} setOrder={setOrder} />
        <TableBody
          columns={columns}
          data={getFilterData(data, order, valueSearch, currentPage, dataLimit)}
        />
      </table>
      <div>
        {filterData.length < 1 ? (
          <div className="no-data">
            <p>No data found</p>
          </div>
        ) : null}
      </div>
      <div className="data-table-bottom">
        <TableDataInfo
          dataLimit={dataLimit}
          dataLength={data.length}
          currentPage={currentPage}
        />
        <Pagination
          data={data}
          dataLimit={dataLimit}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default DataTable;

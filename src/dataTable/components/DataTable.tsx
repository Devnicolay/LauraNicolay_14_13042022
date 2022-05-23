import React, { useState } from "react";
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
}

const DataTable: React.FC<TableProps> = ({ data }) => {
  // Write here label and id for columns
  const columns = [
    { label: "First Name", id: "firstName", type: "string" },
    { label: "Last Name", id: "lastName", type: "string" },
    { label: "Start Date", id: "startDate", type: "date" },
    { label: "Department", id: "department", type: "string" },
    { label: "Date of Birth", id: "dateOfBirth", type: "date" },
    { label: "Street", id: "street", type: "string" },
    { label: "City", id: "city", type: "string" },
    { label: "State", id: "state", type: "string" },
    { label: "Zip Code", id: "zipCode", type: "number" },
  ];

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
          pageLimit="5"
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default DataTable;

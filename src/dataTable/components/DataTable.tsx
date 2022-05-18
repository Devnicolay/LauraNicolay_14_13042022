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

  // const [order, setOrder] = useState({ id: "", order: "" });
  const [valueSearch, setValueSearch] = useState("");
  const [order, setOrder] = useState({
    order: "ASC",
    column: null,
    type: null,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [dataLimit, setDataLimit] = useState(10);

  /**
   *
   * Change ASC and DESC for column cliked
   * @param col column clicked for sort
   */
  const sorting = (col, type) => {
    if (order.column === col) {
      setOrder({
        order: order.order === "ASC" ? "DESC" : "ASC",
        column: col,
        type: type,
      });
    } else {
      setOrder({ order: "ASC", column: col, type: type });
    }
  };

  /**
   *
   * @param valueTarget value for search input
   */
  const onChangeSearch = (valueTarget) => {
    setValueSearch(valueTarget);
  };

  /**
   *
   * @param valueTarget value for select entries
   */
  const onChangeSelect = (valueTarget) => {
    setDataLimit(valueTarget);
  };

  /**
   * For update data with filter for search input
   */
  // useEffect(() => {
  //   data.filter((itemData) =>
  //     JSON.stringify(Object(itemData))
  //       .toLowerCase()
  //       .includes(valueSearch.toLowerCase())
  //   );
  //   console.log(dataFilter);
  //   setDatas(dataFilter);
  // }, [valueSearch]);

  /**
   * Sort data on clicked column
   */
  const getSort = () => {
    // if (order.type === "date") {
    //   if (order.order === "ASC" && order.column) {
    //     console.log("turn on ASC");
    //     const sorted = data
    //       .slice(0)
    //       .sort((a, b) =>
    //         new Date(a[order.column]) > new Date(b[order.column]) ? 1 : -1
    //       );
    //     console.log(sorted);
    //     return sorted;
    //   }
    //   if (order.order === "DESC" && order.column) {
    //     console.log("turn on DESC");
    //     const sorted = data
    //       .slice(0)
    //       .sort((a, b) =>
    //         new Date(a[order.column]) < new Date(b[order.column]) ? 1 : -1
    //       );
    //     console.log(sorted);
    //     return sorted;
    //   }
    // }
    // Sort date type
    // if (order.type === "date") {
    //   if (order.order === "ASC" && order.column) {
    //     console.log("turn on ASC");
    //     data.slice(0).sort((a, b) => {
    //       return new Date(a[order.column]) > new Date(b[order.column]) ? 1 : -1;
    //     });
    //   }
    //   if (order.order === "DESC" && order.column) {
    //     console.log("turn on DESC");
    //     data.slice(0).sort((a, b) => {
    //       return new Date(a[order.column]) < new Date(b[order.column]) ? 1 : -1;
    //     });
    //   }
    // }
    if (order.type === "date") {
      if (order.order === "ASC" && order.column) {
        console.log("turn on ASC");
        data.slice(0).sort((a, b) => {
          const dateA = new Date(a[order.column]);
          const dateB = new Date(a[order.column]);
          return dateA - dateB;
        });
      }
      if (order.order === "DESC" && order.column) {
        console.log("turn on DESC");
        data.slice(0).sort((a, b) => {
          const dateA = new Date(a[order.column]);
          const dateB = new Date(a[order.column]);
          return dateA + dateB;
        });
      }
    }
    // Sort number type
    if (order.type === "number") {
      if (order.order === "ASC" && order.column) {
        return data.sort((a, b) =>
          a[order.column] > b[order.column] ? 1 : -1
        );
      }
      if (order.order === "DESC" && order.column) {
        return data.sort((a, b) =>
          a[order.column] < b[order.column] ? 1 : -1
        );
      }
    }
    // Sort string type
    if (order.order === "ASC" && order.column) {
      return data.sort((a, b) =>
        a[order.column].toLowerCase() > b[order.column].toLowerCase() ? 1 : -1
      );
    }
    if (order.order === "DESC" && order.column) {
      return data.sort((a, b) =>
        a[order.column].toLowerCase() < b[order.column].toLowerCase() ? 1 : -1
      );
    }
  };

  /**
   *
   * @returns data sorted if click on column, or data filtered with search input or data with pagination
   */
  const getFilterData = () => {
    const filterData = data;
    // Sort data on clicked column
    getSort();
    // If use search input
    if (valueSearch.length >= 1) {
      const dataFilter = filterData.filter((element) =>
        JSON.stringify(Object(element))
          .toLowerCase()
          .includes(valueSearch.toLowerCase())
      );
      return dataFilter;
    }
    // Pagination
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    const sliceData = filterData.slice(startIndex, endIndex);
    return sliceData;
  };

  console.log(data);
  return (
    <div className="container-data-table">
      <div className="data-table-head">
        <TableLength onChangeSelect={onChangeSelect} />
        <TableSearch onChangeSearch={onChangeSearch} />
      </div>

      <table id="data-table">
        <TableHead columns={columns} sorting={sorting} iconSort={order} />
        <TableBody columns={columns} data={getFilterData()} />
      </table>
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

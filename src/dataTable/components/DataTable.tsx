import React, { useEffect, useState } from "react";
// @ts-ignore
import TableBody from "./TableBody.tsx";
// @ts-ignore
import TableHead from "./TableHead.tsx";
// @ts-ignore
import TableSearch from "./TableSearch.tsx";

interface TableProps {
  data: Array<any>;
}

const DataTable: React.FC<TableProps> = ({ data }) => {
  // Write here label and id for columns
  const columns = [
    { label: "First Name", id: "firstName" },
    { label: "Last Name", id: "lastName" },
    { label: "Start Date", id: "startDate" },
    { label: "Department", id: "department" },
    { label: "Date of Birth", id: "dateOfBirth" },
    { label: "Street", id: "street" },
    { label: "City", id: "city" },
    { label: "State", id: "state" },
    { label: "Zip Code", id: "zipCode" },
  ];

  // const [order, setOrder] = useState({ id: "", order: "" });
  const [valueSearch, setValueSearch] = useState("");
  const [order, setOrder] = useState("ASC");
  const [datas, setDatas] = useState([]);
  const [columnId, setColumnId] = useState([]);

  /**
   *
   * @param col column clicked for sort
   */
  const sorting = (col) => {
    if (order === "ASC") {
      data.sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setOrder("DESC");
    }
    if (order === "DESC") {
      data.sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setOrder("ASC");
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
   * For update data with filter for search input
   */
  useEffect(() => {
    console.log(valueSearch);
    // const idColumn = data.map((itemData) => {
    //   return Object.keys(itemData);
    // });
    const dataFilter = data.filter((itemData) =>
      itemData.firstName.toLowerCase().includes(valueSearch.toLowerCase())
    );
    console.log(dataFilter);
    setDatas(dataFilter);
    // setColumnId(idColumn);
    // console.log(columnId);
  }, [valueSearch]);

  return (
    <div className="container-data-table">
      <TableSearch onChangeSearch={onChangeSearch} />
      <table id="data-table">
        <TableHead columns={columns} sorting={sorting} />
        <TableBody columns={columns} data={datas} />
      </table>
    </div>
  );
};

export default DataTable;

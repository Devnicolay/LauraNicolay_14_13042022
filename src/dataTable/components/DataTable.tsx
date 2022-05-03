import React, { useEffect, useState } from "react";
// @ts-ignore
import TableBody from "./TableBody.tsx";
// @ts-ignore
import TableHead from "./TableHead.tsx";

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

  const [order, setOrder] = useState({ id: "", order: "desc" });

  const sortingAsc = (id) => {
    console.log(id);
    setOrder({ id: id, order: "asc" });
    console.log("sorting Ascendant");
  };

  const sortingDesc = (id) => {
    console.log(id);
    setOrder({ id: id, order: "desc" });
    console.log("sorting Descendant");
  };

  console.log(order.id);

  useEffect(() => {
    const idColumn = order.id;
    if (order.order === "asc") {
      console.log(idColumn);
      data.sort((a, b) => (a.idColumn < b.idColumn ? 1 : -1));
    } else if (order.order === "desc") {
      console.log(idColumn);
      data.sort((a, b) => (a.idColumn > b.idColumn ? 1 : -1));
    }
    console.log(data);
  }, [order]);

  return (
    <table id="data-table">
      <TableHead
        columns={columns}
        sortingAsc={sortingAsc}
        sortingDesc={sortingDesc}
      />
      <TableBody columns={columns} data={data} />
    </table>
  );
};

export default DataTable;

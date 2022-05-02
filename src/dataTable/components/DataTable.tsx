import React from "react";
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

  return (
    <table id="data-table">
      <TableHead columns={columns} />
      <TableBody columns={columns} data={data} />
    </table>
  );
};

export default DataTable;

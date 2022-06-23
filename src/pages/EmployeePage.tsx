import React from "react";
import { Link } from "react-router-dom";
import { pathHome } from "../App";
import { employeesListContext } from "../Context/ContextProvider";
import DataTable from "datatable_react_nicolay";
import { columns } from "../columns/columns";
import "datatable_react_nicolay/dist/cjs/styles/style.css";

const EmployeePage = () => {
  const context = React.useContext(employeesListContext);

  return (
    <div className="employees-page">
      <div className="title">
        <h1>Current Employees</h1>
      </div>
      <div className="container">
        <DataTable data={context.employees} columns={columns} />
        <Link to={pathHome}>Home</Link>
      </div>
    </div>
  );
};

export default EmployeePage;

import React from "react";
import { Link } from "react-router-dom";
import { pathEmployeePage } from "../App";
// @ts-ignore
import OrganismForm from "../components/organisms/OrganismForm.tsx";

const Home = () => {
  return (
    <div className="home-page">
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to={pathEmployeePage}>View Current Employees</Link>
        <h2>Create Employee</h2>
        <OrganismForm />
      </div>
    </div>
  );
};

export default Home;

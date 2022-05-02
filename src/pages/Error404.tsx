import React from "react";
import { Link } from "react-router-dom";
import { pathHome } from "../App";

const Error404 = () => {
  return (
    <div className="main-error404">
      <div className="error-404">404</div>
      <div className="error-msg">
        {"Oups! La page que vous demandez n'existe pas."}
      </div>
      <Link to={pathHome}>{"Retourner sur la page d'accueil"}</Link>
    </div>
  );
};

export default Error404;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContextProvider from "./Context/ContextProvider";
import EmployeePage from "./pages/EmployeePage.tsx";
import Error404 from "./pages/Error404.tsx";
import Home from "./pages/Home.tsx";

export const pathHome = "/";
export const pathEmployeePage = "/employee-list";
export const pathError = "/error404";

const App = () => {
  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route exact path={pathHome} element={<Home />}></Route>
          <Route path={pathEmployeePage} element={<EmployeePage />}></Route>
          <Route path={pathError} element={<Error404 />}></Route>
        </Routes>
      </Router>
    </ContextProvider>
  );
};

export default App;

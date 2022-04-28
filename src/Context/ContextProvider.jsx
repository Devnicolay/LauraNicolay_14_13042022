import React, { useState } from "react";

export const employeesListContext = React.createContext({
  employees: [
    {
      firstName: "",
      lastName: "",
      startDate: "",
      department: "",
      dateOfBirth: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
    },
  ],
});

const ContextProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };

  const value = { employees, addEmployee };

  return (
    <employeesListContext.Provider value={value}>
      {children}
    </employeesListContext.Provider>
  );
};

export default ContextProvider;

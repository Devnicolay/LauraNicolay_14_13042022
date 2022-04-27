import React, { useState } from "react";

export const employeesListContext = React.createContext({
  employees: [
    {
      firstName: "Pierre",
      lastName: "barboni",
      startDate: "",
      department: "Sales",
      dateOfBirth: "",
      street: "rue lilas",
      city: "villerupt",
      state: "Alaska",
      zipCode: "123",
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

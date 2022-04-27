import React from 'react';
import { Link } from 'react-router-dom';
import {pathHome} from '../App'
import { employeesListContext } from '../Context/ContextProvider';
import DataTable from '../dataTable/components/DataTable.tsx';

const EmployeePage = () => {
    const context = React.useContext(employeesListContext)
    console.log(context.employees)

    return (
        <div className='employees-page'>
            <div className="title">
            <h1>Current Employees</h1>
            </div>
            <div className="container">
            {context.employees.map((employee, index) => (
                <p key={index}>{employee.firstName} {employee.lastName} {employee.dateOfBirth.toLocaleDateString()} {employee.startDate.toLocaleDateString()} {employee.street} {employee.city} {employee.state} {employee.zipCode} {employee.department} </p>
            ))}
            <DataTable />
                <Link to={pathHome}>Home</Link>
            </div>
        </div>
    );
};

export default EmployeePage;
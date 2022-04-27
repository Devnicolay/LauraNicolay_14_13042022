import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { pathEmployeePage } from '../App';
import OrganismForm from '../components/organisms/OrganismForm.tsx';
import OrganismModal from '../components/organisms/OrganismModal.tsx';
import { employeesListContext } from '../Context/ContextProvider';

const Home = () => {
    const context = React.useContext(employeesListContext)

    const [activeModal, setActiveModal] = useState(false)

    return (
        <div className='home-page'>
            <div className="title">
            <h1>HRnet</h1>
            </div>
            <div className="container">
                <Link to={pathEmployeePage}>View Current Employees</Link>
                <h2>Create Employee</h2>
                {context.employees.map((employee, index) => (
                <p key={index}>{employee.firstName} {employee.lastName} {employee.dateOfBirth.toLocaleDateString()} {employee.startDate.toLocaleDateString()} {employee.street} {employee.city} {employee.state} {employee.zipCode} {employee.department} </p>
            ))}
                <OrganismForm />
            </div>
        </div>
    );
};

export default Home;
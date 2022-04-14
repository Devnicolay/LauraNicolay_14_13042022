import React from 'react';
import { Link } from 'react-router-dom';
import { pathEmployeePage } from '../App';
import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import AtomSubmitButton from '../components/atoms/AtomSubmitButton.tsx';
import MoleculeFieldText from '../components/molecules/MoleculeFieldText.tsx';
import MoleculeDatePicker from '../components/molecules/MoleculeDatePicker.tsx';

interface Values {
    firstName: string;
    lastName: string;
}

const SignUpSchema = Yup.object().shape({
    // email: Yup.string().email('Invalid email address').required('Required'),
    firstName: Yup.string()
      .min(2, 'Must be longer than 2 characters')
      .max(20, 'Nice try, nobody has a first name that long')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Must be longer than 2 characters')
      .max(20, 'Nice try, nobody has a last name that long')
      .required('Required'),
  });

const Home = () => {
    return (
        <div className='home-page'>
            <div className="title">
            <h1>HRnet</h1>
            </div>
            <div className="container">
                <Link to={pathEmployeePage}>View Current Employees</Link>
                <h2>Create Employee</h2>
            <Formik
        initialValues={{
          firstName: '',
          lastName: '',
        }}
        validationSchema={SignUpSchema}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form>
          <MoleculeFieldText htmlfor="firstName" nameLabel={"First Name"} id={"firstName"} />

          <MoleculeFieldText htmlfor="lastName" nameLabel={"Last Name"} id={"lastName"}/>

          <MoleculeDatePicker htmlfor="dateOfBirth" nameLabel={"Date of Birth"} />

          <MoleculeDatePicker htmlfor="startDate" nameLabel={"Start Date"} />


          <AtomSubmitButton />
        </Form>
      </Formik>
      </div>
        </div>
    );
};

export default Home;
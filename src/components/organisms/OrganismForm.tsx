import React from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import AtomSubmitButton from '../atoms/AtomSubmitButton.tsx';
import MoleculeFieldText from '../molecules/MoleculeFieldText.tsx';
import MoleculeDatePicker from '../molecules/MoleculeDatePicker.tsx';
import MoleculeFieldsetAddress from '../molecules/MoleculeFieldsetAddress.tsx';
import {states} from '../../assets/statesList'
import MoleculeDataList from '../molecules/MoleculeDataList.tsx';


interface Values {
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    startDate: Date;
    street: string;
    city: string;
    state: string;
    zipCode: string;
    department: string;
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
      // dateOfBirth: Yup.date()
      // .min(8, 'Select a date of birth')
      // .max(20, 'Nice try, nobody has a date of birth that long')
      // .required('Required'),
      // startDate: Yup.date()
      // .min(8, 'Select a start date')
      // .max(20, 'Nice try, nobody has a start date that long')
      // .required('Required'),
      street: Yup.string()
      .min(2, 'Must be a street')
      .max(40, 'Nice try, nobody has a street that long')
      .required('Required'),
      city: Yup.string()
      .min(2, 'Must be a city')
      .max(40, 'Nice try, nobody has a city that long')
      .required('Required'),
      // state: Yup.string()
      // .min(2, 'Select a state')
      // .max(40, 'Nice try, nobody has a state that long')
      // .required('Required'),
      // zipCode: Yup.number()
      // .min(2, 'Must be a zip code')
      // .max(8, 'Nice try, nobody has a zip code that long')
      // .required('Required'),
      department: Yup.string()
      .min(2, 'Select a department')
      .max(40, 'Nice try, nobody has a department that long')
      .required('Required'),
  });


const OrganismForm = () => {
    return (
        <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          dateOfBirth: new Date(),
          startDate: new Date(),
          street: '',
          city: '',
          state: '',
          zipCode: '',
          department: '',
        }}
        // validationSchema={SignUpSchema}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
          console.log(values)
        }}
      >
        <Form>
          <MoleculeFieldText htmlfor="firstName" nameLabel={"First Name"} id={"firstName"} />

          <MoleculeFieldText htmlfor="lastName" nameLabel={"Last Name"} id={"lastName"} />

          <MoleculeDatePicker htmlfor="dateOfBirth" nameLabel={"Date of Birth"} />

          <MoleculeDatePicker htmlfor="startDate" nameLabel={"Start Date"} />

          <MoleculeFieldsetAddress states={states} />

          <MoleculeDataList />

          <AtomSubmitButton />
        </Form>
      </Formik>
    );
};

export default OrganismForm;
import React, { useState } from "react";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";

// @ts-ignore
import AtomSubmitButton from "../atoms/AtomSubmitButton.tsx";
// @ts-ignore
import MoleculeFieldText from "../molecules/MoleculeFieldText.tsx";
// @ts-ignore
import MoleculeDatePicker from "../molecules/MoleculeDatePicker.tsx";
// @ts-ignore
import MoleculeFieldsetAddress from "../molecules/MoleculeFieldsetAddress.tsx";
// @ts-ignore
import MoleculeDataList from "../molecules/MoleculeDataList.tsx";
import { employeesListContext } from "../../Context/ContextProvider";
// @ts-ignore
import OrganismModal from "./OrganismModal.tsx";

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
  firstName: Yup.string()
    .min(2, "Must be longer than 2 characters")
    .max(20, "Nice try, nobody has a first name that long")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Must be longer than 2 characters")
    .max(20, "Nice try, nobody has a last name that long")
    .required("Required"),
  street: Yup.string()
    .min(2, "Must be a street")
    .max(40, "Nice try, nobody has a street that long")
    .required("Required"),
  city: Yup.string()
    .min(2, "Must be a city")
    .max(40, "Nice try, nobody has a city that long")
    .required("Required"),
  zipCode: Yup.number().min(2, "Must be a zip code").required("Required"),
  department: Yup.string()
    .min(2, "Select a department")
    .max(40, "Nice try, nobody has a department that long")
    .required("Required"),
});

const OrganismForm = () => {
  const context = React.useContext(employeesListContext);

  const [activeModal, setActiveModal] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [startDateOfBirth, setStartDateOfBirth] = useState(new Date());

  const closeModal = () => {
    setActiveModal(false);
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        dateOfBirth: new Date(),
        startDate: new Date(),
        street: "",
        city: "",
        state: "AL",
        zipCode: "",
        department: "Sales",
      }}
      validationSchema={SignUpSchema}
      onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        setTimeout(() => {
          setSubmitting(false);
        }, 500);
        context.addEmployee({
          firstName: values.firstName,
          lastName: values.lastName,
          dateOfBirth: startDateOfBirth.toLocaleDateString("en-US"),
          startDate: startDate.toLocaleDateString("en-US"),
          street: values.street,
          city: values.city,
          state: values.state,
          zipCode: values.zipCode,
          department: values.department,
        });
        setActiveModal(true);
      }}
    >
      <Form className="form-employee">
        <MoleculeFieldText
          htmlfor="firstName"
          nameLabel={"First Name"}
          id={"firstName"}
        />

        <MoleculeFieldText
          htmlfor="lastName"
          nameLabel={"Last Name"}
          id={"lastName"}
        />

        <MoleculeDatePicker
          htmlfor="dateOfBirth"
          nameLabel={"Date of Birth"}
          onChange={setStartDateOfBirth}
          startDate={startDateOfBirth}
        />

        <MoleculeDatePicker
          htmlfor="startDate"
          nameLabel={"Start Date"}
          onChange={setStartDate}
          startDate={startDate}
        />

        <MoleculeFieldsetAddress />

        <MoleculeDataList />

        <AtomSubmitButton />

        <OrganismModal activeModal={activeModal} closeModal={closeModal} />
      </Form>
    </Formik>
  );
};

export default OrganismForm;

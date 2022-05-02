import React from "react";
import { Field } from "formik";

interface AtomInputProps {
  id: string;
  type: string;
}

const AtomInput: React.FC<AtomInputProps> = ({ id, type }) => {
  return <Field id={id} name={id} type={type} />;
};

export default AtomInput;

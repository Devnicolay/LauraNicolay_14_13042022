import React from "react";
import { ErrorMessage } from "formik";

interface MsgError {
  label: string;
}

const AtomErrorMsg: React.FC<MsgError> = ({ label }) => {
  return <ErrorMessage name={label} component="div" className="field-error" />;
};

export default AtomErrorMsg;

import React from "react";
import { Field } from "formik";
// @ts-ignore
import AtomLabel from "../atoms/AtomLabel.tsx";

const MoleculeDataList = () => {
  return (
    <div>
      <AtomLabel htmlfor="department" nameLabel={"Department"} />
      <Field as="select" name="department" id="department">
        <option value="Eales">Sales</option>
        <option value="Marketing">Marketing</option>
        <option value="Engineering">Engineering</option>
        <option value="Human Resources">Human Resources</option>
        <option value="Legal">Legal</option>
      </Field>
    </div>
  );
};

export default MoleculeDataList;

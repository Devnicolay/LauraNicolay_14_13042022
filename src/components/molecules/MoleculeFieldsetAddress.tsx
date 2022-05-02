import React from "react";
import { Field } from "formik";
import { states } from "../../assets/statesList";
// @ts-ignore
import AtomLabel from "../atoms/AtomLabel.tsx";
// @ts-ignore
import AtomInput from "../atoms/AtomInput.tsx";
// @ts-ignore
import AtomErrorMsg from "../atoms/AtomErrorMsg.tsx";

const MoleculeFieldsetAddress = () => {
  return (
    <fieldset className="address">
      <legend>Address</legend>
      <AtomLabel htmlfor="street" nameLabel={"Street"} />
      <AtomInput id={"street"} type={"text"} />
      <AtomErrorMsg label={"street"} />

      <AtomLabel htmlfor="city" nameLabel={"City"} />
      <AtomInput id={"city"} type={"text"} />
      <AtomErrorMsg label={"city"} />

      <AtomLabel htmlfor="state" nameLabel={"State"} />
      <Field as="select" name="state" id="state">
        {states.map((state, index) => (
          <option key={index} value={state.label}>
            {state.label}
          </option>
        ))}
      </Field>
      <AtomErrorMsg label={"state"} />
      {/* <select name="state" id="state">
              {states.map((state,index) => (
                  <option key={index} value={state.label}>{state.label}</option>
              ))}
          </select>
          <AtomErrorMsg label={"state"} /> */}

      <AtomLabel htmlfor="zipCode" nameLabel={"Zip Code"} />
      <AtomInput id={"zipCode"} type={"number"} />
      <AtomErrorMsg label={"zipCode"} />
    </fieldset>
  );
};

export default MoleculeFieldsetAddress;

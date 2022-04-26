import React from 'react';
import { Field } from 'formik';
import AtomLabel from '../atoms/AtomLabel.tsx';
import AtomInput from '../atoms/AtomInput.tsx';
import AtomErrorMsg from '../atoms/AtomErrorMsg.tsx';
import { states } from '../../assets/statesList'

interface StateForm {
    label: string
}

interface FormData {
    [key: string]: StateForm;
}

const MoleculeFieldsetAddress = (props: FormData) => {
    return (
        <fieldset className='address'>
            <legend>Address</legend>
            <AtomLabel htmlfor="street" nameLabel={"Street"} />
          <AtomInput id={"street"} type={"text"} />
          <AtomErrorMsg label={"street"} />

          <AtomLabel htmlfor="city" nameLabel={"City"} />
          <AtomInput id={"city"} type={"text"} />
          <AtomErrorMsg label={"city"}/>

          <AtomLabel htmlfor="state" nameLabel={"State"} />
          <Field as="select" name="state" id="state">
          {states.map((state,index) => (
                  <option key={index} value={state.label}>{state.label}</option>
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
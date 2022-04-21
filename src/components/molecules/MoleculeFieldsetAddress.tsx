import React from 'react';
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
          <AtomErrorMsg />

          <AtomLabel htmlfor="city" nameLabel={"City"} />
          <AtomInput id={"city"} type={"text"} />
          <AtomErrorMsg />

          <AtomLabel htmlfor="state" nameLabel={"State"} />
          <select name="state" id="state">
              {states.map((state,index) => (
                  <option key={index} value={state.label}>{state.label}</option>
              ))}
          </select>
          <AtomErrorMsg />

          <AtomLabel htmlfor="zip-code" nameLabel={"Zip Code"} />
          <AtomInput id={"zip-code"} type={"number"} />
          <AtomErrorMsg />
        </fieldset>
    );
};

export default MoleculeFieldsetAddress;
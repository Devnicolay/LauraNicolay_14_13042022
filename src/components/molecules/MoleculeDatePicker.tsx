import React from 'react';
import { Field } from 'formik';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import AtomDatePicker from '../atoms/AtomDatePicker.tsx';
import AtomLabel from '../atoms/AtomLabel.tsx';
import AtomErrorMsg from '../atoms/AtomErrorMsg.tsx'

interface DatePicker {
    htmlfor: string,
    nameLabel: string,
}

const MoleculeDatePicker = (props: DatePicker) => {
    return (
        <div>
            <AtomLabel htmlfor={props.htmlfor} nameLabel={props.nameLabel} />
            <AtomDatePicker id={props.htmlfor}  />
            <AtomErrorMsg label={"dateOfBirth"} />
        </div>
    );
};

export default MoleculeDatePicker;
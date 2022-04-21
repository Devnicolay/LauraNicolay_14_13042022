import React from 'react';
import { Field } from 'formik';

interface AtomInputProps {
    id: string;
    type: string;
}

const AtomInput = (props: AtomInputProps) => {
    return (
            <Field id={props.id} name={props.id} type={props.type} />
    );
};

export default AtomInput;
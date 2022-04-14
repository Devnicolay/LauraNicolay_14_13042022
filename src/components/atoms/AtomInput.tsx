import React from 'react';
import { Field } from 'formik';

interface AtomInputProps {
    id: string;
}

const AtomInput = (props: AtomInputProps) => {
    return (
            <Field id={props.id} name={props.id} />
    );
};

export default AtomInput;
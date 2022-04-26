import React from 'react';
import { Field, useFormik } from 'formik';

interface AtomInputProps {
    id: string;
    type: string;
}

const AtomInput = (props: AtomInputProps) => {
    // const formik = useFormik({})
    // console.log('Form values', formik.values)
    return (
            <Field id={props.id} name={props.id} type={props.type} />
    );
};

export default AtomInput;

// values={formik.values.props.id}
// onChange={formik.handleChange}
import React from 'react';
import { ErrorMessage } from 'formik';

const AtomErrorMsg = () => {
    return (
            <ErrorMessage
            name="firstName"
            component="div"
            className="field-error"
          />
    );
};

export default AtomErrorMsg;
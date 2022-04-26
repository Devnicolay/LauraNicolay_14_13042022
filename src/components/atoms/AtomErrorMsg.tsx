import React from 'react';
import { ErrorMessage } from 'formik';

interface MsgError {
  label: string,
}

const AtomErrorMsg = (props: MsgError) => {
    return (
            <ErrorMessage
            name={props.label}
            component="div"
            className="field-error"
          />
    );
};

export default AtomErrorMsg;
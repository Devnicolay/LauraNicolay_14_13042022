import React from 'react';

interface LabelProps {
    htmlfor: string;
    nameLabel: string;
}

const Label = (props: LabelProps) => {
    return (
            <label htmlFor={props.htmlfor}>{props.nameLabel}</label>
    );
};

export default Label;
import React from "react";

interface LabelProps {
  htmlfor: string;
  nameLabel: string;
}

const Label: React.FC<LabelProps> = ({ htmlfor, nameLabel }) => {
  return <label htmlFor={htmlfor}>{nameLabel}</label>;
};

export default Label;

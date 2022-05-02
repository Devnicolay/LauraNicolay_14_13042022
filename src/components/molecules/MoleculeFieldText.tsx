import React from "react";
// @ts-ignore
import AtomLabel from "../atoms/AtomLabel.tsx";
// @ts-ignore
import AtomInput from "../atoms/AtomInput.tsx";
// @ts-ignore
import AtomErrorMsg from "../atoms/AtomErrorMsg.tsx";

interface FieldText {
  htmlfor: string;
  nameLabel: string;
  id: string;
}

const MoleculeFieldText: React.FC<FieldText> = ({ htmlfor, nameLabel, id }) => {
  return (
    <div>
      <AtomLabel htmlfor={htmlfor} nameLabel={nameLabel} />
      <AtomInput id={id} type={"text"} />
      <AtomErrorMsg label={id} />
    </div>
  );
};

export default MoleculeFieldText;

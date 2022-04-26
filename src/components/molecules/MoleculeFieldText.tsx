import React from 'react';
import AtomLabel from '../atoms/AtomLabel.tsx';
import AtomInput from '../atoms/AtomInput.tsx';
import AtomErrorMsg from '../atoms/AtomErrorMsg.tsx';

interface FieldText {
    htmlfor: string,
    nameLabel: string,
    id: string
}

const MoleculeFieldText = (props: FieldText) => {
    return (
        <div>
            <AtomLabel htmlfor={props.htmlfor} nameLabel={props.nameLabel} />
          <AtomInput id={props.id} type={"text"} />
          <AtomErrorMsg label={props.id} />
        </div>
    );
};

export default MoleculeFieldText;
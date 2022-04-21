import React from 'react';
import AtomLabel from '../atoms/AtomLabel.tsx';

const MoleculeDataList = () => {
    return (
        <div>
            <AtomLabel htmlfor="department" nameLabel={"Department"} />
            <select name="department" id="department">
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>
        </div>
    );
};

export default MoleculeDataList;
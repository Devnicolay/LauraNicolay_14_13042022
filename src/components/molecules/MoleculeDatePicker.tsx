import React from 'react';
import AtomDatePicker from '../atoms/AtomDatePicker.tsx';
import AtomLabel from '../atoms/AtomLabel.tsx';

interface DatePicker {
    htmlfor: string,
    nameLabel: string,
}

const MoleculeDatePicker = (props: DatePicker) => {
    return (
        <div>
            <AtomLabel htmlfor={props.htmlfor} nameLabel={props.nameLabel} />
            <AtomDatePicker />
        </div>
    );
};

export default MoleculeDatePicker;
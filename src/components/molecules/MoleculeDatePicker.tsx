import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// @ts-ignore
import AtomDatePicker from "../atoms/AtomDatePicker.tsx";
// @ts-ignore
import AtomLabel from "../atoms/AtomLabel.tsx";
// @ts-ignore
import AtomErrorMsg from "../atoms/AtomErrorMsg.tsx";

interface PropsDatePicker {
  htmlfor: string;
  nameLabel: string;
  onChange: (date: Date) => void;
  startDate: Date;
}

const MoleculeDatePicker: React.FC<PropsDatePicker> = ({
  htmlfor,
  nameLabel,
  onChange,
  startDate,
}) => {
  return (
    <div>
      <AtomLabel htmlfor={htmlfor} nameLabel={nameLabel} />
      <AtomDatePicker id={htmlfor} onChange={onChange} startDate={startDate} />
      <AtomErrorMsg label={"dateOfBirth"} />
    </div>
  );
};

export default MoleculeDatePicker;

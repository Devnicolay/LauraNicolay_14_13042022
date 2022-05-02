import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface AtomDatePickerProps {
  id: string;
  onChange: (date: Date) => void;
  startDate: Date;
}

const AtomDatePicker: React.FC<AtomDatePickerProps> = ({
  id,
  onChange,
  startDate,
}) => {
  return (
    <DatePicker name={id} id={id} selected={startDate} onChange={onChange} />
  );
};

export default AtomDatePicker;

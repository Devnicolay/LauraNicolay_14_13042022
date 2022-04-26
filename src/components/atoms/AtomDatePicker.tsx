import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'

interface AtomDatePickerProps {
  id: string;
  value: string;
}

const AtomDatePicker = (props: AtomDatePickerProps) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker name={props.id} id={props.id} value={props.value} selected={startDate} onChange={(date) => setStartDate(date) } />
  );
};

export default AtomDatePicker;
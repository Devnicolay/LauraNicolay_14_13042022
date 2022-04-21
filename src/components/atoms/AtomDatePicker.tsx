import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'

const AtomDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker  onChange={(date) => setStartDate(date)} />
  );
};

export default AtomDatePicker;
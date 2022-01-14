import React, { useState, useEffect } from 'react'
import InOutForm from './InOutForm.jsx'

function DatePicker() {
  var [ inDate, setInDate ] = useState(0);
  var [ outDate, setOutDate ] = useState(0);

  useEffect(() => {}, [inDate, outDate]);

  function changeDate(type, value) {
    if (type == 'inDate') {
      setInDate(value);
    } else if (type == 'outDate') {
      setOutDate(value);
    }
  }

  return (
    <div class="app">
      <InOutForm changeDate={changeDate} inDate={inDate} outDate={outDate} />
    </div>
  );
}

export default DatePicker
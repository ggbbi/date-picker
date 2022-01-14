import React, { useState, useEffect } from 'react';
import InOutForm from './InOutForm.jsx';
import Calendar from './Calendar.jsx';

function DatePicker() {
  var [ inDate, setInDate ] = useState(null);
  var [ outDate, setOutDate ] = useState(null);
  var [ showCal, setShowCal ] = useState(false);

  useEffect(() => {}, [inDate, outDate, showCal]);

  function changeDate(type, value) {
    if (type == 'inDate') {
      setInDate(value);
    } else if (type == 'outDate') {
      setOutDate(value);
    }
  }

  function chooseDate(type) {
    setShowCal(!showCal);
  }

  return (
    <div class="app">
      <InOutForm
        inDate={inDate}
        outDate={outDate}
        changeDate={changeDate}
        chooseDate={chooseDate}
      />
      {
        showCal ?
        <Calendar
          inDate={inDate}
          outDate={outDate}
          showCal={showCal}
        /> : null
      }
    </div>
  );
}

export default DatePicker;
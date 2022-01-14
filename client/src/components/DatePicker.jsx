import React, { useState, useEffect } from 'react';
import InOutGroup from './InOutGroup.jsx';
import Calendar from './Calendar.jsx';

function DatePicker() {
  var [ inDate, setInDate ] = useState(null);
  var [ outDate, setOutDate ] = useState(null);
  var [ showCal, setShowCal ] = useState(false);

  useEffect(() => {}, [inDate, outDate, showCal]);

  function chooseDate(type) {
    setShowCal(!showCal);
  }
  function changeDate(type, value) {
    // new Intl.DateTimeFormat('en-US').format(date)
    if (type == 'inDate') {
      setInDate(value);
    } else if (type == 'outDate') {
      setOutDate(value);
    }
  }
  return (
    <div className="date-picker">
      <InOutGroup
        inDate={inDate}
        outDate={outDate}
        chooseDate={chooseDate}
        />
      {
        showCal ?
        <Calendar
          inDate={inDate}
          outDate={outDate}
          changeDate={changeDate}
        /> : null
      }
    </div>
  );
}

export default DatePicker;
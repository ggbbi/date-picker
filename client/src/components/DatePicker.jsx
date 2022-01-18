import React, { useState, useEffect } from 'react';
import InOutGroup from './InOutGroup.jsx';
import Calendar from './Calendar.jsx';

function DatePicker() {
  var [ inDate, setInDate ] = useState();
  var [ outDate, setOutDate ] = useState();
  var [ showCal, setShowCal ] = useState(false);
  var [ active, setActive ] = useState()

  useEffect(() => {}, [inDate, outDate, showCal]);

  function chooseDate(type) {
    if (type == active || !active) {
      setShowCal(!showCal);
    }
    if (type !== active) {
      setActive(type);
    } else {
      setActive(null);
    }
  }
  function changeDate(value) {
    if (active == 'check-in') {
      setInDate(value.toLocaleDateString('en-us'));
      chooseDate('check-out');
    } else if (active == 'check-out') {
      setOutDate(value.toLocaleDateString('en-us'));
    }
  }
  return (
    <div className="date-picker">
      <InOutGroup
        inDate={inDate}
        outDate={outDate}
        active={active}
        chooseDate={chooseDate}
        />
      {
        showCal ?
        <Calendar
          changeDate={changeDate}
        /> : null
      }
    </div>
  );
}

export default DatePicker;
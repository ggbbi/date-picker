import React, { useState, useEffect } from 'react';
import InOutGroup from './InOutGroup.jsx';
import CalendarGroup from './CalendarGroup.jsx';

function DatePicker() {
  var [ inDate, setInDate ] = useState(null);
  var [ outDate, setOutDate ] = useState(null);
  var [ showCal, setShowCal ] = useState(false);
  var [ active, setActive ] = useState(null)

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
      if (value >= new Date(outDate)) {
        setOutDate(null);
      }
    } else if (active == 'check-out') {
      setOutDate(value.toLocaleDateString('en-us'));
      if (value <= new Date(inDate)) {
        setInDate(value.toLocaleDateString('en-us'));
        setOutDate(null);
      }
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
        <CalendarGroup
          inDate={inDate}
          outDate={outDate}
          changeDate={changeDate}
        /> : null
      }
    </div>
  );
}

export default DatePicker;
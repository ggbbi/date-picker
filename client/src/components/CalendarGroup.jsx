import React, { useState, useEffect } from 'react';
import Calendar from './Calendar.jsx';

function CalendarGroup({ inDate, outDate, changeDate }) {
  var [ selectedDate, setSelectedDate ] = useState(null);

  useEffect(() => {
    setSelectedDate(new Date());
  }, [])

  function clickNext() {
    var m = selectedDate.getMonth();
    setSelectedDate(new Date(selectedDate.setMonth(m + 1, 1)));
  }
  function clickBack() {
    var m = selectedDate.getMonth();
    setSelectedDate(new Date(selectedDate.setMonth(m - 1, 1)));
  }

  return (
    <div className="calendar-group">
      <Calendar
        inDate={inDate}
        outDate={outDate}
        selectedDate={selectedDate}
        display="primary"
        changeDate={changeDate}
        clickBackNext={clickBack}
      />
      <Calendar
        inDate={inDate}
        outDate={outDate}
        selectedDate={selectedDate}
        display="secondary"
        changeDate={changeDate}
        clickBackNext={clickNext}
      />
    </div>
  )
}

export default CalendarGroup;
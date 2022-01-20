import React from 'react';
import Calendar from './Calendar.jsx';

function CalendarGroup({ inDate, outDate, changeDate }) {
  return (
    <div className="calendar-group">
      <Calendar
        inDate={inDate}
        outDate={outDate}
        display="primary"
        changeDate={changeDate}
      />
      <Calendar
        inDate={inDate}
        outDate={outDate}
        display="secondary"
        changeDate={changeDate}
      />
    </div>
  )
}

export default CalendarGroup;
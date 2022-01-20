import React, { useState, useEffect } from 'react';
import Calendar from './Calendar.jsx';

function CalendarGroup({ inDate, outDate, changeDate }) {
  var [ selectedDate, setSelectedDate ] = useState(null);

  useEffect(() => {
    setSelectedDate(new Date());
  }, [])

  useEffect(() => {
    updateStyle();
  }, [ inDate, outDate, selectedDate ])

  function updateStyle() {
    if (inDate || outDate) {
      document.querySelectorAll('.date').forEach((element) => {
        var date = new Date(element.dataset.year, element.dataset.month, element.dataset.date);
        if (date > new Date(inDate) && date < new Date(outDate)) {
          element.classList.add('date-active');
        } else if (date.toLocaleDateString('en-us') == inDate
        || date.toLocaleDateString('en-us') == outDate)
        {
          console.log('active', date)
          element.classList.add('date-in-out-active');
          element.classList.remove('date-active');
        } else {
          element.classList.remove('date-active');
          element.classList.remove('date-in-out-active');
        }
      });
    }
  }
  function clickNext() {
    var m = selectedDate.getMonth();
    setSelectedDate(new Date(selectedDate.setMonth(m + 2, 1))); // async?
  }
  function clickBack() {
    var m = selectedDate.getMonth();
    setSelectedDate(new Date(selectedDate.setMonth(m - 2, 1))); // async?
  }

  return (
    <div className="calendar-group">
      <Calendar
        selectedDate={selectedDate}
        display="primary"
        changeDate={changeDate}
        clickBackNext={clickBack}
      />
      <Calendar
        selectedDate={selectedDate}
        display="secondary"
        changeDate={changeDate}
        clickBackNext={clickNext}
      />
    </div>
  )
}

export default CalendarGroup;
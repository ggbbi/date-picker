import React, { useState, useEffect } from 'react';

function Calendar({ inDate, outDate, changeDate }) {
  var [ selectedDate, setSelectedDate ] = useState();
  var [ displayedYear, setDisplayedYear ] = useState();
  var [ displayedMonth, setDisplayedMonth ] = useState();
  var [ firstWeek, setFirstWeek ] = useState([]);
  var [ otherWeeks, setOtherWeeks ] = useState([]);
  var weekdays = getWeekdays();

  useEffect(() => {
    new Promise(() => setSelectedDate(new Date()))
    .then(() => setDisplayedYear(selectedDate.getFullYear()))
    .then(() => setDisplayedMonth(selectedDate.getMonth()));
  }, [])

  useEffect(() => {
    if (selectedDate) {
      setDisplayedYear(selectedDate.getFullYear());
      setDisplayedMonth(selectedDate.getMonth());
      setFirstWeek(getFirstWeek(displayedYear, displayedMonth));
    }
  }, [ selectedDate ]);

  function getWeekdays() {
    var weekdays = [];
    var day = new Date(Date.UTC(2021, 0, 18));
    for (let i = 0; i < 7; i++) {
      weekdays.push(day.toLocaleDateString('en-US', { weekday: 'short' }));
      day.setDate(day.getDate() + 1);
    }
    return weekdays;
  }
  function getFirstWeek(y, m) {
    var firstDay = new Date(y, m, 1).getDay();
    var firstWeek = [];
    for (let i = 0; i < firstDay; i++) {
      firstWeek.push('');
    }
    for (let i = 0; i < 7 - firstDay; i++) {
      firstWeek.push(i + 1);
    }
    return firstWeek;
  }
  function clickNext() {
    setSelectedDate(selectedDate.setMonth(displayedMonth + 1, 1));
  }
  function clickBack() {
    setSelectedDate(selectedDate.setMonth(displayedMonth - 1, 1));
  }
  return (
    <div className="calendar-group">
      {
        selectedDate ?
        <table className="calendar">
          <thead>
            <tr>
              <th colspan="7">{ selectedDate.toLocaleDateString('en-US', { month: 'long' }) }</th>
            </tr>
            <tr>
              { weekdays.map(day => (<th>{day}</th>)) }
            </tr>
          </thead>
          <tbody>
            <tr>
              { firstWeek.map(date => (<td>{date}</td>)) }
            </tr>
          </tbody>
        </table> : null
      }
    </div>
  );
}

export default Calendar;
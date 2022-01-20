import React, { useState, useEffect } from 'react';

function Calendar({ inDate, outDate, display, changeDate }) {
  var [ selectedDate, setSelectedDate ] = useState(null);
  var [ firstWeek, setFirstWeek ] = useState([]);
  var [ otherWeeks, setOtherWeeks ] = useState([]);
  var weekdays = getWeekdays();

  useEffect(() => {
    setSelectedDate(new Date());
  }, [])

  useEffect(() => {
    if (selectedDate) {
      var y = selectedDate.getFullYear();
      var m = selectedDate.getMonth();
      setFirstWeek(getFirstWeek(y, m));
      setOtherWeeks(getOtherWeeks(y, m));
    }
  }, [ selectedDate ]);

  useEffect(() => {
    if (selectedDate) {
      var y = selectedDate.getFullYear();
      var m = selectedDate.getMonth();
      if (inDate || outDate) {
        document.querySelectorAll('.date').forEach((element) => {
          var date = new Date(y, m, element.textContent);
          if (date > new Date(inDate) && date < new Date(outDate)) {
            element.classList.add('date-active');
          } else if (date.toLocaleDateString('en-us') == inDate
            || date.toLocaleDateString('en-us') == outDate)
          {
            element.classList.add('date-in-out-active');
            element.classList.remove('date-active');
          } else {
            element.classList.remove('date-active');
            element.classList.remove('date-in-out-active');
          }
        });
      }
    }
  }, [ inDate, outDate, firstWeek ])

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
    var firstDay = null;
    var week = [];
    if (display == 'secondary') {
      m++;
    }
    firstDay = new Date(y, m, 1).getDay();
    for (let i = 0; i < firstDay; i++) {
      week.push('');
    }
    for (let i = 0; i < 7 - firstDay; i++) {
      week.push(i + 1);
    }
    return week;
  }
  function getOtherWeeks(y, m) {
    var firstDay = null;
    var weeks = [];
    if (display == 'secondary') {
      m++;
    }
    firstDay = new Date(y, m, 1).getDay();
    for (let i = 8 - firstDay; i < new Date(y, m, 0).getDate(); i += 7) {
      var week = [];
      for (let j = 0; j < 7; j++) {
        if (i + j <= new Date(y, m + 1, 0).getDate()) {
          week.push(i + j);
        }
      }
      weeks.push(week);
    }
    return weeks;
  }
  function clickNext() {
    var m = selectedDate.getMonth();
    setSelectedDate(new Date(selectedDate.setMonth(m + 1, 1)));
  }
  function clickBack() {
    var m = selectedDate.getMonth();
    setSelectedDate(new Date(selectedDate.setMonth(m - 1, 1)));
  }
  function clickDate(date) {
    var y = selectedDate.getFullYear();
    var m = selectedDate.getMonth();
    changeDate(new Date(y, m, date));
  }
  return (

        selectedDate ?
        <table className="calendar">
          <thead>
            <tr>
              {
                display == "primary" ?
                <th colSpan="1" onClick={clickBack}>&lt;</th>
                : <th colSpan="1"></th>
              }
              <th colSpan="5">
                {
                  display == "primary" ?
                  selectedDate
                  .toLocaleDateString(
                    'en-US',
                    { month: 'long', year: 'numeric' }
                  )
                  : new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1)
                  .toLocaleDateString(
                  'en-US',
                  { month: 'long', year: 'numeric'}
                  )
                }
              </th>
              {
                display == "secondary" ?
                <th colSpan="1" onClick={clickNext}>&gt;</th>
                : <th colSpan="1"></th>
              }
            </tr>
            <tr className="wkdays">
              { weekdays.map((day, i) => <th key={i}>{day}</th>) }
            </tr>
          </thead>
          <tbody>
            <tr>
              {
                firstWeek.map((date, i) =>
                  <td
                    key={i}
                    className="date"
                    onClick={e => clickDate(e.target.innerHTML)}
                  >{date}</td>
                )
              }
            </tr>
            {
              otherWeeks.map((week, i) => (
                <tr key={i}>
                  {
                    week.map((date, i) =>
                      <td
                        key={i}
                        className="date"
                        onClick={e => clickDate(e.target.innerHTML)}
                      >{date}</td>
                    )
                  }
                </tr>
              ))
            }
          </tbody>
        </table>
        : null

  );
}

export default Calendar;
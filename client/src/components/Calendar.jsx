import React, { useEffect } from 'react';

function Calendar({ inDate, outDate, changeDate }) {
  var currentDate = null;
  var displayedDate = null;
  var displayedYear = null;
  var displayedMonth = null;
  var weekdays = getWeekdays();
  var daysInMonth = 0;

  useEffect(() => {
    currentDate = new Date();
    displayedDate = currentDate;
    displayedYear = displayedDate.getFullYear();
    displayedMonth = displayedDate.getMonth();
  }, [])

  useEffect(() => {
    daysInMonth = getDaysInMonth(displayedYear, displayedMonth);
  }, [ displayedDate ]);

  function getWeekdays() {
    var weekdays = [];
    var day = new Date(Date.UTC(2021, 0, 18));
    for (let i = 0; i < 7; i++) {
      weekdays.push(day.toLocaleDateString('en-US', { weekday: 'long' }).substring(0, 3));
      day.setDate(day.getDate() + 1);
    }
    return weekdays;
  }
  function getDaysInMonth(y, m) {
    return new Date(y, m, 0).getDate();
  }
  function clickNext() {
    displayedDate = displayedDate.setMonth(displayedMonth + 1, 1);
  }
  function clickBack() {
    displayedDate = displayedDate.setMonth(displayedMonth - 1, 1);
  }
  return (
    <div class="calendar-group">
      <table class="calendar">
        <thead>
          <tr>
            <th colspan="7">Calendar</th>
          </tr>
          <tr>
            {
              weekdays.map(day => (<th>{day}</th>))
            }
          </tr>
        </thead>
        <tbody>
          {
            Array(daysInMonth).map((date) => {
              // use negative number? same month, date: -weekday of 1st
              var CalendarElem = null;



              // if (displayedDate.getDay() == 6) {
              //   return
              // } else if (displayedDate.getDay() == 0) {
              //   return
              // }
              // // while the day does not match the day of the current col,
              // // create a day col in this row with no value
              // // increment the weekday
              // while(displayedDate.getDate() !== date) {

              // }
              // create a day col with the date as the value
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;
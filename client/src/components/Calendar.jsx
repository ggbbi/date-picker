import React, { useEffect } from 'react';

function Calendar({ inDate, outDate, changeDate }) {
  let currentDate = new Date();
  var displayedDate = null;
  var displayedYear = null;
  var displayedMonth = null;
  var daysInMonth = 0;

  useEffect(() => {
    if (!displayedDate) {
      displayedDate = currentDate;
      displayedYear = displayedDate.getFullYear();
      displayedMonth = displayedDate.getMonth();
    }
    daysInMonth = getDaysInMonth(displayedYear, displayedMonth);
  }, [ displayedDate ]);

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
            <th>Su</th>
            <th>M</th>
            <th>Tu</th>
            <th>W</th>
            <th>Th</th>
            <th>F</th>
            <th>Sa</th>
          </tr>
        </thead>
        <tbody>
          {
            daysInMonth.map((date) => {
              var CalendarElem = null;

              if (displayedDate.getDay() == 6) {
                return
              } else if (displayedDate.getDay() == 0) {
                return
              }
              // while the day does not match the day of the current col,
              // create a day col in this row with no value
              // increment the weekday
              while(displayedDate.getDate() !== date) {

              }
              // create a day col with the date as the value
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;
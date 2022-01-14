import React, { useEffect } from 'react';

function Calendar({ inDate, outDate, changeDate }) {
  let today = new Date();
  let daysInCurrentMonth = 0;

  useEffect(() => {
    daysInCurrentMonth = getDaysInMonth(today.getFullYear(), today.getMonth());
  }, []);

  function getDaysInMonth(y, m) {
    return new Date(y, m, 0).getDate();
  }
  function clickNext() {
    // add 1 to current month
  }
  function clickBack() {
    // subtract 1 from current month
  }
  return (
    <div class="calendar-group">
      <table class="calendar">
        <thead>
          <tr>
            <th colspan="7">Calendar</th>
          </tr>
          <tr>
            {/* could be replaced */}
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
          {/* {
            // for each date of the month,
            for(let i = 0; i < daysInThisMonth; i++) {
              // while the day does not match the day of the current col,
              // create a day col in this row with no value
              // increment the weekday
              while() {

              }
              // if it's sunday (day 6)
              // start a new row
              if() {

              }
              // create a day col with the date as the value
            }
          } */}
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;
import React, { useState } from 'react';

function InOutGroup ({ inDate, outDate, chooseDate }) {
  function clickInOut(e) {
    if (e.target.classList.contains('in-out-active')) {
      chooseDate(e.target.id);
      e.target.classList.remove('in-out-active');
    } else {
      if (e.target.id == 'check-in') {
        var checkOut = document.getElementById('check-out');
        if (checkOut.classList.contains('in-out-active')) {
          checkOut.classList.remove('in-out-active');
        } else {
          chooseDate(e.target.id);
        }
        e.target.classList.add('in-out-active');
      } else if (e.target.id == 'check-out') {
        var checkIn = document.getElementById('check-in');
        if (checkIn.classList.contains('in-out-active')) {
          checkIn.classList.remove('in-out-active');
        } else {
          chooseDate(e.target.id);
        }
        e.target.classList.add('in-out-active');
      }
    }
  }
  return (
    <div className="in-out-group">
      <div className="in-out-label">Check in</div>
      <div className="in-out-label">Check out</div>
      <div className="in-out" id="check-in" onClick={(e) => clickInOut(e)}>
        {
          !inDate ?
          'Choose dates' : null
        }
      </div>
      <div className="in-out" id="check-out" onClick={(e) => clickInOut(e)}>
        {
          !outDate ?
          'Choose dates' : null
        }
      </div>
    </div>
  );
}

export default InOutGroup;
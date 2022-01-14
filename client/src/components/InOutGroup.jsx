import React, { useState } from 'react';

function InOutGroup ({ inDate, outDate, chooseDate }) {
  // var [ selectIn, setSelectIn ] = useState(false);
  // var [ selectOut, setSelectOut ] = useState(false);

  function onInOutClick(e) {
    chooseDate(e.target.id);

  }
  return (
    <div className="in-out-group">
      <div className="in-out-label">Check in</div>
      <div className="in-out-label">Check out</div>
      <div className="in-out" id="check-in" onClick={(e) => onInOutClick(e)}>
        {
          !inDate ?
          'Choose dates' : null
        }
      </div>
      <div className="in-out" id="check-out" onClick={(e) => onInOutClick(e)}>
        {
          !outDate ?
          'Choose dates' : null
        }
      </div>
    </div>
  );
}

export default InOutGroup;
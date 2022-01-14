import React from 'react';

function InOutForm ({ inDate, outDate, chooseDate }) {
  function onInOutClick(e) {
    chooseDate(e.target.name);
    console.log('click')
  }

  return (
    <form class="in-out-form">
      <label for="check-in">Check in</label>
      <input
        id="check-in-input"
        type="text"
        name="check-in"
        required
        value={inDate}
        defaultValue="Choose dates"
        style={{caretColor: 'transparent'}}
        onClick={(e) => { onInOutClick(e) }}
      />
      <label for="check-out">Check out</label>
      <input
        id="check-out-input"
        type="text"
        name="check-out"
        required
        value={outDate}
        defaultValue="Choose dates"
        style={{caretColor: 'transparent'}}
        onClick={(e) => { onInOutClick(e) }}
      />
    </form>
  );
}

export default InOutForm;
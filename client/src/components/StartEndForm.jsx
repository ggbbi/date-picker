import React from 'react';

function StartEndForm() {
  var checkinDate = '';
  var checkoutDate = '';

  return (
    <form class="start-end-form">
      <label for="check-in">Check in</label>
      <input
        id="check-in-input"
        type="text"
        name="check-in"
        required
        value={checkinDate}
        style={{caretColor: 'transparent'}}
      />
      <label for="check-out">Check out</label>
      <input
        id="check-out-input"
        type="text"
        name="check-out"
        required
        value={checkoutDate}
        style={{caretColor: 'transparent'}}
      />
    </form>
  )
}

export default StartEndForm;
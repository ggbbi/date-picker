import React from 'react'

function InOutForm ({ changeDate, inDate, outDate }) {
  console.log(inDate, outDate)

  return (
    <form class="in-out-form">
      <label for="check-in">Check in</label>
      <input
        id="check-in-input"
        type="text"
        name="check-in"
        required
        value={inDate}
        style={{caretColor: 'transparent'}}
      />
      <label for="check-out">Check out</label>
      <input
        id="check-out-input"
        type="text"
        name="check-out"
        required
        value={outDate}
        style={{caretColor: 'transparent'}}
      />
    </form>
  );
}

export default InOutForm
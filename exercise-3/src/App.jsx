import React from "react";
import { useState } from "react";

function App() {


  /* You will need to use many state to keep the inut values and other needs */
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [total, setTotal] = useState(0);
  /* You will need some function to handle the key pressed and button events */
  function onA(events) {
    setA(parseFloat(events.target.value));
  }

  function onB(events) {
    setB(parseFloat(events.target.value));
  }

  function sum() {
    setTotal(a + b)
  }
  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input value={total} disabled />
      <button onClick={sum}>Compute</button>
    </main>
  );
}

export default App;

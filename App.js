import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  function handleIncrement() {
    if (counter < 10) {
      setCounter(counter + 1);
    }
  }

  function handleDecrement() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  let counterStyle = {};
  if (counter <= 4) {
    counterStyle.color = 'green';
  } else if (counter <= 9) {
    counterStyle.color = 'blue';
  } else {
    counterStyle.color = 'red';
  }

  return (
    <div className="App ">
      <h1> Counter Application</h1>
      <h1 style={counterStyle}>{counter}</h1>
      <div>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
        <p> Submitted by Anish 12017020</p>
      </div>
    </div>
  );
}

export default App;

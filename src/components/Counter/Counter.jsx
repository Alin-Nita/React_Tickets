import React, { useState } from "react";
import "./Counter.scss";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    if (counter === 0) {
      setCounter(0);
    } else setCounter(counter - 1);
  };

  return (
    <div class="counter">
      <p class="counter__score">{counter}</p>
      <div id="buttons">
        <button class="button__minus" onClick={decrementCounter}>
          -
        </button>
        <button class="button__plus" onClick={incrementCounter}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Sum, minus, multiply, divide } from "./CalculatorSlice";

export function Calculator() {
  const count = useSelector((state) => state.calculator.value);
  const dispatch = useDispatch();
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  return (
    <div>
      <input
        value={num1}
        type="text"
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        value={num2}
        type="text"
        onChange={(e) => setNum2(e.target.value)}
      />
      <button onClick={() => dispatch(Sum([parseInt(num1), parseInt(num2)]))}>
        +
      </button>
      <button onClick={() => dispatch(minus([parseInt(num1), parseInt(num2)]))}>
        -
      </button>
      <button
        onClick={() => dispatch(multiply([parseInt(num1), parseInt(num2)]))}
      >
        *
      </button>
      <button
        onClick={() => dispatch(divide([parseInt(num1), parseInt(num2)]))}
      >
        /
      </button>
      <h1>{count}</h1>
    </div>
  );
}

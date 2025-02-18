import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByValue } from "../features/counter/counterSlice";
import { useState } from "react";

export function TestPage() {
  const [value, setValue] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="container border-container">
      <p>counter</p>
      <p>{count}</p>
      <div className="container">
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <div className="container">
        <input type="text" value={value} onChange={(e) => setValue(Number(e.target.value))} />
        <button onClick={() => dispatch(incrementByValue(value))}>Increment By Value</button>
      </div>

    </div>
  )
}
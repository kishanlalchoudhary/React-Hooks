import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";

function FComponent() {
  const value = useContext(CounterContext);
  return (
    <div className="AppBorder">
      <h2>Function Component</h2>
      <p>{value.counter}</p>
      <hr />
      <Fchild />
    </div>
  );
}

const Fchild = () => {
  const { counter, setCounter } = useContext(CounterContext);
  return (
    <div className="AppBorder">
      <h3>Function Child Component</h3>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </div>
  );
};

export default FComponent;

import React, { useState } from "react";
import FComponent from "../Helpers/Hook6/FComponent";
import CComponent from "../Helpers/Hook6/CComponent";
import { CounterContext } from "../Helpers/Hook6/CounterContext";

function Hook6() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="hook6">
      <hr />
      <h2>Hook6 - useContext()</h2>
      <hr />
      <div className="AppBorder">
        <h2>App Component</h2>
        <h2>{counter}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <hr />
        <CounterContext.Provider value={{ counter, setCounter }}>
          <FComponent />
          <hr />
        </CounterContext.Provider>
        <CounterContext.Provider value={counter}>
          <CComponent />
        </CounterContext.Provider>
      </div>
      <hr />
    </div>
  );
}

export default Hook6;

// Context API is used to prevent prop drilling. The procedure results in prop-drilling when an app has several components and data must be sent from the parent components to their children. Sometimes users need to pass a value from parent components to the fourth child components.
// useContext accepts a context object thats created using React.createContext, and returns the current value of that context

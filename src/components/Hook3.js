import React, { useEffect, useRef, useState } from "react";

export default function Hook3() {
  /*
    1. DOM reference
    2. useRef for storing the previous state
    3. hold mutable value prevent re-render of component
  */

  const [name, setName] = useState("");
  const [counter, setCounter] = useState(0);

  const inputRef = useRef("");
  const prevCounterRef = useRef("");
  const testRef = useRef(0);

  useEffect(() => {
    prevCounterRef.current = counter;
  }, [counter]);

  // console.log(inputRef);

  const resetInput = () => {
    setName("");
    inputRef.current.focus();
    console.log(inputRef.current.value);
    // Don't use useRef for updating the input value directly because it will not update the state
    // inputRef.current.value = "Kishanlal";
  };

  return (
    <div className="hook3">
      <hr />
      <h2>Hook3 - useRef()</h2>
      <hr />
      <div>
        <input
          name="name"
          autoComplete="off"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          ref={inputRef}
        />
        <button onClick={resetInput}>Reset</button>
      </div>
      <div>My name is {name}</div>
      <hr />
      <div>
        <h3>Random Counter : {counter}</h3>
        {prevCounterRef.current !== "" && (
          <h3>Previous Counter : {prevCounterRef.current}</h3>
        )}
        <button onClick={(e) => setCounter(Math.ceil(Math.random() * 100))}>
          Generate Number
        </button>
      </div>
      <hr />
      <div>
        <h3>Ref Variable value : {testRef.current}</h3>
        <button
          onClick={() => {
            testRef.current += 1;
          }}
        >
          Increment Ref Variable value
        </button>
      </div>
      <hr />
    </div>
  );
}

import React, { useCallback, useEffect, useMemo, useState } from "react";

function Hook5() {
  // 1. Memoize the function (useCallback) vs Memoize the value (useMemo)
  // 2. Referential equality for functions

  const [counter, setCounter] = useState(1);

  const result = useMemo(() => {
    return Factorial(counter);
  }, [counter]);

  //   console.log("useMemo : " + result);

  const [name, setName] = useState("");

  //   const displayName = () => {
  //     return name;
  //   };

  // when we make use of useCallbackit actually gives you referential equality on the functions

  // Returns a memoized version of a callback that only changes when the dependicies changes
  //   const displayName = useCallback(() => {
  //     return name;
  //   }, [name]);
  // displayName changes when the name changes

  const displayName = useCallback(
    (greeting) => {
      return greeting + name;
    },
    [name]
  );

  //   console.log("useCallback : " + displayName);

  return (
    <div className="hook5">
      <hr />
      <h2>Hook5 - useCallback()</h2>
      <hr />
      <div>
        <h3>
          Factorial of {counter} is : <span>{result}</span>
        </h3>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
      </div>
      <hr />
      <div>
        <div>
          <label>Enter Name</label>
        </div>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <DisplayName displayName={displayName} />
      </div>
      <hr />
    </div>
  );
}

const DisplayName = ({ displayName }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    // setValue(displayName());
    setValue(displayName("Hello, "));
    console.log("Component rendered");
  }, [displayName]);

  return <p>My name is {value}</p>;
};

const Factorial = (n) => {
  let i = 0;
  while (i < 200000000) i++;
  if (n < 0) {
    return -1;
  } else if (n === 0) {
    return 1;
  } else {
    return n * Factorial(n - 1);
  }
};

export default Hook5;

// Difference between useMemo and useCallback
// - To memoize the value of the function we make use of useMemo
// - To memoize the function we make use of useCallback

// We should always be careful while using useMemo or useCallback that they always have a performance overhead because whenever we use them they actually take some memory to hold the values whenever the app is getting rerendered.

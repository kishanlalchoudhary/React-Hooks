import React, { useEffect, useMemo, useState } from "react";

function Hook4() {
  // 1. optimize expensive operation
  // 2. Referential equality

  const [counter, setCounter] = useState(1);

  // If we are doing heavy operation as below then even though the counter value is not changed it will get executed everytime.
  // const result = Factorial(counter);
  // Returns a memoized value which only gets recalculated when the defined dependencies change
  // result holds the cached value returned by the Factorial
  const result = useMemo(() => {
    return Factorial(counter);
  }, [counter]);
  // result changes every time counter changes

  const [name, setName] = useState("");

  return (
    <div className="hook4">
      <hr />
      <h2>Hook4 - useMemo()</h2>
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
        {/* If we dont memoized the DisplayName Component then it will get rendered evertime if there is change in counter even though the name is not changed. */}
        <DisplayName name={name} />
      </div>
      <hr />
    </div>
  );
}

// const DisplayName = ({ name }) => {
// Now this component will get rerendered if there is change in the name or counter
//   console.log("rendered");
//   return <p>My name is {name}</p>;
// };

const DisplayName = React.memo(({ name }) => {
  // Now this component will get only rerendered if there is change only in the name
  console.log("rendered");
  return <p>My name is {name}</p>;
});

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

export default Hook4;

// Be careful dont use useMemo directly, first we need to write all code as it is then we need to start thinking that we need to make some of the function optimized. Then only we need to useMemo because when we use useMemo for every function or everything then we are going to get the performance overhead which is not good for the application.

import { useState } from "react";

export default function Hook1() {
  // make function outside and use inside the usestate whenever the initial value is to be set everytime whenever rerendered after doing heavy operations.
  const initialValue = () => {
    console.log("function called!");
    return 0;
  };

  const [name, setName] = useState("Kishanlal Choudhary");
  const [flag, setFlag] = useState(false);
  const [names, setNames] = useState([]);
  const [steps, setSteps] = useState(initialValue());
  // This below method is useful when we have to set initial value only for first time the component is rendered after doing heavy operations.
  // const [steps, setSteps] = useState(() => {
  //   console.log("clicked!");
  //   return 0;
  // });

  const showName = () => {
    console.log("changeName invoked");
    setFlag(!flag);
  };

  const incrementSteps = () => {
    console.log("incrementSteps invoked");
    setSteps((prevState) => prevState + 1);
    setSteps((prevState) => prevState + 1);
    setSteps((prevState) => prevState + 1);
  };

  const decrementSteps = () => {
    console.log("decrementSteps invoked");
    setSteps(steps - 1);
  };

  const addNames = (e) => {
    e.preventDefault();
    // This is method to append data in the array
    // name is equivalent to name:name in es6 and ...names is used to get all the elements
    setNames([...names, { id: names.length, name }]);
    setName("");
  };

  return (
    <div className="hook1">
      <hr />
      <h2>Hook1 - useState()</h2>
      <hr />
      <div className="show">
        <div>Hello, {!flag ? name : ""}</div>
        <button onClick={showName}>{!flag ? "Hide name" : "Show name"}</button>
      </div>
      <hr />
      <div className="steps">
        <button onClick={incrementSteps}>+</button>
        <div>{steps}</div>
        <button onClick={decrementSteps}>-</button>
      </div>
      <hr />
      <div className="names">
        <form onSubmit={addNames}>
          <input
            type="text"
            value={name}
            placeholder="add names"
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        <hr />
        <ul>
          {names.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      </div>
      <hr />
    </div>
  );
}

// React Hook 'useState()' cannot be used conditionally.
// Usually we will use four values in useState() i.e string, numbers, boolean, array, and object.
// we can call setState() twice/multiple and increment by twice/multiple using prevState

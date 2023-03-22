import { useState } from "react";

// components
import CComponent from "./CComponent";
import FComponent from "./FComponent";

export default function Hook2() {
  const [cflag, setCFlag] = useState(true);
  const [fflag, setFFlag] = useState(true);

  return (
    <div className="hook2">
      <hr />
      <h2>Hook2 - useEffect()</h2>
      <hr />
      <div>
        <button onClick={() => setCFlag(!cflag)}>Toggle Class Component</button>
      </div>
      {!cflag ? <CComponent /> : ""}
      <hr />
      <div>
        <button onClick={() => setFFlag(!fflag)}>
          Toggle Functional Component
        </button>
      </div>
      {!fflag ? <FComponent /> : ""}
      <hr />
    </div>
  );
}

// The useEffect Hook is used when we want to use the life cycle effects in functional components.
// useEffect takes two argument, the first argument is the effect function and second is dependency array.
// If we want to call useEffect only when the component is mounted like componentDidMount then the dependency array should be empty array.
// If we want to call useEffect when the component is mounted or updated then dont pass second argument.
// If we want to call useEffect when the state of specific variable is changed then pass that variable in the dependency array.
// If we want to do cleanup as we do using componentWillUnmount then use return cleanup inside useffect.

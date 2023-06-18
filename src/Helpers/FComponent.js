import React, { useEffect, useState } from "react";

export default function FComponent() {
  const [time, setTime] = useState(new Date().toString());
  const [message, setMessage] = useState("Functional Component");

  const showDate = () => {
    setTime(new Date().toString());
  };

  // Only called when the component is mounted
  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  // Called when the component is mounted or updated
  useEffect(() => {
    console.log("Component Mounted or Updated");
  });

  // when we want to call only when the state of message is changed then pass the dependency message in the array
  useEffect(() => {
    console.log("Component Mounted or Updated (with message as dependency)");
  }, [message]);

  // when we want to call only when the state of time is changed then pass the dependency message in the array
  useEffect(() => {
    console.log("Component Mounted or Updated (with time as dependency)");
    const interval = setInterval(showDate, 1000);

    return () => {
      console.log("Cleanup of interval");
      clearInterval(interval);
    };
  }, [time]);

  return (
    <div className="fcomponent">
      <div>{time}</div>
      <button onClick={showDate}>Show Date</button>
      <div>{message}</div>
      <button onClick={() => setMessage("Changed Functional Component")}>
        Change Message
      </button>
    </div>
  );
}

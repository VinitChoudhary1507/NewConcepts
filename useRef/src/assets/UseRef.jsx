import { useRef, useState } from "react";

const Counter = () => {
  const countRef = useRef(0);
  const [stateCount, setStateCount] = useState(0);

  const incrementRef = () => countRef.current++;
  const incrementState = () => setStateCount(stateCount + 1);

  console.log("Component rendered");

  return (
    <div>
      <p>Ref Count: {countRef.current}</p>
      <p>State Count: {stateCount}</p>
      <button onClick={incrementRef}>Increment Ref</button>
      <button onClick={incrementState}>Increment State</button>
    </div>
  );
};

export default Counter;

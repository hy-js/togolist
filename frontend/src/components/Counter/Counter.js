import { useEffect, useState } from "react";
// import Button from "../Button/Button";
import "./Counter.styles.css";

const Counter = () => {
  const [count, setCount] = useState(() => {
    console.log("Initial value has been set");
    const initialValue = localStorage.getItem("counter");
    return parseInt(initialValue) || 0;
  });

  useEffect(() => {
    // Update the title in the dom
    document.title = `Counter equals ${count}`;
    // Add to local storage
    console.log("Counter has been set");
    localStorage.setItem("counter", count);
  }, [count]);

  const handleReset = () => {
    setCount(0);
  };

  const handleSub = () => {
    setCount((prev) => prev - 1);
  };

  const handleAdd = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className='container'>
      {/* Inline styling */}
      <button onClick={() => handleReset()}>Reset</button>
      <h2 style={{ margin: "1em" }}>Counter: {count}</h2>
      <p>Your count will save automatically. Max 10</p>
      <div className='counter'>
        <button disabled={count <= 0} onClick={() => handleSub()}>
          Decrement -
        </button>
        <button disabled={count >= 10} onClick={() => handleAdd()}>
          Increment +
        </button>
      </div>
    </div>
  );
};

export default Counter;

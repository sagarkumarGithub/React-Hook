import React, { useState } from "react";

const UseStateHook = () => {
  const [count, setCount] = useState(0);

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleClear = () => {
    setCount(0);
  };
  return (
    <>
      <div>
        <h1>Use State Hook</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
        <h3>{count}</h3>
        <button onClick={handleDecrease}>+</button>
      </div>
      <button style={{ marginTop: "20px" }} onClick={handleClear}>
        clear
      </button>
    </>
  );
};

export default UseStateHook;

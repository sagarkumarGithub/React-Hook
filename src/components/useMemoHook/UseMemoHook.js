import React, { useState, useMemo } from "react";

const UseMemoHook = () => {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  const multiply = useMemo(() => {
    console.log("-------------");
    return add * 10;
  }, [add]);

  return (
    <div>
      <h1>I am use useMemo hook</h1>
      {multiply}
      <br />
      <button onClick={() => setAdd(add + 1)}>addition</button>
      <span>{add}</span>
      <br />
      <button onClick={() => setMinus(minus - 1)}>subtraction</button>
      <span>{minus}</span>
    </div>
  );
};

export default UseMemoHook;

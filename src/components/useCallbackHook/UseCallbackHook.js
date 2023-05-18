import React, { useState, useCallback } from "react";

const functionCount = new Set();

const UseCallbackHook = () => {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  const inc = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const dec = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  const otherInc = useCallback(() => {
    setOtherCount(otherCount + 1);
  }, [otherCount]);

  functionCount.add(inc);
  functionCount.add(dec);
  functionCount.add(otherInc);

  console.log(functionCount.size);

  return (
    <div>
      <h1>I am UseCallbackHook</h1>
      Count: {count}
      <div>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
      </div>
      Other Count: {otherCount}
      <div>
        <button onClick={otherInc}>increamentByOther</button>
      </div>
    </div>
  );
};

export default UseCallbackHook;

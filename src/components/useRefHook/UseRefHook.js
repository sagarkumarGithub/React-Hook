import React, { useRef } from "react";

const UseRefHook = () => {
  const inputRef = useRef(null);
  const handleClear = () => {
    inputRef.current.value = "";
  };
  return (
    <>
      <h1>Use Ref Hook</h1>
      <input type="text" placeholder="Enter something..." ref={inputRef} />
      <button onClick={handleClear}>clear</button>
    </>
  );
};

export default UseRefHook;

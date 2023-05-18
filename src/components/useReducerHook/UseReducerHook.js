import React, { useReducer } from "react";

const inititalState = {
  count: 0,
  showText: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREAMENT":
      return { count: state.count + 1, showText: state.showText };
    case "DECREAMENT":
      return { count: state.count - 1, showText: state.showText };
    case "TOGGLETEXT":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, inititalState);
  return (
    <>
      <h1>Use Reducer Hook</h1>
      <button onClick={() => dispatch({ type: "INCREAMENT" })}>+</button>
      {state.count}
      <button
        onClick={() => {
          dispatch({ type: "DECREAMENT" });
          dispatch({ type: "TOGGLETEXT" });
        }}
      >
        -
      </button>
      {state.showText && <p>I AM TOGGLE TEXT</p>}
    </>
  );
};

export default UseReducerHook;

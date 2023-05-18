import React, { createContext, useState } from "react";
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null);

const UseContextHook = () => {
  const [userName, setUserName] = useState("");
  return (
    <>
      <AppContext.Provider value={{ userName, setUserName }}>
        <Login />
        <User />
      </AppContext.Provider>
    </>
  );
};

export default UseContextHook;

// import React, { useState, useContext, createContext } from "react";
// import Login from "./Login";
// import User from "./User";

// export const AppContext = createContext(null);

// export const UseContextHook = () => {
//   const [userName, setUsername] = useState("");
//   return (
//     <>
//       <AppContext.Provider value={{ userName, setUsername }}>
//         <h1>I am use context hook</h1>
//         <Login />
//         <User />
//       </AppContext.Provider>
//     </>
//   );
// };

// export default UseContextHook;

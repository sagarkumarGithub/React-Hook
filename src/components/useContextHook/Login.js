import React, { useContext } from "react";
import { AppContext } from "./UseContextHook";

const Login = () => {
  const setUserName = useContext(AppContext);
  return (
    <>
      <input
        type="text"
        placeholder="Enter somthing..."
        onChange={(e) => setUserName(e.target.value)}
      />
    </>
  );
};

export default Login;

// import React, { useContext } from "react";
// import { AppContext } from "./UseContextHook";

// const Login = () => {
//   const { setUsername } = useContext(AppContext);
//   return (
//     <>
//       <div>
//         <input type="text" onChange={(e) => setUsername(e.target.value)} />
//       </div>
//     </>
//   );
// };

// export default Login;

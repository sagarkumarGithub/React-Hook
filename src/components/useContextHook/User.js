import React, { useContext } from "react";

import { AppContext } from "./UseContextHook";

const User = () => {
  const { userName } = useContext(AppContext);
  return (
    <>
      <p>{userName}</p>
    </>
  );
};

export default User;

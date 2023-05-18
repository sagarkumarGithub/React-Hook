import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEffectHook = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0]);
        console.log(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <p>{data.id}</p>
      <p>{data.name}</p>
      <p>{data.email}</p>
      <p>{data.body}</p>
    </>
  );
};

export default UseEffectHook;

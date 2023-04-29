import React, { useContext } from "react";
import { MyContext } from "./App";
import Child from "./Child";

const UseContextEg = () => {
  const { user, setUser, func } = useContext(MyContext);
  //   const user = useContext(MyContext);
  return (
    <div>
      <h1>{user}</h1>
      <h2>{func()}</h2>
      <button
        onClick={() => {
          setUser("Sahil"); //it will rerenders all and set value as "Sahil"
          func();
          return func;
        }}
      >
        Do not click me
      </button>
      <Child />
    </div>
  );
};
export default UseContextEg;

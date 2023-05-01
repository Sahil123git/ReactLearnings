import React, { useContext } from "react";
import { MyContext } from "./App";
import Child from "./Child";
import styles from "./UseContext.module.css";

const UseContextEg = () => {
  const { user, setUser, func } = useContext(MyContext);
  const containerStyle = {
    backgroundColor: "lightblue",
    padding: "10px",
    borderRadius: "5px",
  };
  //   const user = useContext(MyContext);
  return (
    <div>
      <h3 style={containerStyle}>{user}</h3>
      <h3
        style={{ backgroundColor: "red", borderRadius: "10px", color: "white" }}
      >
        {func()}
      </h3>
      <button
        onClick={() => {
          setUser("Sahil"); //it will rerenders all and set value as "Sahil"
          func();
          return func;
        }}
        className={styles.buttonStyle}
      >
        Do not click me
      </button>
      <Child />
    </div>
  );
};
export default UseContextEg;

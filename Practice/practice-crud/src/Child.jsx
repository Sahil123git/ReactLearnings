import React, { useContext } from "react";
import { MyContext } from "./App";

function Child() {
  const { user } = useContext(MyContext);
  // When  passing like this <MyContext.Provider value={user}>
  // user = useContext(MyContext);
  return (
    <div>
      <h1>From Grand Child {user}</h1>
    </div>
  );
}
export default Child;

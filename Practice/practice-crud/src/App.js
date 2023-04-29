import React, { useState, useEffect } from "react";
import UseContextEg from "./UseContextEg";
import UseRefEg from "./UseRefEg.jsx";
import UseRefEg2 from "./UseRefEg2";
export const MyContext = React.createContext();

function App() {
  const [user, setUser] = useState("Jesse Hall");
  const [api, setAPI] = useState([]);
  const [theme, setTheme] = useState(0);

  const func = () => {
    console.log("hii You click me ");
    return "Sahil";
  };
  // async function callAPI() {
  //   let res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   let data = await res.json();
  //   console.log(data);
  //   setAPI(data);
  // }

  useEffect(() => {
    // callAPI();
    // console.log("d");
  }, []);

  return (
    <div className="App">
      <h1>Hello </h1>
      {api.slice(0, 7).map((book) => (
        <p key={book.id}>{book.title} </p>
      ))}
      <h1>Hello {user}</h1>
      <MyContext.Provider value={{ user, setUser, func }}>
        <UseContextEg />
      </MyContext.Provider>
      <UseRefEg />
      <UseRefEg2 />
    </div>
  );
}

export default App;

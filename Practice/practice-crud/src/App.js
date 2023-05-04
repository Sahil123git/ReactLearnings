import React, { useState, useEffect } from "react";
import UseContextEg from "./UseContextEg";
import UseRefEg from "./UseRefEg.jsx";
import UseRefEg2 from "./UseRefEg2";
import UseMemoEg from "./UseMemoEg";
import UseCallBackEg from "./UseCallbackEg";
import CustomHookEg from "./CustomHookEg";
import FormValidation from "./FormValidation";
import SearchFeature from "./SearchFeature";
import "./App.css";

export const MyContext = React.createContext();

function App() {
  const [user, setUser] = useState("Jesse Hall");
  const [api, setAPI] = useState([]);

  const func = () => {
    console.log("hii You click me ");
    return "Sahil";
  };

  async function callAPI() {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await res.json();
    console.log(data);
    setAPI(data);
  }

  useEffect(() => {
    callAPI();
    // console.log("d");
  }, []);

  return (
    <div className="App">
      {/* {api.slice(0, 5).map((book) => (
      <p key={book.id}>{book.title} </p>
    ))} */}

      <SearchFeature api={api} />

      <h1>useContext and CSS in React. Eg Hello {user}</h1>
      <MyContext.Provider value={{ user, setUser, func }}>
        <UseContextEg />
      </MyContext.Provider>

      <UseRefEg />
      <UseRefEg2 />
      <UseMemoEg />
      <UseCallBackEg />
      <CustomHookEg />
      <FormValidation />
    </div>
  );
}

export default App;

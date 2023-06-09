import React, { useState, useEffect, useRef } from "react";

const UseRefEg = () => {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState(0);
  const prevCountRef = useRef();
  /* Note: 
   When using setState(count+1) to update the count state variable, React first updates the state variable and then re-renders the component. At this point, the prevCountRef.current value still holds the previous value of count. After the re-render, the useEffect hook updates the prevCountRef.current value to the current count value and logs both the previous and current count values. Updating prevCountRef value will not cause component to re-render.
   So in next render only it will get this value
  */
  useEffect(() => {
    console.log("inside");
    prevCountRef.current = count;
    // setVal(count); //this will re-renders whole component again
    console.log(prevCountRef.current, count);
  }, [count]);

  return (
    <div>
      <h1>UseRefEg</h1>
      {(() => {
        console.log("Printing on console");
        return <p>Some content</p>;
      })()}

      <h3>{val}</h3>

      {(() => {
        console.log("useRef count");
        return <h3>Previous count: {prevCountRef.current}</h3>;
      })()}

      {(() => {
        console.log("count useState");
        return <h3>Count: {count}</h3>;
      })()}

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default UseRefEg;

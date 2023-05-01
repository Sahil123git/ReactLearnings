import { useState, useEffect, useRef } from "react";

const UseRefEg2 = () => {
  const [count, setCount] = useState(1);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current++; //it has automatically executed once before anything
    //so we can say actually this is one val ahead of count
    console.log(`Component has been rendered ${renderCount.current} times.`);
  });

  const handleClick = () => {
    console.log("From handle Click");
    setCount(count + 1); //after this go and complete return() first then only useEffect
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
      {(() => {
        console.log("Some Content");
        return <p>Some content</p>;
      })()}
      <p> {`Rendered: ${renderCount.current} times`}</p>
    </div>
  );
};
export default UseRefEg2;

import { useState, useEffect, useRef } from "react";

const UseRefEg2 = () => {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current++; //it has automatically executed once before anything
    //so we can say actually this is one val ahead of count
    console.log(`Component has been rendered ${renderCount.current} times.`);
  });

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
      <p> {`Rendered: ${renderCount.current} times`}</p>
    </div>
  );
};
export default UseRefEg2;

import useCounter from "./UseCounter";
import CustomHookEg2 from "./CustomHookEg2";

const CustomHookEg = () => {
  const { count, increment, decrement } = useCounter(0);

  return (
    <div>
      <h1>Custom Hook Example</h1>
      <div>Count: {count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <p>Checking Application</p>
      <CustomHookEg2 />
    </div>
  );
};

export default CustomHookEg;

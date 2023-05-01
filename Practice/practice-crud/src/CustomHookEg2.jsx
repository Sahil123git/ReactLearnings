import useCounter from "./UseCounter";

const CustomHookEg2 = () => {
  const { count, increment } = useCounter(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default CustomHookEg2;

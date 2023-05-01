import react, { useMemo, useState } from "react";

const UseMemoEg = () => {
  const [num, setNum] = useState(1);
  const [theme, setTheme] = useState(1);

  const value = useMemo(() => {
    return slowFun(num); //when ever this value will change component will render again
  }, [num]);

  // const value = slowFun(num); //slows 
  function slowFun() {
    for (let i = 0; i < 1000000000; i++) {}
    return num << 1;
  }
  return (
    <div>
      <h1>Use Memo</h1>
      <input
        type="number"
        value={num}
        onChange={(e) => {
          setNum(parseInt(e.target.value));
        }}
      />
      <button
        onClick={() => {
          if (theme === 1) {
            setTheme(0);
          } else {
            setTheme(1);
          }
        }}
      >
        Click
      </button>
      <p>{value}</p>
      <p>{theme}</p>
    </div>
  );
};

export default UseMemoEg;

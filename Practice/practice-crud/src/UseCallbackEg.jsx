import react, { useCallback, useState } from "react";
import List from "./List";
//Concept form webdevSimplified
const UseCallbackEg = () => {
  //useCallback returns a memoized callback function.
  const [num, setNum] = useState(1);
  const [dark, setDark] = useState(0);

  const getItems = useCallback(() => {
    console.log("here");
    return [num, num + 1, num + 2];
  }, [num]);

  //     const getItems = () => { //if we will not use useCallback it will get created which will
  //   //cause not needed working of this func
  //       console.log("here");
  //       return [num, num + 1, num + 2];
  //     };

  return (
    <div>
      <h1>Use CallBack</h1>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(parseInt(e.target.value))}
      />

      <List getItems={getItems} />

      <button
        onClick={() => {
          if (dark === 1) {
            setDark(0);
          } else {
            setDark(1);
          }
        }}
      >
        {dark}
      </button>
    </div>
  );
};

export default UseCallbackEg;

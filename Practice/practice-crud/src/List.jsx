import React, { useEffect, useState } from "react";

const List = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // console.log(getItems());
    setItems(getItems); //useCallback returns a memoized callback function
  }, [getItems]);

  return (
    <div>
      {items.map((ele, index) => (
        <li key={index}>
          index is {index}: and ele is {ele}
        </li>
      ))}
    </div>
  );
};

export default List;

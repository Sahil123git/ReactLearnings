import React from "react";

const SearchResults = ({ data, query }) => {
  const filteredData = query
    ? data.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      )
    : data;
  console.log(data, query, filteredData);
  return (
    <div>
      <ul>
        {filteredData.slice(0, 5).map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;

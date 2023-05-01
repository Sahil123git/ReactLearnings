import React, { useState } from "react";
import SearchBox from "./SearchBox";
import SearchResults from "./SearchResults";

const SearchFeature = (props) => {
  const [query, setQuery] = useState("");
  const handleSearch = (keyword) => {
    // console.log(keyword);
    setQuery(keyword);
  };
  return (
    <div>
      <h1>Iterating list using map and Search Functionality </h1>
      <SearchBox onSearch={handleSearch} />
      <SearchResults data={props.api} query={query} />
    </div>
  );
};
export default SearchFeature;

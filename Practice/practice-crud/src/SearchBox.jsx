import React, { useState } from "react";

const SearchBox = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearch(query);
    onSearch(query);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="search..."
        onChange={handleSearch}
        value={search}
      />
    </div>
  );
};

export default SearchBox;

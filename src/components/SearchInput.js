import React from "react";
import "../styles/SearchInput.css";

function SearchInput({ value, onChange }) {
  return (
    <input
      type="text"
      className="search-input"
      placeholder="Search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchInput;

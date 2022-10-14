import React from "react";

function SearchBox() {
  return (
    <div className="search-box">
      Get Searching:
      <div className="searchbar">
        <input
          type={"text"}
          placeholder={"E.g: Sushi"}
          autoComplete={"off"}
          autoFocus
        ></input>
      </div>
    </div>
  );
}

export default SearchBox;

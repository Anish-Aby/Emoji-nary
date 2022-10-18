import React from "react";
import ExploreButton from "./ExploreButton";
import SearchButton from "./SearchButton";

function SearchBox() {
  return (
    <div className="search-box">
      Get Searching:
      <div className="searchbar">
        <form>
          <input
            className="home-searchbar"
            type={"text"}
            placeholder={"E.g: Sushi"}
            autoComplete={"off"}
          ></input>
          <div>
            <SearchButton />
          </div>
        </form>
      </div>
      <div className="explore-container">
        Or start exploring
        <ExploreButton />
      </div>
    </div>
  );
}

export default SearchBox;

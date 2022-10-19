import React from "react";
import { Link } from "react-router-dom";
import ExploreButton from "./ExploreButton";
import SearchButton from "./SearchButton";

function SearchBox() {
  return (
    <div className="search-box">
      Get Searching:
      <div className="searchbar">
        <form method="GET" action="/search">
          <input
            name="search"
            className="home-searchbar"
            type={"text"}
            placeholder={"E.g: Sushi or 🍣"}
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

import React from "react";
import allEmoji from "../JSON files/ALLEMOJIS";
import Cards from "../components/explorePageComponents/Cards";
import SideBar from "../components/explorePageComponents/SideBarMenu";

let userSearch;

new URLSearchParams(window.location.search).forEach((value) => {
  userSearch = value;
});

let resultsArray = [];
let nullResultsArray = ["no results"];

let nullResultsStyle = {
  color: "#D6D6D6",
  fontFamily: "Poppins",
  fontSize: "5vh",
  fontWeight: "600",
};

let nullResultsStyleSubHeadding = {
  color: "#D6D6D6",
  fontFamily: "Poppins",
  fontSize: "3vh",
  fontWeight: "600",
};

allEmoji.forEach(function (object) {
  let nameQuery = object.emojiName.toLowerCase();
  let emojiQuery = object.emoji;
  let descriptionQuery = object.description;

  if (
    nameQuery.includes(userSearch) ||
    emojiQuery.includes(userSearch) ||
    descriptionQuery.includes(userSearch)
  ) {
    let emoji = object.emoji;
    let emojiName = object.emojiName;
    let description = object.description;
    resultsArray.push({
      emoji,
      emojiName,
      description,
    });
  }
});

let resultsArrayLength = resultsArray.length;

export default function Search() {
  return (
    <>
      <div className="EXPLORE-MAIN-CONTAINER">
        <SideBar
          people={"/explore#people"}
          animal={"/explore#animal"}
          food={"/explore#food"}
          activity={"/explore#activity"}
          travel={"/explore#travel"}
          flags={"/explore#flags"}
          symbols={"/explore#symbols"}
          object={"/explore#object"}
        />
        <div className="EXPLORE-MID-CONTAINER">
          <div className="searchResult">
            <h1>Search results for : {userSearch}</h1>
          </div>
          <section className="EXPLORE-CARD-CONTAINER">
            {resultsArrayLength > 0
              ? resultsArray.map(function (object) {
                  return (
                    <Cards
                      emoji={object.emoji}
                      eName={object.emojiName.substring(2)}
                      eDescription={object.description}
                    />
                  );
                })
              : nullResultsArray.map(function (object) {
                  return (
                    <div>
                      <div style={nullResultsStyle}>
                        <h3>No results found!</h3>
                      </div>
                      <h4 style={nullResultsStyleSubHeadding}>
                        Please check again later.
                      </h4>
                    </div>
                  );
                })}
          </section>
        </div>
      </div>
    </>
  );
}

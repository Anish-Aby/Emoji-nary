import React from "react";
import allEmoji from "../JSON files/ALLEMOJIS";
import Cards from "../components/explorePageComponents/Cards";
import SideBar from "../components/explorePageComponents/SideBarMenu";

let userSearch;

new URLSearchParams(window.location.search).forEach((value) => {
  userSearch = value;
});

let resultsArray = [];

allEmoji.forEach(function (object) {
  let nameQuery = object.emojiName.toLowerCase();
  let emojiQuery = object.emoji;

  if (nameQuery.includes(userSearch) || emojiQuery.includes(userSearch)) {
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
          <section className="EXPLORE-CARD-CONTAINER">
            {resultsArray.map(function (object) {
              return (
                <Cards
                  emoji={object.emoji}
                  eName={object.emojiName.substring(2)}
                  eDescription={object.description}
                />
              );
            })}
          </section>
        </div>
      </div>
    </>
  );
}

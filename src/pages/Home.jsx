import React from "react";
import Header from "../components/Header";
import Description from "../components/Description";
import SearchBox from "../components/SearchBox";
import Card from "../components/Card";
import Card2 from "../components/Card2";
import Card3 from "../components/Card3";
import ExploreButton from "../components/ExploreButton";

function Home() {
  return (
    <div className="main-container">
      <Header />
      <Description />
      <SearchBox />
      <ExploreButton />
      <Card />
      <Card2 />
      <Card3 />
    </div>
  );
}

export default Home;

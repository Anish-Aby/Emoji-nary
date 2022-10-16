import React from "react";
import Header from "../components/homePageComponents/Header";
import Description from "../components/homePageComponents/Description";
import SearchBox from "../components/homePageComponents/SearchBox";
import Card from "../components/homePageComponents/Card";
import Card2 from "../components/homePageComponents/Card2";
import Card3 from "../components/homePageComponents/Card3";

function Home() {
  return (
    <div className="main-container">
      <Header />
      <Description />
      <SearchBox />
      <Card />
      <Card2 />
      <Card3 />
    </div>
  );
}

export default Home;

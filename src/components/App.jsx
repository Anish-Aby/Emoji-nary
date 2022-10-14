import React from "react";
import Header from "./Header";
import Description from "./Description";
import SearchBox from "./SearchBox";
import Card from "./Card";
import Card2 from "./Card2";
import Card3 from "./Card3";

function App() {
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

export default App;

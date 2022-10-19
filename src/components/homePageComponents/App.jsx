import React from "react";
import { Route, Routes } from "react-router";

import Explore from "../../pages/Explore";
import Home from "../../pages/Home";
import Search from "../../pages/Search";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}

export default App;

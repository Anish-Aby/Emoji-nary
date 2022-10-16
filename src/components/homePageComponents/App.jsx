import React from "react";
import { Route, Routes } from "react-router";

import Explore from "../../pages/Explore";
import Home from "../../pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
    </Routes>
  );
}

export default App;

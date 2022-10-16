import React from "react";
import { Link } from "react-router-dom";

export default function ExploreButton() {
  return (
    <>
      <Link to="/explore">
        <button className="explore-button">Explore 👀</button>
      </Link>
    </>
  );
}

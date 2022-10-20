import React from "react";
import { useState } from "react";

export default function Cards(props) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const boxStyle = {
    border: isHover ? "2px solid #E91E63" : "0px none",
    transform: isHover ? "scale(1.1)" : "scale(1)",
  };
  return (
    <>
      <div
        className="explore-page-cards"
        style={boxStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="explore-page-cards-emoji">{props.emoji}</div>
        <div className="explore-page-cards-name">{props.eName}</div>
        <div className="explore-page-cards-description">
          {props.eDescription}
        </div>
      </div>
    </>
  );
}

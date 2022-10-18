import React from "react";

export default function Cards(props) {
  return (
    <>
      <div className="explore-page-cards">
        <div className="explore-page-cards-emoji">{props.emoji}</div>
        <div className="explore-page-cards-name">{props.emojiName}</div>
        <div className="explore-page-cards-description">
          {props.emojiDescription}
        </div>
      </div>
    </>
  );
}

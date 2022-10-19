import React from "react";

import ActiveMenuLink from "active-menu-link";

let options = {
  ease: "inOutSine",
  scrollDuration: 1000,
};

new ActiveMenuLink(".sidebar-category", options);

export default function SideBar(props) {
  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-category-container">
          <div className="sidebar-category">
            <div className="sidebar-heading">
              <div className="sidebar-heading-text">Categories</div>
            </div>
            <ul>
              <li>
                <a href={props.people}>
                  <span className="list">People</span>
                </a>
              </li>
              <li>
                <a href={props.animal}>
                  <span className="list">Animal and Nature</span>
                </a>
              </li>
              <li>
                <a href={props.food}>
                  <span className="list">Food and Drinks</span>
                </a>
              </li>
              <li>
                <a href={props.activity}>
                  <span className="list">Activity</span>
                </a>
              </li>
              <li>
                <a href={props.travel}>
                  <span className="list">Travel and Places</span>
                </a>
              </li>
              <li>
                <a href={props.flags}>
                  <span className="list">Flags</span>
                </a>
              </li>
              <li>
                <a href={props.symbols}>
                  <span className="list">Symbols</span>
                </a>
              </li>
              <li>
                <a href={props.object}>
                  <span className="list">Objects</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

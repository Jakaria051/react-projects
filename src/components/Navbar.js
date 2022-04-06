import React from "react";
import logo from "../logo512.png";
export default function Navbar(props) {
  return (
    <nav className={props.darkMode ? "dark" : ""}>
      <img className="logo" src={logo} alt="logo" />
      <h3 className="logoText">ReactProjects</h3>
      <div className="tiggler">
        <p className="togglerLight">Light</p>
        <div className="togglerSlider" onClick={props.togglerMode}>
          <div className="togglerSliderCircle"></div>
        </div>
        <p className="togglerDark">Dark</p>
      </div>
    </nav>
  );
}

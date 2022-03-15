import React from "react";
import logo from "../assets/logo.png";
import classes from "../styles/Navbar.module.css";
export default function Navbar() {
  return (
    <>
      <nav className={classes.navbar}>
        <img
          src={logo}
          className={`global-width ${classes.logo}`}
          alt="airbnb-logo"
        />
      </nav>
    </>
  );
}

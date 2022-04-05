import React from "react";
import headerImg from "../assets/logo.png";
import classes from "../styles/Navbar.module.css";
export default function Navbar() {
  return (
    <>
      <header className={classes.header}>
        <img
          src={headerImg}
          className={`${classes.headerLogo}`}
          alt="airbnb-logo"
        />
        <h2 className={classes.headerTitle}>Meme Generator</h2>
        <h4 className={classes.headerProject}>React Project</h4>
      </header>
    </>
  );
}

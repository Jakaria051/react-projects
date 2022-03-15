import React from "react";
import heroImg from "../assets/hero.png";
import classes from "../styles/Hero.module.css";
export default function Hero() {
  return (
    <>
      <section className={`${classes.heroSection} global-width`}>
        <img src={heroImg} className={classes.heroImg} alt="hero" />
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </section>
    </>
  );
}

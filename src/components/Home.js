import React from "react";
import data from "../data";
import classes from "../styles/Card.module.css";
import Card from "./Card";
import Hero from "./Hero";
import Navbar from "./Navbar";

export default function Home() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <>
      <Navbar />
      <Hero />
      <section className={`${classes.card} global-width`}>{cards}</section>
    </>
  );
}

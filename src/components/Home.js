import React from "react";
import Meme from "./Meme";
import Navbar from "./Navbar";
import WindowTracker from "./WindowTracker";

export default function Home() {
  return (
    <>
      <Navbar />
      <Meme />
      <WindowTracker />
    </>
  );
}

import React, { useState } from "react";
import memeData from "../memeData";
import classes from "../styles/Meme.module.css";
export default function Meme() {
  const [meme, setMemeImage] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memeData);

  let url;
  function getMemeImage() {
    const memeArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    url = memeArray[randomNumber].url;
    setMemeImage((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setMemeImage((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }
  return (
    <main className="globalWidth">
      <div className={`${classes.form} `}>
        <input
          type="text"
          placeholder="Top text"
          className={classes.formInput}
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className={classes.formInput}
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className={classes.formButton} onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>

      <div className={classes.meme}>
        <img
          src={meme.randomImage}
          alt="memeImage"
          className={`${classes.memeImage}`}
        />
        <h2 className={`${classes.memeText} ${classes.top}`}>{meme.topText}</h2>
        <h2 className={`${classes.memeText} ${classes.bottom}`}>
          {meme.bottomText}
        </h2>
      </div>
    </main>
  );
}

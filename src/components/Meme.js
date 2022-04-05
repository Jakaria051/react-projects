import React, { useEffect, useState } from "react";
// import memeData from "../memeData";
import classes from "../styles/Meme.module.css";
export default function Meme() {
  const [meme, setMemeImage] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  // const [allMemes, setAllMemes] = useState(memeData);
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((resdata) => setAllMemes(resdata.data.memes));
  }, []);

  //use async
  // useEffect(() => {
  //   async function getRes() {
  //     const res = await fetch("https://api.imgflip.com/get_memes");
  //     const data = await res.json();
  //     setAllMemes(data.data.memes);
  //   }
  //   getRes();
  //   //cleanup
  //   return () => {};
  // }, []);

  console.log(allMemes);

  let url;
  function getMemeImage() {
    // const memeArray = allMemes.data.memes;
    const memeArray = allMemes;
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

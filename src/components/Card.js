import React from "react";
import coverImg from "../assets/image-12.png";
import starImg from "../assets/Star 1.png";
import classes from "../styles/Card.module.css";
export default function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <>
      <div className={classes.singleCard}>
        {badgeText && <div className={classes.cardBadge}>{badgeText}</div>}

        <img src={coverImg} className={classes.cardImage} alt="" />
        <div className={classes.cardStats}>
          <img src={starImg} alt="" className={classes.starImg} />
          <span>{props.item.stats.rating}</span>
          <span className="grey">- ({props.item.stats.reviewCount}) </span>
          <span className="grey">{props.item.location}</span>
        </div>
        <p>{props.item.title}</p>
        <p>
          <span className="bold">From ${props.item.price}</span> /person
        </p>
      </div>
    </>
  );
}

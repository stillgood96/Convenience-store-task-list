import React from "react";
import styles from "./card.module.css";

const Card = ({ item }) => {
  const { name, imgURL, description } = item;

  return (
    <div className={styles.container}>
      <h3>{name}</h3>
      <img className={styles.photo} src={imgURL} alt="" />
      <p>{description}</p>
    </div>
  );
};

export default Card;

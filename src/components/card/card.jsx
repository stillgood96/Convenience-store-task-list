import React from "react";
import styles from "./card.module.css";

const Card = ({ item }) => {
  const { name, imgURL, description } = item;

  return (
    <div className={styles.container}>
      <img src="" alt={imgURL} />
      <h3>{name}jkkj</h3>
      <p>{description}jkkjh</p>
    </div>
  );
};

export default Card;

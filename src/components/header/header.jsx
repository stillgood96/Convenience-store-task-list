import React from "react";
import styles from "./header.module.css";

const Header = ({ title }) => (
  <div className={styles.container}>
    <h1 className={styles.title}>
      <span>
        <i class="fas fa-fire-alt"></i>
      </span>{" "}
      {title}{" "}
      <span>
        <i class="fas fa-fire-alt"></i>
      </span>
    </h1>
  </div>
);

export default Header;

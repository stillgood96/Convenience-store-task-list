import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";
import Card from "../card/card";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./task.module.css";

const Task = ({ taskLists }) => {
  const history = useHistory();
  const [cards, setCards] = useState({});
  let title = history.location.state.value;
  let changingTitle = "";

  switch (title) {
    case "weekend-night":
      changingTitle = "주말야간 업무 사항";
      break;
  }

  useEffect(() => {
    if (!cards) {
      return;
    }
    taskLists.getTask(title, (items) => {
      const data = { ...items };
      setCards(data);
    });
  }, []);

  return (
    <section className={styles.task}>
      <Header className={styles.header} title={changingTitle} />
      <div className={styles.container}>
        {Object.keys(cards).map((key) => (
          <Card className={styles.contents} key={key} item={cards[key]} />
        ))}
      </div>
      <Footer className={styles.footer} />
    </section>
  );
};

export default Task;

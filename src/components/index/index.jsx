import React from "react";
import { useHistory } from "react-router";
import styles from "./index.module.css";

const Index = (props) => {
  const history = useHistory();

  const goTask = () => {
    history.push("/task");
  };

  return (
    <section className={styles.container}>
      <img src="/images/CU_logo.png" alt="" className={styles.logo} />
      <h1 className={styles.title}>
        <i className="fas fa-tasks"></i> 왕십리도선점 업무 리스트
      </h1>
      <select className={styles.choice} name="workTime" id="time-select">
        <option value="weekend-night">주말 야간</option>
      </select>
      <button className={styles.button} onClick={goTask}>
        업무보기
      </button>
      <button className={styles.button}>관리자 로그인</button>
    </section>
  );
};

export default Index;

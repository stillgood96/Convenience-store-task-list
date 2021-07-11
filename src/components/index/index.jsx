import React, { useRef } from "react";
import { useHistory } from "react-router";
import styles from "./index.module.css";

const Index = (props) => {
  const choiceRef = useRef();
  const firstRef = useRef();
  const secondRef = useRef();
  const idRef = useRef();
  const pwdRef = useRef();

  const history = useHistory();

  const goToTask = () => {
    history.push({
      pathname: "/task",
      state: { value: choiceRef.current.value },
    });
    console.log(choiceRef.current.value);
  };

  const goToLogin = () => {
    history.push({
      pathname: "/login",
    });
  };

  return (
    <section className={styles.container}>
      <img src="/images/CU_logo.png" alt="" className={styles.logo} />
      <h1 className={styles.title}>
        <i className="fas fa-tasks"></i> 왕십리도선점 업무 리스트
      </h1>
      <select
        ref={choiceRef}
        className={styles.choice}
        name="workTime"
        id="time-select"
      >
        <option value="weekend-night">주말 야간</option>
      </select>
      <button className={styles.button} onClick={goToTask}>
        업무보기
      </button>
      <button className={styles.button} onClick={goToLogin}>
        관리자 로그인
      </button>
    </section>
  );
};

export default Index;

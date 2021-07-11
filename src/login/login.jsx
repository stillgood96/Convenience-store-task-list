import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import styles from "./login.module.css";

const Login = (props) => {
  const history = useHistory();

  const idRef = useRef();
  const pwdRef = useRef();

  const goToEdit = () => {
    const id = idRef.current.value;
    const pwd = pwdRef.current.value;
    console.log(id + pwd);
    if (id === "admin" && pwd === "1234") {
      history.push({
        pathname: "/edit",
        state: { value: 1 },
      });
    } else {
      alert("아이디 / 비밀번호 오류!");
    }
  };
  return (
    <section className={styles.container}>
      <img src="/images/CU_logo.png" alt="" className={styles.logo} />
      <h1 className={styles.title}>관리자 로그인</h1>
      <form className={styles.form}>
        <input type="text" name="id" placeholder="아이디" ref={idRef} />
        <input type="password" name="pwd" placeholder="비밀번호" ref={pwdRef} />
        <button onClick={goToEdit}>로그인</button>
      </form>
    </section>
  );
};

export default Login;

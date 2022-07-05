import React, { useState } from "react";
import Button from "../Button";

function EmailSignUp({ view, setView }) {
  return (
    <>
      <h1 className="title-eamilsignup">이메일로 회원가입</h1>
      <form method="POST" className="content-form">
        <EditInfo view={view} setView={setView} />
      </form>
    </>
  );
}

function EditInfo({ view, setView }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isActive, setIsActive] = useState(true);

  function handleEmailInput(e) {
    setEmail(e.target.value);
  }

  function handlePasswordInput(e) {
    setPassword(e.target.value);
  }

  function goodToJoin() {
    return email.length >= 7 && password.length >= 7
      ? setIsActive(false)
      : setIsActive(true);
  }

  return (
    <>
      <label htmlFor="email" className="label-email">
        이메일
      </label>
      <input
        onKeyUp={goodToJoin}
        onChange={handleEmailInput}
        id="input-email"
        type="email"
        placeholder="이메일 주소를 입력해 주세요."
      ></input>
      <label htmlFor="password" className="label-password">
        비밀번호
      </label>
      <input
        onKeyUp={goodToJoin}
        onChange={handlePasswordInput}
        id="input-password"
        type="password"
        maxLength="16"
        placeholder="비밀번호를 설정해 주세요."
      ></input>
      <Button
        email={email}
        password={password}
        type="button"
        isActive={isActive}
        view={view}
        setView={setView}
      >
        다음
      </Button>
    </>
  );
}

export default EmailSignUp;

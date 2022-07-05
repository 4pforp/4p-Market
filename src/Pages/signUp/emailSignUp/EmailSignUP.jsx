import React, { useState } from "react";
import Button from "../button/Button";

function EmailSignUp({ view, setView }) {
  return (
    <>
      <form method="POST">
        <h1>이메일로 회원가입</h1>
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
      <div className="container-signup">
        <label for="input-email">이메일</label>
        <input
          onKeyUp={goodToJoin}
          onChange={handleEmailInput}
          // TODO onBlur
          type="email"
          name="user-email"
          id="input-email"
          placeholder="이메일 주소를 입력해 주세요."
        ></input>
        <label for="input-pwd">비밀번호</label>
        <input
          onKeyUp={goodToJoin}
          onChange={handlePasswordInput}
          type="password"
          name="user-pwd"
          id="input-pwd"
          maxLength="16"
          placeholder="비밀번호를 설정해 주세요."
        ></input>
      </div>
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

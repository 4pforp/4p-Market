import { React, useState } from "react";
import axios from "axios";
import Button from "../../Button";
import EditAccount from "./EditAccount";

function EmailSignUp({ setView, user, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [resMessageEmail, setResMessageEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  // 이메일 주소 유효성 검사
  const checkEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,5}$/i;

  function handleView() {
    setView("ProfileSet");
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  async function handleClick() {
    if (checkEmail.test(email)) {
      try {
        const res = await axios.post(
          "https://mandarin.api.weniv.co.kr/user/emailvalid",
          {
            user: {
              email,
            },
          },
          {
            header: {
              "Content-Type": "application/json",
            },
          }
        );
        if (res.data.message === "이미 가입된 이메일 주소 입니다.") {
          setResMessageEmail("*" + res.data.message);
          setIsValidEmail(false);
        } else {
          setUser({
            ...user,
            email: email,
            password: password,
          });
          handleView();
        }
      } catch (err) {
        console.error(err);
      }
    }
  }

  return (
    <>
      <h1 className="title-signup">이메일로 회원가입</h1>
      <form className="container-form" onSubmit={handleSubmit}>
        <EditAccount
          setIsActive={setIsActive}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          resMessageEmail={resMessageEmail}
          setResMessageEmail={setResMessageEmail}
          isValidEmail={isValidEmail}
          setIsValidEmail={setIsValidEmail}
        />
        <Button
          type="submit"
          setView={setView}
          isActive={isActive}
          email={email}
          password={password}
          handleClick={handleClick}
          name="emailSingUp"
        >
          다음
        </Button>
      </form>
    </>
  );
}

export default EmailSignUp;

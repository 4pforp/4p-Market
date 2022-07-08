import { useState } from "react";
import Button from "../../Button";
import SetAccount from "./SetAccount";

function EmailSignUp({ setView, user, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setUser({
      ...user,
      email: email,
      password: password,
    });
  }

  return (
    <>
      <h1 className="title-signup">이메일로 회원가입</h1>
      <form method="POST" className="content-form">
        <SetAccount
          setIsActive={setIsActive}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
        <Button
          type="button"
          setView={setView}
          isActive={isActive}
          email={email}
          password={password}
          handleClick={handleClick}
        >
          다음
        </Button>
      </form>
    </>
  );
}

export default EmailSignUp;

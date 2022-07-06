import { React, useState } from "react";
import "./profileSet.scss";
import EditInfo from "./EditInfo";
import Button from "../Button";

function ProfileSet({ user, setUser, submitUserInfo }) {
  const [userName, setUserName] = useState("");
  const [accountName, setAcountName] = useState("");
  const [intro, setIntro] = useState("");
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setUser({
      ...user,
      username: userName,
      accountname: accountName,
      intro: intro,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    submitUserInfo();
  }

  return (
    <>
      <h1 className="title-signup">프로필 설정</h1>
      <h2 className="subtitle-signup">나중에 언제든지 변경할 수 있습니다.</h2>
      <form
        method="POST"
        encType="multipart/form-data"
        className="content-form"
        onSubmit={handleSubmit}
      >
        <EditInfo
          setIsActive={setIsActive}
          userName={userName}
          setUserName={setUserName}
          accountName={accountName}
          setAcountName={setAcountName}
          intro={intro}
          setIntro={setIntro}
        />
        <Button
          type="submit"
          isActive={isActive}
          userName={userName}
          accountName={accountName}
          intro={intro}
          handleClick={handleClick}
        >
          감귤마켓 시작하기
        </Button>
      </form>
    </>
  );
}

export default ProfileSet;

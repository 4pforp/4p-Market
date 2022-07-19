import { React, useState } from "react";
import EditInfo from "./EditInfo";
import Button from "../../../components/button/LoginButton";
import "./profileSet.scss";

function ProfileSet({ user, setUser, submitUserInfo }) {
  const [username, setUsername] = useState("");
  const [accountname, setAcountname] = useState("");
  const [intro, setIntro] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [image, setImage] = useState(
    "https://mandarin.api.weniv.co.kr/1657959866076.png"
  );

  function handleClick() {
    setUser({
      ...user,
      username: username,
      accountname: accountname,
      intro: intro,
      image: image,
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
        className="container-form"
        onSubmit={handleSubmit}
      >
        <EditInfo
          setIsActive={setIsActive}
          username={username}
          setUsername={setUsername}
          accountname={accountname}
          setAcountName={setAcountname}
          intro={intro}
          setIntro={setIntro}
          setImage={setImage}
          image={image}
        />
        <Button
          type="submit"
          isActive={isActive}
          username={username}
          accountname={accountname}
          intro={intro}
          image={image}
          handleClick={handleClick}
          name="profileSet"
        >
          뽀삐뽀삐 시작하기
        </Button>
      </form>
    </>
  );
}

export default ProfileSet;

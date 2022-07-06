import React, { useState, useContext } from "react";
import "./profileSet.scss";
import PictureIcon from "../../../assets/upload-file.svg";
import Button from "./Button";
import UserContext from "./UserContext";

function ProfileSet() {
  const [username, setUserName] = useState("");
  const [accountname, setAcountName] = useState("");
  const [intro, setIntro] = useState("");
  const { user, setUser } = useContext(UserContext);
  // 유저 정보 입력 함수
  function handleSubmit(e) {
    e.preventDefault();
    setUser({
      ...user,
      username: username,
      accountname: accountname,
      intro: intro,
    });
    submitUserInfo();
  }
  // 유저 정보 서버로 POST
  function submitUserInfo(e) {
    const userInfo = { user: "" };
    userInfo.user = user;
    fetch("https://mandarin.api.weniv.co.kr/user", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    }).then((res) => {});
  }

  return (
    <>
      <h1 className="title-signup">프로필 설정</h1>
      <h2 className="subtitle-signup">나중에 언제든지 변경할 수 있습니다.</h2>
      <form
        method="POST"
        enctype="multipart/form-data"
        className="content-form"
        onSubmit={handleSubmit}
      >
        <EditInfo
          username={username}
          setUserName={setUserName}
          accountname={accountname}
          setAcountName={setAcountName}
          intro={intro}
          setIntro={setIntro}
        />
      </form>
    </>
  );
}

function EditInfo({
  username,
  setUserName,
  accountname,
  setAcountName,
  intro,
  setIntro,
}) {
  const [isActive, setIsActive] = useState(true);

  function handleUserNameInput(e) {
    setUserName(e.target.value);
  }

  function handleAcountNameInput(e) {
    setAcountName(e.target.value);
  }

  function handleIntroInput(e) {
    setIntro(e.target.value);
  }

  function goodToJoin() {
    return username.length >= 2 && accountname.length >= 3
      ? setIsActive(false)
      : setIsActive(true);
  }

  return (
    <>
      <UploadPic />
      <div className="-container-input-info">
        <label htmlForfor="input-name" className="label-name">
          사용자 이름
        </label>
        <input
          onKeyUp={goodToJoin}
          onChange={handleUserNameInput}
          id="input-name"
          type="text"
          placeholder="2~10자 이내여야 합니다."
        ></input>
        <label htmlFor="id" className="label-id">
          계정 ID
        </label>
        <input
          onKeyUp={goodToJoin}
          onChange={handleAcountNameInput}
          id="input-id"
          type="text"
          placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다. "
        ></input>
        <label htmlFor="input-intro" className="label-intro">
          소개
        </label>
        <input
          onChange={handleIntroInput}
          id="input-intro"
          type="text"
          placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
        ></input>
      </div>
      <Button type="submit" isActive={isActive}>
        감귤마켓 시작하기
      </Button>
    </>
  );
}

function UploadPic() {
  return (
    <div className="set-profile-image">
      <label for="choose-img" className="upload-icon">
        <img src={PictureIcon} alt="upload" className="icon-img" />
      </label>
      <input
        type="file"
        name="user-pic"
        id="choose-img"
        accept="image/*"
      ></input>
    </div>
  );
}

export default ProfileSet;

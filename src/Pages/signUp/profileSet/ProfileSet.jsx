import React, { useState } from "react";
import "./profileSet.scss";
import PictureIcon from "../../../assets/images/upload-file.svg";
import Button from "../button/Button";

function ProfileSet() {
  return (
    <>
      <form method="POST" enctype="multipart/form-data">
        <h1>프로필 설정</h1>
        <h2>나중에 언제든지 변경할 수 있습니다.</h2>
        <EditMain />
      </form>
    </>
  );
}

function EditMain() {
  return (
    <>
      <UploadPic />
      <EditInfo />
    </>
  );
}

function UploadPic() {
  return (
    <div className="show-pic">
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

function EditInfo() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [isActive, setIsActive] = useState(true);

  function handleNameInput(e) {
    setName(e.target.value);
  }

  function handleIdInput(e) {
    setId(e.target.value);
  }

  function goodToJoin() {
    return name.length >= 2 && id.length >= 3
      ? setIsActive(false)
      : setIsActive(true);
  }

  return (
    <>
      <div className="-container-input-info">
        <label for="input-name">사용자 이름</label>
        <input
          type="text"
          id="input-name"
          name="user-name"
          maxlength="10"
          placeholder="2~10자 이내여야 합니다."
          onKeyUp={goodToJoin}
          onChange={handleNameInput}
        ></input>
        <label for="input-id">계정 ID</label>
        <input
          type="text"
          id="input-id"
          name="user-id"
          placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다. "
          onKeyUp={goodToJoin}
          onChange={handleIdInput}
        ></input>
        <label for="input-intro">소개</label>
        <input
          type="text"
          id="input-intro"
          name="user-intro"
          placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
        ></input>
      </div>
      <Button type="submit" isActive={isActive}>
        감귤마켓 시작하기
      </Button>
    </>
  );
}

export default ProfileSet;

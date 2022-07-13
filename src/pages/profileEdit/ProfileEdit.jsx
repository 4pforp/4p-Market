import { React, useState } from "react";

import SaveHeader from "../../components/header/SaveHeader";
import EditInfo from "../logIn/signUp/profileSet/EditInfo";
import "./ProfileEdit.scss";

function ProfileEdit() {
  const [username, setUsername] = useState("");
  const [accountname, setAcountname] = useState("");
  const [intro, setIntro] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [image, setImage] = useState(
    "https://mandarin.api.weniv.co.kr/1657268443649.png"
  );

  return (
    <>
      <SaveHeader />
      <h1 className="a11y-hidden">프로필수정</h1>
      <form
        method="POST"
        encType="multipart/form-data"
        className="form-profileeddit"
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
      </form>
    </>
  );
}

export default ProfileEdit;

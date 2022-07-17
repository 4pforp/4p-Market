import { useState, useContext } from "react";
import UserContext from "../../context/UserContext";
import SaveHeader from "../../components/header/SaveHeader";
import "./ProfileEdit.scss";
import ProfileEditInfo from "./ProfileEditInfo";

function ProfileEdit() {
  const { token, myImage, myAccountname } = useContext(UserContext);
  const url = "https://mandarin.api.weniv.co.kr/profile/" + myAccountname;
  const authToken = "Bearer" + token;
  const [username, setUsername] = useState("");
  const [accountname, setAcountname] = useState("");
  const [intro, setIntro] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [image, setImage] = useState(myImage);

  return (
    <>
      <SaveHeader isActive={isActive} />
      <h1 className="a11y-hidden">프로필수정</h1>
      <form
        method="POST"
        encType="multipart/form-data"
        className="form-profileeddit"
      >
        <ProfileEditInfo
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

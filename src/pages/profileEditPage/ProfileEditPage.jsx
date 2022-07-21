import { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";
import axios from "axios";
import SaveHeader from "../../components/header/SaveHeader";
import ProfileEditInfo from "./profileEditInfo/ProfileEditInfo";
import "./ProfileEditPage.scss";

function ProfileEditPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { token, myAccountname, setMyAccountname } = useContext(UserContext);
  const authToken = "Bearer " + token;
  const [user, setUser] = useState("");
  const [username, setUsername] = useState(location.state.username);
  const [accountname, setAcountname] = useState(location.state.accountname);
  const [intro, setIntro] = useState(location.state.intro);
  const [image, setImage] = useState(location.state.image);
  const [isActive, setIsActive] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const updatedProfile = {
    user: {
      username: username,
      accountname: accountname,
      intro: intro,
      image: image,
    },
  };

  async function submitProfileEdit() {
    try {
      const res = await axios.put(
        "https://mandarin.api.weniv.co.kr/user",
        updatedProfile,
        {
          headers: {
            Authorization: authToken,
            "Content-Type": "application/json",
          },
        }
      );
      navigate("/" + accountname);
    } catch (err) {
      console.error(err);
    }
  }

  function handleClick() {
    setUser({
      username: username,
      accountname: accountname,
      intro: intro,
      image: image,
    });
    setMyAccountname(accountname);
    localStorage.setItem("accountname", accountname);
  }

  function handleSubmit(e) {
    e.preventDefault();
    submitProfileEdit();
  }

  return (
    <>
      <h1 className="a11y-hidden">프로필수정</h1>
      <form
        method="GET"
        encType="multipart/form-data"
        className="form-profileeddit"
        onSubmit={handleSubmit}
      >
        <SaveHeader
          isActive={isActive}
          handleClick={handleClick}
          disabled={disabled}
        />
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
          disabled={disabled}
          setDisabled={setDisabled}
          myAccountname={myAccountname}
        />
      </form>
    </>
  );
}

export default ProfileEditPage;

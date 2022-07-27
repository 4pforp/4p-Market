import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";
import axios from "axios";
import SaveHeader from "../../components/header/SaveHeader";
import ProfileEditInfo from "./profileEditInfo/ProfileEditInfo";
import NotFound from "../../components/notFound/NotFound";
import pendingImg from "../../assets/logo_loading_purple.svg";
import "./ProfileEditPage.scss";

function ProfileEditPage() {
  const navigate = useNavigate();
  const { token, myAccountname, setMyAccountname } = useContext(UserContext);
  const [user, setUser] = useState();
  const [username, setUsername] = useState("");
  const [accountname, setAcountname] = useState("");
  const [intro, setIntro] = useState("");
  const [image, setImage] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [view, setView] = useState("pending");

  // 프로필 수정 시 업데이트될 자료구조
  const updatedProfile = {
    user: {
      username: username,
      accountname: accountname,
      intro: intro,
      image: image,
    },
  };

  // 기존 프로필 데이터 요청
  useEffect(() => {
    async function getUserInfo() {
      try {
        const res = await axios.get(
          "https://mandarin.api.weniv.co.kr/user/myinfo",
          {
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
          }
        );
        setUsername(res.data.user.username);
        setAcountname(res.data.user.accountname);
        setIntro(res.data.user.intro);
        setImage(res.data.user.image);
        setView("fulfilled");
      } catch (err) {
        setView("rejected");
      }
    }
    getUserInfo();
  }, []);

  //프로필 수정 요청
  async function submitProfileEdit() {
    try {
      const res = await axios.put(
        "https://mandarin.api.weniv.co.kr/user",
        updatedProfile,
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );
      navigate("/" + accountname);
    } catch (err) {
      console.error(err);
    }
  }

  // 프로필데이터 업데이트 및 로컬스토리지에 업데이트된 accountname 저장 이벤트
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

  //
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
        {view === "fulfilled" && (
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
        )}
        {view === "pending" && (
          <>
            <img src={pendingImg} className="img-pending" alt="loading" />
          </>
        )}
        {view === "rejected" && (
          <>
            <NotFound />
          </>
        )}
      </form>
    </>
  );
}

export default ProfileEditPage;

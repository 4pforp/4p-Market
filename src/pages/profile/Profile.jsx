import axios from "axios";
import CommonHeader from "../../components/header/CommonHeader";
import MainFooter from "../../components/footer/MainFooter";
import ProfileHeader from "./profileHeader/ProfileHeader";
import UserProducts from "./userProduct/UserProduct";
import UserPost from "./userPost/UserPost";
import "./Profile.scss";
import UserContext from "../../context/UserContext";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NotFound from "../notFound/NotFound";
import pendingImg from "../../assets/logo_loading.svg";

function Profile() {
  const { token, myAccountname } = useContext(UserContext);
  const params = useParams();
  const accountname = params.accountname;
  const [view, setView] = useState("pending");
  const from = accountname === myAccountname ? "myProfile" : "userProfile";

  const [user, setUser] = useState({
    accountname: "",
    username: "",
    image: "",
    intro: "",
    followings: "",
    followers: "",
    isfollow: "",
  });

  // 유저 프로필 정보 받아오기
  useEffect(() => {
    const authToken = "Bearer " + token;
    const url = "https://mandarin.api.weniv.co.kr/profile/" + accountname;
    async function getUser() {
      try {
        const res = await axios.get(url, {
          headers: {
            Authorization: authToken,
            "Content-type": "application/json",
          },
        });
        setUser({
          accountname: res.data.profile.accountname,
          username: res.data.profile.username,
          image: res.data.profile.image,
          intro: res.data.profile.intro,
          followings: res.data.profile.followingCount,
          followers: res.data.profile.followerCount,
          isfollow: res.data.profile.isfollow,
        });
        setView("true");
      } catch (err) {
        setView("false");
      }
    }
    getUser();
  }, [accountname, token]);

  return (
    <>
      <CommonHeader />
      <main className="container-profile-page">
        <h1 className="a11y-hidden">{accountname}의 프로필</h1>
        {view === "true" && (
          <>
            <ProfileHeader from={from} user={user} setUser={setUser} />
            <UserProducts accountname={accountname} />
            <UserPost accountname={accountname} />
          </>
        )}
        {view === "pending" && (
          <>
            <img src={pendingImg} className="img-pending" alt="error" />
          </>
        )}
        {view === "false" && (
          <>
            <NotFound />
          </>
        )}
      </main>
      <MainFooter />
    </>
  );
}

export default Profile;

import CommonHeader from "../../components/header/CommonHeader";
import MainFooter from "../../components/footer/MainFooter";
import ProfileHeader from "./profileHeader/ProfileHeader";
import UserProducts from "./userProduct/UserProduct";
import UserPost from "./userPost/UserPost";
import "./Profile.scss";
import UserContext from "../../context/UserContext";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import NotFound from "../notFound/NotFound";
import pendingImg from "../../assets/logo_loading.svg";

function UserProfile() {
  const { token, myAccountname } = useContext(UserContext);
  const params = useParams();
  const navigate = useNavigate();
  const [view, setView] = useState("pending");

  // 유저 프로필 정보 받아오기
  const accountname = params.accountname;
  const authToken = "Bearer " + token;
  const url = "https://mandarin.api.weniv.co.kr/profile/" + accountname;

  const [user, setUser] = useState({
    accountname: "",
    username: "",
    image: "",
    intro: "",
    followings: "",
    followers: "",
  });

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: authToken,
          "Content-type": "application/json",
        },
      })
      .then((res) => {
        setUser({
          ...user,
          accountname: res.data.profile.accountname,
          username: res.data.profile.username,
          image: res.data.profile.image,
          intro: res.data.profile.intro,
          followings: res.data.profile.followingCount,
          followers: res.data.profile.followerCount,
        });
        setView("true");
      })
      .catch((err) => {
        setView("false");
      });
  }, []);
  return (
    <>
      <CommonHeader />
      <main className="container-profile-page">
        <h1 className="a11y-hidden">'유저'의 프로필</h1>
        {view === "true" && (
          <>
            <ProfileHeader
              from="userProfile"
              accountname={user.accountname}
              username={user.username}
              intro={user.intro}
              image={user.image}
              followers={user.followers}
              followings={user.followings}
            />
            <UserProducts />
            <UserPost />
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

export default UserProfile;

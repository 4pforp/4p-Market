import { React, useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../../context/UserContext";
import axios from "axios";
import CommonHeader from "../../components/header/CommonHeader";
import MainFooter from "../../components/footer/MainFooter";
import NotFound from "../../components/notFound/NotFound";
import UserHeader from "./userHeader/UserHeader";
import UserProducts from "./userProduct/UserProduct";
import UserPost from "./userPost/UserPost";
import pendingImg from "../../assets/logo_loading_purple.svg";
import "./ProfilePage.scss";

function ProfilePage() {
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
    followingCount: "",
    followerCount: "",
    isfollow: "",
  });

  // 유저 프로필 정보 받아오기
  useEffect(() => {
    const url = "https://mandarin.api.weniv.co.kr/profile/" + accountname;
    async function getUser() {
      try {
        const res = await axios.get(url, {
          headers: {
            Authorization: token,
            "Content-type": "application/json",
          },
        });
        const { accountname, username, image, intro, followerCount, followingCount, isfollow } = res.data.profile;
        setUser({
          accountname,
          username,
          image,
          intro,
          followingCount,
          followerCount,
          isfollow,
        });
        setView("fulfilled");
      } catch (err) {
        setView("rejected");
      }
    }
    getUser();
  }, [accountname]);
  return (
    <>
      <CommonHeader />
      <main className="container-profile-page">
        <h1 className="a11y-hidden">{user.username + "의 프로필"}</h1>
        {view === "fulfilled" && (
          <>
            <div className="wrapper-for-scroll">
              <UserHeader from={from} user={user} setUser={setUser} />
              <UserProducts accountname={accountname} />
            </div>
            <UserPost accountname={accountname} from="profile" />
          </>
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
      </main>
      <MainFooter />
    </>
  );
}

export default ProfilePage;

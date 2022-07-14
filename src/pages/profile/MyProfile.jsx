import axios from "axios";
import CommonHeader from "../../components/header/CommonHeader";
import MainFooter from "../../components/footer/MainFooter";
import ProfileHeader from "./profileHeader/ProfileHeader";
import UserProducts from "./userProduct/UserProduct";
import UserPost from "./userPost/UserPost";
import "./Profile.scss";
import UserContext from "../../context/UserContext";
import { useContext, useEffect } from "react";
import { useState } from "react";

function MyProfile() {
  const { token, myAccountname, myUsername, myImage, myIntro } =
    useContext(UserContext);
  const authToken = "Bearer " + token;
  const url = "https://mandarin.api.weniv.co.kr/profile/" + myAccountname;

  // 나의 프로필 정보 받아오기
  const [user, setUser] = useState({
    accountname: myAccountname,
    username: myUsername,
    image: myImage,
    intro: myIntro,
    followings: "-",
    followers: "-",
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
          followings: res.data.profile.followingCount,
          followers: res.data.profile.followerCount,
        });
      });
  }, []);

  return (
    <>
      <CommonHeader />
      <main className="container-profile-page">
        <h1 className="a11y-hidden">나의 프로필</h1>
        <ProfileHeader
          from="myProfile"
          accountname={user.accountname}
          username={user.username}
          intro={user.intro}
          image={user.image}
          followers={user.followers}
          followings={user.followings}
        />
        <UserProducts />
        <UserPost />
      </main>
      <MainFooter />
    </>
  );
}

export default MyProfile;

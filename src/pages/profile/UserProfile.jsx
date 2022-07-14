import CommonHeader from "../../components/header/CommonHeader";
import MainFooter from "../../components/footer/MainFooter";
import ProfileHeader from "./profileHeader/ProfileHeader";
import UserProducts from "./userProduct/UserProduct";
import UserPost from "./userPost/UserPost";
import "./Profile.scss";
import UserContext from "../../context/UserContext";
import { useContext } from "react";
import axios from "axios";

function UserProfile() {
  const { token } = useContext(UserContext);
  const accountname = "";
  const authToken = "Bearer " + token;

  // 유저 정보 받아오기
  async function getUserInfo() {
    const url = "https://mandarin.api.weniv.co.kr/profile/" + accountname;
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: authToken,
          "Content-type": "application/json",
        },
      });
      console.log(res.data.profile.username);
      console.log(res.data.profile.accountname);
      console.log(res.data.profile.image);
      console.log(res.data.profile.intro);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <CommonHeader />
      <main className="container-profile-page">
        <h1 className="a11y-hidden">'유저'의 프로필</h1>
        <ProfileHeader from="userProfile" />
        <UserProducts />
        <UserPost />
      </main>
      <MainFooter />
    </>
  );
}

export default UserProfile;

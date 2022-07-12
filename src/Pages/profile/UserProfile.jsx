import CommonHeader from "../../Components/header/CommonHeader";
import MainFooter from "../../Components/footer/MainFooter";
import ProfileHeader from "./profileHeader/ProfileHeader";
import UserProducts from "./userProduct/UserProduct";
import UserPost from "./userPost/UserPost";
import "./Profile.scss";

function UserProfile() {
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

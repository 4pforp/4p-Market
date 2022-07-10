import BasicNav from "../../Components/navBar/BasicNav";
import MainFooter from "../../Components/footer/MainFooter";
import ProfileHeader from "./profileHeader/ProfileHeader";
import UserProducts from "./userProduct/UserProduct";
import UserPost from "./userPost/UserPost";
import "./Profile.scss";

function MyProfile() {
  return (
    <>
      <BasicNav />
      <main class="container-profile-page">
        <h1 className="a11y-hidden">나의 프로필</h1>
        <ProfileHeader from="myProfile" />
        <UserProducts />
        <UserPost />
      </main>
      <MainFooter />
    </>
  );
}

export default MyProfile;

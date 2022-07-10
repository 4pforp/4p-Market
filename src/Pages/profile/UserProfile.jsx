import BasicNav from "../../Components/navBar/BasicNav";
import MainFooter from "../../Components/footer/MainFooter";
import ProfileHeader from "./profileHeader/ProfileHeader";
import UserProducts from "./userProducts/UserProducts";
import UserPosts from "./userPost/UserPosts";
import "./MyProfile.scss";

function UserProfile() {
  return (
    <>
      <BasicNav />
      <main>
        <h1 className="a11y-hidden">'유저'의 프로필</h1>
        <ProfileHeader from="userProfile" />
        <UserProducts />
        <UserPosts />
      </main>
      <MainFooter />
    </>
  );
}

export default UserProfile;

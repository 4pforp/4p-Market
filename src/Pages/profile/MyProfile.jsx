import BasicNav from "../../Components/navBar/BasicNav";
import MainFooter from "../../Components/footer/MainFooter";
import ProfileHeader from "./profileHeader/ProfileHeader";
import UserProducts from "./userProducts/UserProducts";
import UserPosts from "./userPost/UserPosts";
import "./Profile.scss";

function MyProfile() {
  return (
    <>
      <BasicNav />
      <main>
        <h1 className="a11y-hidden">나의 프로필</h1>
        <ProfileHeader from="myProfile" />
        <UserProducts />
        <UserPosts />
      </main>
      <MainFooter />
    </>
  );
}

export default MyProfile;

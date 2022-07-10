import EditProfileBtn from "../../../Components/button/EditProfileBtn";
import FollowBtn from "../../../Components/button/FollowBtn";
import PostProductBtn from "../../../Components/button/PostProductBtn";

function ProfileHeader({ from }) {
  let button = [];
  if (from === "userProfile") {
    button = [<FollowBtn />];
  } else {
    button = [<EditProfileBtn />, <PostProductBtn />];
  }

  return (
    <>
      <header className="header-mypage">
        <div className="image-myprofile"></div>
        <div className="text-follow">
          <span className="text-follow-number">2950</span>
          followers
        </div>
        <div className="text-follow">
          <span className="text-follow-number">128</span>
          follwings
        </div>
        <h2 className="text-username">애월읍 위니브 감귤농장</h2>
        <span className="text-accountname">@weniv_Mandarin</span>
        <p className="text-profile-info">
          애월읍 감귤 전국 배송, 귤따기 체험, 감귤농장
        </p>
        {button}
      </header>
    </>
  );
}

export default ProfileHeader;

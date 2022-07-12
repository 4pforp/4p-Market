import EditProfileBtn from "../../../Components/button/EditProfileBtn";
import FollowBtn from "../../../Components/button/FollowBtn";
import PostProductBtn from "../../../Components/button/UploadProductBtn";
import "./ProfileHeader.scss";

function ProfileHeader({ from }) {
  let button = [];
  if (from === "userProfile") {
    button = [<FollowBtn text="팔로우" style="follow" size="btn-m" />];
  } else {
    button = [
      <EditProfileBtn key="button1" />,
      <PostProductBtn key="button2" />,
    ];
  }

  return (
    <>
      <header className="header-mypage">
        <div className="wrapper-header-mypage">
          <div className="container-img-profile">
            <div className="img-author"></div>
            <div className="text-follow follower">
              <span className="text-follow-num">2950</span>
              followers
            </div>
            <div className="text-follow followings">
              <span className="text-follow-num">128</span>
              follwings
            </div>
          </div>
          <h2 className="text-username">애월읍 위니브 감귤농장</h2>
          <span className="text-accountname">@weniv_Mandarin</span>
          <p className="text-profile-info">
            애월읍 감귤 전국 배송, 귤따기 체험, 감귤농장
          </p>
          {button}
        </div>
      </header>
    </>
  );
}

export default ProfileHeader;

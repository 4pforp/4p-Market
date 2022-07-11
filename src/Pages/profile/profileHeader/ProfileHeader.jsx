import EditProfileBtn from "../../../Components/button/EditProfileBtn";
import FollowBtn from "../../../Components/button/FollowBtn";
import PostProductBtn from "../../../Components/button/UploadProductBtn";
import "./ProfileHeader.scss";

function ProfileHeader({ from }) {
  let button = [];
  if (from === "userProfile") {
    button = [<FollowBtn text="follow" size="btn-m" />];
  } else {
    button = [<EditProfileBtn />, <PostProductBtn />];
  }

  return (
    <>
      <header className="header-mypage">
        <div className="wrapper-header-mypage">
          <div className="container-img-profile">
            <div className="img-author"></div>
            <div className="txt-follow follower">
              <span className="txt-follow-num">2950</span>
              followers
            </div>
            <div className="txt-follow followings">
              <span className="txt-follow-num">128</span>
              follwings
            </div>
          </div>
          <h2 className="txt-username">애월읍 위니브 감귤농장</h2>
          <span className="txt-accountname">@weniv_Mandarin</span>
          <p className="txt-profile-info">
            애월읍 감귤 전국 배송, 귤따기 체험, 감귤농장
          </p>
          {button}
        </div>
      </header>
    </>
  );
}

export default ProfileHeader;

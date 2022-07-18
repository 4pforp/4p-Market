import EditProfileBtn from "../../../components/button/EditProfileBtn";
import FollowBtn from "../../../components/button/FollowBtn";
import UploadProductBtn from "../../../components/button/UploadProductBtn";
import "./ProfileHeader.scss";
import { Link } from "react-router-dom";
import defaultProfile from "../../../assets/4p_profile.png";

function ProfileHeader({ from, setUser, user }) {
  const img =
    /Ellipse/.test(user.image) ||
    /heroku/.test(user.image) ||
    (!/mandarin/.test(user.image) && !/base64/.test(user.image)) ||
    /kr\/https/.test(user.image) ||
    /1657268443649/.test(user.image)
      ? defaultProfile
      : user.image;

  const imgStyle = {
    backgroundImage: `url(${img})`,
  };

  return (
    <>
      <header className="header-mypage">
        <div className="wrapper-author-m">
          <div className="wrapper-follow">
            <div className="img-author-m" style={imgStyle}></div>
            <Link
              to="followers"
              className="text-follow follower"
              state={{ accountname: user.accountname, type: "follower" }}
            >
              <span className="text-follow-num">{user.followers}</span>
              followers
            </Link>
            <Link
              to="followings"
              className="text-follow followings"
              state={{ accountname: user.accountname, type: "following" }}
            >
              <span className="text-follow-num">{user.followings}</span>
              follwings
            </Link>
          </div>
          <h2 className="text-username">{user.username}</h2>
          <span className="text-accountname">@{user.accountname}</span>
          <p className="text-profile-info">{user.intro}</p>
        </div>
        {from === "userProfile" ? (
          <FollowBtn
            text={user.isfollow ? "팔로잉" : "팔로우"}
            setUser={setUser}
            user={user}
            size="btn-m"
          />
        ) : (
          <>
            <EditProfileBtn key="editProfile" />
            <UploadProductBtn key="uploadProduct" />
          </>
        )}
      </header>
    </>
  );
}

export default ProfileHeader;

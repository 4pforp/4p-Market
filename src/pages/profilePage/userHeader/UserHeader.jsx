import { React } from "react";
import { Link } from "react-router-dom";
import EditProfileBtn from "../../../components/button/EditProfileBtn";
import FollowBtn from "../../../components/button/FollowBtn";
import UploadProductBtn from "../../../components/button/UploadProductBtn";
import useProfileTest from "../../../hooks/useProfileImageTest";
import "./UserHeader.scss";

function ProfileHeader({ from, setUser, user }) {
  const { imageTest } = useProfileTest();
  const img = imageTest(user.image);
  const imgStyle = {
    backgroundImage: `url(${img})`,
  };

  return (
    <>
      <header className="header-mypage">
        <div className="wrapper-author-m">
          <div className="wrapper-follow">
            <div className="img-author-m" style={imgStyle}></div>
            <Link to="follow/follower" className="text-follow follower">
              <span className="text-follow-num">{user.followers}</span>
              followers
            </Link>
            <Link to="follow/following" className="text-follow followings">
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
            <Link to={`/profileedit`}>
              <EditProfileBtn key="editProfile" />
            </Link>
            <Link to="/product">
              <UploadProductBtn key="uploadProduct" />
            </Link>
          </>
        )}
      </header>
    </>
  );
}

export default ProfileHeader;

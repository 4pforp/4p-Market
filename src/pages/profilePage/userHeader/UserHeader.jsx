import { React } from "react";
import { Link } from "react-router-dom";
import EditProfileBtn from "../../../components/button/EditProfileBtn";
import FollowBtn from "../../../components/button/FollowBtn";
import UploadProductBtn from "../../../components/button/UploadProductBtn";
import useImageTest from "../../../hooks/useImageTest";
import "./UserHeader.scss";

function ProfileHeader({ from, setUser, user }) {
  const { imageTest } = useImageTest();
  const { username, accountname, intro, isfollow, followerCount, followingCount, image } = user;

  const img = imageTest(image, "profile");
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
              <span className="text-follow-num">{followerCount}</span>
              followers
            </Link>
            <Link to="follow/following" className="text-follow followings">
              <span className="text-follow-num">{followingCount}</span>
              follwings
            </Link>
          </div>
          <h2 className="text-username">{username}</h2>
          <span className="text-accountname">@{accountname}</span>
          <p className="text-profile-info">{intro}</p>
        </div>
        {from === "userProfile" ? (
          <FollowBtn text={isfollow ? "팔로잉" : "팔로우"} setUser={setUser} user={user} size="btn-m" />
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

import React from "react";
import { Link } from "react-router-dom";
import FollowBtn from "../../Components/button/FollowBtn";
import "./Follow.scss";

function UserFollow({ userProfileImg, userName, userIntro, btnText, size }) {
  return (
    <>
      <li className="user-item">
        <Link to="/profile" className="user-profile">
          <img src={userProfileImg} alt="username님의 프로필사진" />
        </Link>
        <Link to="/profile">
          <div className="user-info">
            <strong className="user-name">{userName}</strong>
            <strong className="user-intro">{userIntro}</strong>
          </div>
        </Link>
        <FollowBtn text={btnText} size={size} />
      </li>
    </>
  );
}

export default UserFollow;

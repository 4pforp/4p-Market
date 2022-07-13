import React from "react";
import { Link } from "react-router-dom";
import FollowBtn from "../../Components/button/FollowBtn";
import UserInfoBox from "../../Components/user/UserInfoBox";
import "./Follow.scss";

function FollowUser({ userName, userIntro, text, name, size }) {
  return (
    <>
      <li className="wrapper-item-follow">
        <Link to="/profile/usernum" className="wrapper-follow-info">
          <UserInfoBox type="follow" />
          <div className="wrapper-text-follow">
            <strong className="text-username">{userName}</strong>
            <strong className="text-intro">{userIntro}</strong>
          </div>
        </Link>
        <FollowBtn text={text} name={name} size={size} />
      </li>
    </>
  );
}

export default FollowUser;

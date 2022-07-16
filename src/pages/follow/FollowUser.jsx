import React from "react";
import { Link } from "react-router-dom";
import FollowBtn from "../../components/button/FollowBtn";
import UserInfoBox from "../../components/user/UserInfoBox";
import "./Follow.scss";

function FollowUser({ userName, userIntro, text, isFollow, size }) {
  return (
    <>
      <li className="wrapper-item-follow">
        {/* 유저 accountname 받아오기 */}
        <Link to="/accountname" className="wrapper-follow-info">
          <UserInfoBox type="follow" />
          <div className="wrapper-text-follow">
            <strong className="text-username">{userName}</strong>
            <strong className="text-intro">{userIntro}</strong>
          </div>
        </Link>
        <FollowBtn text={text} isFollow={isFollow} size={size} />
      </li>
    </>
  );
}

export default FollowUser;

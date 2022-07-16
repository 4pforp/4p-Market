import React from "react";
import { Link } from "react-router-dom";
import FollowBtn from "../../components/button/FollowBtn";
import UserInfoBox from "../../components/user/UserInfoBox";
import "./Follow.scss";

function FollowUser({ userName, userIntro, text, isFollow, size, img }) {
  return (
    <>
      <li className="wrapper-item-follow">
        {/* 유저 accountname 받아오기 */}
        <Link to="/accountname" className="wrapper-follow-info">
          <UserInfoBox
            type="follow"
            name={userName}
            subtext={userIntro}
            img={img}
          />
        </Link>
        <FollowBtn text={text} isFollow={isFollow} size={size} />
      </li>
    </>
  );
}

export default FollowUser;

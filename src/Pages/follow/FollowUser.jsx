import React from "react";
import { Link } from "react-router-dom";
import FollowBtn from "../../Components/button/FollowBtn";
import "./Follow.scss";

function FollowUser({ userName, userIntro, text, style, size }) {
  return (
    <>
      <li className="wrapper-item-follow">
        <Link to="/profile" className="wrapper-follow-info">
          <div className="img-author follow"></div>
          <div className="wrapper-text-follow">
            <strong className="text-username">{userName}</strong>
            <strong className="text-intro">{userIntro}</strong>
          </div>
        </Link>
        <FollowBtn text={text} style={style} size={size} />
      </li>
    </>
  );
}

export default FollowUser;

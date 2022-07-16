import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import FollowBtn from "../../components/button/FollowBtn";
import UserInfoBox from "../../components/user/UserInfoBox";
import "./Follow.scss";
import UserContext from "../../context/UserContext";

function FollowUser({ accountname, username, intro, isfollow, size, image }) {
  const { token, myAccountname } = useContext(UserContext);

  const [user, setUser] = useState({
    accountname: accountname,
    username: username,
    image: image,
    intro: intro,
    followings: "",
    followers: "",
    isfollow: isfollow,
  });
  return (
    <>
      <li className="wrapper-item-follow">
        <Link to={"/" + accountname} className="wrapper-follow-info">
          <UserInfoBox
            type="follow"
            name={username}
            subtext={intro}
            img={image}
          />
        </Link>
        {accountname === myAccountname ? null : (
          <FollowBtn
            text={user.isfollow ? "팔로잉" : "팔로우"}
            size={size}
            user={user}
            setUser={setUser}
          />
        )}
      </li>
    </>
  );
}

export default FollowUser;

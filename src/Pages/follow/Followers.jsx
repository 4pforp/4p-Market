import React from "react";
import FollowHeader from "../../Components/header/FollowHeader";
import FollowUser from "./FollowUser";
import "./Follow.scss";
import LogoImg from "../../assets/L-profile.svg";

function Followers() {
  return (
    <>
      <FollowHeader title="Followers" />
      <main className="container-follow">
        <div className="wrapper-follow">
          <ul className="wrapper-list-follow">
            <FollowUser
              key="follower1"
              userProfileImg={LogoImg}
              userName="수삐뽀삐"
              userIntro="뽀삐뽀삐뽀삐아"
              text="팔로우"
              style="follow"
              size="btn-s"
            />
            <FollowUser
              key="follower2"
              userProfileImg={LogoImg}
              userName="삐뽀뽀삐"
              userIntro="삐리뽐빼리뽐"
              text="언팔로우"
              style="unfollow"
              size="btn-s"
            />
          </ul>
        </div>
      </main>
    </>
  );
}

export default Followers;

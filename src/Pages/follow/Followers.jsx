import React from "react";
import FollowHeader from "../../Components/header/FollowHeader";
import FollowUser from "./FollowUser";
import "./Follow.scss";
import LogoImg from "../../assets/L-profile.svg";

function Followers() {
  return (
    <>
      <FollowHeader title="Followers" />
      <main className="follow-main">
        <ul className="user-list">
          <FollowUser
            userProfileImg={LogoImg}
            userName="수삐뽀삐"
            userIntro="뽀삐뽀삐뽀삐아"
            btnText="follow"
            size="btn-s"
          />
          <FollowUser
            userProfileImg={LogoImg}
            userName="삐뽀뽀삐"
            userIntro="삐리뽐빼리뽐"
            btnText="unfollow"
            size="btn-s"
          />
        </ul>
      </main>
    </>
  );
}

export default Followers;
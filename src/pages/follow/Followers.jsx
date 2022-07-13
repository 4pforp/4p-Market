import React from "react";
import FollowHeader from "../../components/header/FollowHeader";
import FollowUser from "./FollowUser";
import "./Follow.scss";

function Followers() {
  return (
    <>
      <FollowHeader title="Followers" />
      <main className="container-follow">
        <div className="wrapper-follow">
          <ul className="wrapper-list-follow">
            <FollowUser
              key="follower1"
              userName="수삐뽀삐"
              userIntro="뽀삐뽀삐뽀삐아"
              text="팔로우"
              name="follow"
              size="btn-s"
            />
            <FollowUser
              key="follower2"
              userName="삐뽀뽀삐"
              userIntro="삐리뽐빼리뽐"
              text="취소"
              name="unfollow"
              size="btn-s"
            />
          </ul>
        </div>
      </main>
    </>
  );
}

export default Followers;

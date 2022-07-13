import FollowHeader from "../../Components/header/FollowHeader";
import FollowUser from "./FollowUser";
import "./Follow.scss";

function Followings() {
  return (
    <>
      <FollowHeader title="Followings" />
      <main className="container-follow">
        <div className="wrapper-follow">
          <ul className="wrapper-list-follow">
            <FollowUser
              key="following1"
              userName="수삐뽀삐"
              userIntro="뽀삐뽀삐뽀삐아"
              text="팔로우"
              name="follow"
              size="btn-s"
            />
            <FollowUser
              key="following2"
              userName="삐뽀뽀삐"
              userIntro="삐리뽐빼리뽐"
              text="팔로우"
              name="follow"
              size="btn-s"
            />
          </ul>
        </div>
      </main>
    </>
  );
}

export default Followings;

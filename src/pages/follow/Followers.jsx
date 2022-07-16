import { useState, useContext, useEffect } from "react";
import FollowHeader from "../../components/header/FollowHeader";
import FollowUser from "./FollowUser";
import "./Follow.scss";
import UserContext from "../../context/UserContext";
import { useLocation } from "react-router-dom";
import axios from "axios";

function Followers() {
  const { token } = useContext(UserContext);
  const location = useLocation();
  const accountname = location.state.accountname;
  const [followerList, setFollowerList] = useState([]);
  const authToken = "Bearer " + token;
  const url =
    "https://mandarin.api.weniv.co.kr/profile/" + accountname + "/follower";

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: authToken,
          "Content-type": "application/json",
        },
      })
      .then((res) => {
        setFollowerList(res.data);
      });
  }, []);

  return (
    <>
      <FollowHeader title="Followers" />
      <main className="container-follow">
        <div className="wrapper-follow">
          <ul className="wrapper-list-follow">
            {followerList.map((user) => {
              return (
                <FollowUser
                  key={user.id}
                  userName={user.username}
                  userIntro={user.intro}
                  text={user.isfollow ? "언팔로우" : "팔로우"}
                  isFollow={user.isfollow}
                  size="btn-s"
                />
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
}

export default Followers;

import FollowHeader from "../../components/header/FollowHeader";
import FollowUser from "./FollowUser";
import "./Follow.scss";
import UserContext from "../../context/UserContext";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function Followings() {
  const { token } = useContext(UserContext);
  const location = useLocation();
  const accountname = location.state.accountname;
  const [followingList, setFollowingList] = useState([]);
  const authToken = "Bearer " + token;
  const url =
    "https://mandarin.api.weniv.co.kr/profile/" + accountname + "/following";

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: authToken,
          "Content-type": "application/json",
        },
      })
      .then((res) => {
        setFollowingList(res.data);
      });
  }, []);

  return (
    <>
      <FollowHeader title="Followings" />
      <main className="container-follow">
        <div className="wrapper-follow">
          <ul className="wrapper-list-follow">
            {followingList.map((user) => {
              return (
                <FollowUser
                  key={user._id}
                  accountname={user.accountname}
                  username={user.username}
                  intro={user.intro}
                  isfollow={user.isfollow}
                  image={user.image}
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

export default Followings;

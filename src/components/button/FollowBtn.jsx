import { useContext } from "react";
import UserContext from "../../context/UserContext";
import axios from "axios";
import "./FollowBtn.scss";

function FollowBtn({ text, size, setUser, user }) {
  const { token } = useContext(UserContext);

  function handleClick() {
    if (user.isfollow) {
      const url =
        "https://mandarin.api.weniv.co.kr/profile/" +
        user.accountname +
        "/unfollow";
      axios
        .delete(url, {
          headers: {
            Authorization: token,
            "Content-type": "application/json",
          },
        })
        .then((res) => {
          setUser({
            ...user,
            isfollow: res.data.profile.isfollow,
            followers: res.data.profile.followerCount,
          });
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      const url =
        "https://mandarin.api.weniv.co.kr/profile/" +
        user.accountname +
        "/follow";
      axios
        .post(url, [], {
          headers: {
            Authorization: token,
            "Content-type": "application/json",
          },
        })
        .then((res) => {
          setUser({
            ...user,
            isfollow: res.data.profile.isfollow,
            followers: res.data.profile.followerCount,
          });
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  return (
    <button
      type="Button"
      className={`btn ${user.isfollow} ${size}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

export default FollowBtn;

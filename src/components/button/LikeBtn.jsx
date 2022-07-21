import { useState, useEffect, useContext } from "react";
import UserContext from "../../context/UserContext";
import axios from "axios";
import "./LikeBtn.scss";

function LikeBtn({ heartcount, postid }) {
  // const [liked, setLiked] = useState({
  //   heart: false,
  //   number: false,
  // });

  // function handleLikeClick() {
  //   setLiked({ heart: !liked.heart, number: !liked.number });
  // }

  const { token } = useContext(UserContext);
  const [likeNum, setLikeNum] = useState();
  useEffect(() => {
    async function getLikeNum() {
      try {
        const response = await axios.post(
          "https://mandarin.api.weniv.co.kr/post/" + postid + "/heart",
          {
            headers: {
              Authorization: token,
              "Content-type": "application/json",
            },
          }
        );
        //setLikeNum
        console.log(response);
      } catch (err) {
        console.error(err);
      }
    }
  });
  console.log(postid);
  return (
    <div className="wrapper-btn-like">
      <button
        type="button"
        // className={liked.heart ? "btn-liked" : "btn-like"}
        className="btn-like"
        // onClick={handleLikeClick}
      >
        <span className="a11y-hidden">좋아요</span>
      </button>
      <span className="text-like-num">{heartcount || 0}</span>
    </div>
  );
}

export default LikeBtn;

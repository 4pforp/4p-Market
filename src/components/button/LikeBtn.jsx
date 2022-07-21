import { useState, useEffect, useContext } from "react";
import UserContext from "../../context/UserContext";
import axios from "axios";
import "./LikeBtn.scss";

function LikeBtn({ heartcount, postid, hearted }) {
  const { token } = useContext(UserContext);
  const [liked, setLiked] = useState(hearted);
  const [likeNum, setLikeNum] = useState(heartcount);

  //좋아요 버튼 클릭
  function handleClikLike(e) {
    if (liked === false) {
      async function addLike() {
        try {
          const res = await axios.post(
            "https://mandarin.api.weniv.co.kr/post/" + postid + "/heart",
            [],
            {
              headers: {
                Authorization: token,
                "Content-type": "application/json",
              },
            }
          );
          setLikeNum(res.data.post.heartCount);
          setLiked(res.data.post.hearted);
        } catch (err) {
          console.error(err);
        }
      }
      postid && addLike();
    } else if (liked === true) {
      async function cancelLike() {
        try {
          const res = await axios.delete(
            "https://mandarin.api.weniv.co.kr/post/" + postid + "/unheart",
            {
              headers: {
                Authorization: token,
                "Content-type": "application/json",
              },
            }
          );
          setLikeNum(res.data.post.heartCount);
          setLiked(res.data.post.hearted);
        } catch (err) {
          console.error(err);
        }
      }
      cancelLike();
    }
  }

  return (
    <div className="wrapper-btn-like">
      <button
        type="type"
        className={liked ? "btn-liked" : "btn-like"}
        onClick={handleClikLike}
      >
        <span className="a11y-hidden">좋아요</span>
      </button>
      <span className="text-like-num">{likeNum || 0}</span>
    </div>
  );
}

export default LikeBtn;

import { useState } from "react";
import "./LikeBtn.scss";

function LikeBtn({ heartcount, postid }) {
  // const [liked, setLiked] = useState({
  //   heart: false,
  //   number: false,
  // });

  // function handleLikeClick() {
  //   setLiked({ heart: !liked.heart, number: !liked.number });
  // }

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

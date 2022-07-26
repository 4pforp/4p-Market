import { useNavigate } from "react-router-dom";
import "./CommentBtn.scss";

function CommentBtn({ commentcount, postid, from, accountname }) {
  const navigate = useNavigate();
  const style = from === "comment" ? { pointerEvents: "none" } : null;

  function handleClick() {
    from === "home" && navigate(accountname + "/" + postid);
    from === "profile" && navigate(postid);
  }
  return (
    <div className="wrapper-btn-comment">
      <button
        type="button"
        className="btn-comment"
        style={style}
        onClick={handleClick}
      >
        <span className="a11y-hidden">댓글</span>
      </button>
      <span className="text-comment-num">{commentcount}</span>
    </div>
  );
}

export default CommentBtn;

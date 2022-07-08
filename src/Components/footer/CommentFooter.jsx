import profileimg from "../../assets/icon-profile-small.svg";
import "./PageFooter.scss";

function CommentFooter() {
  return (
    <>
      <footer>
        <form method="post" className="form-comment">
          <img src={profileimg} alt="프로필사진입니다." />
          <textarea className="textarea-comment" placeholder="댓글 입력하기" />
          <button type="submit" className="btn-postcomment">
            게시
          </button>
        </form>
      </footer>
    </>
  );
}

export default CommentFooter;

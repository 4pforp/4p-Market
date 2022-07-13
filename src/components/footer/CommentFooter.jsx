import profileimg from "../../assets/4p_profile.png";
import "./PageFooter.scss";

function CommentFooter() {
  return (
    <>
      <footer>
        <form method="post" className="container-form-pagefooter">
          <img
            src={profileimg}
            alt="프로필사진입니다."
            className="img-profile-footer"
          />
          <textarea
            className="textarea-pagefooter"
            placeholder="댓글 입력하기"
          />
          <button type="submit" className="btn-send-footer">
            게시
          </button>
        </form>
      </footer>
    </>
  );
}

export default CommentFooter;

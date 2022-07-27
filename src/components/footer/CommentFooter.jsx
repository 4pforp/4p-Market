import { useContext, useState, useRef, useEffect } from "react";
import UserContext from "../../context/UserContext";
import axios from "axios";
import "./PageFooter.scss";
import useProfileTest from "../../hooks/useProfileImageTest";

function CommentFooter({ postid, post, setNewComment }) {
  const { token, myImage } = useContext(UserContext);
  const { profileImageTest } = useProfileTest();
  const [comment, setComment] = useState();
  const [valid, setValid] = useState(false);
  const commentinput = useRef();

  const img = post && profileImageTest(myImage);
  const imgStyle = {
    backgroundImage: `url(${img})`,
  };

  function handleChange(e) {
    setComment(e.target.value);
  }

  // 댓글 빈 값 요청할 수 없도록 상태 변경
  useEffect(() => {
    comment && comment.length > 0 ? setValid(true) : setValid(false);
  }, [comment]);

  async function UploadComment() {
    const url = "https://mandarin.api.weniv.co.kr/post/" + postid + "/comments";
    const commentData = { comment: { content: comment } };
    try {
      const res = await axios.post(url, commentData, {
        headers: {
          Authorization: token,
          "Content-type": "application/json",
        },
      });
      setNewComment(false);
    } catch (err) {
      console.error(err);
    }
  }

  function handleSubmit(e) {
    const commentCount = document.querySelector(".text-comment-num");
    e.preventDefault();
    valid && UploadComment();
    setComment("");
    commentinput.current.value = "";
    commentCount.innerHTML++;
  }

  return (
    <>
      <footer>
        <form
          method="POST"
          encType="multipart/form-data"
          className="container-form-pagefooter"
          onSubmit={handleSubmit}
        >
          <div className="img-profile-footer" style={imgStyle}></div>
          <input
            className="textarea-pagefooter"
            placeholder="댓글 입력하기"
            onChange={handleChange}
            ref={commentinput}
          />
          <button type="submit" className={`btn-send-footer ${valid}`}>
            게시
          </button>
        </form>
      </footer>
    </>
  );
}

export default CommentFooter;

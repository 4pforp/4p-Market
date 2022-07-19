import { useContext, useState, useRef } from "react";
import UserContext from "../../context/UserContext";
import "./PageFooter.scss";
import axios from "axios";

function CommentFooter({ postid, post, setNewComment, newComment }) {
  const { token } = useContext(UserContext);
  const [comment, setComment] = useState();
  const commentinput = useRef();

  function handleChange(e) {
    setComment(e.target.value);
  }

  async function UploadComment() {
    const authToken = "Bearer " + token;
    const url = "https://mandarin.api.weniv.co.kr/post/" + postid + "/comments";
    const commentData = { comment: { content: comment } };
    try {
      const res = await axios.post(url, commentData, {
        headers: {
          Authorization: authToken,
          "Content-type": "application/json",
        },
      });
      setNewComment(!newComment);
    } catch (err) {}
  }

  function handleSubmit(e) {
    e.preventDefault();
    UploadComment();
    setComment("");
    commentinput.current.value = "";
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
          <img
            src={post && post.author.image}
            alt="프로필사진입니다."
            className="img-profile-footer"
          />
          <input
            className="textarea-pagefooter"
            placeholder="댓글 입력하기"
            onChange={handleChange}
            ref={commentinput}
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

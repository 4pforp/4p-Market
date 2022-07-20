import { useContext, useState, useRef } from "react";
import UserContext from "../../context/UserContext";
import axios from "axios";
import ImageTestContext from "../../context/ImageTestContext";
import "./PageFooter.scss";

function CommentFooter({ postid, post, setNewComment, newComment }) {
  const { token } = useContext(UserContext);
  const { ImageTest } = useContext(ImageTestContext);
  const [comment, setComment] = useState();
  const commentinput = useRef();

  // TODO token API 요청 수정되면 post.author.image 말고 내 이미지 넣기! by 현지
  const img = post && ImageTest(post.author.image);
  const imgStyle = {
    backgroundImage: `url(${img})`,
  };

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
      setNewComment(false);
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
          <div className="img-profile-footer" style={imgStyle}></div>
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

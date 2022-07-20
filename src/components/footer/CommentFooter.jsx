import { useContext, useState, useRef } from "react";
import UserContext from "../../context/UserContext";
import axios from "axios";
import ImageTestContext from "../../context/ImageTestContext";
import "./PageFooter.scss";
import { useEffect } from "react";

function CommentFooter({ postid, post, setNewComment }) {
  const { token, myImage } = useContext(UserContext);
  const { ImageTest } = useContext(ImageTestContext);
  const [comment, setComment] = useState();
  const [valid, setValid] = useState(false);
  const commentinput = useRef();

  const img = post && ImageTest(myImage);
  const imgStyle = {
    backgroundImage: `url(${img})`,
  };

  function handleChange(e) {
    setComment(e.target.value);
  }
  useEffect(() => {
    comment && comment.length > 0 ? setValid(true) : setValid(false);
  }, [comment]);

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
    valid && UploadComment();
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
          <button type="submit" className={`btn-send-footer ${valid}`}>
            게시
          </button>
        </form>
      </footer>
    </>
  );
}

export default CommentFooter;

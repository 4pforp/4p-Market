import "./CommentList.scss";
import { useContext, useState, useEffect } from "react";
import UserContext from "../../../context/UserContext";
import axios from "axios";
import Comment from "./Comment";
import CommentFooter from "../../../components/footer/CommentFooter";

function CommentList({ postid, post }) {
  const { token } = useContext(UserContext);
  const [comments, setComments] = useState();
  const [newComment, setNewComment] = useState(true);

  useEffect(() => {
    const authToken = "Bearer " + token;
    const url = "https://mandarin.api.weniv.co.kr/post/" + postid + "/comments";
    async function getUser() {
      try {
        const res = await axios.get(url, {
          headers: {
            Authorization: authToken,
            "Content-type": "application/json",
          },
        });
        setComments(res.data.comments);
      } catch (err) {}
    }
    getUser();
  }, [postid, token, newComment]);

  return (
    <>
      <div className="container-comments">
        <ul className="list-comments">
          <Comment comments={comments} />
        </ul>
      </div>
      <CommentFooter
        postid={postid}
        post={post}
        setNewComment={setNewComment}
        newComment={newComment}
      />
    </>
  );
}

export default CommentList;

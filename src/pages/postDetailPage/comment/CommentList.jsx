import { React, useContext, useState, useEffect, useRef } from "react";
import UserContext from "../../../context/UserContext";
import axios from "axios";
import CommentFooter from "../../../components/footer/CommentFooter";
import Comment from "./Comment";
import "./CommentList.scss";

function CommentList({ postid, post }) {
  const { token } = useContext(UserContext);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState(true);
  const Container = useRef();
  const [reloadNeed, setReloadNeed] = useState(true);
  const updateLimitCount = Math.ceil(post.commentCount / 10);
  const [updatedCount, setUpdatedCount] = useState(0);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    const authToken = "Bearer " + token;
    const url =
      "https://mandarin.api.weniv.co.kr/post/" +
      postid +
      "/comments/?limit=10" +
      "&skip=" +
      skip;

    // infinite scroll 기능
    window.addEventListener("scroll", () => {
      const targetHeight = Math.floor(
        Container.current.getBoundingClientRect().height + 256
      );
      const currentScrollY = Math.floor(
        window.scrollY + window.innerHeight - 60
      );
      targetHeight < currentScrollY && setReloadNeed(true);
    });

    async function getComments() {
      try {
        const res = await axios.get(url, {
          headers: {
            Authorization: authToken,
            "Content-type": "application/json",
          },
        });
        setComments([...comments, ...res.data.comments]);
        setUpdatedCount(updatedCount + 1);
        setReloadNeed(false);
        setSkip(skip + 10);
      } catch (err) {}
    }
    if (reloadNeed === true) {
      if (updatedCount <= updateLimitCount) {
        getComments();
      }
    }
  }, [
    postid,
    token,
    newComment,
    comments,
    updateLimitCount,
    updatedCount,
    reloadNeed,
    skip,
  ]);

  return (
    <>
      <div className="container-comments" ref={Container}>
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

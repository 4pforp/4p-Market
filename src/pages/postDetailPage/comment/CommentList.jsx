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
  const [reloadNeed, setReloadNeed] = useState(false);
  const updateLimitCount = Math.ceil(post.commentCount / 10);
  const [updatedCount, setUpdatedCount] = useState(0);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    // 실시간 업로드 댓글 반영 함수
    async function getNewComments() {
      const authToken = "Bearer " + token;
      const url =
        "https://mandarin.api.weniv.co.kr/post/" +
        postid +
        "/comments/?limit=10" +
        "&skip=" +
        skip;
      try {
        const res = await axios.get(url, {
          headers: {
            Authorization: authToken,
            "Content-type": "application/json",
          },
        });
        setSkip(0);
        setComments(res.data.comments);
        setNewComment(true);
      } catch (err) {}
    }
    getNewComments();
  }, [newComment, postid, token]);

  useEffect(() => {
    // 화면 마지막에 도달하면 ReloadNeed!
    function infinitScoll() {
      const targetHeight = Math.floor(
        Container.current.getBoundingClientRect().height + 256
      );
      const currentScrollY = Math.floor(
        window.scrollY + window.innerHeight - 60
      );
      targetHeight < currentScrollY && setReloadNeed(true);
    }

    window.addEventListener("scroll", infinitScoll);

    // 스크롤시 데이터 추가 요청 함수
    async function getComments() {
      const authToken = "Bearer " + token;
      const url =
        "https://mandarin.api.weniv.co.kr/post/" +
        postid +
        "/comments/?limit=10" +
        "&skip=" +
        skip;
      try {
        const res = await axios.get(url, {
          headers: {
            Authorization: authToken,
            "Content-type": "application/json",
          },
        });
        // 첫 데이터면 전체 데이터 받아오기/데이터가 있으면 스프레드 문법 사용하여 추가하기
        if (skip === 0) {
          setComments(res.data.comments);
        } else {
          setComments([...comments, ...res.data.comments]);
        }
        setUpdatedCount(updatedCount + 1);
        setReloadNeed(false);
        setSkip(skip + 10);
      } catch (err) {
        console.error(err);
      }
    }
    // 화면 마지막에 도달하면 infinite scroll 시작
    if (reloadNeed === true) {
      if (updatedCount <= updateLimitCount) {
        getComments();
      }
    }
    // 언마운트시에 스크롤이벤트 발생하지 않도록!
    return () => {
      window.removeEventListener("scroll", infinitScoll);
    };
  }, [
    postid,
    token,
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

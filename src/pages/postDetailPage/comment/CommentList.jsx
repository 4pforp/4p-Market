import { React, useContext, useState, useEffect, useRef } from "react";
import UserContext from "../../../context/UserContext";
import useDelete from "../../../hooks/useDelete";
import axios from "axios";
import CommentFooter from "../../../components/footer/CommentFooter";
import Comment from "./Comment";
import "./CommentList.scss";

function CommentList({ postid, post }) {
  const { token } = useContext(UserContext);
  const { remove, isUpdate } = useDelete();
  const Container = useRef();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState(true);
  const [skip, setSkip] = useState(15);
  const [isLoading, setIsLoading] = useState(false);
  const [reloadNeed, setReloadNeed] = useState(false);
  const [updatedCount, setUpdatedCount] = useState(1);
  const updateLimitCount = Math.ceil(post.commentCount / 15);

  useEffect(() => {
    // 실시간 업로드 댓글 반영 함수
    async function getNewComments() {
      const url =
        "https://mandarin.api.weniv.co.kr/post/" +
        postid +
        "/comments/?limit=15&skip=0";
      try {
        const res = await axios.get(url, {
          headers: {
            Authorization: token,
            "Content-type": "application/json",
          },
        });
        setComments(res.data.comments);
        setNewComment(true);
        setSkip(15);
        setUpdatedCount(1);
      } catch (err) {}
    }
    getNewComments();
  }, [newComment, isUpdate]);
  useEffect(() => {
    // 화면 마지막에 도달하면 ReloadNeed!
    function infinitScoll() {
      const postHeight =
        document.querySelector(".wrapper-comment-post").getBoundingClientRect()
          .height + 30;

      const targetHeight = Math.floor(
        Container.current.getBoundingClientRect().height + postHeight
      );
      const currentScrollY = Math.floor(
        window.scrollY + window.innerHeight - 60
      );
      targetHeight < currentScrollY && setReloadNeed(true);
    }

    window.addEventListener("scroll", infinitScoll);

    // 스크롤시 데이터 추가 요청 함수
    async function getComments() {
      const url =
        "https://mandarin.api.weniv.co.kr/post/" +
        postid +
        "/comments/?limit=15" +
        "&skip=" +
        skip;
      try {
        const res = await axios.get(url, {
          headers: {
            Authorization: token,
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
        setSkip(skip + 15);
        setReloadNeed(false);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
      }
    }
    // 화면 마지막에 도달하면 infinite scroll 시작
    if (reloadNeed === true) {
      if (updatedCount <= updateLimitCount) {
        setIsLoading(true);
        getComments();
      }
    }
    // 언마운트시에 스크롤이벤트 발생하지 않도록!
    return () => {
      window.removeEventListener("scroll", infinitScoll);
    };
  }, [reloadNeed, newComment]);

  return (
    <>
      <div className="container-comments" ref={Container}>
        <ul className="list-comments">
          <Comment comments={comments} postid={postid} remove={remove} />
        </ul>
        <strong className={`loading ${isLoading}`}></strong>
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

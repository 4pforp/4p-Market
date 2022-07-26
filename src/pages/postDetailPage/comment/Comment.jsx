import { React, useState } from "react";
import { Link } from "react-router-dom";
import UserMoreBtn from "../../../components/button/UserMoreBtn";
import UserInfoBox from "../../../components/user/UserInfoBox";
import CommentModal from "../../../components/modal/modals/CommentModal";

function Comment({ comments, postid, remove }) {
  const [comment, setComment] = useState({});
  const [onModal, setOnModal] = useState(false);
  function handleModal() {
    setOnModal(!onModal);
  }
  function openModal() {
    setOnModal(true);
  }

  function timeForToday(today, createAt) {
    const betweenTime = Math.floor(
      (today.getTime() - createAt.getTime()) / 1000 / 60
    );
    console.log(betweenTime);
    if (betweenTime < 1) return "방금전";
    if (betweenTime < 60) {
      return `${betweenTime}분전`;
    }
    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
      return `${betweenTimeHour}시간전`;
    }

    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
      return `${betweenTimeDay}일전`;
    }
    return `${Math.floor(betweenTimeDay / 365)}년전`;
  }

  return (
    <>
      {comments &&
        comments.map((comment) => {
          const today = new Date();
          const createAt = new Date(comment.createdAt);
          const timeAgo = timeForToday(today, createAt);
          return (
            <li className="item-comment" key={comment.id}>
              <Link to={"/" + comment.author.accountname}>
                <UserInfoBox
                  type="comment"
                  name={comment.author.username}
                  img={comment.author.image}
                >
                  <span className="text-comment-time">{timeAgo}</span>
                </UserInfoBox>
              </Link>
              <p className="content-comment">{comment.content}</p>
              <UserMoreBtn
                handleClick={() => {
                  openModal();
                  setComment(comment);
                }}
              />
            </li>
          );
        })}
      {onModal && (
        <CommentModal
          setOnModal={handleModal}
          comment={comment}
          postid={postid}
          //삭제 후 리렌더링 위해 내려준 props
          remove={remove}
        />
      )}
    </>
  );
}

export default Comment;

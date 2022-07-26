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

  function createdAt(createdAt) {
    const betweenTime = new Date() - createdAt;
    const seconds = betweenTime / 1000;
    if (seconds < 60) return `방금 전`;
    const minutes = seconds / 60;
    if (minutes < 60) return `${Math.floor(minutes)}분 전`;
    const hours = minutes / 60;
    if (hours < 24) return `${Math.floor(hours)}시간 전`;
    const days = hours / 24;
    if (days < 7) return `${Math.floor(days)}일 전`;
    const weeks = days / 7;
    if (weeks < 5) return `${Math.floor(weeks)}주 전`;
    const months = days / 30;
    if (months < 12) return `${Math.floor(months)}개월 전`;
    const years = days / 365;
    return `${Math.floor(years)}년 전`;
  }

  return (
    <>
      {comments &&
        comments.map((comment) => {
          const commentCreatedAt = createdAt(new Date(comment.createdAt));
          return (
            <li className="item-comment" key={comment.id}>
              <Link to={"/" + comment.author.accountname}>
                <UserInfoBox
                  type="comment"
                  name={comment.author.username}
                  img={comment.author.image}
                >
                  <span className="text-comment-time">{commentCreatedAt}</span>
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

import { React, useState } from "react";
import { Link } from "react-router-dom";
import UserMoreBtn from "../../../components/button/UserMoreBtn";
import UserInfoBox from "../../../components/user/UserInfoBox";
import CommentModal from "../../../components/modal/modals/CommentModal";

function Comment({ comments, postid, setNewComment }) {
  const [comment, setComment] = useState({});
  const [onModal, setOnModal] = useState(false);
  function handleModal() {
    setOnModal(!onModal);
  }
  function openModal() {
    setOnModal(true);
  }
  return (
    <>
      {comments &&
        comments.map((comment) => {
          const createAt = new Date(comment.createdAt);
          return (
            <li className="item-comment" key={comment.id}>
              <Link to={"/" + comment.author.accountname}>
                <UserInfoBox
                  type="comment"
                  name={comment.author.username}
                  img={comment.author.image}
                >
                  {/* TODO -분 전으로 수정 by 현지*/}
                  <span className="text-comment-time">
                    {"· " +
                      createAt.getFullYear() +
                      "년 " +
                      (createAt.getMonth() + 1) +
                      "월 " +
                      createAt.getDate() +
                      "일"}
                  </span>
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
          // 삭제 후 리렌더링 위해 
          setNewComment={setNewComment}
        />
      )}
    </>
  );
}

export default Comment;

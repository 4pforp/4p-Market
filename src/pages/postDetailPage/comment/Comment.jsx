import { React, useState } from "react";
import { Link } from "react-router-dom";
import UserMoreBtn from "../../../components/button/UserMoreBtn";
import UserInfoBox from "../../../components/user/UserInfoBox";
import CommentModal from "../../../components/modal/modals/CommentModal";

function Comment({ comments }) {
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
              <UserMoreBtn handleClick={openModal} />
            </li>
          );
        })}
      {
        <>
          {/* 모달 조건부렌더링 위한 함수 */}
          {onModal && <CommentModal setOnModal={handleModal} />}
        </>
      }
    </>
  );
}

export default Comment;

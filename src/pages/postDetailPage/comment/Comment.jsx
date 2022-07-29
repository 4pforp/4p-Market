import { React, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useImageTest from "../../../hooks/useImageTest";
import UserContext from "../../../context/UserContext";
import UserMoreBtn from "../../../components/button/UserMoreBtn";
import UserInfoBox from "../../../components/user/UserInfoBox";
import Modal from "../../../components/modal/Modal";
import useReport from "../../../hooks/useReport";
import AlertModal from "../../../components/modal/Alert";

function Comment({ comments, postid, remove }) {
  const { myAccountname } = useContext(UserContext);
  const { report } = useReport();
  const { imageTest } = useImageTest();
  const [comment, setComment] = useState({});
  const [modal, setModal] = useState(false);
  const [alertModal, setAlertModal] = useState(false);

  const commentId = comment.id;
  const postId = postid;
  let accountname;
  if (comment.author !== undefined) {
    accountname = comment.author.accountname;
  }

  function openModal() {
    setModal(true);
  }

  const myModalMenuList = [
    {
      content: "삭제",
      onClick: () => {
        setAlertModal(true);
      },
    },
  ];

  const userModalMenuList = [
    {
      content: "신고",
      onClick: () => {
        setAlertModal(true);
      },
    },
  ];

  const deleteBtn = {
    content: "삭제",
    onClick: () => {
      remove(`post/${postId}/comments/${commentId}`);
      setAlertModal(false);
      setModal(false);
    },
  };

  const reportBtn = {
    content: "신고",
    onClick: () => {
      report(`post/${postId}/comments/${commentId}/report`);
      setAlertModal(false);
      setModal(false);
    },
  };

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
          const authorImg = imageTest(comment.author.image, "profile");
          const commentCreatedAt = createdAt(new Date(comment.createdAt));
          return (
            <li className="item-comment" key={comment.id}>
              <Link to={"/" + comment.author.accountname}>
                <UserInfoBox type="comment" name={comment.author.username} img={authorImg}>
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
      {myAccountname === accountname ? (
        <>
          {modal && <Modal modal={modal} setModal={setModal} modalMenuList={myModalMenuList} />}
          {alertModal && <AlertModal alertModal={alertModal} setAlertModal={setAlertModal} setModal={setModal} content={"삭제하시겠어요?"} alertBtn={deleteBtn} />}
        </>
      ) : (
        <>
          {modal && <Modal modal={modal} setModal={setModal} modalMenuList={userModalMenuList} />}
          {alertModal && <AlertModal alertModal={alertModal} setAlertModal={setAlertModal} setModal={setModal} content={"신고하시겠어요?"} alertBtn={reportBtn} />}
        </>
      )}
    </>
  );
}

export default Comment;

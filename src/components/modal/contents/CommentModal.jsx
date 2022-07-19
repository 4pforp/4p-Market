import React from "react";
import { useNavigate } from "react-router-dom";
import ModalFrame from "../common/ModalFrame";
import ModalButton from "../common/ModalButton";
import UserContext from "../../../context/UserContext";
import { useContext, useEffect } from "react";

function CommentModal({ setOnModal, comment }) {
  const { myAccountname } = useContext(UserContext);

  // console.log(comment);
  // const accountname = comment.author.accountname

  function handleDelete() {
    console.log("댓글삭제 기능구현");
  }
  //const myAccount = accountname 이 내 username 인지 확인 해주기

  return (
    <>
      <ModalFrame setOnModal={setOnModal}>
        <ModalButton handleClick={handleDelete}>삭제</ModalButton>
      </ModalFrame>
    </>
    // <>
    //   {/* 내 게시글 */}
    //   {myAccount === "true" && (
    //     <>
    //       <ModalFrame setOnModal={setOnModal}>
    //         <ModalButton handleClick={handleDelete}>삭제</ModalButton>
    //       </ModalFrame>
    //     </>
    //   )}
    //   <>
    //     {/* 다른 사람 게시글  */}
    //     <ModalFrame setOnModal={setOnModal}>
    //       <ModalButton>신고</ModalButton>
    //     </ModalFrame>
    //   </>
    // </>
  );
}

export default CommentModal;

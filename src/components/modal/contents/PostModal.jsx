import React from "react";
import { useNavigate } from "react-router-dom";
import ModalBtn from "../common/ModalBtn";
import ModalFrame from "../common/ModalFrame";

function PostModal({ setOnModal }) {
  const navigate = useNavigate();

  function handleDelete() {
    console.log("포스트삭제기능구현");
  }
  //const myAccount = accountname 이 내 username 인지 확인 해주기

  return (
    <>
      <ModalFrame setOnModal={setOnModal}>
        <ModalBtn handleClick={handleDelete}>삭제</ModalBtn>
        <ModalBtn handleClick={() => navigate("/postedit")}>
          수정
        </ModalBtn>
      </ModalFrame>
    </>
    // <>
    //   {/* 내 게시글 */}
    //   {myAccount === "true" && (
    //     <>
    //       <ModalFrame setOnModal={setOnModal}>
    //         <ModalButton handleClick={handleDelete}>삭제</ModalButton>
    //         <ModalButton handleClick={() => navigate("/postedit")}>
    //           수정
    //         </ModalButton>
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

export default PostModal;

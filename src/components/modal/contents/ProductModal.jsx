import React from "react";
import { useNavigate } from "react-router-dom";
import ModalFrame from "../common/ModalFrame";
import ModalBtn from "../common/ModalBtn";

function ProductModal({ setOnModal }) {
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
        <ModalBtn>웹사이트에서 상품보기</ModalBtn>
      </ModalFrame>
    </>
    // <>
    //   {/* 내 게시글 */}
    //   {myAccount === "true" && (
    //     <>
    //       <ModalFrame setOnModal={setOnModal}>
    //         <ModalBtn handleClick={handleDelete}>삭제</ModalBtn>
    //         <ModalBtn handleClick={() => navigate("/postedit")}>
    //           수정
    //         </ModalBtn>
    //       </ModalFrame>
    //     </>
    //   )}
    //   <>
    //     {/* 다른 사람 게시글  */}
    //     <ModalFrame setOnModal={setOnModal}>
    //       <ModalBtn>신고</ModalBtn>
    //     </ModalFrame>
    //   </>
    // </>
  );
}

export default ProductModal;

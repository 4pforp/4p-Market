import React from "react";
import useDelete from "../../../../hooks/useDelete";
import CancelBtn from "../alertBase/CancelBtn";
import AlertBtn from "../alertBase/AlertBtn";
import AlertFrame from "../alertBase/AlertFrame";

function DeleteAlert({ text, backUrl, handleCancel, setNewComment, from }) {
  // 삭제기능 구현 메서드
  const { remove } = useDelete();
  function handleDelete() {
    // remove : useDelete hook 의 매개변수 받는 함수
    remove(backUrl);
    handleCancel();
    //댓글리스트 리렌더링 함수
    if (from === "commentPage") {
      setNewComment(false);
    }
  }

  return (
    <>
      <AlertFrame text={text}>
        <CancelBtn handleCancel={handleCancel} />
        <AlertBtn handleClick={handleDelete}>삭제</AlertBtn>
      </AlertFrame>
    </>
  );
}

export default DeleteAlert;

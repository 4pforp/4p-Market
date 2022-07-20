import React from "react";
import CancelBtn from "../alertBase/CancelBtn";
import AlertBtn from "../alertBase/AlertBtn";
import AlertFrame from "../alertBase/AlertFrame";

function DeleteAlert({ text, handleClick }) {
  return (
    <>
      <AlertFrame text={text}>
        <CancelBtn handleClick={handleClick} />
        <AlertBtn>삭제하기</AlertBtn>
      </AlertFrame>
    </>
  );
}

export default DeleteAlert;

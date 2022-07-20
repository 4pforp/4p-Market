import React from "react";
import CancelBtn from "../alertBase/CancelBtn";
import AlertBtn from "../alertBase/AlertBtn";
import AlertFrame from "../alertBase/AlertFrame";

function ReportAlert({ handleClick }) {
  function handleReport() {
    console.log("신고하기");
  }

  return (
    <>
      <AlertFrame text="신고하시겠어요?">
        <CancelBtn handleClick={handleClick} />
        <AlertBtn handleClick={handleReport}>신고</AlertBtn>
      </AlertFrame>
    </>
  );
}

export default ReportAlert;

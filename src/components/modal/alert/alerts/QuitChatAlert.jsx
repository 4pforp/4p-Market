import React from "react";
import { useNavigate } from "react-router-dom";
import CancelBtn from "../alertBase/CancelBtn";
import AlertBtn from "../alertBase/AlertBtn";
import AlertFrame from "../alertBase/AlertFrame";

function QuitChatAlert({ handleCancel }) {
  const navigate = useNavigate();

  function handleQuit() {
    navigate(-1);
  }

  return (
    <>
      <AlertFrame text="채팅방을 나가시겠어요?">
        <CancelBtn handleCancel={handleCancel} />
        <AlertBtn handleClick={handleQuit}>나가기</AlertBtn>
      </AlertFrame>
    </>
  );
}

export default QuitChatAlert;

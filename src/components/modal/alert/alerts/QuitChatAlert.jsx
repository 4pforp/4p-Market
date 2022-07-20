import React from "react";
import { useNavigate } from "react-router-dom";
import CancelBtn from "../alertBase/CancelBtn";
import AlertBtn from "../alertBase/AlertBtn";
import AlertFrame from "../alertBase/AlertFrame";

function QuitChatAlert({handleClick}) {
  const navigate = useNavigate();

  function handleQuit() {
    navigate(-1);
  }

  return (
    <>
      <AlertFrame text="채팅방을 나가시겠어요?">
        <CancelBtn handleClick={handleClick}/>
        <AlertBtn handleClick={handleQuit}>나가기</AlertBtn>
      </AlertFrame>
    </>
  );
}

export default QuitChatAlert;

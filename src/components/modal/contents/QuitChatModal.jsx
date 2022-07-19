import React from "react";
import ModalBtn from "../common/ModalBtn";
import ModalFrame from "../common/ModalFrame";

function QuitChatModal({ setOnModal }) {
  function handleQuitChat() {
    console.log("채팅방나가기 기능구현");
  }

  return (
    <>
      <ModalFrame setOnModal={setOnModal}>
        <ModalBtn handleClick={handleQuitChat}>채팅방 나가기</ModalBtn>
      </ModalFrame>
    </>
  );
}

export default QuitChatModal;

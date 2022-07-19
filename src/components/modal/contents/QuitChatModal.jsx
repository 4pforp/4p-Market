import React from "react";
import ModalFrame from "../common/ModalFrame";
import ModalButton from "../common/ModalButton";

function QuitChatModal({ setOnModal }) {
  function handleQuitChat() {
    console.log("채팅방나가기 기능구현");
  }

  return (
    <>
      <ModalFrame setOnModal={setOnModal}>
        <ModalButton handleClick={handleQuitChat}>채팅방 나가기</ModalButton>
      </ModalFrame>
    </>
  );
}

export default QuitChatModal;

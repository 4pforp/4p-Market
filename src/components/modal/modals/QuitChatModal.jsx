import React, { useState } from "react";
import ModalBtn from "../modalBase/ModalBtn";
import ModalFrame from "../modalBase/ModalFrame";
import QuitChatAlert from "../alert/alerts/QuitChatAlert";

function QuitChatModal({ setOnModal }) {
  const [onAlert, setOnAlert] = useState(false);
  function handleAlert() {
    setOnAlert(!onAlert);
  }
  function handleCancel() {
    setOnModal(false);
    setOnAlert(false);
  }

  return (
    <>
      {onAlert && (
        <>
          <QuitChatAlert handleCancel={handleCancel} />
        </>
      )}
      <ModalFrame setOnModal={setOnModal}>
        <ModalBtn handleClick={handleAlert}>채팅방 나가기</ModalBtn>
      </ModalFrame>
    </>
  );
}

export default QuitChatModal;

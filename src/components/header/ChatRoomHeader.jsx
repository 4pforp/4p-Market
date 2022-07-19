import { useState } from "react";
import BackBtn from "../button/BackBtn";
import MoreBtn from "../button/MoreBtn";
import QuitChatModal from "../modal/contents/QuitChatModal";
import "./Header.scss";

function ChatRoomHeader({ userName }) {
  const [onModal, setOnModal] = useState(false);
  const [onAlert, setOnAlert] = useState(false);

  function handleModal(bool) {
    setOnModal(bool);
  }
  function openModal() {
    setOnModal(true);
  }

  return (
    <header className="container-header">
      <section className="top-bar chat-room">
        <BackBtn />
        <h2 className="chat-user">{userName}</h2>
        {onModal && <QuitChatModal setOnModal={handleModal} />}
        <MoreBtn handleClick={openModal} />
      </section>
    </header>
  );
}

export default ChatRoomHeader;

import { useState } from "react";
import BackBtn from "../button/BackBtn";
import MoreBtn from "../button/MoreBtn";
import QuitChatModal from "../modal/modals/QuitChatModal";
import "./Header.scss";

function ChatRoomHeader({ userName }) {
  const [onModal, setOnModal] = useState(false);

  function handleModal() {
    setOnModal(!onModal);
  }
  function openModal() {
    setOnModal(true);
  }

  return (
    <>
      {onModal && <QuitChatModal setOnModal={handleModal} />}
      <header className="container-header">
        <section className="top-bar chat-room">
          <BackBtn />
          <h2 className="chat-user">{userName}</h2>
          <MoreBtn handleClick={openModal} />
        </section>
      </header>
    </>
  );
}

export default ChatRoomHeader;

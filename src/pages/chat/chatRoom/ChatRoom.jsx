import { useState } from "react";

import ChatRoomHeader from "../../../components/header/ChatRoomHeader";
import ChatroomFooter from "../../../components/footer/ChatroomFooter";
import Chatting from "./Chatting";
import "./ChatRoom.scss";
import QuitChatModal from "../../../components/modal/contents/QuitChatModal";

function ChatRoom() {
  const [onModal, setOnModal] = useState(false);

  return (
    <>
      {onModal && <QuitChatModal setOnModal={(bool) => setOnModal(bool)} />}
      <ChatRoomHeader
        userName="수삐뽀삐"
        handleClick={() => setOnModal(true)}
      />
      <main className="container-chatroom">
        <div className="wrapper-chatroom">
          <h2 className="a11y-hidden">채팅창</h2>
          <Chatting />
        </div>
      </main>
      <ChatroomFooter />
    </>
  );
}

export default ChatRoom;

import ChatRoomHeader from "../../../Components/header/ChatRoomHeader";
import ChatroomFooter from "../../../Components/footer/ChatroomFooter";
import Chatting from "./Chatting";
import "./ChatRoom.scss";

function ChatRoom() {
  return (
    <>
      <ChatRoomHeader userName="수삐뽀삐" />
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

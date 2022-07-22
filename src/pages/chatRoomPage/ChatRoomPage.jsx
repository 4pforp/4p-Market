import ChatRoomHeader from "../../components/header/ChatRoomHeader";
import ChatroomFooter from "../../components/footer/ChatroomFooter";
import Chatting from "./chatRoomInput/Chatting";
import "./ChatRoomPage.scss";

function ChatRoomPage() {
  return (
    <>
      <ChatRoomHeader userName="숩삐" id="1" />
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

export default ChatRoomPage;

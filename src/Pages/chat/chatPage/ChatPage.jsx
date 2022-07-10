import CommonHeader from "../../../Components/header/CommonHeader";
import MainFooter from "../../../Components/footer/MainFooter";
import ChatItem from "./ChatItem";
import "./ChatPage.scss";

function ChatPage() {
  return (
    <>
      <CommonHeader />
      <main className="main chat-list-main">
        <ul className="chat-list">
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
        </ul>
      </main>
      <MainFooter img="icon-message-circle-fill.svg" />
    </>
  );
}

export default ChatPage;

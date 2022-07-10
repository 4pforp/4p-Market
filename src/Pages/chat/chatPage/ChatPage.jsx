import BasicNav from "../../../Components/navBar/BasicNav";
import MainFooter from "../../../Components/footer/MainFooter";
import ChatItem from "./ChatItem";
import "./ChatPage.scss";

function ChatPage() {
  return (
    <>
      <BasicNav />
      <main className="main chat-list-main">
        <ul className="chat-list">
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

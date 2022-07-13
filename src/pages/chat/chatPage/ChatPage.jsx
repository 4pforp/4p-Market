import CommonHeader from "../../../components/header/CommonHeader";
import MainFooter from "../../../components/footer/MainFooter";
import ChatItem from "./ChatItem";
import "./ChatPage.scss";

function ChatPage() {
  return (
    <>
      <CommonHeader />
      <main className="container-chatpage">
        <div className="wrapper-chatpage">
          <ul className="list-chatpage">
            <ChatItem key="chat1" />
            <ChatItem key="chat2" />
            <ChatItem key="chat3" />
          </ul>
        </div>
      </main>
      <MainFooter img="icon-message-circle-fill.svg" />
    </>
  );
}

export default ChatPage;

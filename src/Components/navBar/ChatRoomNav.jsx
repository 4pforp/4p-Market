import "./InfoNav.scss";
import BackBtn from "../button/BackBtn";
import MoreBtn from "../button/MoreBtn";

function ChatRoomNav({ userName }) {
  return (
    <header className="header-layout">
      <section className="top-bar">
        <BackBtn />
        <h2 className="chat-user">{userName}</h2>
        <MoreBtn className="btn-more" />
      </section>
    </header>
  );
}

export default ChatRoomNav;

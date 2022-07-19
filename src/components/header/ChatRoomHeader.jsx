import "./Header.scss";
import BackBtn from "../button/BackBtn";
import MoreBtn from "../button/MoreBtn";

function ChatRoomHeader({ userName, handleClick }) {
  return (
    <header className="container-header">
      <section className="top-bar chat-room">
        <BackBtn />
        <h2 className="chat-user">{userName}</h2>
        <MoreBtn className="btn-more" handleClick={handleClick} />
      </section>
    </header>
  );
}

export default ChatRoomHeader;

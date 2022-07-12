import { Link } from "react-router-dom";
import "./ChatItem.scss";

function ChatItem() {
  //임시로 id 지정
  const id = 1;

  return (
    <>
      <li className="wrapper-chatitem">
        <Link to={`/chatroom/${id}`} className="item-chatpage">
          <div className="img-author chatpage"></div>
          <div className="wrapper-text-chat">
            <strong className="text-username">수삐뽀삐</strong>
            <p className="text-chat">
              안녕하세요 고양이 캣타워 아직 파나요? 혹시 에눌 되나요?
            </p>
          </div>
          <strong className="text-chat-date">2022.07.27</strong>
        </Link>
      </li>
    </>
  );
}

export default ChatItem;

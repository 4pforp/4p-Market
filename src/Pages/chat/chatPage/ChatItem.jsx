import { Link } from "react-router-dom";
import "./ChatItem.scss";

function ChatItem({ message }) {
  //임시로 id 지정
  const id = 1;

  return (
    <>
      <li className="chat-item">
        <Link to={`/chatroom/${id}`} className="chat-item-link">
          <div className="user-profile-img">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYUM58e7DK8DJVNvNc_iyeVSscQralZds2mT_PZBCInqzfgNM1eIbM1oA24EKZ2ijWDjU&usqp=CAU"
              alt="username의 프로필사진"
            />
          </div>
          <div className="chat-info">
            <strong className="user-name">수삐뽀삐</strong>
            <p className="chat-content">
              안녕하세요 고양이 캣타워 아직 파나요? 혹시 에눌 되나요?
            </p>
          </div>
          <strong className="chat-date">2022.07.27</strong>
        </Link>
      </li>
    </>
  );
}

export default ChatItem;

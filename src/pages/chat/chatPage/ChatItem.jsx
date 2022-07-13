import { Link } from "react-router-dom";
import UserInfoBox from "../../../Components/user/UserInfoBox";
import "./ChatItem.scss";

function ChatItem() {
  //임시로 id 지정
  const id = 1;

  return (
    <>
      <li className="wrapper-chatitem">
        <Link to={`/chatroom/${id}`} className="item-chatpage">
          <UserInfoBox
            type="chatpage"
            name="수삐뽀삐"
            subtext="안녕하세요 고양이 캣타워 아직 파나요? 혹시 에눌 되나요?"
          />
          <strong className="text-chat-date">2022.07.27</strong>
        </Link>
      </li>
    </>
  );
}

export default ChatItem;

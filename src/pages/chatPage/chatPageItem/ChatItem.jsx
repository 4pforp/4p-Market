import { Link } from "react-router-dom";
import UserInfoBox from "../../../components/user/UserInfoBox";
import "./ChatItem.scss";

function ChatItem({ id, name, subtext, date, img, active, linkto }) {
  return (
    <>
      <li className="wrapper-chatitem">
        <Link to={`/${linkto}`} className="item-chatpage">
          <UserInfoBox
            type={`chatpage ${active}`}
            name={name}
            subtext={subtext}
            img={img}
          />
          <strong className="text-chat-date">{date}</strong>
        </Link>
      </li>
    </>
  );
}

export default ChatItem;

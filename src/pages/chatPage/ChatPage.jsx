import CommonHeader from "../../components/header/CommonHeader";
import MainFooter from "../../components/footer/MainFooter";
import ChatItem from "./chatPageItem/ChatItem";
import "./ChatPage.scss";

function ChatPage() {
  return (
    <>
      <CommonHeader />
      <main className="container-chatpage">
        <div className="wrapper-chatpage">
          <ul className="list-chatpage">
            <ChatItem
              linkto="chatroom/1"
              key="chat1"
              id="1"
              active="active"
              name="숩삐"
              subtext="그럼 5만원은요? 제가 학생이라 돈이 없어요 .. 🤣 "
              img="https://bunny.jjalbot.com/2022/02/d8RfM5c0g.jpeg"
            />
            <ChatItem
              linkto="chat"
              key="chat2"
              id="2"
              active="active"
              name="몽글이"
              subtext="캣잎 나눔하려고 하는데 관심 있으세요?"
              img="https://mandarin.api.weniv.co.kr/1658302145792.jpeg"
            />
            <ChatItem
              linkto="chat"
              key="chat3"
              id="3"
              name="아이고뽀삐야"
              subtext="뽀삐 너무 귀여워요! 친하게 지내고 싶어요 같이 산책가요"
              img="https://blog.kakaocdn.net/dn/cnaxne/btqEIJr7Rlq/YSd15sRYgnXfW3DI862UQ1/img.jpg"
            />
          </ul>
        </div>
      </main>
      <MainFooter img="icon-message-circle-fill.svg" />
    </>
  );
}

export default ChatPage;

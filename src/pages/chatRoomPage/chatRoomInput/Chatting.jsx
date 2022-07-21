import React from "react";
import GetMessage from "./GetMessage";
import SendMessage from "./SendMessage";
import "../ChatRoomPage.scss";

function Chatting({ id }) {
  return (
    <>
      <section>
        <h2 className="a11y-hidden">채팅창</h2>
        <GetMessage
          chat="안녕하세요 고양이 캣타워 아직 파나요? 혹시 에눌 되나요?"
          time="17:23"
        />
        <SendMessage chat="네 아직 판매합니다" time="17:32" />
        <SendMessage chat="얼마 생각하세요?" time="17:32" />
        <GetMessage chat="아 저 3만원 생각하고 있습니다!" time="17:34" />
        <SendMessage chat="저 .. 7만원에 올렸는데요?" time="17:40" />
        <GetMessage chat="ㅎㅎ 안될까여?" time="17:44" />
        <SendMessage chat="네;" time="19:00" />
        <GetMessage
          chat="그럼 5만원은요? 제가 학생이라 돈이 없어요 .. 🤣"
          time="19:04"
        />
      </section>
    </>
  );
}

export default Chatting;

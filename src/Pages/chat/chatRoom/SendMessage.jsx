import React from "react";
import "./Message.scss";

function SendMessage({ chat, time }) {
  return (
    <>
      <section className="msg-wrap send-msg">
        <h2 className="visually-hidden">메세지</h2>
        <div className="msg-items">
          <p className="msg-chat">{chat}</p>
          <strong className="msg-time">{time}</strong>
        </div>
      </section>
    </>
  );
}

export default SendMessage;

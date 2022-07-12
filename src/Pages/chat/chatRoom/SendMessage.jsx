import React from "react";
import "./Message.scss";

function SendMessage({ chat, time }) {
  return (
    <>
      <section className="wrapper-message send">
        <h2 className="a11y-hidden">메세지</h2>
        <div className="wrapper-text-message">
          <p className="text-message">{chat}</p>
          <strong className="text-message-time">{time}</strong>
        </div>
      </section>
    </>
  );
}

export default SendMessage;

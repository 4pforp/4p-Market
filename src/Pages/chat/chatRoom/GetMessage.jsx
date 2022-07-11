import React from "react";
import { Link } from "react-router-dom";
import "./Message.scss";

function GetMessage({ userProfileImg, chat, time }) {
  return (
    <>
      <section className="msg-wrap">
        <h2 className="a11y-hidden">메세지</h2>
        <Link to="/profile" className="user-profile">
          <img src={userProfileImg} alt="username님의 프로필 사진" />
        </Link>
        <div className="msg-items">
          <p className="msg-chat">{chat}</p>
          <strong className="msg-time">{time}</strong>
        </div>
      </section>
    </>
  );
}

export default GetMessage;

import React from "react";
import { Link } from "react-router-dom";
import UserInfoBox from "../../../components/user/UserInfoBox";
import "./Message.scss";

function GetMessage({ chat, time }) {
  return (
    <>
      <section className="wrapper-message">
        <h2 className="a11y-hidden">메세지</h2>
        <Link to="/4p_waterbin">
          <UserInfoBox
            type="message"
            img="https://bunny.jjalbot.com/2022/02/d8RfM5c0g.jpeg"
          />
        </Link>
        <div className="wrapper-text-message">
          <p className="text-message">{chat}</p>
          <strong className="text-message-time">{time}</strong>
        </div>
      </section>
    </>
  );
}

export default GetMessage;

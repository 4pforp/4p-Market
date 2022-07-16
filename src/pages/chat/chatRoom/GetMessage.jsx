import React from "react";
import { Link } from "react-router-dom";
import "./Message.scss";
import UserInfoBox from "../../../components/user/UserInfoBox";

function GetMessage({ chat, time }) {
  return (
    <>
      <section className="wrapper-message">
        <h2 className="a11y-hidden">메세지</h2>
        {/* 유저 accountname 받아오기 */}
        <Link to="/accountname">
          <UserInfoBox type="message" />
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

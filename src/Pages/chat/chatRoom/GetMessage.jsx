import React from "react";
import { Link } from "react-router-dom";
import "./Message.scss";

function GetMessage({ chat, time }) {
  return (
    <>
      <section className="wrapper-message">
        <h2 className="a11y-hidden">메세지</h2>
        <Link to="/profile">
          <div className="img-author message"></div>
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

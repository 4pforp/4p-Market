import React from "react";
import "./Button.scss";

function Button({ children, type, from, setView, isActive, handleClick }) {
  // 버튼 활성화 함수
  function handleView() {
    setView("ProfileSet");
  }
  // 버튼 타입 확인 함수
  function checkButton(e) {
    if (type === "button") {
      handleView();
      handleClick();
    } else if (type === "submit") {
      handleClick();
    } else if (from === "login") {
      // 여기다가써!
    }
  }

  return (
    <button
      type={type}
      from={from}
      formTarget="#none"
      className={`button ${isActive}`}
      disabled={!isActive}
      onClick={checkButton}
    >
      {children}
    </button>
  );
}

export default Button;

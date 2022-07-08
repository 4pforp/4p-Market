import React from "react";
import "./Button.scss";

function Button({ children, type, from, setView, isActive, handleClick }) {
  // 버튼 타입 확인 함수
  function checkButton() {
    if (from === "emailSingUp") {
      handleClick();
    } else if (from === "profileSet") {
      handleClick();
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

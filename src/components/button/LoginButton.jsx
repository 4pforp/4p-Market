import React from "react";
import "./LoginButton.scss";

function Button({ children, type, setview, name, isActive, handleClick }) {
  // 버튼 타입 확인 함수
  function checkButton() {
    if (name === "emailSingUp") {
      handleClick();
    } else if (name === "profileSet") {
      handleClick();
    }
  }

  return (
    <button
      type={type}
      name={name}
      formTarget="#none"
      className={`btn-login ${isActive}`}
      disabled={!isActive}
      onClick={checkButton}
    >
      {children}
    </button>
  );
}

export default Button;

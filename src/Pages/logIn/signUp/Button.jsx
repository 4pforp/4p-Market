import React from "react";
import "./Button.scss";

function Button({ children, type, setView, isActive, handleClick }) {
  // 버튼 활성화 함수
  function handleView() {
    setView("ProfileSet");
  }
  // 버튼 타입 확인 함수
  function checkButton(e) {
    if (type === "button") {
      handleView();
      handleClick();
    } else {
      handleClick();
    }
  }

  return (
    <button
      type={type}
      formTarget="#none"
      className={`button-signup ${isActive}`}
      disabled={!isActive}
      onClick={checkButton}
    >
      {children}
    </button>
  );
}

export default Button;

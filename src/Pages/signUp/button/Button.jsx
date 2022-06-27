import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";
import "./button.scss";

function Button({ children, email, password, type, isActive, view, setView }) {
  const { user, setUser } = useContext(UserContext);
  // 유저 정보 입력 함수
  function handleUser() {
    setUser({ ...user, email: email, password: password });
  }
  // 버튼 활성화 함수
  function handleView() {
    setView(true);
  }
  // 버튼 타입 확인 함수
  function checkButton(e) {
    if (type === "button") {
      handleView();
      handleUser();
    }
  }

  return (
    <button
      type={type}
      formtarget="#none"
      className={`btn-signup ${isActive}`}
      disabled={isActive}
      onClick={(e) => {
        checkButton(e);
      }}
    >
      {children}
    </button>
  );
}

export default Button;

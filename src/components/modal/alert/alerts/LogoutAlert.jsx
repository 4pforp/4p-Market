import React from "react";
import { useNavigate } from "react-router-dom";
import CancelBtn from "../alertBase/CancelBtn";
import AlertBtn from "../alertBase/AlertBtn";
import AlertFrame from "../alertBase/AlertFrame";

function LogoutAlert({ handleCancel }) {
  const navigate = useNavigate();

  //로그아웃 기능 함수
  function handleLogout() {
    window.localStorage.clear();
    navigate("/login");
  }

  return (
    <>
      <AlertFrame text="로그아웃 하시겠어요?">
        <CancelBtn handleCancel={handleCancel} />
        <AlertBtn handleClick={handleLogout}>로그아웃</AlertBtn>
      </AlertFrame>
    </>
  );
}

export default LogoutAlert;

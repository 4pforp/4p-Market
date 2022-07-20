import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CancelBtn from "../alertBase/CancelBtn";
import AlertBtn from "../alertBase/AlertBtn";
import AlertFrame from "../alertBase/AlertFrame";

function LogoutAlert({ handleClick }) {
  const [onAlert, setOnAlert] = useState(false);

  const navigate = useNavigate();

  function closeAlert() {
    setOnAlert(false);
  }
  function handleLogout() {
    window.localStorage.clear();
    navigate("/login");
  }

  return (
    <>
      <AlertFrame text="로그아웃 하시겠어요?">
        <CancelBtn handleClick={handleClick} />
        <AlertBtn handleClick={handleLogout}>로그아웃</AlertBtn>
      </AlertFrame>
    </>
  );
}

export default LogoutAlert;

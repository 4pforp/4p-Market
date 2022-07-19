import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CancelBtn from "./common/CancelBtn";
import AlertBtn from "./common/AlertBtn";
import AlertFrame from "./common/AlertFrame";

function LogoutAlert() {
  const [onAlert, setOnAlert] = useState(false);

  const navigate = useNavigate();

  function handleLogout() {
    window.localStorage.clear();
    navigate("/login");
  }

  return (
    <>
      <AlertFrame text="로그아웃 하시겠어요?" setOnAlert={setOnAlert}>
        <CancelBtn />
        <AlertBtn handleClick={handleLogout}>로그아웃</AlertBtn>
      </AlertFrame>
    </>
  );
}

export default LogoutAlert;

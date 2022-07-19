import React from "react";
import { useNavigate } from "react-router-dom";
import ModalFrame from "../common/ModalFrame";
import ModalButton from "../common/ModalButton";

function DefaultModal({ setOnModal }) {
  const navigate = useNavigate();

  function Logout() {
    console.log("로그아웃 기능 구현 ");
  }

  return (
    <>
      <ModalFrame setOnModal={setOnModal}>
        <ModalButton onClick={() => navigate("/profileedit")}>
          설정 및 개인정보
        </ModalButton>
        <ModalButton handleClick={Logout}>로그아웃</ModalButton>
      </ModalFrame>
    </>
  );
}

export default DefaultModal;

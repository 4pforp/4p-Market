import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalBtn from "../modalBase/ModalBtn";
import ModalFrame from "../modalBase/ModalFrame";
import LogoutAlert from "../alert/alerts/LogoutAlert";

function DefaultModal({ setOnModal }) {
  const [onAlert, setOnAlert] = useState(false);
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/profileedit");
  }

  function handleAlert() {
    setOnAlert(!onAlert);
  }

  function handleCancel() {
    setOnModal(false);
    setOnAlert(false);
  }

  return (
    <>
      {onAlert && (
        <>
          <LogoutAlert handleClick={handleCancel} />
        </>
      )}
      <ModalFrame setOnModal={setOnModal}>
        <ModalBtn handleClick={handleNavigate}>설정 및 개인정보</ModalBtn>
        <ModalBtn handleClick={handleAlert}>로그아웃</ModalBtn>
      </ModalFrame>
    </>
  );
}

export default DefaultModal;

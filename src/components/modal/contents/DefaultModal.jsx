import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalBtn from "../common/ModalBtn";
import ModalFrame from "../common/ModalFrame";
import LogoutAlert from "../alert/LogoutAlert";

function DefaultModal({ setOnModal, handleCloseAlert }) {
  const [onAlert, setOnAlert] = useState(false);

  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/");
  }
  function handleAlert(bool) {
    setOnAlert(bool);
  }
  function openAlert() {
    setOnAlert(true);
  }

  return (
    <>
      {onAlert && <LogoutAlert setOnAlert={handleAlert} setOnModal={false} />}
      <ModalFrame setOnModal={setOnModal}>
        <ModalBtn handleClick={handleNavigate}>설정 및 개인정보</ModalBtn>
        <ModalBtn handleClick={openAlert}>로그아웃</ModalBtn>
      </ModalFrame>
    </>
  );
}

export default DefaultModal;

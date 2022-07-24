import { useState } from "react";
import ModalLink from "../modalBase/ModalLink";
import ModalBtn from "../modalBase/ModalBtn";
import ModalFrame from "../modalBase/ModalFrame";
import LogoutAlert from "../alert/alerts/LogoutAlert";

//commonHeader moreBtn 클릭 했을 때 나타나는 모달
function DefaultModal({ setOnModal }) {
  const [onAlert, setOnAlert] = useState(false);

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
          <LogoutAlert handleCancel={handleCancel} />
        </>
      )}
      <ModalFrame setOnModal={setOnModal}>
        <ModalLink handleLink={"/profileedit"}>설정 및 개인정보</ModalLink>
        <ModalBtn handleClick={handleAlert}>로그아웃</ModalBtn>
      </ModalFrame>
    </>
  );
}

export default DefaultModal;

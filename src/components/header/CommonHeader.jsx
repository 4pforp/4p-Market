import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackBtn from "../button/BackBtn";
import MoreBtn from "../button/MoreBtn";
import Modal from "../modal/Modal";
import AlertModal from "../modal/Alert";

function CommonHeader() {
  const [isModal, setIsModal] = useState(false);
  const [isAlert, setIsAlert] = useState(false);
  const navigate = useNavigate();

  function openModal() {
    setIsModal(true);
  }

  //로그아웃 기능 함수
  function handleLogout() {
    window.localStorage.clear();
    navigate("/login");
  }

  const modalMenuList = [
    {
      content: "설정 및  개인정보",
      onClick: () => navigate("/profileedit"),
    },
    {
      content: "로그아웃",
      onClick: () => {
        setIsAlert(true);
      },
    },
  ];

  const alertBtn = {
    content: "로그아웃",
    onClick: handleLogout,
  };

  return (
    <>
      <header className="container-header">
        <section className="top-bar">
          <BackBtn />
          <MoreBtn handleClick={openModal} />
        </section>
      </header>
      {isModal && <Modal isModal={isModal} setIsModal={setIsModal} modalMenuList={modalMenuList} />}
      {isAlert && <AlertModal isAlert={isAlert} setIsAlert={setIsAlert} setIsModal={setIsModal} content={"로그아웃 하시겠어요?"} alertBtn={alertBtn} />}
    </>
  );
}

export default CommonHeader;

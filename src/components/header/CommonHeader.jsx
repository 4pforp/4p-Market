import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackBtn from "../button/BackBtn";
import MoreBtn from "../button/MoreBtn";
import Modal from "../modal/Modal";
import AlertModal from "../modal/Alert";

function CommonHeader() {
  const [modal, setModal] = useState(false);
  const [alertModal, setAlertModal] = useState(false);
  const navigate = useNavigate();

  function openModal() {
    setModal(true);
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
        setAlertModal(true);
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
      {modal && (
        <Modal
          modal={modal}
          setModal={setModal}
          modalMenuList={modalMenuList}
        />
      )}
      {alertModal && (
        <AlertModal
          alertModal={alertModal}
          setAlertModal={setAlertModal}
          setModal={setModal}
          content={"로그아웃 하시겠어요?"}
          alertBtn={alertBtn}
        />
      )}
    </>
  );
}

export default CommonHeader;

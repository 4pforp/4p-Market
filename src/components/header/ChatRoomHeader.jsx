import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackBtn from "../button/BackBtn";
import MoreBtn from "../button/MoreBtn";
import Modal from "../modal/Modal";
import AlertModal from "../modal/Alert";
import "./Header.scss";

function ChatRoomHeader({ userName }) {
  const [isModal, setIsModal] = useState(false);
  const [isAlert, setIsAlert] = useState(false);
  const navigate = useNavigate();

  function openModal() {
    setIsModal(true);
  }

  const modalMenuList = [
    {
      content: "채팅방 나가기",
      onClick: () => {
        setIsModal(true);
      },
    },
  ];

  const alertBtn = {
    content: "나가기",
    onClick: () => {
      navigate(-1);
    },
  };

  return (
    <>
      <header className="container-header">
        <section className="top-bar chat-room">
          <BackBtn />
          <h2 className="chat-user">{userName}</h2>
          <MoreBtn handleClick={openModal} />
        </section>
      </header>
      {isModal && <Modal isModal={isModal} setIsModal={setIsModal} modalMenuList={modalMenuList} />}
      {isAlert && <AlertModal isAlert={isAlert} setIsAlert={setIsAlert} setIsModal={setIsModal} content={"나가시겠어요?"} alertBtn={alertBtn} />}
    </>
  );
}

export default ChatRoomHeader;

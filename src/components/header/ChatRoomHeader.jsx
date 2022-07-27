import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackBtn from "../button/BackBtn";
import MoreBtn from "../button/MoreBtn";
import Modal from "../modal/Modal";
import AlertModal from "../modal/Alert";
import "./Header.scss";

function ChatRoomHeader({ userName }) {
  const [modal, setModal] = useState(false);
  const [alertModal, setAlertModal] = useState(false);
  const navigate = useNavigate();

  function openModal() {
    setModal(true);
  }

  const modalMenuList = [
    {
      content: "채팅방 나가기",
      onClick: () => {
        setAlertModal(true);
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
          content={"나가시겠어요?"}
          alertBtn={alertBtn}
        />
      )}
    </>
  );
}

export default ChatRoomHeader;

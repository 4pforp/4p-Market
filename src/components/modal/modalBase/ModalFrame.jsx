import React from "react";
import ModalPortal from "./ModalPortal";
import "../Modal.scss";

function ModalFrame({ setOnModal, children }) {

  function handleCloseModal() {
    setOnModal(false);
  }

  return (
    <ModalPortal>
      <div className="background-modal" onClick={handleCloseModal} />
      <section className="container-modal">
        <h2 className="a11y-hidden">메뉴</h2>
        <div>
          <ul className="wrapper-list-modal">{children}</ul>
        </div>
      </section>
    </ModalPortal>
  );
}

export default ModalFrame;

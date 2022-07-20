import { useState } from "react";
import BackBtn from "../button/BackBtn";
import MoreBtn from "../button/MoreBtn";
import DefaultModal from "../modal/modals/DefaultModal";

function CommonHeader() {
  const [onModal, setOnModal] = useState(false);

  function handleModal() {
    setOnModal(!onModal);
  }
  function openModal() {
    setOnModal(true);
  }

  return (
    <>
      {onModal && <DefaultModal setOnModal={handleModal} />}
      <header className="container-header">
        <section className="top-bar">
          <BackBtn />
          <MoreBtn handleClick={openModal} />
        </section>
      </header>
    </>
  );
}

export default CommonHeader;

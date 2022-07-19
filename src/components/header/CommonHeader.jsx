import { useState } from "react";
import BackBtn from "../button/BackBtn";
import MoreBtn from "../button/MoreBtn";
import DefaultModal from "../modal/contents/DefaultModal";

function CommonHeader() {
  const [onModal, setOnModal] = useState(false);
  function handleModal(bool) {
    setOnModal(bool);
  }
  function openModal() {
    setOnModal(true);
  }


  return (
    <header className="container-header">
      <section className="top-bar">
        <BackBtn />
        {onModal && <DefaultModal setOnModal={handleModal} />}
        <MoreBtn handleClick={openModal} />
      </section>
    </header>
  );
}

export default CommonHeader;

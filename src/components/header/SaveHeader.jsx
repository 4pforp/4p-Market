import BackBtn from "../button/BackBtn";
import Savebtn from "../button/SaveBtn";

function SaveHeader({ isActive, handleClick }) {
  return (
    <header className="container-header">
      <section className="top-bar">
        <BackBtn />
        <Savebtn text="저장" isActive={isActive} handleClick={handleClick} />
      </section>
    </header>
  );
}

export default SaveHeader;

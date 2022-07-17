import BackBtn from "../button/BackBtn";
import Savebtn from "../button/SaveBtn";

function SaveHeader({ isActive }) {
  return (
    <header className="container-header">
      <section className="top-bar">
        <BackBtn />
        <Savebtn text="저장" isActive={isActive} />
      </section>
    </header>
  );
}

export default SaveHeader;

import BackBtn from "../button/BackBtn";
import Savebtn from "../button/SaveBtn";

function SaveHeader() {
  return (
    <header className="header-layout">
      <section className="top-bar">
        <BackBtn />
        <Savebtn text="저장" />
      </section>
    </header>
  );
}

export default SaveHeader;

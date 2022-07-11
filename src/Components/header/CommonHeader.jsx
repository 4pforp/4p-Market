import BackBtn from "../button/BackBtn";
import MoreBtn from "../button/MoreBtn";

function CommonHeader() {
  return (
    <header className="header-layout">
      <section className="top-bar">
        <BackBtn />
        <MoreBtn />
      </section>
    </header>
  );
}

export default CommonHeader;

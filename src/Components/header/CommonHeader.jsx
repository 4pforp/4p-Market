import BackBtn from "../button/BackBtn";
import MoreBtn from "../button/MoreBtn";

function CommonHeader() {
  return (
    <header className="container-header">
      <section className="top-bar">
        <BackBtn />
        <MoreBtn />
      </section>
    </header>
  );
}

export default CommonHeader;

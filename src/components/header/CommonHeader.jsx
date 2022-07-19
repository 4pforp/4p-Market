import BackBtn from "../button/BackBtn";
import MoreBtn from "../button/MoreBtn";

function CommonHeader({ handleClick }) {
  return (
    <header className="container-header">
      <section className="top-bar">
        <BackBtn />
        <MoreBtn handleClick={handleClick} />
      </section>
    </header>
  );
}

export default CommonHeader;

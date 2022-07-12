import "./Header.scss";
import SearchBtn from "../button/SearchBtn";

function MainHeader() {
  return (
    <header className="container-header">
      <section className="top-bar">
        <h1 className="header-title">감귤마켓 피드</h1>
        <SearchBtn />
      </section>
    </header>
  );
}

export default MainHeader;

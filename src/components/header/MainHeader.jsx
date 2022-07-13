import "./Header.scss";
import SearchBtn from "../button/SearchBtn";

function MainHeader() {
  return (
    <header className="container-header">
      <section className="top-bar">
        <h1 className="title-header">뽀삐뽀삐 피드</h1>
        <SearchBtn />
      </section>
    </header>
  );
}

export default MainHeader;

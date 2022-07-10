import BackBtn from "../button/BackBtn";
import "./SearchHeader.scss";

function SearchHeader() {
  return (
    <header className="header-layout">
      <section className="top-bar">
        <BackBtn />
        <input
          type="text"
          className="search-input"
          placeholder="계정 검색"
          autoFocus
        />
      </section>
    </header>
  );
}

export default SearchHeader;

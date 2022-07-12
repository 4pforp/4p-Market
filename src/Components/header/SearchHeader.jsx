import BackBtn from "../button/BackBtn";
import "./SearchHeader.scss";

function SearchHeader() {
  return (
    <header className="container-header">
      <section className="top-bar">
        <BackBtn />
        <input
          type="text"
          className="input-search"
          placeholder="계정 검색"
          autoFocus
        />
      </section>
    </header>
  );
}

export default SearchHeader;

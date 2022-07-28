import BackBtn from "../button/BackBtn";
import "./SearchHeader.scss";

function SearchHeader({ value, handle }) {
  return (
    <header className="container-header">
      <section className="top-bar">
        <BackBtn />
        <input
          type="text"
          value={value}
          onChange={handle}
          className="input-search"
          placeholder="계정 검색"
          autoFocus
        />
      </section>
    </header>
  );
}

export default SearchHeader;

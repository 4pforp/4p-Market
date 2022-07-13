import "./UserSearch.scss";
import SearchHeader from "../../../components/header/SearchHeader";
import SearchResult from "./SearchResult";

function UserSearch() {
  return (
    <>
      <SearchHeader />
      <main className="container-main-search">
        <SearchResult />
      </main>
    </>
  );
}

export default UserSearch;

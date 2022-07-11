
import "./UserSearch.scss";
import SearchHeader from "../../../Components/header/SearchHeader";
import SearchResult from './SearchResult';


function UserSearch() {
  return (
    <>
    <SearchHeader />
    <main className="main-search">
      <SearchResult/>
    </main>
    </>
  );
}

export default UserSearch;

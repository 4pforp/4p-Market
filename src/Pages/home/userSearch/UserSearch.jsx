import './UserSearch.scss';
import SearchNav from '../../../Components/navBar/SearchNav';
import SearchResult from './SearchResult';

function UserSearch(){
  return(
    <>
    <SearchNav/>
    <main className="main-search">
      <SearchResult/>
    </main>
    </>
  )
}

export default UserSearch;

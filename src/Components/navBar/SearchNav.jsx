import BackBtn from '../button/BackBtn';
import './SearchNav.scss';

function SearchNav(){
  return(
  <header className="nav-layout">
    <BackBtn/>
    <input type="text" className="search-input" placeholder="계정 검색" autoFocus/>
  </header>
  )
}

export default SearchNav;
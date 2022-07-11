import './MainNav.scss';
import SearchBtn from '../button/SearchBtn';

function MainNav(){
  return(
      <header className="nav-layout">
        <h1 className="header-title">감귤마켓 피드</h1>
        <SearchBtn/>
      </header>
  )
} 
  
export default MainNav;


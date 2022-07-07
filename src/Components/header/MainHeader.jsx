import './MainHeader.scss';
import iconSearch from '../../assets/icon-search.svg';
function MainHeader() {
  return(
    <aside className="header-main">
    <h1 className="header-title">감귤마켓 피드</h1>
    <button type="button" className="btn-search">
      <span className="a11y-hidden">검색버튼</span>
    </button>
    </aside>
  )
}

export default MainHeader;


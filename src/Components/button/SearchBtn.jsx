import { Link } from 'react-router-dom';
import "./SearchBtn.scss";

function SearchBtn(){
  return(
    <>
    <Link to="/search">
    <button type="button" className="btn-search">
      <span className="a11y-hidden">검색버튼</span>
    </button>
    </Link>
    </>
  )
}
   
export default SearchBtn;
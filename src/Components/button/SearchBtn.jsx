import "./SearchBtn.scss";

function SearchBtn(props){
  return(
    <button type="button" className="btn-search" onClick={props.event} >
      <span className="a11y-hidden">검색버튼</span>
    </button>
  )
}
   
export default SearchBtn;
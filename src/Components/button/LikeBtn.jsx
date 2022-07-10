import './LikeBtn.scss';

function LikeBtn(){
  return(
    <div className="btn-like-box">
    <button type="button" className="btn-like">
       <span className="a11y-hidden">좋아요</span>
    </button>
    <span className="like-number">1</span>
    </div>
  )
}

export default LikeBtn;
import './CommentBtn.scss';

function CommentBtn(){
  return(
    <div className="btn-comment-box">
    <button type="button" className="btn-comment">
       <span className="a11y-hidden">댓글</span>
    </button>
    <span className="comment-number">1</span>
    </div>
  )
}

export default CommentBtn;
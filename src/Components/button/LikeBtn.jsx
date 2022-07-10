import { useState } from 'react';
import './LikeBtn.scss';

function LikeBtn(){
 
  const[liked, setLiked] = useState({
    heart : false,
    number : false
  });

  function handleLikeClick(){
    setLiked({heart : !liked.heart , number : !liked.number})
  }

  return(
    <div className="btn-like-box">
    <button type="button" className={liked.heart ? "btn-liked" : "btn-like"} onClick={handleLikeClick}>
       <span className="a11y-hidden">좋아요</span>
    </button>
    <span className="like-number">{liked.number ? "1" : "0"}</span>
    </div>
  )
}

export default LikeBtn;
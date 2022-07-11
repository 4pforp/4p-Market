import './CommentList.scss';
import UserMoreBtn from '../../../Components/button/UserMoreBtn';
import defaultProfile from '../../../assets/L-profile.svg';

function CommentList(){
  return(
    <div className="comments-wrapper">
      <ul className="comments-list">
        <li className="comment">
        <div className="comment-author-info">
        <img src={defaultProfile} alt="" className="comment-author-profile"/>
          <span className="comment-author-name">나는유저소현</span>
          <span className="comment-time">· 5분전</span>
          <UserMoreBtn/>
        </div>
        <p className="comment-content">
          댓글남기고 갑니다. 덩기덕 쿵더러러러러러러러러 덩기덕 쿵덕~!
        </p>
        </li>
        <li className="comment">
        <div className="comment-author-info">
        <img src={defaultProfile} alt="" className="comment-author-profile"/>
          <span className="comment-author-name">Jane Doe</span>
          <span className="comment-time">· 10분전</span>
          <UserMoreBtn/>
        </div>
        <p className="comment-content">
          knock knock knock knock knock knock knock knock anybody there? 
        </p>
        </li>
      </ul>
    </div>
  )
}

export default CommentList;
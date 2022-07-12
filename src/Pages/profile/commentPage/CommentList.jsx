import './CommentList.scss';
import UserMoreBtn from '../../../Components/button/UserMoreBtn';
import defaultProfile from '../../../assets/L-profile.svg';

function CommentList(){
  return(
    <div className="container-comments">
      <ul className="list-comments">
        <li className="comment">
        <div className="wrapper-comment-author">
        <img src={defaultProfile} alt="" className="img-comment-author"/>
          <span className="text-comment-author-name">나는유저소현</span>
          <span className="text-comment-time">· 5분전</span>
          <UserMoreBtn/>
        </div>
        <p className="content-comment">
          댓글남기고 갑니다. 덩기덕 쿵더러러러러러러러러 덩기덕 쿵덕~!
        </p>
        </li>
        <li className="comment">
        <div className="wrapper-comment-author">
        <img src={defaultProfile} alt="" className="img-comment-author"/>
          <span className="text-comment-author-name">Jane Doe</span>
          <span className="text-comment-time">· 10분전</span>
          <UserMoreBtn/>
        </div>
        <p className="content-comment">
          knock knock knock knock knock knock knock knock anybody there? 
        </p>
        </li>
      </ul>
    </div>
  )
}

export default CommentList;
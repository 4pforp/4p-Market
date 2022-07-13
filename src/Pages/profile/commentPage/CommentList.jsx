import './CommentList.scss';
import UserMoreBtn from '../../../components/button/UserMoreBtn';
import UserInfoBox from '../../../components/user/UserInfoBox';

function CommentList(){
  return(
    <div className="container-comments">
      <ul className="list-comments">
        <li className="item-comment">
        <UserInfoBox type="comment" name="나는유저소현">
          <span className="text-comment-time">· 4분전</span>
          <UserMoreBtn/>
        </UserInfoBox>
        <p className="content-comment">
          댓글남기고 갑니다. 덩기덕
        </p>
        </li>
        <li className="item-comment">
        <UserInfoBox type="comment" name="아무개">
          <span className="text-comment-time">· 11분전</span>
          <UserMoreBtn/>
        </UserInfoBox>
        <p className="content-comment">
          knock knock knock knock knock knock knock knock anybody there? 
        </p>
        </li>
        <li className="item-comment">
        <UserInfoBox type="comment" name="엄궁동">
          <span className="text-comment-time">· 12분전</span>
          <UserMoreBtn/>
        </UserInfoBox>
        <p className="content-comment">
          비치비치 다비치~
        </p>
        </li>
      </ul>
    </div>
  )
}

export default CommentList;
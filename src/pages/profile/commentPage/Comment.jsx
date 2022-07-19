import UserMoreBtn from "../../../components/button/UserMoreBtn";
import UserInfoBox from "../../../components/user/UserInfoBox";
import { Link } from "react-router-dom";

function Comment({ comments }) {
  return (
    <>
      {comments &&
        comments.map((comment) => {
          const createAt = new Date(comment.createdAt);
          return (
            <li className="item-comment" key={comment.id}>
              <Link to={"/" + comment.author.accountname}>
                <UserInfoBox
                  type="comment"
                  name={comment.author.username}
                  img={comment.author.image}
                >
                  {/* -분 전으로 수정 */}
                  <span className="text-comment-time">
                    {"· " +
                      createAt.getFullYear() +
                      "년 " +
                      (createAt.getMonth() + 1) +
                      "월 " +
                      createAt.getDate() +
                      "일"}
                  </span>
                </UserInfoBox>
              </Link>
              <p className="content-comment">{comment.content}</p>
              <UserMoreBtn />
            </li>
          );
        })}
    </>
  );
}

export default Comment;

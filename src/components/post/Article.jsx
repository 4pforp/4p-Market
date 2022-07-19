import CommentBtn from "../button/CommentBtn";
import LikeBtn from "../button/LikeBtn";
import UserMoreBtn from "../button/UserMoreBtn";
import UserInfoBox from "../user/UserInfoBox";
import PostModal from "../modal/contents/PostModal";
import "./Post.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

function Article({ content, from }) {
  const post = content;
  const author = content.author;
  const accountname = author.accountname;
  const createAt = new Date(content.createdAt);
  const [onModal, setOnModal] = useState(false);

  return (
    <>
      <article className="article-post">
        <h3 className="a11y-hidden">user의 post</h3>
        {from === "profile" && (
          <>
            <UserInfoBox
              type="post"
              name={author.username}
              id={"@" + author.accountname}
              img={author.image}
            ></UserInfoBox>
          </>
        )}
        {from === "comment" && (
          <>
            <UserInfoBox
              type="post"
              name={author.username}
              id={"@" + author.accountname}
              img={author.image}
            ></UserInfoBox>
          </>
        )}
        {from === "home" && (
          <>
            <Link to={"/" + accountname}>
              <UserInfoBox
                type="post"
                name={author.username}
                id={"@" + author.accountname}
                img={author.image}
              ></UserInfoBox>
            </Link>
          </>
        )}

        <main className="contents-post">
          <p className="text-post">{post.content}</p>
          <div className="container-post-image">
            {post.image === "" ? null : (
              <img src={post.image} alt="게시글 사진" className="img-post" />
            )}
          </div>
          <div className="container-btn-post">
            <LikeBtn heartcount={post.heartcount} postid={post.id} />
            <CommentBtn
              commentcount={post.commentCount}
              postid={post.id}
              post={post}
              from={from}
              accountname={accountname}
            />
          </div>
          <strong className="text-post-date">
            {createAt.getFullYear() +
              "년 " +
              (createAt.getMonth() + 1) +
              "월 " +
              createAt.getDate() +
              "일"}
          </strong>
        </main>
        {/* 모달 조건부렌더링 위한 함수 */}
        {onModal && <PostModal setOnModal={(bool) => setOnModal(bool)} />}

        <UserMoreBtn handleClick={() => setOnModal(true)} />
      </article>
    </>
  );
}

export default Article;

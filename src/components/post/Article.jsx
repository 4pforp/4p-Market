import { React, useContext, useState } from "react";
import { Link } from "react-router-dom";
import ImageTestContext from "../../context/ImageTestContext";
import CommentBtn from "../button/CommentBtn";
import LikeBtn from "../button/LikeBtn";
import UserMoreBtn from "../button/UserMoreBtn";
import UserInfoBox from "../user/UserInfoBox";
import PostModal from "../modal/modals/PostModal";
import errorImage from "../../assets/image_error.png";
import "./Post.scss";

function Article({ content, from, remove }) {
  const { ImageTest } = useContext(ImageTestContext);
  const post = content;
  const author = content.author;
  const accountname = author.accountname;
  const createAtFull = new Date(content.createdAt);
  const [onModal, setOnModal] = useState(false);

  const img = ImageTest(post.image);
  const imgArray = img.split(",");

  function handleImageError(e) {
    e.target.src = errorImage;
  }
  function handleModal() {
    setOnModal(!onModal);
  }
  function openModal() {
    setOnModal(true);
  }

  function createdAt(createdAt) {
    const betweenTime = new Date() - createdAt;
    const seconds = betweenTime / 1000;
    if (seconds < 60) return `방금 전`;
    const minutes = seconds / 60;
    if (minutes < 60) return `${Math.floor(minutes)}분 전`;
    const hours = minutes / 60;
    if (hours < 24) return `${Math.floor(hours)}시간 전`;
    const days = hours / 24;
    if (days < 7) return `${Math.floor(days)}일 전`;
    const weeks = days / 7;
    if (weeks < 5) return `${Math.floor(weeks)}주 전`;
    const months = days / 30;
    if (months < 12) return `${Math.floor(months)}개월 전`;
    const years = days / 365;
    return `${Math.floor(years)}년 전`;
  }

  const commentCreatedAt = createdAt(createAtFull);
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
        {(from === "comment" || "home") && (
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
          {post.image === "" ? null : (
            <Link to={"/" + accountname + "/" + post.id}>
              <div className="container-post-image">
                {imgArray.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="게시글 사진"
                    onError={handleImageError}
                    className="img-post"
                  />
                ))}
              </div>
            </Link>
          )}

          <div className="container-btn-post">
            <LikeBtn
              heartcount={post.heartCount}
              hearted={post.hearted}
              postid={post.id}
            />
            <CommentBtn
              commentcount={post.commentCount}
              postid={post.id}
              post={post}
              from={from}
              accountname={accountname}
            />
          </div>
          <strong className="text-post-date">
            {from === "home"
              ? commentCreatedAt
              : createAtFull.getFullYear() +
                "년 " +
                (createAtFull.getMonth() + 1) +
                "월 " +
                createAtFull.getDate() +
                "일"}
          </strong>
        </main>
        {onModal && (
          <PostModal
            setOnModal={handleModal}
            content={content}
            //삭제 후 리렌더링 위해 내려준 props
            remove={remove}
            from={from}
          />
        )}
        <UserMoreBtn handleClick={openModal} />
      </article>
    </>
  );
}

export default Article;

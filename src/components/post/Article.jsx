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

function Article({ content, from }) {
  const { ImageTest } = useContext(ImageTestContext);
  const post = content;
  const author = content.author;
  const accountname = author.accountname;
  const createAt = new Date(content.createdAt);
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
        {onModal && (
          <PostModal
            setOnModal={handleModal}
            content={content}
          />
        )}
        <UserMoreBtn handleClick={openModal} />
      </article>
    </>
  );
}

export default Article;

import "./CommentPage.scss";
import CommonHeader from "../../../Components/header/CommonHeader";
import CommentFooter from "../../../Components/footer/CommentFooter";
import UserMoreBtn from "../../../Components/button/UserMoreBtn";
import LikeBtn from "../../../Components/button/LikeBtn";
import CommentBtn from "../../../Components/button/CommentBtn";
import defaultProfile from "../../../assets/L-profile.svg";
import examplePicture from "../../../assets/example-picture.jpg";
import CommentList from "./CommentList";

function CommentPage() {
  return (
    <>
      <CommonHeader />
      <main className="main-comment">
        <div className="post-wrapper">
          <article className="post-article">
            <section className="author">
              <img
                src={defaultProfile}
                alt=""
                className="post-author-profile"
              />
              <div className="author-info">
                <span className="author-name">유저이름</span>
                <span className="author-id">@유저ID</span>
              </div>
              <UserMoreBtn />
            </section>
            <section className="post-content">
              <p className="post-content-text">
                포스트 내용 우리집 강아지는 복슬강아지 학교갔다 돌아오면 멍멍멍
                꼬리치며 반갑다고 멍멍멍
              </p>
              <img
                src={examplePicture}
                alt="게시글 사진"
                className="post-content-img"
              />
            </section>
            <section className="post-info">
              <LikeBtn />
              <CommentBtn />
              <p className="post-date">2022년 1월 1일</p>
            </section>
          </article>
        </div>
        <CommentList />
      </main>
      <CommentFooter />
    </>
  );
}

export default CommentPage;

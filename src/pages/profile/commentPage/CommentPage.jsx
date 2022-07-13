import "./CommentPage.scss";
import CommonHeader from "../../../components/header/CommonHeader";
import CommentFooter from "../../../components/footer/CommentFooter";
import CommentList from "./CommentList";
import Post from "../../../components/post/Post";

function CommentPage() {
  return (
    <>
      <CommonHeader />
      <main className="container-comment-page">
        <div className="wrapper-comment-post">
          <Post />
        </div>
        <CommentList />
      </main>
      <CommentFooter />
    </>
  );
}

export default CommentPage;

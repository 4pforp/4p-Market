import "./CommentPage.scss";
import CommonHeader from "../../../Components/header/CommonHeader";
import CommentFooter from "../../../Components/footer/CommentFooter";
import CommentList from "./CommentList";
import Post from "../../../Components/post/Post";

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

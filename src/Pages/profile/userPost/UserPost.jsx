import Post from "../../../Components/post/Post";
import "./UserPost.scss";

function UserPost() {
  return (
    <>
      <section className="container-post">
        <h3 className="a11y-hidden">포스트 목록</h3>
        <div className="container-view-button">
          <div className="button-view post">
            <button className=" a11y-hidden">post view</button>
          </div>
          <div className="button-view gallery">
            <button className=" a11y-hidden">gallery view</button>
          </div>
        </div>
        <ol className="list-posts">
          <Post />
          <Post />
        </ol>
      </section>
    </>
  );
}

export default UserPost;

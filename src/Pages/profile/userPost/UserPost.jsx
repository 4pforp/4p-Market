import Post from "../../../Components/post/Post";
import "./UserPost.scss";

function UserPost() {
  return (
    <>
      <section className="container-post">
        <h3 className="a11y-hidden">포스트 목록</h3>
        <div className="container-view-button">
          <div className="wrapper-view-button">
            <button className="button-view post">
              <strong className=" a11y-hidden">post view</strong>
            </button>
            <button className="button-view album">
              <strong className=" a11y-hidden">album view</strong>
            </button>
          </div>
        </div>
        <div className="wrapper-post ">
          <ol className="list-posts">
            <li className="item-post">
              <Post />
            </li>
            <li className="item-post">
              <Post />
            </li>
            <li className="item-post">
              <Post />
            </li>
            <li className="item-post">
              <Post />
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}

export default UserPost;

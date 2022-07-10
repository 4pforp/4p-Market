import Posts from "../../../Components/posts/Posts";

function UserPosts() {
  return (
    <>
      <section className="container-post">
        <h3 className="a11y-hidden">포스트 목록</h3>
        <div className="container-view-button">
          <button className="button-view post">post view</button>
          <button className="button-view gallery">gallery view</button>
        </div>
        <Posts />
      </section>
    </>
  );
}

export default UserPosts;

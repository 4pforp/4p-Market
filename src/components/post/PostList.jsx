import Post from "./Post";

function PostList({ post, from }) {
  return (
    <>
      {post &&
        post.map((content) => {
          return <Post key={content.id} content={content} from={from} />;
        })}
    </>
  );
}

export default PostList;

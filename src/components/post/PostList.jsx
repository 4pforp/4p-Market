import Post from "./Post";
function PostList({ post, from, remove }) {
  return (
    <>
      {post &&
        post.map((content) => {
          return (
            <Post
              key={content.id}
              content={content}
              from={from}
              //삭제 후 리렌더링 위해 내려준 props
              remove={remove}
            />
          );
        })}
    </>
  );
}

export default PostList;

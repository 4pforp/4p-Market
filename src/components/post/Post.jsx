import Article from "./Article";
import "./Post.scss";

function Post({ content, from, remove }) {
  return (
    <>
      <li className="item-post">
        <Article
          content={content}
          from={from}
          remove={remove}
        />
      </li>
    </>
  );
}

export default Post;

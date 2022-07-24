import Article from "./Article";
import "./Post.scss";

function Post({ content, from, remove }) {
  return (
    <>
      <li className="item-post">
        <Article
          content={content}
          from={from}
          //삭제 후 리렌더링 위해 내려준 props
          remove={remove}
        />
      </li>
    </>
  );
}

export default Post;

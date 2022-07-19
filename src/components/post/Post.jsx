import Article from "./Article";
import "./Post.scss";

function Post({ content, from }) {
  return (
    <>
      <li className="item-post">
        <Article content={content} from={from} />
      </li>
    </>
  );
}

export default Post;

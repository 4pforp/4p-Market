import "./Post.scss";
import Article from "./Article";

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

import "./CommentPage.scss";
import CommonHeader from "../../../components/header/CommonHeader";
import CommentFooter from "../../../components/footer/CommentFooter";
import CommentList from "./CommentList";
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import UserContext from "../../../context/UserContext";
import axios from "axios";
import Article from "../../../components/post/Article";

function CommentPage() {
  const { token } = useContext(UserContext);
  const params = useParams();
  const postid = params.postid;
  const [post, setPost] = useState();

  useEffect(() => {
    const authToken = "Bearer " + token;
    const url = "https://mandarin.api.weniv.co.kr/post/" + postid;
    async function getUser() {
      try {
        const res = await axios.get(url, {
          headers: {
            Authorization: authToken,
            "Content-type": "application/json",
          },
        });
        setPost(res.data.post);
      } catch (err) {}
    }
    getUser();
  }, [postid, token]);

  return (
    <>
      <CommonHeader />
      <main className="container-comment-page">
        <div className="wrapper-comment-post">
          {post && <Article content={post} from="comment" />}
        </div>
        <CommentList />
      </main>
      <CommentFooter />
    </>
  );
}

export default CommentPage;

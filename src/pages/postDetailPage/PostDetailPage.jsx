import { React, useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../../context/UserContext";
import axios from "axios";
import useDelete from "../../hooks/useDelete";
import CommonHeader from "../../components/header/CommonHeader";
import Article from "../../components/post/Article";
import NotFound from "../../components/notFound/NotFound";
import CommentList from "./comment/CommentList";
import pendingImg from "../../assets/logo_loading_purple.svg";
import "./PostDetailPage.scss";

function PostDetailPage() {
  const { token } = useContext(UserContext);
  const { remove } = useDelete();
  const params = useParams();
  const postid = params.postid;
  const [post, setPost] = useState();
  const [view, setView] = useState("pending");

  useEffect(() => {
    const url = "https://mandarin.api.weniv.co.kr/post/" + postid;
    async function getComment() {
      try {
        const res = await axios.get(url, {
          headers: {
            Authorization: token,
            "Content-type": "application/json",
          },
        });
        setPost(res.data.post);
        setView("fulfilled");
      } catch (err) {
        console.error(err);
        setView("rejected");
      }
    }
    getComment();
  }, []);

  return (
    <>
      <CommonHeader />
      {view === "fulfilled" && (
        <>
          <main className="container-comment-page">
            <div className="wrapper-comment-post">{post && <Article content={post} from="comment" remove={remove} />}</div>
            <CommentList postid={postid} post={post} />
          </main>
        </>
      )}
      {view === "pending" && (
        <>
          <img src={pendingImg} className="img-pending" alt="loading" />
        </>
      )}
      {view === "rejected" && (
        <>
          <NotFound />
        </>
      )}
    </>
  );
}

export default PostDetailPage;

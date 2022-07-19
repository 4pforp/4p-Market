import { React, useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../../context/UserContext";
import axios from "axios";
import CommonHeader from "../../components/header/CommonHeader";
import DefaultModal from "../../components/modal/contents/DefaultModal";
import Article from "../../components/post/Article";
import NotFound from "../../components/notFound/NotFound";
import CommentList from "./comment/CommentList";
import pendingImg from "../../assets/logo_loading_purple.svg";
import "./PostDetailPage.scss";

function PostDetailPage() {
  const { token } = useContext(UserContext);
  const params = useParams();
  const postid = params.postid;
  const [post, setPost] = useState();
  const [onModal, setOnModal] = useState(false);
  const [view, setView] = useState("pending");

  useEffect(() => {
    const authToken = "Bearer " + token;
    const url = "https://mandarin.api.weniv.co.kr/post/" + postid;
    async function getComment() {
      try {
        const res = await axios.get(url, {
          headers: {
            Authorization: authToken,
            "Content-type": "application/json",
          },
        });
        setPost(res.data.post);
        setView("true");
      } catch (err) {
        console.error(err);
        setView("false");
      }
    }
    getComment();
  }, [postid, token]);

  return (
    <>
      {onModal && <DefaultModal setOnModal={(bool) => setOnModal(bool)} />}
      <CommonHeader handleClick={() => setOnModal(true)} />
      {view === "true" && (
        <>
          <main className="container-comment-page">
            <div className="wrapper-comment-post">
              {post && <Article content={post} from="comment" />}
            </div>
            <CommentList postid={postid} post={post} />
          </main>
        </>
      )}
      {view === "pending" && (
        <>
          <img src={pendingImg} className="img-pending" alt="loading" />
        </>
      )}
      {view === "false" && (
        <>
          <NotFound />
        </>
      )}
    </>
  );
}

export default PostDetailPage;

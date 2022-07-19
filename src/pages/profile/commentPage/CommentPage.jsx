import { React, useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../../../context/UserContext";
import axios from "axios";
import CommonHeader from "../../../components/header/CommonHeader";
import DefaultModal from "../../../components/modal/contents/DefaultModal";
import Article from "../../../components/post/Article";
import CommentList from "./CommentList";
import "./CommentPage.scss";

function CommentPage() {
  const { token } = useContext(UserContext);
  const params = useParams();
  const postid = params.postid;
  const [post, setPost] = useState();
  const [onModal, setOnModal] = useState(false);

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
      } catch (err) {}
    }
    getComment();
  }, [postid, token]);

  return (
    <>
      {onModal && <DefaultModal setOnModal={(bool) => setOnModal(bool)} />}
      <CommonHeader handleClick={() => setOnModal(true)} />
      <main className="container-comment-page">
        <div className="wrapper-comment-post">
          {post && <Article content={post} from="comment" />}
        </div>
        <CommentList postid={postid} post={post} />
      </main>
    </>
  );
}

export default CommentPage;

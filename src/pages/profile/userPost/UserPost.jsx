import "./UserPost.scss";
import axios from "axios";
import { useEffect, useContext, useState } from "react";
import UserContext from "../../../context/UserContext";
import PostList from "./PostList";

function UserPost({ accountname, from }) {
  const { token } = useContext(UserContext);
  const [post, setPost] = useState();
  useEffect(() => {
    const authToken = "Bearer " + token;
    const url =
      "https://mandarin.api.weniv.co.kr/post/" + accountname + "/userpost";
    async function getPost() {
      try {
        const res = await axios.get(url, {
          headers: {
            Authorization: authToken,
            "Content-type": "application/json",
          },
        });
        setPost(res.data.post);
      } catch (err) {
        console.error(err);
      }
    }
    getPost();
  }, [accountname, token]);

  return (
    <>
      <section className="container-post">
        <h3 className="a11y-hidden">포스트 목록</h3>
        <div className="container-view-btn">
          <div className="wrapper-view-btn">
            <button className="btn-view post">
              <strong className=" a11y-hidden">post view</strong>
            </button>
            <button className="btn-view album">
              <strong className=" a11y-hidden">album view</strong>
            </button>
          </div>
        </div>
        <div className="wrapper-post ">
          <ol className="list-posts">
            <PostList post={post} from={from} />
          </ol>
        </div>
      </section>
    </>
  );
}

export default UserPost;

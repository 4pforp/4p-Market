import { React, useEffect, useContext, useState } from "react";
import UserContext from "../../../context/UserContext";
import axios from "axios";
import PostList from "../../../components/post/PostList";
import "./UserPost.scss";

function UserPost({ accountname, from }) {
  const { token } = useContext(UserContext);
  const [post, setPost] = useState();
  const [view, setView] = useState("list");
  const [listClicked, setListClicked] = useState("on");
  const [albumClicked, setAlbumClicked] = useState("off");

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

  function handleClick(e) {
    if (e.target.classList.contains("list")) {
      setView("list");
      setListClicked("on");
      setAlbumClicked("off");
    } else {
      setView("album");
      setListClicked("off");
      setAlbumClicked("on");
    }
  }

  return (
    <>
      <section className="container-post">
        <h3 className="a11y-hidden">포스트 목록</h3>
        <div className="container-view-btn">
          <div className="wrapper-view-btn">
            <button
              className={`btn-view list ${listClicked}`}
              onClick={handleClick}
            >
              <strong className=" a11y-hidden">post view</strong>
            </button>
            <button
              className={`btn-view album ${albumClicked}`}
              onClick={handleClick}
            >
              <strong className=" a11y-hidden">album view</strong>
            </button>
          </div>
        </div>
        <div className="wrapper-post">
          <ol className={`list-posts ${view}`}>
            <PostList post={post} from={from} />
          </ol>
        </div>
      </section>
    </>
  );
}

export default UserPost;

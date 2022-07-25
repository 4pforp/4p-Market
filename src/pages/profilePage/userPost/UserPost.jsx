import { React, useEffect, useContext, useState, useRef } from "react";
import UserContext from "../../../context/UserContext";
import axios from "axios";
import PostAlbum from "./PostAlbum";
import useDelete from "../../../hooks/useDelete";
import PostList from "../../../components/post/PostList";
import "./UserPost.scss";

function UserPost({ accountname, from }) {
  const { token } = useContext(UserContext);
  const [post, setPost] = useState();
  const [reloadePost, setReloadPost] = useState(true);
  const Container = useRef();
  const [postView, setPostView] = useState("list");
  const [listClicked, setListClicked] = useState("on");
  const [albumClicked, setAlbumClicked] = useState("off");
  const [reloadNeed, setReloadNeed] = useState(false);
  const [reloadStop, setReloadStop] = useState(false);
  const [updatedCount, setUpdatedCount] = useState(0);
  const [skip, setSkip] = useState(0);

  // post 삭제 후 업데이트 위한 함수 선언, props로 넘겨주기 위함
  const { remove, isUpdate } = useDelete();

  useEffect(() => {
    // 다른페이지에서 넘어오는 경우 skip 초기화
    setSkip(0);
    setReloadStop(false);
    // 포스트 불러오기
    async function getPost() {
      const url =
        "https://mandarin.api.weniv.co.kr/post/" +
        accountname +
        "/userpost" +
        "/?limit=15" +
        "&skip=" +
        skip;
      try {
        const res = await axios.get(url, {
          headers: {
            Authorization: token,
            "Content-type": "application/json",
          },
        });
        setPost(res.data.post);
      } catch (err) {
        console.error(err);
      }
    }
    getPost();
  }, [accountname, token, setReloadPost, isUpdate]);

  useEffect(() => {
    // 화면 마지막에 도달하면 ReloadNeed!
    function infinitScoll() {
      const postHeight = document
        .querySelector(".wrapper-for-scroll")
        .getBoundingClientRect().height;
      const targetHeight = Math.floor(
        Container.current.getBoundingClientRect().height + postHeight
      );
      const currentScrollY = Math.floor(window.scrollY + window.innerHeight);
      targetHeight < currentScrollY && setReloadNeed(true);
    }

    window.addEventListener("scroll", infinitScoll);

    // 스크롤시 데이터 추가 요청 함수
    async function getPosts() {
      const url =
        "https://mandarin.api.weniv.co.kr/post/" +
        accountname +
        "/userpost" +
        "/?limit=15" +
        "&skip=" +
        skip;
      try {
        const res = await axios.get(url, {
          headers: {
            Authorization: token,
            "Content-type": "application/json",
          },
        });
        console.log(res);
        // 첫 데이터면 전체 데이터 받아오기/데이터가 있으면 스프레드 문법 사용하여 추가하기
        if (skip === 0) {
          setPost(res.data.post);
        } else {
          setPost([...post, ...res.data.post]);
        }
        // 배열이 비어있으면 데이터 요청 차단
        res.data.post.length === 0 && setReloadStop(true);
        setUpdatedCount(updatedCount + 1);
        setReloadNeed(false);
        setSkip(skip + 15);
      } catch (err) {
        console.error(err);
      }
    }
    // 화면 마지막에 도달하면 infinite scroll 시작
    if (reloadNeed === true) {
      reloadStop || getPosts();
    }
    // 언마운트시에 스크롤이벤트 발생하지 않도록!
    return () => {
      window.removeEventListener("scroll", infinitScoll);
    };
  }, [token, post, updatedCount, reloadNeed, skip]);

  // 앨범뷰 / 리스트뷰 선택
  function handleClick(e) {
    if (e.target.classList.contains("list")) {
      setPostView("list");
      setListClicked("on");
      setAlbumClicked("off");
    } else {
      setPostView("album");
      setListClicked("off");
      setAlbumClicked("on");
    }
  }

  return (
    <>
      <section className="container-post" ref={Container}>
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
          <ol className={`list-posts ${postView}`}>
            {postView === "list" ? (
              <PostList post={post} from={from} remove={remove} />
            ) : (
              <PostAlbum setPostView={setPostView} accountname={accountname} />
            )}
          </ol>
        </div>
      </section>
    </>
  );
}

export default UserPost;

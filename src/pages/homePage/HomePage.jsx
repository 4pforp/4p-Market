import { React, useContext, useEffect, useState, useRef } from "react";
import UserContext from "../../context/UserContext";
import axios from "axios";
import PostList from "../../components/post/PostList";
import MainHeader from "../../components/header/MainHeader";
import MainFooter from "../../components/footer/MainFooter";
import Splash from "../../components/splash/Splash";
import NotFound from "../../components/notFound/NotFound";
import InitialFeed from "./initialFeed/InitialFeed";
import LoginPage from "../logInPage/LoginPage";
import pendingImg from "../../assets/logo_loading_purple.svg";
import "./HomePage.scss";

function HomePage() {
  const { token, initialToken } = useContext(UserContext);
  const [posts, setPosts] = useState();
  const [view, setView] = useState("pending");
  const Container = useRef();
  const [reloadNeed, setReloadNeed] = useState(false);
  const [reloadStop, setReloadStop] = useState(false);
  const [updatedCount, setUpdatedCount] = useState(0);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    // 포스트 불러오기
    async function getPosts() {
      const url =
        "https://mandarin.api.weniv.co.kr/post/feed" +
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
        setPosts(res.data.posts);
        setView("fulfilled");
      } catch (err) {
        setView("rejected");
      }
    }
    getPosts();
  }, [token, view]);

  useEffect(() => {
    // 화면 마지막에 도달하면 ReloadNeed!
    function infinitScoll() {
      const targetHeight = Math.floor(
        Container.current.getBoundingClientRect().height
      );
      const currentScrollY = Math.floor(
        window.scrollY + window.innerHeight - 50
      );
      targetHeight < currentScrollY && setReloadNeed(true);
    }

    window.addEventListener("scroll", infinitScoll);

    // 스크롤시 데이터 추가 요청 함수
    async function getPosts() {
      const url =
        "https://mandarin.api.weniv.co.kr/post/feed" +
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
        // 첫 데이터면 전체 데이터 받아오기/데이터가 있으면 스프레드 문법 사용하여 추가하기
        if (skip === 0) {
          setPosts(res.data.posts);
        } else {
          setPosts([...posts, ...res.data.posts]);
        }
        // 배열이 비어있으면 데이터 요청 차단
        res.data.posts.length === 0 && setReloadStop(true);
        setUpdatedCount(updatedCount + 1);
        setReloadNeed(false);
        setSkip(skip + 15);
      } catch (err) {
        setView("rejected");
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
  }, [token, posts, updatedCount, reloadNeed, skip, initialToken, view]);

  return (
    <>
      {sessionStorage.getItem("splash") ? null : <Splash />}

      {initialToken ? (
        <>
          <MainHeader />
          {view === "fulfilled" && posts && posts.length > 0 && (
            <>
              <main className="main-home feed">
                <section className="container-post feed">
                  <div className="wrapper-post">
                    <ol className="list-posts" ref={Container}>
                      <PostList post={posts} from="home" />
                    </ol>
                  </div>
                </section>
              </main>
            </>
          )}
          {view === "fulfilled" && posts.length === 0 && (
            <>
              <main className="main-home">
                <InitialFeed />
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
          <MainFooter />
        </>
      ) : (
        <>
          <LoginPage />
        </>
      )}
    </>
  );
}

export default HomePage;

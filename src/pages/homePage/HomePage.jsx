import { React, useContext, useEffect, useState } from "react";
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
  const { token, setMyAccountname } = useContext(UserContext);
  const [posts, setPosts] = useState();
  const [view, setView] = useState("pending");
  const [tokenIsValid, setTokenIsValid] = useState();

  useEffect(() => {
    // 나의 accountname 받아오기
    async function getAccountname() {
      const authToken = "Bearer " + token;
      const url = "https://mandarin.api.weniv.co.kr/user/myinfo";
      try {
        const res = await axios.get(url, {
          headers: {
            Authorization: authToken,
            "Content-type": "application/json",
          },
        });
        setMyAccountname(res.data.user.accountname);
        getPost();
      } catch (err) {
        console.error(err);
      }
    }
    token && getTokenIsValid();
    tokenIsValid && getAccountname();
  });
  async function getTokenIsValid() {
    const authToken = "Bearer " + token;
    const url = "https://mandarin.api.weniv.co.kr/user/checktoken";
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: authToken,
          "Content-type": "application/json",
        },
      });
      setTokenIsValid(res.data.isValid);
    } catch (err) {
      console.error(err);
    }
  }

  async function getPost() {
    // 팔로잉 유저의 포스트 받아오기
    const url = "https://mandarin.api.weniv.co.kr/post/feed";
    const authToken = "Bearer " + token;

    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: authToken,
          "Content-type": "application/json",
        },
      });
      setPosts(res.data.posts);
      setView("true");
    } catch (err) {
      console.error(err);
      setView("false");
    }
  }

  return (
    <>
      {sessionStorage.getItem("splash") ? null : <Splash />}
      {token ? (
        <>
          <MainHeader />
          {view === "true" && posts && posts.length > 0 && (
            <>
              <main className="main-home feed">
                <section className="container-post feed">
                  <div className="wrapper-post">
                    <ol className="list-posts">
                      <PostList post={posts} from="home" />
                    </ol>
                  </div>
                </section>
              </main>
            </>
          )}
          {view === "true" && posts.length === 0 && (
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
          {view === "false" && (
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

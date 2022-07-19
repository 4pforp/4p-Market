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
  const { token } = useContext(UserContext);
  const [posts, setPosts] = useState();
  const [view, setView] = useState("pending");

  useEffect(() => {
    const authToken = "Bearer " + token;
    const url = "https://mandarin.api.weniv.co.kr/post/feed";
    async function getPost() {
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
    token && getPost();
  }, [token]);

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

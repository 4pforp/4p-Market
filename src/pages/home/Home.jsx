import MainHeader from "../../components/header/MainHeader";
import MainFooter from "../../components/footer/MainFooter";
import Login from "../logIn/Login";
import HomeSearch from "./homeSearch/HomeSearch";
import "./Home.scss";
import UserContext from "../../context/UserContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import PostList from "../../components/post/PostList";
import NotFound from "../notFound/NotFound";
import pendingImg from "../../assets/logo_loading.svg";

function Home() {
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
                <HomeSearch />
              </main>
            </>
          )}
          {view === "pending" && (
            <>
              <img src={pendingImg} className="img-pending" alt="error" />
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
          <Login />
        </>
      )}
    </>
  );
}

export default Home;

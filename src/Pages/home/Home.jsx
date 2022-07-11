import MainHeader from "../../Components/header/MainHeader";
import MainFooter from "../../Components/footer/MainFooter";
import Login from "../logIn/Login";
import HomeSearch from "./homeSearch/HomeSearch";
import "./Home.scss";

function Home() {
  const isLogin = localStorage.getItem("token");
  if (isLogin) {
    return (
      <>
        <MainHeader />
        <main className="main-home">
          <HomeSearch />
        </main>
        <MainFooter />
      </>
    );
  } else {
    return <Login />;
  }
}
export default Home;

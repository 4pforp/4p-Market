import MainNav from "../../Components/navBar/MainNav";
import MainFooter from "../../Components/footer/MainFooter";
import Login from "../logIn/Login";
import HomeSearch from './homeSearch/HomeSearch';
import "./Home.scss";

function Home() {
  const isLogin = localStorage.getItem("token");
  if (isLogin) {
    return (
      <>
        <MainNav />
        <main className="main-home">
          <HomeSearch/>
        </main>
        <MainFooter />
      </>
    );
  } else {
    return <Login />;
  }
}
export default Home;

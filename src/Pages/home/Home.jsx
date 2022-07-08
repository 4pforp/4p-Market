import { useContext } from "react";
import LoginContext from "../LoginContext";
import MainNav from "../../Components/navBar/MainNav";
import MainFooter from "../../Components/footer/MainFooter";
import Login from "../logIn/Login";
import HomeSearch from './homeSearch/HomeSearch';
import "./Home.scss";

function Home() {
  const { isLogin } = useContext(LoginContext);
  // 헤더푸터 작업하실 때 isLogin변수를 true로 바꾸고 작업하시면 됩니다~!
  if (true) {
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

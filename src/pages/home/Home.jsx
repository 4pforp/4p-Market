import MainHeader from "../../components/header/MainHeader";
import MainFooter from "../../components/footer/MainFooter";
import Login from "../logIn/Login";
import HomeSearch from "./homeSearch/HomeSearch";
import "./Home.scss";
import LoginContext from "../../context/LoginContext";
import { useContext } from "react";

function Home() {
  const { isLogin } = useContext(LoginContext);

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

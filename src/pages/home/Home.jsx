import MainHeader from "../../components/header/MainHeader";
import MainFooter from "../../components/footer/MainFooter";
import Login from "../logIn/Login";
import HomeSearch from "./homeSearch/HomeSearch";
import "./Home.scss";
import UserContext from "../../context/UserContext";
import { useContext } from "react";

function Home() {
  const { token } = useContext(UserContext);

  return (
    <>
      {token ? (
        <>
          <MainHeader />
          <main className="main-home">
            <HomeSearch />
          </main>
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

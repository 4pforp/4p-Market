import { useContext } from "react";
import LoginContext from "../LoginContext";
import MainHeader from "../../Components/header/MainHeader";
import MainFooter from "../../Components/footer/MainFooter";
import Login from "../logIn/Login";
import "./Home.scss";

function Home() {
  const { isLogin } = useContext(LoginContext);
  // 헤더푸터 작업하실 때 isLogin변수를 true로 바꾸고 작업하시면 됩니다~!
  if (isLogin) {
    return (
      <>
        <MainHeader />
        <h1>피드 페이지!</h1>
        <p>
          여기 메인 헤더는 채팅,프로필헤더랑 다르게 돋보기 버튼이 있어요! 메인
          헤더에 props로 메인헤더인지 내려줘서 조건에 따라 다르게 보이게 하면
          좋을 것 같야요~!
        </p>
        <MainFooter />
      </>
    );
  } else {
    return <Login />;
  }
}
export default Home;

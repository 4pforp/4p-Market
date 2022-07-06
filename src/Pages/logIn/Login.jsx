import LoginSection from "./LoginSection";
import "./Login.scss";
import symbolLogoW from "../../assets/symbol-logo-W.svg";

function Login() {
  return (
    <>
      <main className="content-loginhome">
        <h1 className="blind">감귤마켓</h1>
        <img className="img-loginlogo" src={symbolLogoW} alt="로고이미지" />
        <LoginSection />
      </main>
    </>
  );
}

export default Login;

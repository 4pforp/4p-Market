import LoginSection from "./LoginSection";
import "./Login.scss";
import whiteLogo from "../../assets/logo_white.svg";

function Login() {
  return (
    <>
      <main className="container-login-home">
        <h1 className="a11y-hidden">감귤마켓</h1>
        <img className="img-logo" src={whiteLogo} alt="로고이미지" />
        <LoginSection />
      </main>
    </>
  );
}

export default Login;

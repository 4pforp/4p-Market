import LoginSection from "./loginSection/LoginSection";
import "./LoginPage.scss";
import whiteLogo from "../../assets/logo_white.svg";

function LoginPage() {
  return (
    <>
      <main className="container-login-home">
        <h1 className="a11y-hidden">뽀삐뽀삐</h1>
        <img className="img-logo" src={whiteLogo} alt="로고이미지" />
        <LoginSection />
      </main>
    </>
  );
}

export default LoginPage;

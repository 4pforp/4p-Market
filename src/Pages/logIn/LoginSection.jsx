import SocialLoginBtn from "./SocialLoginBtn";
import EmailLoginBtn from "./EmailLoginBtn";
import "./LoginSection.scss";

function LoginSection() {
  return (
    <section className="section-login">
      <h2 className="blind">로그인 섹션입니다.</h2>
      <SocialLoginBtn />
      <EmailLoginBtn />
    </section>
  );
}

export default LoginSection;

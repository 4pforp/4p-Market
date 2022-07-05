import SocialLoginBtn from "../../Components/button/SocialLoginBtn";
import EmailLoginBtn from "./UserAccount";
import "./LoginSection.scss";

const social = [
  {
    id: 1,
    name: "카카오톡",
    style: "link-kakao",
  },
  {
    id: 2,
    name: "구글",
    style: "link-google",
  },
  {
    id: 3,
    name: "페이스북",
    style: "link-facebook",
  },
];

function LoginSection() {
  return (
    <section className="section-login">
      <h2 className="blind">로그인 섹션입니다.</h2>
      <ul className="list-socialbtn">
        {social.map((social) => (
          <SocialLoginBtn
            key={social.id}
            name={social.name}
            style={social.style}
          />
        ))}
      </ul>
      <EmailLoginBtn />
    </section>
  );
}

export default LoginSection;

import "./SocialLoginBtn.scss";

function SocialLoginBtn({ name, style }) {
  return (
    <li>
      <a href="#none" className={style}>
        {name} 계정으로 로그인
      </a>
    </li>
  );
}

export default SocialLoginBtn;

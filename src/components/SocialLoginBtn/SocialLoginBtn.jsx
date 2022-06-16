import './social-loginbtn.scss';

function SocialLoginBtn () {
  return (
    <ul className="list-social-login">
      <li>
        <a href="#none" className="link-kakao">
          카카오톡 계정으로 로그인
        </a>
      </li>
      <li>
        <a href="#none" className="link-google">
          구글 계정으로 로그인
        </a>
      </li>
      <li>
        <a href="#none" className="link-facebook">
          페이스북 계정으로 로그인
        </a>
      </li>
    </ul>
  )
}

export default SocialLoginBtn;
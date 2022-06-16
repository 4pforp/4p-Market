import SocialLoginBtn from '../SocialLoginBtn/SocialLoginBtn';
import'./login-section.scss';
import EmailLoginBtn from '../EmailLoiginBtn/EmailLoginBtn';

function LoginSection () {
  return (
      <section className="content-login-section">
        <h2 className="blind">로그인 섹션입니다.</h2>
        <SocialLoginBtn/>
        <EmailLoginBtn/>
      </section>
  )
}

export default LoginSection
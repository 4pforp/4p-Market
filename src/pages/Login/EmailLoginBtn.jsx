import './EmailLoginBtn.scss';

function EmailLoginBtn () {
  return (
    <div className="wrap-linkmembership">
      <a href="#none" className="link-loginemail">이메일로 로그인</a>
      <span className="line">|</span>
      <a href="#none" className="link-signup">회원가입</a>
    </div>
  )
}

export default EmailLoginBtn;
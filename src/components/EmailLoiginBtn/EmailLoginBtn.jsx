import './email-loginbtn.scss';

function EmailLoginBtn () {
  return (
    <div className="wrap-link-member">
      <a href="#none" className="link-signup">이메일로 로그인</a>
      <span className="line">|</span>
      <a href="#none" className="link-find">회원가입</a>
    </div>
  )
}

export default EmailLoginBtn;
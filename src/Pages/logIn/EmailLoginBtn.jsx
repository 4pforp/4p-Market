import './EmailLoginBtn.scss';
import { Link } from 'react-router-dom';

function EmailLoginBtn () {
  return (
    <div className="wrap-linkmembership">
      <Link to='/emaillogin' className="link-loginemail">이메일로 로그인</Link>
      <span className="line">|</span>
      <Link to='/signup' className="link-signup">회원가입</Link>
    </div>
  )
}

export default EmailLoginBtn;
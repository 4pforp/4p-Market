import "./UserAccount.scss";
import { Link } from "react-router-dom";

function EmailLoginBtn() {
  return (
    <div className="wrapper-link-account">
      <Link to="/login" className="link-login">
        이메일로 로그인
      </Link>
      <span className="line-vertical">|</span>
      <Link to="/signup" className="link-login">
        회원가입
      </Link>
    </div>
  );
}

export default EmailLoginBtn;

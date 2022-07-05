import { Link } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./EmailLogin.scss";

function EmailLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isActive, setIsActive] = useState(true);

  const history = useHistory();

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  //이메일 주소 유효성 검사
  const checkEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  //로그인버튼 활성화 검사
  const loginActive = () => {
    return checkEmail.test(email) && password.length > 5
      ? setIsActive(false)
      : setIsActive(true);
  };

  // 로그인
  let handleLogin = async function (event) {
    event.preventDefault();

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const error = document.querySelector(".errorMsg");

    const mainUrl = "https://mandarin.api.weniv.co.kr";
    const reqPath = "/user/login";
    const loginData = {
      user: {
        email: email,
        password: password,
      },
    };

    try {
      let res = await axios({
        method: "POST",
        url: mainUrl + reqPath,
        data: loginData,
      });
      if (res.data.message === "이메일 또는 비밀번호가 일치하지 않습니다.") {
        error.style.display = "block";
      } else {
        history.push("/home");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="emaillogin-section">
      <h1 className="title-emaillogin">로그인</h1>
      <form method="get" className="content-form" onSubmit={handleLogin}>
        <label htmlFor="email" className="label-email">
          이메일
        </label>
        <input
          onKeyUp={loginActive}
          id="input-email"
          type="id"
          onChange={onEmailHandler}
        />
        <label htmlFor="password" className="label-password">
          비밀번호
        </label>
        <input
          onKeyUp={loginActive}
          id="input-password"
          type="password"
          onChange={onPasswordHandler}
        />
        <strong className="errorMsg">
          *이메일 또는 비밀번호가 일치하지 않습니다.
        </strong>

        <button className={`button-login ${isActive}`} disabled={isActive}>
          <Link to="/">로그인</Link>
        </button>
      </form>
      <Link to="/signup" className="link-signup">
        이메일로 회원가입
      </Link>
    </section>
  );
}
export default EmailLogin;

import { useState, useRef, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginContext from "../../../Context/LoginContext";
import axios from "axios";
import "./EmailLogin.scss";
import "../Button.scss";
import Button from "../Button";

function EmailLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const { setIsLogin } = useContext(LoginContext);

  const inputRef = useRef();
  const navigate = useNavigate();

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  //페이지 로딩됐을 때 이메일 인풋 포커스
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  //이메일 주소 유효성 검사
  const checkEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,6}$/i;

  //로그인버튼 활성화 검사
  function handleKeyUp() {
    return checkEmail.test(email) && password.length > 5
      ? setIsActive(true)
      : setIsActive(false);
  }

  // 로그인
  async function SubmitLoginForm(e) {
    e.preventDefault();
    const loginData = {
      user: {
        email: email,
        password: password,
      },
    };

    try {
      const res = await axios.post(
        "https://mandarin.api.weniv.co.kr/user/login",
        loginData,
        {
          header: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = res.data;

      if (data.message === "이메일 또는 비밀번호가 일치하지 않습니다.") {
        setIsWrong(true);
      } else {
        localStorage.setItem("token", data.user.token);
        setIsLogin(localStorage.getItem("token"));
        setIsWrong(false);
        navigate("/");
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <section className="container-login-email">
      <h1 className="title-login-email">로그인</h1>
      <form method="get" className="container-form" onSubmit={SubmitLoginForm}>
        <div className="wrapper-email">
          <label htmlFor="email" className="label-email">
            이메일
          </label>
          <input
            onKeyUp={handleKeyUp}
            id="input-email"
            type="id"
            onChange={handleChangeEmail}
            ref={inputRef}
          />
        </div>
        <div className="wrapper-password">
          <label htmlFor="password" className="label-password">
            비밀번호
          </label>
          <input
            onKeyUp={handleKeyUp}
            id="input-password"
            type="password"
            onChange={handleChangePassword}
          />
          <strong className={`errorMsg ${isWrong}`}>
            * 이메일 또는 비밀번호가 일치하지 않습니다.
          </strong>
        </div>

        <Button type="submit" name="login" isActive={isActive}>
          로그인
        </Button>
      </form>
      <Link to="/signup" className="link-signup">
        이메일로 회원가입
      </Link>
    </section>
  );
}
export default EmailLogin;

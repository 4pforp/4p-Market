import { React, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";
import axios from "axios";
import ProfileSet from "./profileSet/ProfileSet";
import EmailSignUp from "./emailSignUp/EmailSignUp";
import "./SignUpPage.scss";

function SignUpPage() {
  const { setToken, setInitialToken } = useContext(UserContext);

  const userForm = {
    username: "",
    email: "",
    password: "",
    accountname: "",
    intro: "",
    image: "",
  };

  const [user, setUser] = useState(userForm);
  const [view, setView] = useState("EmailSignUp");
  const navigate = useNavigate();

  // 유저 정보 서버로 POST
  async function submitUserInfo() {
    const userInfo = { user: "" };
    userInfo.user = user;
    try {
      const res = await axios.post("https://mandarin.api.weniv.co.kr/user", userInfo, {
        header: {
          "Content-Type": "application/json",
        },
      });
      const loginData = {
        user: {
          email: user.email,
          password: user.password,
        },
      };
      login(loginData);
    } catch (err) {
      console.error(err);
    }
  }

  // 회원가입시 자동 로그인
  async function login(loginData) {
    try {
      const res = await axios.post("https://mandarin.api.weniv.co.kr/user/login", loginData, {
        header: {
          "Content-Type": "application/json",
        },
      });
      localStorage.setItem("token", res.data.user.token);
      setInitialToken(localStorage.getItem("token"));
      setToken("Bearer " + localStorage.getItem("token"));
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  }

  return <section className="signup-section">{view === "EmailSignUp" ? <EmailSignUp setView={setView} user={user} setUser={setUser} /> : <ProfileSet user={user} setUser={setUser} submitUserInfo={submitUserInfo} />}</section>;
}

export default SignUpPage;

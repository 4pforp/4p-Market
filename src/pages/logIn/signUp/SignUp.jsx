import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ProfileSet from "./profileSet/ProfileSet";
import EmailSignUp from "./emailSignUp/EmailSignUp";
import "./SignUp.scss";

function SignUp() {
  const userForm = {
    username: String,
    email: String,
    password: String,
    accountname: String,
    intro: String,
    image: String,
  };

  const [user, setUser] = useState(userForm);
  const [view, setView] = useState("EmailSignUp");
  const navigate = useNavigate();

  // 유저 정보 서버로 POST
  async function submitUserInfo() {
    const userInfo = { user: "" };
    userInfo.user = user;
    try {
      const res = await axios.post(
        "https://mandarin.api.weniv.co.kr/user",
        userInfo,
        {
          header: {
            "Content-Type": "application/json",
          },
        }
      );
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <section className="signup-section">
      {view === "EmailSignUp" ? (
        <EmailSignUp setView={setView} user={user} setUser={setUser} />
      ) : (
        <ProfileSet
          user={user}
          setUser={setUser}
          submitUserInfo={submitUserInfo}
        />
      )}
    </section>
  );
}

export default SignUp;

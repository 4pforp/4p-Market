import { useState, useContext } from "react";
import LoginContext from "../../LoginContext";
import "./SignUp.scss";
import ProfileSet from "./profileSet/ProfileSet";
import EmailSignUp from "./emailSignUp/EmailSignUp";
import axios from "axios";
import { useHistory } from "react-router-dom";

const userForm = {
  username: "",
  email: "",
  password: "",
  accountname: "",
  intro: "",
  image: "",
};

function SignUp() {
  const [user, setUser] = useState(userForm);
  const [view, setView] = useState("EmailSignUp");
  const { setIsLogin } = useContext(LoginContext);
  const history = useHistory();

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
      console.log(res);
      setIsLogin(true);
      history.push("/home");
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

import "./Splash.scss";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";

// 인트로 splash 페이지에서 일정시간 이후 홈페이지로 이동하는 기능
function Splash() {
  const navigate = useNavigate();
  const timeout = () => {
    setTimeout(() => {
      navigate("/home");
    }, 4000);
  };

  useEffect(() => {
    timeout();
    return () => {
      clearTimeout(timeout);
    };
  });

  return <Logo />;
}

export default Splash;

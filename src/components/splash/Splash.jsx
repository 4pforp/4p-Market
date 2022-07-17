import "./Splash.scss";
import { useEffect } from "react";
import Logo from "./Logo";
import SpalshContext from "../../context/SplashContext";
import { useState } from "react";
import { useContext } from "react";

// 인트로 Splash 컴포넌트 사용 후 일정 시간 이후 랜더링 중단 후 Splash 전역 상태 변경
function Splash() {
  const [blindSplash, setBlindSplash] = useState(false);
  const { setSplash } = useContext(SpalshContext);
  const timeout = () => {
    setTimeout(() => {
      setBlindSplash(!blindSplash);
      setSplash(true);
      return null;
    }, 3000);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeout);
    };
  });

  if (blindSplash === false) {
    timeout();
    return <Logo />;
  } else {
    return null;
  }
}

export default Splash;

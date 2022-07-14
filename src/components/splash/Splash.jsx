import "./Splash.scss";
import { useEffect } from "react";
import Logo from "./Logo";
import { useState } from "react";

// 인트로 Splash 컴포넌트 사용 후 일정 시간 이후 랜더링 중단
function Splash() {
  const [blindSplash, setBlindSplash] = useState(false);
  const timeout = () => {
    setTimeout(() => {
      setBlindSplash(!blindSplash);
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

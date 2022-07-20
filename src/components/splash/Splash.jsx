import { useEffect, useState } from "react";
import Logo from "./logo/Logo";
import "./Splash.scss";

// 인트로 Splash 컴포넌트 사용 후 일정 시간 이후 랜더링 중단, 세션스토리지에 저장
function Splash() {
  const [blindSplash, setBlindSplash] = useState(false);
  const timeout = () => {
    setTimeout(() => {
      setBlindSplash(!blindSplash);
      sessionStorage.setItem("splash", true);
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

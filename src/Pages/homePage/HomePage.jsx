import { useState } from "react";
import LoginPage from "../logInPage/LoginPage";
import FeedPage from "../feedPage/FeedPage";

function HomePage() {
  const [isLogin, setIsLogin] = useState(false);
  return <>{isLogin ? <FeedPage /> : <LoginPage />}</>;
}
export default HomePage;

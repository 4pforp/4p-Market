import { React, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./components/style/reset.scss";
import "./App.scss";
import EmailLogin from "./pages/logIn/emailLogin/EmailLogin";
import Splash from "./components/splash/Splash";
import SignUp from "./pages/logIn/signUp/SignUp";
import Home from "./pages/home/Home";
import UploadPost from "./pages/uploadPost/UploadPost";
import MyProfile from "./pages/profile/MyProfile";
import UserProfile from "./pages/profile/UserProfile";
import ChatPage from "./pages/chat/chatPage/ChatPage";
import ChatRoom from "./pages/chat/chatRoom/ChatRoom";
import Followers from "./pages/follow/Followers";
import Followings from "./pages/follow/Followings";
import Product from "./pages/product/Product";
import ProfileEdit from "./pages/profileEdit/ProfileEdit";
import UserSearch from "./pages/home/userSearch/UserSearch";
import CommentPage from "./pages/profile/commentPage/CommentPage";
import NotFound from "./pages/notFound/NotFound";
import LoginContext from "./context/LoginContext";

function App() {
  const [isLogin, setIsLogin] = useState(localStorage.getItem("token"));
  return (
    <div className="App">
      <LoginContext.Provider value={{ isLogin, setIsLogin }}>
        <BrowserRouter>
          <Routes>
            {isLogin ? (
              <>
                <Route path="/" element={<Splash />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/login" element={<EmailLogin />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
                <Route path="/search" element={<UserSearch />}></Route>
                <Route path="/chat" element={<ChatPage />}></Route>
                <Route path="/chatroom/:id" element={<ChatRoom />}></Route>
                <Route path="/upload" element={<UploadPost />}></Route>
                <Route path="/profile" element={<MyProfile />}></Route>
                <Route
                  path="/profile/usernum"
                  element={<UserProfile />}
                ></Route>
                <Route path="/followers" element={<Followers />}></Route>
                <Route path="/followings" element={<Followings />}></Route>
                <Route path="/comment" element={<CommentPage />}></Route>
                <Route path="/product" element={<Product />}></Route>
                <Route path="/profileedit" element={<ProfileEdit />}></Route>
                <Route path={"*"} element={<NotFound />}></Route>
              </>
            ) : (
              // 만약 url로 접근하려고 할 때 로그인 창으로 넘어가도록 추가
              <>
                <Route path="/" element={<Splash />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/login" element={<EmailLogin />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
              </>
            )}
          </Routes>
        </BrowserRouter>
      </LoginContext.Provider>
    </div>
  );
}

export default App;

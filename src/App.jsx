import { React, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./components/style/reset.scss";
import "./App.scss";
import EmailLogin from "./pages/logIn/emailLogin/EmailLogin";
import SignUp from "./pages/logIn/signUp/SignUp";
import Home from "./pages/home/Home";
import UploadPost from "./pages/uploadPost/UploadPost";
import Profile from "./pages/profile/Profile";
import ChatPage from "./pages/chat/chatPage/ChatPage";
import ChatRoom from "./pages/chat/chatRoom/ChatRoom";
import FollowList from "./pages/follow/FollowList";
import Product from "./pages/product/Product";
import ProfileEdit from "./pages/profileEdit/ProfileEdit";
import UserSearch from "./pages/home/userSearch/UserSearch";
import CommentPage from "./pages/profile/commentPage/CommentPage";
import NotFound from "./pages/notFound/NotFound";
import UserContext, { UserContextProvider } from "./context/UserContext";
import SplashContext, { SplashContextProvider } from "./context/SplashContext";
import Splash from "./components/splash/Splash";
import { useContext } from "react";

function Main() {
  const { token } = useContext(UserContext);
  const { splash } = useContext(SplashContext);
  return (
    <div className="App">
      {splash ? null : <Splash />}
      <BrowserRouter>
        <Routes>
          {token ? (
            <>
              <Route path="/" element={<Home />}></Route>
              <Route path="/login" element={<EmailLogin />}></Route>
              <Route path="/signup" element={<SignUp />}></Route>
              <Route path="/search" element={<UserSearch />}></Route>
              <Route path="/chat" element={<ChatPage />}></Route>
              <Route path="/chatroom/:id" element={<ChatRoom />}></Route>
              <Route path="/upload" element={<UploadPost />}></Route>
              <Route path="/:accountname" element={<Profile />}></Route>
              <Route
                path="/:accountname/followers"
                element={<FollowList />}
              ></Route>
              <Route
                path="/:accountname/followings"
                element={<FollowList />}
              ></Route>
              <Route path="/comment" element={<CommentPage />}></Route>
              <Route path="/product" element={<Product />}></Route>
              <Route path="/profileedit" element={<ProfileEdit />}></Route>
              <Route path={"*"} element={<NotFound />}></Route>
            </>
          ) : (
            // TODO 만약 url로 접근하려고 할 때 로그인 창으로 넘어가도록 추가
            <>
              <Route path="/" element={<Home />}></Route>
              <Route path="/login" element={<EmailLogin />}></Route>
              <Route path="/signup" element={<SignUp />}></Route>
              <Route path={"*"} element={<NotFound />}></Route>
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function App() {
  return (
    <SplashContextProvider>
      <UserContextProvider>
        <Main />
      </UserContextProvider>
    </SplashContextProvider>
  );
}

export default App;

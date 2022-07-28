import { React, useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./scrollRestoration/ScrollToTop";
import axios from "axios";
import UserContext, { UserContextProvider } from "./context/UserContext";

import HomePage from "./pages/homePage/HomePage";
import EmailLoginPage from "./pages/emailLoginPage/EmailLoginPage";
import SignUpPage from "./pages/signUpPage/SignUpPage";
import SearchUserPage from "./pages/searchUserPage/SearchUserPage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import ProfileEditPage from "./pages/profileEditPage/ProfileEditPage";
import PostDetailPage from "./pages/postDetailPage/PostDetailPage";
import FollowPage from "./pages/followPage/FollowPage";
import UploadPostPage from "./pages/uploadPostPage/UploadPostPage";
import UpdatePostPage from "./pages/updatePostPage/UpdatePostPage";
import UploadProductPage from "./pages/uploadProductPage/UploadProductPage";
import UpdateProductPage from "./pages/updateProductPage/UpdateProductPage";
import ChatPage from "./pages/chatPage/ChatPage";
import ChatRoom from "./pages/chatRoomPage/ChatRoomPage";
import NotFound from "./components/notFound/NotFound";
import "./components/style/reset.scss";
import "./App.scss";

function Main() {
  const { initialToken, token, setToken, setMyAccountname, setMyImage } = useContext(UserContext);
  useEffect(() => {
    // 1. 토큰 유효 확인
    async function getTokenIsValid() {
      const url = "https://mandarin.api.weniv.co.kr/user/checktoken";
      try {
        const res = await axios.get(url, {
          headers: {
            Authorization: token,
            "Content-type": "application/json",
          },
        });
        getAccountname();
      } catch (err) {
        setToken(null);
      }
    }
    // 2. 나의 accountname 요청
    async function getAccountname() {
      const url = "https://mandarin.api.weniv.co.kr/user/myinfo";
      try {
        const res = await axios.get(url, {
          headers: {
            Authorization: token,
            "Content-type": "application/json",
          },
        });
        // 3. 나의 image, accountname 전역변수 지정
        setMyImage(res.data.user.image);
        setMyAccountname(res.data.user.accountname);
      } catch (err) {
        console.error(err);
      }
    }
    initialToken && getTokenIsValid();
  }, [initialToken]);

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {token ? (
            <>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/login" element={<EmailLoginPage />}></Route>
              <Route path="/signup" element={<SignUpPage />}></Route>
              <Route path="/search" element={<SearchUserPage />}></Route>
              <Route path="/:accountname" element={<ProfilePage />}></Route>
              <Route path="/profileedit" element={<ProfileEditPage />}></Route>
              <Route path="/:accountname/:postid" element={<PostDetailPage />}></Route>
              <Route path="/:accountname/follow/:followtype" element={<FollowPage />}></Route>
              <Route path="/upload" element={<UploadPostPage />}></Route>
              <Route path="/upload/:postid" element={<UpdatePostPage />}></Route>
              <Route path="/product" element={<UploadProductPage />}></Route>
              <Route path="/product/:productid" element={<UpdateProductPage />}></Route>
              <Route path="/chat" element={<ChatPage />}></Route>
              <Route path="/chatroom/:id" element={<ChatRoom />}></Route>
              <Route path={"*"} element={<NotFound />}></Route>
            </>
          ) : (
            // TODO url로 비정상 접근시 로그인 창으로 넘어가도록 추가 (token 검증!) by 현지
            <>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/login" element={<EmailLoginPage />}></Route>
              <Route path="/signup" element={<SignUpPage />}></Route>
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
    <UserContextProvider>
      <Main />
    </UserContextProvider>
  );
}

export default App;

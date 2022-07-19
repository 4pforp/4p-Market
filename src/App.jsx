import { React, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserContext, { UserContextProvider } from "./context/UserContext";
import { ImageTestContextProvider } from "./context/ImageTestContext";
import HomePage from "./pages/homePage/HomePage";
import EmailLoginPage from "./pages/emailLoginPage/EmailLoginPage";
import SignUpPage from "./pages/signUpPage/SignUpPage";
import SearchUserPage from "./pages/searchUserPage/SearchUserPage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import ProfileEdit from "./pages/profileEdit/ProfileEdit";
import PostDetailPage from "./pages/postDetailPage/PostDetailPage";
import FollowPage from "./pages/followPage/FollowPage";
import UploadPostPage from "./pages/uploadPostPage/UploadPostPage";
import UploadProductPage from "./pages/uploadProductPage/UploadProductPage";
import ChatPage from "./pages/chatPage/ChatPage";
import ChatRoom from "./pages/chatRoomPage/ChatRoom";
import NotFound from "./components/notFound/NotFound";
import "./components/style/reset.scss";
import "./App.scss";

function Main() {
  const { token } = useContext(UserContext);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {token ? (
            <>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/login" element={<EmailLoginPage />}></Route>
              <Route path="/signup" element={<SignUpPage />}></Route>
              <Route path="/search" element={<SearchUserPage />}></Route>
              <Route path="/:accountname" element={<ProfilePage />}></Route>
              <Route path="/profileedit" element={<ProfileEdit />}></Route>
              <Route
                path="/:accountname/:postid"
                element={<PostDetailPage />}
              ></Route>
              <Route
                path="/:accountname/followings"
                element={<FollowPage />}
              ></Route>
              <Route
                path="/:accountname/followers"
                element={<FollowPage />}
              ></Route>
              <Route path="/upload" element={<UploadPostPage />}></Route>
              <Route path="/product" element={<UploadProductPage />}></Route>
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
      <ImageTestContextProvider>
        <Main />
      </ImageTestContextProvider>
    </UserContextProvider>
  );
}

export default App;

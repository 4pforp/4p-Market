import { React } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/Components/style/reset.scss";
import "./App.scss";
import EmailLogin from "./Pages/logIn/emailLogin/EmailLogin";
import Splash from "./Components/splash/Splash";
import SignUp from "./Pages/logIn/signUp/SignUp";
import Home from "./Pages/home/Home";
import MyProfile from "./Pages/profile/MyProfile";
import UserProfile from "./Pages/profile/UserProfile";
import ChatPage from "./Pages/chat/chatPage/ChatPage";
import ChatRoom from "./Pages/chat/chatRoom/ChatRoom";
import Followers from "./Pages/follow/Followers";
import Followings from "./Pages/follow/Followings";
import Post from "./Pages/post/Post";
import Product from "./Pages/product/Product";
import ProfileEdit from "./Pages/profileEdit/ProfileEdit";
import UserSearch from "./Pages/home/userSearch/UserSearch";
import CommentPage from "./Pages/profile/commentPage/CommentPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<EmailLogin />}></Route>
          <Route path="/search" element={<UserSearch />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/chat" element={<ChatPage />}></Route>
          <Route path="/chatroom/:id" element={<ChatRoom />}></Route>
          <Route path="/profile" element={<MyProfile />}></Route>
          <Route path="/profile/usernum" element={<UserProfile />}></Route>
          <Route path="/followers" element={<Followers />}></Route>
          <Route path="/followings" element={<Followings />}></Route>
          <Route path="/post" element={<Post />}></Route>
          <Route path="/comment" element={<CommentPage />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/profileedit" element={<ProfileEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

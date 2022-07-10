import { React } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/Components/style/reset.scss";
import "./App.scss";
import EmailLogin from "./Pages/logIn/emailLogin/EmailLogin";
import Splash from "./Components/splash/Splash";
import SignUp from "./Pages/logIn/signUp/SignUp";
import Home from "./Pages/home/Home";
import Profile from "./Pages/profile/Profile";
import Chat from "./Pages/chat/Chat";
import ChatRoom from "./Pages/chat/ChatRoom";
import Upload from "./Pages/post/Upload";
import Post from "./Pages/post/Post";
import Product from "./Pages/product/Product";
import ProfileEdit from "./Pages/profileEdit/ProfileEdit";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<EmailLogin />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/chat" element={<Chat />}></Route>
          <Route path="/chat/:chat1" element={<ChatRoom />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/upload" element={<Upload />}></Route>
          <Route path="/post" element={<Post />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/profileedit" element={<ProfileEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

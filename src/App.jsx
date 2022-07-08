import { React, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginContext from "./Pages/LoginContext";
import "../src/Components/style/reset.scss";
import "./App.scss";
import EmailLogin from "./Pages/logIn/emailLogin/EmailLogin";
import Splash from "./Components/splash/Splash";
import SignUp from "./Pages/logIn/signUp/SignUp";
import Home from "./Pages/home/Home";
import Profile from "./Pages/profile/Profile";
import Chat from "./Pages/chat/Chat";
import Post from "./Pages/post/Post";
import Product from "./Pages/product/Product";
import ProfileEdit from "./Pages/profileEdit/ProfileEdit";
import UserSearch from "./Pages/home/userSearch/UserSearch";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="App">
      <LoginContext.Provider value={{ isLogin, setIsLogin }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Splash />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/search" element={<UserSearch/>}></Route>
            <Route path="/login" element={<EmailLogin />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/chat" element={<Chat />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/post" element={<Post />}></Route>
            <Route path="/product" element={<Product />}></Route>
            <Route path="/profileedit" element={<ProfileEdit />}></Route>
          </Routes>
        </BrowserRouter>
      </LoginContext.Provider>
    </div>
  );
}

export default App;

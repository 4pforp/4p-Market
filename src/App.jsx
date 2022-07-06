import { React, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
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

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="App">
      <LoginContext.Provider value={{ isLogin, setIsLogin }}>
        <BrowserRouter>
          <Route path="/" exact component={Splash}></Route>
          <Route path="/home" exact component={Home}></Route>
          <Route path="/login" exact component={EmailLogin}></Route>
          <Route path="/signup" exact component={SignUp}></Route>
          <Route path="/chat" exact component={Chat}></Route>
          <Route path="/profile" exact component={Profile}></Route>
          <Route path="/post" exact component={Post}></Route>
          <Route path="/product" exact component={Product}></Route>
          <Route path="/profileedit" exact component={ProfileEdit}></Route>
        </BrowserRouter>
      </LoginContext.Provider>
    </div>
  );
}

export default App;

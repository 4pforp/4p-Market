import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "../src/Components/style/reset.scss";
import "./App.scss";
import EmailLogin from "./Pages/emailLogin/EmailLogin";
import Splash from "./Components/splash/Splash";
import signUp from "./Pages/signUp/SignUp";
import HomePage from "./Pages/homePage/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Splash}></Route>
        <Route path="/home" exact component={HomePage}></Route>
        <Route path="/login" exact component={EmailLogin}></Route>
        <Route path="/signup" exact component={signUp}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;

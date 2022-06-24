import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import '../src/Components/scss/reset.scss';
import './App.scss';
import Login from './Pages/logIn/Login';
import EmailLogin from './Pages/logIn/EmailLogin';
import Splash from './Pages/logIn/Splash';
import signUp from './Pages/signUp/signUp';

function App() {
  return (
  <div className="App">
      <BrowserRouter>
      <Route path='/' exact component={Splash}></Route>
      <Route path='/login' exact component={Login}></Route>
      <Route path="/emaillogin" exact component={EmailLogin}></Route>
      <Route path="/signup" exact component={signUp}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
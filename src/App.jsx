import React from 'react';

//import { Reset } from 'styled-reset'// globalStyles를 쓰지 않고 scss를 쓸것이기 때문에 reset.scss 파일을 따로 추가했습니다.
import '../src/Components/scss/reset.scss';
import './app.scss';
import Login from './Pages/Login/Login';


function App() {
  return (
  <div className="App">
      <Reset />
      <Login/>
    </div>
  );
}

export default App;
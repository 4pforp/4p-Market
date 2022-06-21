import React from 'react';
import { Reset } from 'styled-reset'
import './App.scss';
import Login from './Pages/logIn/Login';

function App() {
  return (
  <div className="App">
      <Reset />
      <Login/>
    </div>
  );
}

export default App;
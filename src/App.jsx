import React from 'react';
import { Reset } from 'styled-reset'
import './app.scss';
import Login from './pages/Login/Login';

function App() {
  return (
  <div className="App">
      <Reset />
      <Login/>
    </div>
  );
}

export default App;
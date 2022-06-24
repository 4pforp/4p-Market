import { Link } from 'react-router-dom';
import { useState } from 'react';
import './EmailLogin.scss';

function EmailLogin () {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  function handleIdInput(e){
      setEmail(e.target.value);
  }
  
  function handlePasswordInput(e){
      setPassword(e.target.value);
  }

  const [isActive, setIsActive] = useState(true);

  function logIn(){
    return email && password ? setIsActive(false) : setIsActive(true);
}

  return (
    <section className='emaillogin-section'>
    <h1 className='title-emaillogin'>로그인</h1>
    <form method='get' className='content-form'>
      <label className='label-email' htmlFor='email'>이메일</label>
      <input onKeyUp={logIn} id='email' type='id' className='input-email' onChange={handleIdInput}/>
      <label className='label-pw' htmlFor='password'>비밀번호</label>
      <input onKeyUp={logIn} id='password' type='password' className='input-password' onChange={handlePasswordInput}/>
      <Link to='/home'  className={`link-login ${isActive}`} disabled={isActive}>로그인</Link>
    </form>
    <Link to='/signup' className='link-signup'>이메일로 회원가입</Link>
    </section>
  )
}

export default EmailLogin
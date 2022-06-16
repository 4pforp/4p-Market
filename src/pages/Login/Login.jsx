import LoginSection from '../../components/LoginSecion/LoginSection'
import './login.scss';
import logoPath from '../../assets/images/symbol-logo-W.svg';

function Login () {
  return (
    <main className="content-login-main">
      <h1 className="blind">감귤마켓</h1>
      <img className="img-logo" src={logoPath} alt="로고이미지" />
      <LoginSection/>
    </main>
  )
}

export default Login;
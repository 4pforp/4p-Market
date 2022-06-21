import FacebookBtn from './FacebookBtn';
import GoogleBtn from './GoogleBtn';
import KakaoBtn from './KakaoBtn';
import './SocialLoginBtn.scss';

function SocialLoginBtn () {
  return (
    <ul className="list-socialbtn">
      <KakaoBtn/>
      <GoogleBtn/>
      <FacebookBtn/>
    </ul>
  )
}

export default SocialLoginBtn;
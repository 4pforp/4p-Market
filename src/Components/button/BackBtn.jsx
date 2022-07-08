import { useNavigate } from 'react-router-dom';
import './BackBtn.scss';

function BackBtn(){
  const navigate = useNavigate();
  return(
    <button type="button" className="btn-backward" onClick={() => navigate(-1) }>
      <span className="a11y-hidden">뒤로가기</span>
    </button>
  )
}

export default BackBtn;
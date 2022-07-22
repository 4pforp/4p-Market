import { Link } from "react-router-dom";
//링크로 연결되는 모달 버튼 컴포넌트 
function ModalLink({ handleLink, handleClick, children, target }) {
  return (
    <>
      <li>
        <Link to={handleLink} onClick={handleClick} target={target}>
          {children}
        </Link>
      </li>
    </>
  );
}

export default ModalLink;

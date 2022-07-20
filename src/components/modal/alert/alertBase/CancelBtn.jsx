import { useNavigate } from "react-router-dom";

function CancelBtn({handleClick}) {
  const navigate = useNavigate();

  function handleCancel() {
    // navigate(0);
  }

  return (
    <li>
      <button type="button" onClick={handleClick}>
        취소
      </button>
    </li>
  );
}

export default CancelBtn;

// canelBtn 눌렀을 때 alert 창 꺼지는거 구현 못해서 우선 네비게이트로 처리

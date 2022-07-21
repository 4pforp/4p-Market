// 취소버튼 공통 컴포넌트 
function CancelBtn({ handleCancel }) {
  return (
    <li>
      <button type="button" onClick={handleCancel}>
        취소
      </button>
    </li>
  );
}

export default CancelBtn;

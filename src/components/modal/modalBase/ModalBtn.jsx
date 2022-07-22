// 일반 버튼 컴포넌트 
function ModalBtn({ handleClick, children }) {
  return (
    <>
      <li>
        <button type="button" onClick={handleClick}>
          {children}
        </button>
      </li>
    </>
  );
}

export default ModalBtn;

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

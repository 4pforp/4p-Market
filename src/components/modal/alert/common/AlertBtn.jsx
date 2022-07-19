function AlertBtn({ handleClick, children }) {
  return (
    <li>
      {/* 여기서는 클릭하면 기능을 해야함  */}
      <button type="button" onClick={handleClick} className="btn-do">
        {children}
      </button>
    </li>
  );
}

export default AlertBtn;

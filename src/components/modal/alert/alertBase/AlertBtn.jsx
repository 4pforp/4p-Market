function AlertBtn({ handleClick, children }) {
  return (
    <li>
      <button type="button" onClick={handleClick} className="btn-do">
        {children}
      </button>
    </li>
  );
}

export default AlertBtn;

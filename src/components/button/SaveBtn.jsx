import "./SaveBtn.scss";

function SaveBtn(props) {
  return (
    <button
      type="submit"
      className={`btn-save ${props.isActive}`}
      disabled={!props.isActive}
      onClick={props.handleClick}
    >
      {props.text}
    </button>
  );
}

export default SaveBtn;

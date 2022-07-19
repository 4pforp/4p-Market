import "./SaveBtn.scss";

function SaveBtn(props) {
  return (
    <button
      type="submit"
      className={`btn-save ${props.isActive}`}
      disabled={props.disabled}
      onClick={props.handleClick}
      form={props.form}
    >
      {props.text}
    </button>
  );
}

export default SaveBtn;

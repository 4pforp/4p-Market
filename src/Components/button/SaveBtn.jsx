import "./SaveBtn.scss";

function SaveBtn(props) {
  return (
    <button type="submit" className="btn-save false" disabled>
      {props.text}
    </button>
  );
}

export default SaveBtn;

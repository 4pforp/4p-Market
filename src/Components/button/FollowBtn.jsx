import "./FollowBtn.scss";

function FollowBtn({ text, size }) {
  return (
    <button type="Button" name={text} className={`btn ${text} ${size}`}>
      {text}
    </button>
  );
}

export default FollowBtn;


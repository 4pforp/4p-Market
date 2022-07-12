import "./FollowBtn.scss";

function FollowBtn({ text, style, size }) {
  return (
    <button type="Button" className={`btn ${style} ${size}`}>
      {text}
    </button>
  );
}

export default FollowBtn;

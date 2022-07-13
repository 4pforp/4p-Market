import "./FollowBtn.scss";

function FollowBtn({ text, name, size }) {
  return (
    <button type="Button" className={`btn ${name} ${size}`}>
      {text}
    </button>
  );
}

export default FollowBtn;

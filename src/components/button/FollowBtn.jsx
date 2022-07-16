import "./FollowBtn.scss";

function FollowBtn({ text, isFollow, size }) {
  console.log(isFollow);
  return (
    <button type="Button" className={`btn ${isFollow} ${size}`}>
      {text}
    </button>
  );
}

export default FollowBtn;

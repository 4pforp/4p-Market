<<<<<<< HEAD
import "./ProfileButton.scss";

function FollowBtn() {
  // 팔로우, 언팔로우
  return (
    <>
      <button className="button-profile follow">팔로우</button>
    </>
=======
import "./FollowBtn.scss";

function FollowBtn({ text, size }) {
  return (
    <button type="Button" name={text} className={`btn ${text} ${size}`}>
      {text}
    </button>
>>>>>>> 361470dcdf5c2d35b17b08d5577b55e40613e7a8
  );
}

export default FollowBtn;
<<<<<<< HEAD
=======

>>>>>>> 361470dcdf5c2d35b17b08d5577b55e40613e7a8

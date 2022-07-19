import "./UserMoreBtn.scss";

function UserMoreBtn({ handleClick }) {
  return (
    <>
      <button type="button" className="btn-user-more" onClick={handleClick}>
        <span className="a11y-hidden">삭제 혹은 신고하기</span>
      </button>
    </>
  );
}

export default UserMoreBtn;

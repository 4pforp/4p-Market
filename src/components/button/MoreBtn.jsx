import "./MoreBtn.scss";

function MoreBtn({ handleClick }) {
  return (
    <>
      <button type="button" className="btn-more" onClick={handleClick}>
        <span className="a11y-hidden">설정 더 보기</span>
      </button>
    </>
  );
}

export default MoreBtn;

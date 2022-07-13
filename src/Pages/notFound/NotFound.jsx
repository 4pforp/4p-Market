import { useNavigate } from "react-router-dom";
import errorLogo from "../../assets/icon-404.svg";
import "./NotFound.scss";

function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <main className="container-error">
        <img src={errorLogo} className="img-error" alt="error" />
        <span className="text-error">페이지를 찾을 수 없습니다. </span>

        <button
          type="button"
          className="btn-error "
          onClick={() => navigate(-1)}
        >
          이전페이지
        </button>
      </main>
    </>
  );
}

export default NotFound;

import { useNavigate } from "react-router-dom";
import errorLogo from "../../assets/logo_404.svg";
import MainFooter from "../../components/footer/MainFooter";
import CommonHeader from "../../components/header/CommonHeader";
import "./NotFound.scss";

function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <CommonHeader />
      <main className="container-error">
        <img src={errorLogo} className="img-error" alt="error" />
        <span className="text-error">페이지를 찾을 수 없습니다. </span>

        <div className="btn-wrapper">
          <button
            type="button"
            className="btn-error "
            onClick={() => navigate(-1)}
          >
            이전페이지
          </button>
          <button
            type="button"
            className="btn-error home "
            onClick={() => navigate("/")}
          >
            홈으로 이동
          </button>
        </div>
      </main>
      <MainFooter />
    </>
  );
}

export default NotFound;

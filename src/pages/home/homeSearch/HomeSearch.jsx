import { Link } from "react-router-dom";
import "./HomeSearch.scss";
import grayLogo from "../../../assets/logo_gray.svg";

function HomeSearch() {
  return (
    <>
      <img src={grayLogo} className="logo-home" alt="홈 화면 로고" />
      <span className="text-home-search">유저를 검색해 팔로우 해보세요!</span>
      <Link to="/search">
        <button type="button" className="btn-home-search">
          검색하기
        </button>
      </Link>
    </>
  );
}

export default HomeSearch;

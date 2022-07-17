import "./SearchResult.scss";
import { Link } from "react-router-dom";
import UserInfoBox from "../../../components/user/UserInfoBox";
import defaultProfile from "../../../assets/4p_profile.png";

function SearchResult({ mapdata }) {
  return (
    <ul className="search-result">
      {mapdata.map((user) => {
        return (
          <li key={user._id} className="list-search-user">
            <Link to={"/" + user.accountname}>
              <UserInfoBox
                type="search"
                name={user.username}
                id={`@${user.accountname}`}
                // 이미지 url 정규표현식 검사로 기본 프로필 이미지 출력해주기
                img={
                  /Ellipse/.test(user.image) ||
                  /heroku/.test(user.image) ||
                  (!/mandarin/.test(user.image) &&
                    !/base64/.test(user.image)) ||
                  /kr\/https/.test(user.image) ||
                  /1657268443649/.test(user.image)
                    ? defaultProfile
                    : user.image
                }
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default SearchResult;

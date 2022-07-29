import { React, useContext } from "react";
import { Link } from "react-router-dom";
import UserInfoBox from "../../../components/user/UserInfoBox";
import defaultProfile from "../../../assets/4p_profile.png";
import "./SearchResult.scss";
import useImageTest from "../../../hooks/useImageTest";

function SearchResult({ mapdata, keyword }) {
  const { imageTest } = useImageTest();
  function handleImageError(e) {
    e.target.src = defaultProfile;
  }

  function setSessionStorage() {
    sessionStorage.setItem("keyword", keyword);
  }

  return (
    <ul className="search-result">
      {mapdata.map((user) => {
        const img = imageTest(user.image, "profile");
        return (
          <li key={user._id} className="list-search-user" onClick={setSessionStorage}>
            <Link to={"/" + user.accountname}>
              <UserInfoBox type="search" name={user.username} id={`@${user.accountname}`} img={img} onError={handleImageError} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default SearchResult;

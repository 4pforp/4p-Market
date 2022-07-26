import { React, useContext } from "react";
import { Link } from "react-router-dom";
import ProfileTestContext from "../../../context/ProfileTestContext";
import UserInfoBox from "../../../components/user/UserInfoBox";
import defaultProfile from "../../../assets/4p_profile.png";
import "./SearchResult.scss";

function SearchResult({ mapdata }) {
  const { ProfileTest } = useContext(ProfileTestContext);

  function handleImageError(e) {
    e.target.src = defaultProfile;
  }

  return (
    <ul className="search-result">
      {mapdata.map((user) => {
        const img = ProfileTest(user.image);
        return (
          <li key={user._id} className="list-search-user">
            <Link to={"/" + user.accountname}>
              <UserInfoBox
                type="search"
                name={user.username}
                id={`@${user.accountname}`}
                img={img}
                onError={handleImageError}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default SearchResult;

import "./SearchResult.scss";
import UserInfoBox from "../../../components/user/UserInfoBox";

function SearchResult({mapdata}) {
  return (
    <ul className="search-result">
      {mapdata.map((user)=>{
        return <li key={user._id} className="list-search-user">
          <UserInfoBox name={user.username} type="search" id={`@${user.accountname}`}/>
        </li>
      })}
    </ul>
  );
}

export default SearchResult;

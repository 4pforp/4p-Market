import "./SearchResult.scss";
import UserInfoBox from "../../../components/user/UserInfoBox";

function SearchResult() {
  return (
    <ul className="search-result">
      <li className="list-search-user">
        <UserInfoBox name="아이스베어" type="follow" id="@im_icebear"/>
      </li>
      <li className="list-search-user">
      <UserInfoBox name="시원맥주" type="follow" id="@beer4love"/>
      </li>
      <li className="list-search-user">
      <UserInfoBox name="칠성사이다" type="follow" id="@drink_cider4"/>
      </li>
      <UserInfoBox name="위니브 감귤" type="follow" id="@유저ID4" />
    </ul>
  );
}

export default SearchResult;

import './SearchResult.scss';
import defaultProfile from '../../../assets/L-profile.svg';
import UserInfoBox from '../../../Components/user/UserInfoBox';

function SearchResult(){
  return(
    
    <ul className="search-result">
      <li className="list-search-user">
        <img src={defaultProfile} alt="" className="img-search-user" />
        <div className="wrapper-search-user">
          <span className="text-search-user-name">유저이름</span>
          <span className="text-search-user-id">@유저ID</span>
        </div>
      </li>
      <li className="list-search-user">
        <img src={defaultProfile} alt="" className="img-search-user" />
        <div className="wrapper-search-user">
          <span className="text-search-user-name">유저이름2</span>
          <span className="text-search-user-id">@유저ID2</span>
        </div>
      </li>
      <li className="list-search-user">
        <img src={defaultProfile} alt="" className="img-search-user" />
        <div className="wrapper-search-user">
          <span className="text-search-user-name">유저이름3</span>
          <span className="text-search-user-id">@유저ID3</span>
        </div>
      </li>
      <UserInfoBox name="위니브 감귤" type="follow" id="@유저ID4"/>
    </ul>
    
  )
}

export default SearchResult;
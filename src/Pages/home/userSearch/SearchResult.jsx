import './SearchResult.scss';
import defaultProfile from '../../../assets/L-profile.svg';

function SearchResult(){
  return(
    
    <ul className="search-result">
      <li className="user-list">
        <img src={defaultProfile} alt="" className="search-result-profile" />
        <div className="search-user-info">
          <span className="search-user-name">유저이름</span>
          <span className="search-user-id">@유저ID</span>
        </div>
      </li>
      <li className="user-list">
        <img src={defaultProfile} alt="" className="search-result-profile" />
        <div className="search-user-info">
          <span className="search-user-name">유저이름2</span>
          <span className="search-user-id">@유저ID2</span>
        </div>
      </li>
      <li className="user-list">
        <img src={defaultProfile} alt="" className="search-result-profile" />
        <div className="search-user-info">
          <span className="search-user-name">유저이름3</span>
          <span className="search-user-id">@유저ID3</span>
        </div>
      </li>
    </ul>
    
  )
}

export default SearchResult;
import './SearchResult.scss';
import defaultProfile from '../../../assets/L-profile.svg';

function SearchResult(){
  return(
    
    <ul className="search-result">
      <li className="list-search-user">
        <img src={defaultProfile} alt="" className="img-search-user" />
        <div className="wrappe-search-user">
          <span className="search-user-name">유저이름</span>
          <span className="search-user-id">@유저ID</span>
        </div>
      </li>
      <li className="list-search-user">
        <img src={defaultProfile} alt="" className="img-search-user" />
        <div className="search-user-info">
          <span className="search-user-name">유저이름2</span>
          <span className="search-user-id">@유저ID2</span>
        </div>
      </li>
      <li className="list-search-user">
        <img src={defaultProfile} alt="" className="img-search-user" />
        <div className="wrapper-search-user">
          <span className="text-search-user-name">유저이름3</span>
          <span className="text-search-user-id">@유저ID3</span>
        </div>
      </li>
    </ul>
    
  )
}

export default SearchResult;
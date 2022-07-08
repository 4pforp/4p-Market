import { useState } from 'react';
import './MainNav.scss';
import SearchBtn from '../button/SearchBtn';
import SearchNav from './SearchNav';


function MainNav(){
  
  const [mainBar, setMainBar] = useState(true);
  const searchClick = function(){
    setMainBar(!mainBar);
  }

  // 메인 navBar 보여주기
  if(mainBar === true){
    return(
      <aside className="nav-layout">
         <h1 className="header-title">감귤마켓 피드</h1>
         <SearchBtn event={searchClick}/>
      </aside>
    )
  } 
  
  // 돋보기 아이콘 클릭시 검색 navbar 보여주기
  else{
    return <SearchNav/>
  }
}

export default MainNav;


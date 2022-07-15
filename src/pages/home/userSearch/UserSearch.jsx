import { useState, useEffect, useContext} from "react";
import axios from "axios";
//import UserContext from "../../../context/UserContext";
import SearchHeader from "../../../components/header/SearchHeader";
import SearchResult from "./SearchResult";
import "./UserSearch.scss";

function UserSearch() {
  const [searchResult, setSearchResult] = useState([]);
  const [keyword, setKeyword] = useState("");

  function handleKeyword(e){
    setKeyword(e.target.value)
    console.log(keyword)
    if(e.target.value == ""){
      setSearchResult([]);
    }
  }

  useEffect(
    ()=>{
      if(keyword!==""){
        const search = async()=>{
          const response = await axios('https://mandarin.api.weniv.co.kr/user/searchuser/?keyword='+keyword,
          { method : 'Get',
            headers : {
              "Authorization" : `Bearer ${window.localStorage.getItem('token')}`,
              "Content-type" : "application/json"
            }
          }
          )
          const getData = await response
          console.log(getData.data);
          setSearchResult(getData.data);  
        }
        search();
      }
    },[keyword]
  )

    //let myData = searchResult;

  return (
    <>
      <SearchHeader value={keyword} handle={handleKeyword}/>
      <main className="container-main-search">
        <SearchResult mapdata={searchResult}/>
      </main>
    </>
  );
}

export default UserSearch;

import { useState, useEffect, useContext } from "react";
import { createBrowserHistory } from "history";
import axios from "axios";
import UserContext from "../../context/UserContext";
import SearchHeader from "../../components/header/SearchHeader";
import SearchResult from "./searchResult/SearchResult";
import "./SearchUserPage.scss";

function SearchUserPage() {
  const [searchResult, setSearchResult] = useState([]);
  const [keyword, setKeyword] = useState("");
  const { token } = useContext(UserContext);
  const history = createBrowserHistory();

  function handleKeyword(e) {
    setKeyword(e.target.value);
    if (e.target.value === "") {
      setSearchResult([]);
    }
  }
  //뒤로가기로 검색페이지 랜딩 시 이전 검색결과 보여주기
  useEffect(() => {
    if (sessionStorage.length > 1) {
      const keywordData = sessionStorage.getItem("keyword");
      setKeyword(keywordData);
      sessionStorage.removeItem("keyword");
    }
  }, [history.action]);

  useEffect(() => {
    if (keyword !== "") {
      const search = async () => {
        const response = await axios(
          "https://mandarin.api.weniv.co.kr/user/searchuser/?keyword=" +
            keyword,
          {
            method: "get",
            headers: {
              Authorization: token,
              "Content-type": "application/json",
            },
          }
        );
        const getData = response;
        setSearchResult(getData.data);
      };
      search();
    }
  }, [keyword]);

  return (
    <>
      <SearchHeader value={keyword} handle={handleKeyword} />
      <main className="container-main-search">
        <SearchResult mapdata={searchResult} keyword={keyword} />
      </main>
    </>
  );
}

export default SearchUserPage;

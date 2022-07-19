import { useState, useEffect, useContext } from "react";
import axios from "axios";
import UserContext from "../../context/UserContext";
import SearchHeader from "../../components/header/SearchHeader";
import SearchResult from "./searchResult/SearchResult";
import "./SearchUserPage.scss";

function SearchUserPage() {
  const [searchResult, setSearchResult] = useState([]);
  const [keyword, setKeyword] = useState("");
  const { token } = useContext(UserContext);

  function handleKeyword(e) {
    setKeyword(e.target.value);
    if (e.target.value === "") {
      setSearchResult([]);
    }
  }

  useEffect(() => {
    if (keyword !== "") {
      const search = async () => {
        const response = await axios(
          "https://mandarin.api.weniv.co.kr/user/searchuser/?keyword=" +
            keyword,
          {
            method: "get",
            headers: {
              Authorization: `Bearer ${token}`,
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
        <SearchResult mapdata={searchResult} />
      </main>
    </>
  );
}

export default SearchUserPage;

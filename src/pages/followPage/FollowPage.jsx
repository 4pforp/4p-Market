import { React, useState, useContext, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../../context/UserContext";
import axios from "axios";
import FollowHeader from "../../components/header/FollowHeader";
import UserList from "./followList/UserList";
import NotFound from "../../components/notFound/NotFound";
import pendingImg from "../../assets/logo_loading_purple.svg";
import "./FollowPage.scss";

function FollowPage() {
  const { token } = useContext(UserContext);
  const params = useParams();
  const accountname = params.accountname;
  const followtype = params.followtype;
  const [followList, setFollowList] = useState([]);
  const [view, setView] = useState("pending");
  const Container = useRef();
  const [reloadNeed, setReloadNeed] = useState(false);
  const [reloadStop, setReloadStop] = useState(false);
  const [updatedCount, setUpdatedCount] = useState(0);
  const [skip, setSkip] = useState(15);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // 팔로우 리스트 불러오기
    async function getFollowList() {
      const url =
        "https://mandarin.api.weniv.co.kr/profile/" +
        accountname +
        "/" +
        followtype +
        "?limit=15&skip=0";
      try {
        const res = await axios.get(url, {
          headers: {
            Authorization: token,
            "Content-type": "application/json",
          },
        });
        setFollowList(res.data);
        setView("fulfilled");
      } catch (err) {
        setView("rejected");
      }
    }

    // 잘못된 url 예외처리
    if (followtype === "follower" || followtype === "following") {
      accountname && getFollowList();
    } else {
      setView("rejected");
    }
  }, [token, accountname, followtype]);

  useEffect(() => {
    // 화면 마지막에 도달하면 ReloadNeed!
    function infinitScoll() {
      const targetHeight = Math.floor(
        Container.current.getBoundingClientRect().height
      );
      const currentScrollY = Math.floor(window.scrollY + window.innerHeight);
      targetHeight < currentScrollY && setReloadNeed(true);
    }

    window.addEventListener("scroll", infinitScoll);

    // 스크롤시 데이터 추가 요청 함수
    async function getFollowList() {
      const url =
        "https://mandarin.api.weniv.co.kr/profile/" +
        accountname +
        "/" +
        followtype +
        "?limit=15" +
        "&skip=" +
        skip;
      try {
        const res = await axios.get(url, {
          headers: {
            Authorization: token,
            "Content-type": "application/json",
          },
        });
        // 첫 데이터면 전체 데이터 받아오기/데이터가 있으면 스프레드 문법 사용하여 추가하기
        if (skip === 0) {
          setFollowList(res.data);
        } else {
          setFollowList([...followList, ...res.data]);
        }
        // 배열이 비어있으면 데이터 요청 차단
        res.data.length === 0 && setReloadStop(true);
        setUpdatedCount(updatedCount + 1);
        setReloadNeed(false);
        setSkip(skip + 15);
        setIsLoading(false);
      } catch (err) {
        setView("rejected");
      }
    }
    // 화면 마지막에 도달하면 infinite scroll 시작
    if (reloadNeed === true) {
      reloadStop || setIsLoading(true);
      reloadStop || getFollowList();
    }
    // 언마운트시에 스크롤이벤트 발생하지 않도록!
    return () => {
      window.removeEventListener("scroll", infinitScoll);
    };
  }, [token, followList, updatedCount, reloadNeed, skip, view]);

  return (
    <>
      <FollowHeader title="Followers" />
      <main className="container-follow" ref={Container}>
        {view === "fulfilled" && (
          <div className="wrapper-follow">
            <ul className="wrapper-list-follow">
              <UserList followList={followList} />
            </ul>
            <strong className={`loading ${isLoading}`}></strong>
          </div>
        )}
        {view === "pending" && (
          <>
            <img src={pendingImg} className="img-pending" alt="loading" />
          </>
        )}
        {view === "rejected" && (
          <>
            <NotFound />
          </>
        )}
      </main>
    </>
  );
}

export default FollowPage;

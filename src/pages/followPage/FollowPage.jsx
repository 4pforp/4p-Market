import { React, useState, useContext, useEffect } from "react";
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

  useEffect(() => {
    const url =
      "https://mandarin.api.weniv.co.kr/profile/" +
      accountname +
      "/" +
      followtype;
    async function getFollowList() {
      try {
        const res = await axios.get(url, {
          headers: {
            Authorization: token,
            "Content-type": "application/json",
          },
        });
        setFollowList(res.data);
        setView("true");
      } catch (err) {
        setView("false");
      }
    }
    // 잘못된 url 예외처리
    if (followtype === "follower" || followtype === "following") {
      accountname && getFollowList();
    } else {
      setView("false");
    }
  }, [token, accountname, followtype]);

  return (
    <>
      <FollowHeader title="Followers" />
      <main className="container-follow">
        {view === "true" && (
          <div className="wrapper-follow">
            <ul className="wrapper-list-follow">
              <UserList followList={followList} />
            </ul>
          </div>
        )}
        {view === "pending" && (
          <>
            <img src={pendingImg} className="img-pending" alt="loading" />
          </>
        )}
        {view === "false" && (
          <>
            <NotFound />
          </>
        )}
      </main>
    </>
  );
}

export default FollowPage;

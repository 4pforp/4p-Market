import { React, useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import UserContext from "../../context/UserContext";
import axios from "axios";
import FollowHeader from "../../components/header/FollowHeader";
import UserList from "./followList/UserList";
import NotFound from "../notFound/NotFound";
import pendingImg from "../../assets/logo_loading_purple.svg";
import "./FollowPage.scss";

function FollowPage() {
  const { token } = useContext(UserContext);
  const location = useLocation();
  const accountname = location.state.accountname;
  const type = location.state.type;
  const [followList, setFollowList] = useState([]);
  const [view, setView] = useState("pending");

  useEffect(() => {
    const authToken = "Bearer " + token;
    const url =
      "https://mandarin.api.weniv.co.kr/profile/" + accountname + "/" + type;
    async function getFollowList() {
      try {
        const res = await axios.get(url, {
          headers: {
            Authorization: authToken,
            "Content-type": "application/json",
          },
        });
        setFollowList(res.data);
        setView("true");
      } catch (err) {
        setView("false");
      }
    }
    getFollowList();
  }, [token, accountname, type]);

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

import { React, useContext, useState, useEffect } from "react";
import UserContext from "../../../context/UserContext";
import axios from "axios";
import { Link } from "react-router-dom";

function PostAlbum({ setPostView, accountname }) {
  const { token } = useContext(UserContext);
  const [albumData, setAlbumData] = useState();

  useEffect(() => {
    // 포스트 불러오기
    async function getAlbumData() {
      const url =
        "https://mandarin.api.weniv.co.kr/post/" +
        accountname +
        "/userpost/?limit=0&skip=";
      try {
        const res = await axios.get(url, {
          headers: {
            Authorization: token,
            "Content-type": "application/json",
          },
        });
        setAlbumData(res.data.post.filter((post) => post.image !== ""));
      } catch (err) {
        console.error(err);
      }
    }
    getAlbumData();
  }, [token, accountname]);

  return (
    albumData &&
    albumData.map((album) => {
      const imageArray = album.image.split(",");
      if (imageArray.length > 1) {
        return (
          <li key={album.id} className="list-album multi">
            <Link
              to={album.id}
              style={{ backgroundImage: `url(${imageArray[0]})` }}
            ></Link>
          </li>
        );
      } else {
        return (
          <li key={album.id} className="list-album">
            <Link
              to={album.id}
              style={{ backgroundImage: `url(${album.image})` }}
            ></Link>
          </li>
        );
      }
    })
  );
}

export default PostAlbum;

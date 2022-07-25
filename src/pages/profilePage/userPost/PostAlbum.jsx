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
      return (
        <li key={album.id} className="list-album">
          <Link to={album.id}>
            {imageArray.map((image, i) => (
              <img src={image} alt="" className="img-list-album" key={i} />
            ))}
          </Link>
        </li>
      );
    })
  );
}

export default PostAlbum;

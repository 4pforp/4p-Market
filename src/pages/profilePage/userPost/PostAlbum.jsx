import { React, useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import UserContext from "../../../context/UserContext";
import useImageTest from "../../../hooks/useImageTest";

function PostAlbum({ accountname }) {
  const { token } = useContext(UserContext);
  const { imageTest } = useImageTest();
  const [albumData, setAlbumData] = useState();

  useEffect(() => {
    // 포스트 데이터 불러오기
    async function getAlbumData() {
      const url = "https://mandarin.api.weniv.co.kr/post/" + accountname + "/userpost/?limit=0&skip=";
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
  }, []);

  return (
    albumData &&
    albumData.map((album) => {
      const imageArray = album.image !== undefined ? album.image.split(",") : ["https://mandarin.api.weniv.co.kr/1658759543397.png"];
      const img = imageTest(imageArray[0], "post");
      if (imageArray.length > 1) {
        return (
          <li key={album.id} className="list-album multi">
            <Link to={album.id} style={{ backgroundImage: `url(${img})` }}></Link>
          </li>
        );
      } else {
        return (
          <li key={album.id} className="list-album">
            <Link to={album.id} style={{ backgroundImage: `url(${img})` }}></Link>
          </li>
        );
      }
    })
  );
}

export default PostAlbum;

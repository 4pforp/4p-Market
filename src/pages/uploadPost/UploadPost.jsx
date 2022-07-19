import { useState, useRef, useContext } from "react";
import PhotoList from "./PhotoList";
import UploadHeader from "../../components/header/UploadHeader";
import UploadIconBtn from "../../components/button/UploadIconBtn";
//import profileimg from "../../assets/4p_profile.png";
import "./UploadPost.scss";
import UserContext from "../../context/UserContext";
import axios from "axios";
import { useEffect } from "react";

function Upload() {
  const { token, myAccountname } = useContext(UserContext);
  const [postText, setPostText] = useState("");
  const [isActive, setisActive] = useState(false);
  const [profileImg, setProfileImg] = useState(null);
  const textRef = useRef();

  function handleResizeHeight() {
    textRef.current.style.height = "auto";
    textRef.current.style.height = textRef.current.scrollHeight + "px";
  }

  function handleText(e) {
    setPostText(e.target.value);
    if (e.target.value.length > 0) {
      setisActive(true);
    } else {
      setisActive(false);
    }
  }

  //작성자 프로필 이미지 로딩
  useEffect(() => {
    async function getImg() {
      try {
        const response = await axios.get(
          "https://mandarin.api.weniv.co.kr/profile/" + myAccountname,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-type": "application/json",
            },
          }
        );
        setProfileImg(response.data.profile.image);
      } catch (err) {
        console.log(err);
      }
    }
    getImg();
  }, []);

  //게시글 업로드 버튼 클릭 시 POST
  function handleSubmit(e) {
    e.preventDefault();
    const postData = {
      post: {
        content: postText,
        image: "",
      },
    };
    async function sendPost() {
      try {
        const res = await axios.post(
          "https://mandarin.api.weniv.co.kr/post",
          postData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-type": "application/json",
            },
          }
        );
      } catch (err) {
        console.error(err);
      }
    }
    postData && sendPost();
  }

  return (
    <>
      <UploadHeader isActive={isActive} disabled={!isActive} form="postForm" />
      <div className="container-uploadpost">
        <img
          src={profileImg}
          alt="프로필 사진입니다."
          className="img-profile-uploadpost"
        />
        <div className="wrapper-write-section">
          <form method="post" id="postForm" onSubmit={handleSubmit}>
            <textarea
              name="textarea-uploadpost"
              className="textarea-uploadpost"
              placeholder="게시글 입력하기"
              value={postText}
              onChange={handleText}
              onInput={handleResizeHeight}
              ref={textRef}
              maxLength="2000"
            />
            <UploadIconBtn img="upload-file.svg" name="upload-post" />
          </form>
          <PhotoList />
        </div>
      </div>
    </>
  );
}

export default Upload;

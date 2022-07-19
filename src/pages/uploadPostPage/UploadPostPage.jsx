import { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";
import axios from "axios";
import UploadHeader from "../../components/header/UploadHeader";
import ImgFilePreview from "./ImgFilePreview";
import UploadIconBtn from "../../components/button/UploadIconBtn";
import "./UploadPostPage.scss";

function Upload() {
  const { token, myAccountname } = useContext(UserContext);
  const [postText, setPostText] = useState("");
  const [isActive, setisActive] = useState(false);
  const [profileImg, setProfileImg] = useState(null);
  const [fileName, setFileName] = useState([]);
  const [imgFileList, setImgFileList] = useState([]);

  const navigate = useNavigate();
  const previewImg = useRef();
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

  //이미지 파일 업로드
  function handleImgInput(e) {
    const loadImg = e.target.files;
    const formData = new FormData();
    formData.append("image", loadImg[0]);

    if (fileName.length < 3) {
      setImgFileList([...imgFileList, loadImg[0]]);
      getImgUrl(formData, loadImg);
    } else {
      alert("3개 이하의 파일을 업로드 해주세요.");
    }
  }

  console.log(imgFileList);

  async function getImgUrl(formData, loadImg) {
    try {
      const res = await axios.post(
        "https://mandarin.api.weniv.co.kr/image/uploadfiles",
        formData
      );
      setFileName([...fileName, res.data[0].filename]);
      preview(loadImg);
    } catch (err) {
      console.error(err);
    }
    return fileName;
  }

  function preview(loadImg) {
    const reader = new FileReader();
    reader.onload = () =>
      (previewImg.current.style.backgroundImage = `url(${reader.result})`);
    reader.readAsDataURL(loadImg[0]);
  }

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
    navigate(`/${myAccountname}`);
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
            <UploadIconBtn
              img="upload-file.svg"
              name="upload-post"
              onChange={handleImgInput}
            />
          </form>
          <ImgFilePreview ref={previewImg} mapdata={imgFileList} />
        </div>
      </div>
    </>
  );
}

export default Upload;

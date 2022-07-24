import { useState, useEffect, useRef, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";
import axios from "axios";
import UploadHeader from "../../components/header/UploadHeader";
import PreviewImgList from "./previewImgList/PreviewImgList";
import UploadIconBtn from "../../components/button/UploadIconBtn";
import defaultProfile from "../../assets/4p_profile.png";
import "./UploadPostPage.scss";

function Upload() {
  const { token, myAccountname } = useContext(UserContext);
  const [profileImg, setProfileImg] = useState(defaultProfile);
  const [isActive, setIsActive] = useState(false);
  const [fileName, setFileName] = useState([]); //api에서 인코딩한 파일이름
  const [previewImgUrl, setPreviewImgUrl] = useState([]); //미리보기 이미지 src

  const navigate = useNavigate();
  const textRef = useRef();
  const fileRef = useRef();

  function handleResizeHeight() {
    textRef.current.style.height = "auto";
    textRef.current.style.height = textRef.current.scrollHeight + "px";
  }

  function handleText(e) {
    if (e.target.value) {
      setIsActive(true);
    } else if (!e.target.value && fileName.length === 0) {
      setIsActive(false);
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
              Authorization: token,
              "Content-type": "application/json",
            },
          }
        );
        setProfileImg(response.data.profile.image);
      } catch (err) {
        console.error(err);
      }
    }
    myAccountname && getImg();
  }, [myAccountname]);

  //이미지 파일 업로드
  function handleImgInput(e) {
    const loadImg = e.target.files;
    const formData = new FormData();
    formData.append("image", loadImg[0]);
    if (fileName.length < 3) {
      getImgUrl(formData, loadImg);
    } else {
      alert("3개 이하의 파일을 업로드 해주세요.");
    }
  }

  //이미지 파일 인코딩된 스트링 데이터 얻기
  async function getImgUrl(formData, loadImg) {
    try {
      const res = await axios.post(
        "https://mandarin.api.weniv.co.kr/image/uploadfiles",
        formData
      );
      setFileName([
        ...fileName,
        "https://mandarin.api.weniv.co.kr/" + res.data[0].filename,
      ]);
      preview(loadImg);
    } catch (err) {
      console.error(err);
    }
  }

  //이미지 파일 미리보기
  function preview(loadImg) {
    const reader = new FileReader();
    reader.readAsDataURL(loadImg[0]);
    reader.onload = () => {
      setPreviewImgUrl([...previewImgUrl, reader.result]);
    };
    setIsActive(true);
  }

  //이미지 미리보기 및 파일 삭제
  function deletePreview(e) {
    setPreviewImgUrl(
      previewImgUrl.filter((el, idx) => e.target.id !== String(idx))
    );
    setFileName(fileName.filter((el, idx) => e.target.id !== String(idx)));
    if (textRef.current.value.length === 0 && fileName.length <= 1) {
      setIsActive(false);
    }
    fileRef.current.value = "";
  }

  //게시글 업로드 버튼 클릭 시 POST
  function handleSubmit(e) {
    e.preventDefault();
    const postData = {
      post: {
        content: textRef.current.value,
        image: fileName.join(","),
      },
    };
    async function sendPost() {
      try {
        const res = await axios.post(
          "https://mandarin.api.weniv.co.kr/post",
          postData,
          {
            headers: {
              Authorization: token,
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
              //value={postText}
              onChange={handleText}
              onInput={handleResizeHeight}
              ref={textRef}
              maxLength="2000"
            />
            <UploadIconBtn
              img="upload-file.svg"
              name="upload-post"
              onChange={handleImgInput}
              ref={fileRef}
            />
          </form>
          <PreviewImgList mapdata={previewImgUrl} onClick={deletePreview} />
        </div>
      </div>
    </>
  );
}

export default Upload;

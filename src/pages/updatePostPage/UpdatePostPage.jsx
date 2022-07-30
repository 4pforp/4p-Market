import { useState, useEffect, useRef, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserContext from "../../context/UserContext";
import axios from "axios";
import UploadHeader from "../../components/header/UploadHeader";
import PreviewImgList from "../uploadPostPage/previewImgList/PreviewImgList";
import UploadIconBtn from "../../components/button/UploadIconBtn";
import defaultProfile from "../../assets/4p_profile.png";
import NotFound from "../../components/notFound/NotFound";
import pendingImg from "../../assets/logo_loading_purple.svg";
import "../uploadPostPage/UploadPostPage.scss";

function UpdatePostPage() {
  const { token, myAccountname } = useContext(UserContext);
  const [profileImg, setProfileImg] = useState(defaultProfile);
  const [isActive, setIsActive] = useState(false);
  const [postText, setPostText] = useState("");
  const [fileName, setFileName] = useState([]); //api에서 인코딩한 파일이름
  const [previewImgUrl, setPreviewImgUrl] = useState([]); //미리보기 이미지 src
  const [view, setView] = useState("pending");
  const navigate = useNavigate();
  const params = useParams();
  const textRef = useRef();
  const fileRef = useRef();
  const postid = params.postid;

  //기존 포스트 데이터 요청
  useEffect(() => {
    async function getPost() {
      try {
        const res = await axios.get(
          "https://mandarin.api.weniv.co.kr/post/" + postid,
          {
            headers: {
              Authorization: token,
              "Content-type": "application/json",
            },
          }
        );
        setPostText(res.data.post.content);
        setFileName(res.data.post.image.split(","));
        if (res.data.post.image == "") {
          setPreviewImgUrl([]);
        } else {
          setPreviewImgUrl([...res.data.post.image.split(",")]);
        }
        setView("fulfilled");
      } catch (err) {
        setView("rejected");
      }
    }
    getPost();
  }, []);

  function handleResizeHeight() {
    textRef.current.style.height = "auto";
    textRef.current.style.height = textRef.current.scrollHeight + "px";
  }

  function handleText(e) {
    setPostText(e.target.value);
    if (e.target.value) {
      setIsActive(true);
    } else if (!e.target.value && fileName.length === 0) {
      setIsActive(false);
    }
  }

  // 작성자 프로필 이미지 로딩
  useEffect(() => {
    async function getImg() {
      try {
        const res = await axios.get(
          "https://mandarin.api.weniv.co.kr/profile/" + myAccountname,
          {
            headers: {
              Authorization: token,
              "Content-type": "application/json",
            },
          }
        );
        setProfileImg(res.data.profile.image);
      } catch (err) {}
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
    } catch (err) {}
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

  //게시글 업로드 버튼 클릭 시 PUT
  function handleSubmit(e) {
    e.preventDefault();
    const postData = {
      post: {
        content: textRef.current.value,
        image: fileName.join(","),
      },
    };
    async function update() {
      try {
        const res = await axios.put(
          "https://mandarin.api.weniv.co.kr/post/" + postid,
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
        setView("rejected");
      }
    }
    postData && update();
    navigate(`/${myAccountname}`);
  }

  return (
    <>
      <UploadHeader isActive={isActive} disabled={!isActive} form="postForm" />
      {view === "fulfilled" && (
        <div className="container-uploadpost">
          <div
            style={{ backgroundImage: `url(${profileImg})` }}
            className="img-profile-uploadpost"
          ></div>
          <div className="wrapper-write-section">
            <form method="post" id="postForm" onSubmit={handleSubmit}>
              <textarea
                name="textarea-uploadpost"
                className="textarea-uploadpost"
                placeholder="게시글 입력하기"
                onChange={handleText}
                onInput={handleResizeHeight}
                value={postText}
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
    </>
  );
}

export default UpdatePostPage;

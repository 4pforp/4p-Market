import { useRef } from "react";
import PhotoList from "./PhotoList";
import UploadHeader from "../../components/header/UploadHeader";
import UploadIconBtn from "../../components/button/UploadIconBtn";
import profileimg from "../../assets/4p_profile.png";
import "./UploadPost.scss";

function Upload() {
  const textRef = useRef();
  const handleResizeHeight = () => {
    textRef.current.style.height = "auto";
    textRef.current.style.height = textRef.current.scrollHeight + "px";
  };

  return (
    <>
      <UploadHeader />
      <div className="container-uploadpost">
        <img
          src={profileimg}
          alt="프로필 사진입니다."
          className="img-profile-uploadpost"
        />
        <div className="wrapper-write-section">
          <form method="post">
            <textarea
              name="textarea-uploadpost"
              ref={textRef}
              className="textarea-uploadpost"
              placeholder="게시글 입력하기"
              onInput={handleResizeHeight}
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

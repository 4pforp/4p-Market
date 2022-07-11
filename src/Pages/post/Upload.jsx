import { useRef, useCallback } from "react";
import UploadHeader from "../../Components/header/UploadHeader";
import UploadIconBtn from "../../Components/button/UploadIconBtn";
import profileimg from "../../assets/icon-profile-small.svg";
import "./Upload.scss";

function Upload() {
  const textRef = useRef();
  const handleResizeHeight = useCallback(() => {
    textRef.current.style.height = textRef.current.scrollHeight + "px";
  });

  return (
    <>
      <UploadHeader />
      <div className="content-wrap-upload">
        <form method="post" className="form-upload">
          <img
            src={profileimg}
            alt="프로필 사진입니다."
            className="proifleimage-upload"
          />
          <textarea
            name="textarea-upload"
            // onChange={onChange}
            ref={textRef}
            className="textarea-upload"
            placeholder="게시글 입력하기"
            onInput={handleResizeHeight}
            maxLength="2000"
          />
          <UploadIconBtn
            className="UploadIcon-uploadpage"
            img="upload-file.svg"
            name="upload-post"
          />
        </form>
      </div>
    </>
  );
}

export default Upload;

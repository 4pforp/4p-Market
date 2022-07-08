import { useRef } from "react";
import axios from "axios";
import PictureIcon from "../../../../assets/upload-file.svg";

function UploadPic({ image, setImage }) {
  const previewImage = useRef();

  // 이미지 filename 응답 받기
  function handleChange(e) {
    const loadImage = e.target.files;
    const formData = new FormData();
    formData.append("image", loadImage[0]);
    onLoadImage(formData, loadImage);
  }

  async function onLoadImage(formData, loadImage) {
    try {
      const res = await axios.post(
        "https://mandarin.api.weniv.co.kr/image/uploadfile",
        formData,
        {
          "Content-Type": "multipart/form-data",
        }
      );
      if (res.data.filename) {
        setImage("https://mandarin.api.weniv.co.kr/" + res.data.filename);
        preview(loadImage);
      } else {
        console.log("이미지 파일만 업로드 가능합니다");
      }
    } catch (err) {
      console.error(err);
    }
  }

  function preview(loadImage) {
    const reader = new FileReader();
    reader.onload = () =>
      (previewImage.current.style.backgroundImage = `url(${reader.result})`);
    reader.readAsDataURL(loadImage[0]);
  }

  return (
    <div ref={previewImage} className="set-profile-image">
      <label htmlFor="choose-img" className="upload-icon">
        <img src={PictureIcon} alt="upload" className="icon-img" />
      </label>
      <input
        type="file"
        name="user-pic"
        id="choose-img"
        accept="image/*"
        onChange={handleChange}
      ></input>
    </div>
  );
}

export default UploadPic;

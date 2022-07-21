import { useRef } from "react";
import axios from "axios";
import PictureIcon from "../../../assets/upload-file-gray.svg";

function UploadProductImg({ itemImage, setItemImage }) {
  const imgStyle = {
    backgroundImage: `url(${itemImage})`,
  };
  const previewImage = useRef();

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
        setItemImage("https://mandarin.api.weniv.co.kr/" + res.data.filename);
        preview(loadImage);
      } else {
        alert(
          ".jpg, .gif, .png, .jpeg, .bmp, .tif, .heic 파일만 업로드 가능합니다."
        );
      }
    } catch (err) {
      console.error(err);
    }
  }

  function preview(loadImage) {
    const reader = new FileReader();
    reader.onload = () => {
      previewImage.current.style.backgroundImage = `url(${reader.result})`;
    };
    reader.readAsDataURL(loadImage[0]);
  }

  return (
    <>
      <p className="text-upload-img">이미지등록</p>
      <div ref={previewImage} className="wrapper-productimg" style={imgStyle}>
        <label htmlFor="choose-img" className="label-upload-icon">
          <img src={PictureIcon} alt="upload" />
        </label>
        <input
          type="file"
          name="img-product"
          id="choose-img"
          accept="image/*"
          onChange={handleChange}
        ></input>
      </div>
    </>
  );
}

export default UploadProductImg;

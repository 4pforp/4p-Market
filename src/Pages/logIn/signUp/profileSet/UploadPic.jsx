import PictureIcon from "../../../../assets/upload-file.svg";

function UploadPic() {
  return (
    <div className="set-profile-image">
      <label htmlFor="choose-img" className="upload-icon">
        <img src={PictureIcon} alt="upload" className="icon-img" />
      </label>
      <input
        type="file"
        name="user-pic"
        id="choose-img"
        accept="image/*"
      ></input>
    </div>
  );
}

export default UploadPic;

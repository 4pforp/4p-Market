import { forwardRef } from "react";

function UploadIconBtn({ img, name, onChange }, ref) {
  return (
    <>
      <label htmlFor="choose-img" className="label-upload-icon">
        <img
          src={require("../../assets/" + img)}
          alt="업로드 버튼입니다."
          className="img-icon-upload"
        />
      </label>
      <input
        type="file"
        name={name}
        id="choose-img"
        accept="image/*"
        onChange={onChange}
        ref={ref}></input>
    </>
  );
}

export default forwardRef(UploadIconBtn);

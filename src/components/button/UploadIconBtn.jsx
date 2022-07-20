function UploadIconBtn({ img, name, onChange, multiple }) {
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
      ></input>
    </>
  );
}

export default UploadIconBtn;

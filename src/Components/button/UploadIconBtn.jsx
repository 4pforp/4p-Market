function UploadIconBtn({ img, name }) {
  return (
    <>
      <label htmlFor="choose-img" className="upload-icon">
        <img
          src={require("../../assets/" + img)}
          alt="upload"
          className="icon-img"
        />
      </label>
      <input type="file" name={name} id="choose-img" accept="image/*"></input>
    </>
  );
}

export default UploadIconBtn;

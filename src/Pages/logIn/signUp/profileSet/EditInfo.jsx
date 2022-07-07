import UploadPic from "./UploadPic";

function EditInfo({
  setIsActive,
  userName,
  setUserName,
  accountName,
  setAcountName,
  intro,
  setIntro,
}) {
  function handleChangeUserName(e) {
    setUserName(e.target.value);
  }
  function handleChangeAccountName(e) {
    setAcountName(e.target.value);
  }
  function handleChangeIntro(e) {
    setIntro(e.target.value);
  }

  // 계정 ID 유효성 검사
  const checkUserName = /^[a-zA-Zㄱ-힣0-9_]{2,12}$/;
  const checkAccountName = /^[a-zA-Z0-9_.]{4,}$/;

  // 시작하기 버튼 활성화 검사
  function handleKeyUp() {
    checkUserName.test(userName) && checkAccountName.test(accountName)
      ? setIsActive(true)
      : setIsActive(false);
  }

  return (
    <>
      <UploadPic />
      <div className="-container-input-info">
        <div className="container-username">
          <label htmlFor="input-username" className="label-username">
            사용자 이름
          </label>
          <input
            onKeyUp={handleKeyUp}
            onChange={handleChangeUserName}
            id="input-username"
            type="text"
            placeholder="2~10자 이내여야 합니다."
          ></input>
        </div>
        <div className="container-accountname">
          <label htmlFor="id" className="label-accountname">
            계정 ID
          </label>
          <input
            onKeyUp={handleKeyUp}
            onChange={handleChangeAccountName}
            id="input-accountname"
            type="text"
            placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다. "
          ></input>
        </div>
        <div className="container-intro">
          <label htmlFor="input-intro" className="label-intro">
            소개
          </label>
          <input
            onChange={handleChangeIntro}
            id="input-intro"
            type="text"
            placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
          ></input>
        </div>
      </div>
    </>
  );
}

export default EditInfo;

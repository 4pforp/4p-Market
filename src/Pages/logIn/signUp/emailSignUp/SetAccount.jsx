function SetAccount({ setIsActive, email, setEmail, password, setPassword }) {
  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  // 이메일 주소 유효성 검사
  const checkEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  // 로그인버튼 활성화 검사
  function handleKeyUp() {
    checkEmail.test(email) && password.length > 5
      ? setIsActive(true)
      : setIsActive(false);
  }

  return (
    <>
      <label htmlFor="email" className="label-email">
        이메일
      </label>
      <input
        onKeyUp={handleKeyUp}
        onChange={handleChangeEmail}
        // onBlur
        id="input-email"
        type="email"
        placeholder="이메일 주소를 입력해 주세요."
      ></input>
      <label htmlFor="password" className="label-password">
        비밀번호
      </label>
      <input
        onKeyUp={handleKeyUp}
        onChange={handleChangePassword}
        id="input-password"
        type="password"
        maxLength="16"
        placeholder="비밀번호를 설정해 주세요."
      ></input>
    </>
  );
}

export default SetAccount;

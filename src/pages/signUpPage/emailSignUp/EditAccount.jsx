import { React, useEffect, useState, useRef } from "react";
import axios from "axios";

function EditAccount({
  setIsActive,
  email,
  setEmail,
  password,
  setPassword,
  resMessageEmail,
  setResMessageEmail,
  isValidEmail,
  setIsValidEmail,
}) {
  const [resMessagePassword, setResMessagePassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(false);
  const inputRef = useRef();

  //페이지 로딩됐을 때 이메일 인풋 포커스
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleChange(e) {
    const inputType = e.target.id.slice(6);
    inputType === "email" && setEmail(e.target.value);
    inputType === "password" && setPassword(e.target.value);
  }

  // 이메일 주소 유효성 검사
  const checkEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,5}$/i;

  // 이메일 검증
  async function handleBlurEmail() {
    if (checkEmail.test(email)) {
      try {
        const res = await axios.post(
          "https://mandarin.api.weniv.co.kr/user/emailvalid",
          {
            user: {
              email,
            },
          },
          {
            header: {
              "Content-Type": "application/json",
            },
          }
        );
        if (res.data.message === "사용 가능한 이메일 입니다.") {
          setResMessageEmail(res.data.message);
          setIsValidEmail(true);
        } else {
          setResMessageEmail("*" + res.data.message);
          setIsValidEmail(false);
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      setResMessageEmail("*이메일 형식이 올바르지 않습니다.");
      setIsValidEmail(false);
    }
  }

  // 비밀번호 검증
  function handleBlurPassword() {
    password.length > 5 ||
      setResMessagePassword("*비밀번호는 6자 이상이어야 합니다.");
  }

  useEffect(() => {
    password.length > 5 ? setIsValidPassword(true) : setIsValidPassword(false);
  }, [password]);

  // 다음 버튼 활성화
  useEffect(() => {
    if (isValidEmail && isValidPassword) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  });

  return (
    <>
      <div className="wrapper-email">
        <label htmlFor="email" className="label-email">
          이메일
        </label>
        <input
          onChange={handleChange}
          onBlur={handleBlurEmail}
          id="input-email"
          type="email"
          placeholder="이메일 주소를 입력해 주세요."
          ref={inputRef}></input>
        <strong className={`errorMsg email ${isValidEmail}`}>
          {resMessageEmail}
        </strong>
      </div>
      <div className="wrapper-password">
        <label htmlFor="password" className="label-password">
          비밀번호
        </label>
        <input
          onChange={handleChange}
          onBlur={handleBlurPassword}
          id="input-password"
          type="password"
          maxLength="16"
          placeholder="비밀번호를 설정해 주세요."></input>
        <strong className={`errorMsg password ${isValidPassword}`}>
          {resMessagePassword}
        </strong>
      </div>
    </>
  );
}

export default EditAccount;

import { useState, useEffect } from "react";
import axios from "axios";
import ProfileEditUpload from "../profileEditImg/ProfileEditImg";

function ProfileEditInfo({
  setIsActive,
  username,
  setUsername,
  accountname,
  setAcountName,
  intro,
  setIntro,
  setImage,
  image,
  setDisabled,
  myAccountname,
}) {
  const [resMessageAccountname, setResMessageAccountname] = useState("");
  const [isValidAccountname, setIsValidAccountname] = useState(false);
  const [isValidUsername, setIsValidUsername] = useState(false);

  function handleChangeUsername(e) {
    setUsername(e.target.value);
  }
  function handleChangeAccountname(e) {
    setAcountName(e.target.value);
  }
  function handleChangeIntro(e) {
    setIntro(e.target.value);
  }

  const checkAccountname = /^[a-zA-Z0-9_.]{4,}$/;

  async function handleBlurAccountname() {
    if (checkAccountname.test(accountname)) {
      try {
        const res = await axios.post(
          "https://mandarin.api.weniv.co.kr/user/accountnamevalid",
          {
            user: {
              accountname,
            },
          },
          {
            header: {
              "Content-Type": "application/json",
            },
          }
        );
        if (res.data.message === "사용 가능한 ID 입니다.") {
          setResMessageAccountname(res.data.message);
          setIsValidAccountname(true);
        } else if (myAccountname === accountname) {
          return null;
        } else {
          setResMessageAccountname("*" + res.data.message);
          setIsValidAccountname(false);
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      setResMessageAccountname(
        "*영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다."
      );
      setIsValidAccountname(false);
    }
  }

  useEffect(() => {
    if (username.length > 1 && username.length < 10) {
      setIsValidUsername(true);
    } else {
      setIsValidUsername(false);
    }
  }, [username]);

  useEffect(() => {
    if (isValidAccountname && isValidUsername) {
      setIsActive(true);
      setDisabled(false);
    } else if (myAccountname === accountname) {
      setIsActive(true);
      setDisabled(false);
    } else {
      setIsActive(false);
      setDisabled(true);
    }
  });

  return (
    <>
      <ProfileEditUpload image={image} setImage={setImage} />
      <div className="-container-input-info">
        <div className="wrapper-username">
          <label htmlFor="input-username" className="label-username">
            사용자 이름
          </label>
          <input
            onChange={handleChangeUsername}
            id="input-username"
            type="text"
            placeholder="2~10자 이내여야 합니다."
            value={username}
          ></input>
        </div>
        <div className="wrapper-accountname">
          <label htmlFor="id" className="label-accountname">
            계정 ID
          </label>
          <input
            onChange={handleChangeAccountname}
            onBlur={handleBlurAccountname}
            id="input-accountname"
            type="text"
            placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다. "
            value={accountname}
          ></input>
          <strong className={`msg-error-profileedit ${isValidAccountname}`}>
            {resMessageAccountname}
          </strong>
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
            value={intro}
          ></input>
        </div>
      </div>
    </>
  );
}

export default ProfileEditInfo;

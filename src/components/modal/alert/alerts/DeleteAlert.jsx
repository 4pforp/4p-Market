import { useContext } from "react";
import UserContext from "../../../../context/UserContext";
import { useNavigate } from "react-router-dom";
import CancelBtn from "../alertBase/CancelBtn";
import AlertBtn from "../alertBase/AlertBtn";
import AlertFrame from "../alertBase/AlertFrame";

function DeleteAlert({ text, backUrl, handleCancel, from, remove }) {
  const { myAccountname } = useContext(UserContext);
  const navigate = useNavigate();
  // 삭제기능 메서드
  function handleDelete() {
    handleCancel();
    // remove : useDelete hook 의 매개변수 받는 함수
    remove(backUrl);
    if (from === "comment") {
      navigate(`/${myAccountname}`);
    }
  }

  return (
    <>
      <AlertFrame text={text}>
        <CancelBtn handleCancel={handleCancel} />
        <AlertBtn handleClick={handleDelete}>삭제</AlertBtn>
      </AlertFrame>
    </>
  );
}

export default DeleteAlert;

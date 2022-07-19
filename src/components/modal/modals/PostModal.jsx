import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../../context/UserContext";
import ModalBtn from "../modalBase/ModalBtn";
import ModalFrame from "../modalBase/ModalFrame";
import DeleteAlert from "../alert/alerts/DeleteAlert";
import ReportAlert from "../alert/alerts/ReportAlert";

function PostModal({ content, setOnModal }) {
  const [onAlert, setOnAlert] = useState(false);
  const { myAccountname } = useContext(UserContext);
  const accountname = content.author.accountname;
  const navigate = useNavigate();

  function handleNavigate() {
    //profileedit page 에러나서 임시로 0줬습니다
    navigate("0");
  }

  function handleAlert() {
    setOnAlert(!onAlert);
  }

  function handleCancel() {
    setOnModal(false);
    setOnAlert(false);
  }

  return (
    <>
      {myAccountname === accountname ? (
        <>
          {onAlert && (
            <>
              <DeleteAlert
                text="게시글을 삭제하시겠어요?"
                handleClick={handleCancel}
              />
            </>
          )}
          <ModalFrame setOnModal={setOnModal}>
            <ModalBtn handleClick={handleAlert}>삭제</ModalBtn>
            <ModalBtn handleClick={handleNavigate}>수정</ModalBtn>
          </ModalFrame>
        </>
      ) : (
        <>
          {onAlert && (
            <>
              <ReportAlert handleClick={handleCancel} />
            </>
          )}
          <ModalFrame setOnModal={setOnModal}>
            <ModalBtn handleClick={handleAlert}>신고</ModalBtn>
          </ModalFrame>
        </>
      )}
    </>
  );
}

export default PostModal;

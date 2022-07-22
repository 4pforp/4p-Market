import { useState, useContext } from "react";
import UserContext from "../../../context/UserContext";
import ModalLink from "../modalBase/ModalLink";
import ModalBtn from "../modalBase/ModalBtn";
import ModalFrame from "../modalBase/ModalFrame";
import DeleteAlert from "../alert/alerts/DeleteAlert";
import ReportAlert from "../alert/alerts/ReportAlert";

function PostModal({ content, setOnModal }) {
  const { myAccountname } = useContext(UserContext);
  const [onAlert, setOnAlert] = useState(false);
  const accountname = content.author.accountname;
  const postId = content.id;

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
                handleCancel={handleCancel}
                // DeleteAlert 내 remove 함수에 연결되는 backUrl
                backUrl={`post/${postId}`}
              />
            </>
          )}
          <ModalFrame setOnModal={setOnModal}>
            <ModalBtn handleClick={handleAlert}>삭제</ModalBtn>
            <ModalLink handleLink={`/upload/${postId}`}>수정</ModalLink>
          </ModalFrame>
        </>
      ) : (
        <>
          {onAlert && (
            <>
              <ReportAlert
                handleCancel={handleCancel}
                // ReportAlert 내 report 함수에 연결되는 backUrl
                backUrl={`post/${postId}/report`}
              />
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

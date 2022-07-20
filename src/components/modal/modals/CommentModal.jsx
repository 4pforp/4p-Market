import { useState, useContext } from "react";
import UserContext from "../../../context/UserContext";
import ModalFrame from "../modalBase/ModalFrame";
import ModalBtn from "../modalBase/ModalBtn";
import DeleteAlert from "../alert/alerts/DeleteAlert";
import ReportAlert from "../alert/alerts/ReportAlert";

function CommentModal({ setOnModal, comment }) {
  const { myAccountname } = useContext(UserContext);
  const [onAlert, setOnAlert] = useState(false);
  // const accountname = comment.author.accountname;
  // console.log(accountname);

  function handleAlert() {
    setOnAlert(!onAlert);
  }
  function handleCancel() {
    setOnModal(false);
    setOnAlert(false);
  }

  return (
    <>
      <>
        {onAlert && (
          <>
            <DeleteAlert
              text="댓글을 삭제하시겠어요?"
              handleClick={handleCancel}
            />
          </>
        )}
        <ModalFrame setOnModal={setOnModal}>
          <ModalBtn handleClick={handleAlert}>삭제</ModalBtn>
        </ModalFrame>
      </>
      {/* <>
        {onAlert && (
          <>
            <ReportAlert handleClick={handleCancel} />
          </>
        )}
        <ModalFrame setOnModal={setOnModal}>
          <ModalBtn handleClick={handleAlert}>신고</ModalBtn>
        </ModalFrame>
      </> */}
    </>
  );
}

export default CommentModal;

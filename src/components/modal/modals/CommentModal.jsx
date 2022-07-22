import { useState, useContext } from "react";
import UserContext from "../../../context/UserContext";
import ModalFrame from "../modalBase/ModalFrame";
import ModalBtn from "../modalBase/ModalBtn";
import DeleteAlert from "../alert/alerts/DeleteAlert";
import ReportAlert from "../alert/alerts/ReportAlert";

//comment moreBtn 클릭했을 때 뜨는 모달
function CommentModal({ setOnModal, comment, postid, setNewComment }) {
  const [onAlert, setOnAlert] = useState(false);
  const { myAccountname } = useContext(UserContext);
  const accountname = comment.author.accountname;
  const commentId = comment.id;
  const postId = postid;

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
                text="댓글을 삭제하시겠어요?"
                handleCancel={handleCancel}
                // DeleteAlert 내 remove 함수에 연결되는 backUrl
                backUrl={`post/${postId}/comments/${commentId}`}
                //댓글리스트 리렌더링위해 불러옴
                from="commentPage"
                setNewComment={setNewComment}
              />
            </>
          )}
          <ModalFrame setOnModal={setOnModal}>
            <ModalBtn handleClick={handleAlert}>삭제</ModalBtn>
          </ModalFrame>
        </>
      ) : (
        <>
          {onAlert && (
            <>
              <ReportAlert
                handleCancel={handleCancel}
                // ReportAlert 내 report 함수에 연결되는 backUrl
                backUrl={`post/${postId}/comments/${commentId}/report`}
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

export default CommentModal;

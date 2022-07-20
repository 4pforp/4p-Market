import { useState, useContext } from "react";
import UserContext from "../../../context/UserContext";
import { useNavigate } from "react-router-dom";
import ModalFrame from "../modalBase/ModalFrame";
import ModalBtn from "../modalBase/ModalBtn";
import DeleteAlert from "../alert/alerts/DeleteAlert";
import ReportAlert from "../alert/alerts/ReportAlert";

function ProductModal({ setOnModal }) {
  const [onAlert, setOnAlert] = useState(false);
  const { myAccountname } = useContext(UserContext);

  const navigate = useNavigate();

  function handleAlert() {
    setOnAlert(!onAlert);
  }
  function handleEdit() {
    //게시글 수정 페이지로 이동 (임시로 0줬습니다)
    navigate("0");
  }

  function handleCancel() {
    setOnModal(false);
    setOnAlert(false);
  }

  return (
    // <>
    //   {myAccountname === accountname ? (
    <>
      {onAlert && (
        <>
          <DeleteAlert text="삭제하시겠어요?" handleClick={handleCancel} />
        </>
      )}
      <ModalFrame setOnModal={setOnModal}>
        <ModalBtn handleClick={handleAlert}>삭제</ModalBtn>
        <ModalBtn handleClick={handleEdit}>수정</ModalBtn>
        <ModalBtn>웹사이트에서 상품보기</ModalBtn>
      </ModalFrame>
    </>
    //   ) : (
    //     <>
    //       {onAlert && (
    //         <>
    //           <ReportAlert handleClick={handleCancel}/>
    //         </>
    //       )}
    //       <ModalFrame setOnModal={setOnModal}>
    //         <ModalBtn handleClick={handleAlert}>신고</ModalBtn>
    //       </ModalFrame>
    //     </>
    //   )}
    // </>
  );
}

export default ProductModal;

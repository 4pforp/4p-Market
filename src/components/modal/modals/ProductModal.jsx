import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../../context/UserContext";
import { useNavigate } from "react-router-dom";
import ModalFrame from "../modalBase/ModalFrame";
import ModalBtn from "../modalBase/ModalBtn";
import ModalLink from "../modalBase/ModalLink";
import DeleteAlert from "../alert/alerts/DeleteAlert";
import ReportAlert from "../alert/alerts/ReportAlert";

function ProductModal({ setOnModal, accountname, mapdata }) {
  const [onAlert, setOnAlert] = useState(false);
  const { myAccountname } = useContext(UserContext);
  console.log(mapdata);

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
            //  Todo: backUrl 연결
            <>
              <DeleteAlert text="삭제하시겠어요?" handleCancel={handleCancel} />
            </>
          )}
          <ModalFrame setOnModal={setOnModal}>
            <ModalBtn handleClick={handleAlert}>삭제</ModalBtn>
            {/* Todo: 수정, 상품보기 링크 연결  */}
            <ModalLink handleLink={"/"}>수정</ModalLink>
            <ModalLink handleLink={"/"}>웹사이트에서 상품보기</ModalLink>
          </ModalFrame>
        </>
      ) : (
        <>
          {onAlert && (
            <>
              <ReportAlert handleCancel={handleCancel} />
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

export default ProductModal;

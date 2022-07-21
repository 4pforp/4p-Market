import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../../context/UserContext";
import ModalFrame from "../modalBase/ModalFrame";
import ModalBtn from "../modalBase/ModalBtn";
import ModalLink from "../modalBase/ModalLink";
import DeleteAlert from "../alert/alerts/DeleteAlert";
import ReportAlert from "../alert/alerts/ReportAlert";

function ProductModal({ setOnModal, handleModal, product }) {
  const [onAlert, setOnAlert] = useState(false);
  const { myAccountname } = useContext(UserContext);
  const productId = product.id;
  const accountname = product.author.accountname;
  console.log(product);
  console.log(accountname);
  console.log(myAccountname);

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
                text="삭제하시겠어요?"
                handleCancel={handleCancel}
                // DeleteAlert 내 remove 함수에 연결되는 backUrl
                backUrl={`product/${productId}`}
              />
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
              <ReportAlert
                handleCancel={handleCancel}
                // ReportAlert 내 report 함수에 연결되는 backUrl
                backUrl={`product/${productId}/report`}
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

export default ProductModal;

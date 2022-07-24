import { useState, useContext } from "react";
import UserContext from "../../../context/UserContext";
import ModalFrame from "../modalBase/ModalFrame";
import ModalBtn from "../modalBase/ModalBtn";
import ModalLink from "../modalBase/ModalLink";
import DeleteAlert from "../alert/alerts/DeleteAlert";
import ReportAlert from "../alert/alerts/ReportAlert";

function ProductModal({ setOnModal, product, remove }) {
  const { myAccountname } = useContext(UserContext);
  const [onAlert, setOnAlert] = useState(false);
  const productId = product.id;
  const accountname = product.author.accountname;
  const productUrl = product.link;

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
                //삭제 후 리렌더링 위해 내려준 props
                remove={remove}
              />
            </>
          )}
          <ModalFrame setOnModal={setOnModal}>
            <ModalBtn handleClick={handleAlert}>삭제</ModalBtn>
            <ModalLink handleLink={`/product/${productId}`}>수정</ModalLink>
            <li>
              <a href={productUrl}>웹사이트에서 상품보기</a>
            </li>
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
            <li>
              <a href={productUrl}>웹사이트에서 상품보기</a>
            </li>
            <ModalBtn handleClick={handleAlert}>신고</ModalBtn>
          </ModalFrame>
        </>
      )}
    </>
  );
}

export default ProductModal;

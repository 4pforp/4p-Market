import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../../context/UserContext";
import useImageTest from "../../../hooks/useImageTest";
import Modal from "../../../components/modal/Modal";
import AlertModal from "../../../components/modal/Alert";
import "./UserProduct.scss";

function Product({ accountname, mapdata, remove }) {
  const { myAccountname } = useContext(UserContext);
  const { imageTest } = useImageTest();
  const [product, setProduct] = useState({});
  const [modal, setModal] = useState(false);
  const [alertModal, setAlertModal] = useState(false);
  const backUrl = `product/${product.id}`;

  const navigate = useNavigate();

  console.log(imageTest);
  function openModal() {
    setModal(true);
  }

  const modalMenuList = [
    {
      content: "삭제",
      onClick: () => {
        setAlertModal(true);
      },
    },
    {
      content: "수정",
      onClick: () => {
        navigate(`/product/${product.id}`);
      },
    },
    {
      content: "웹사이트로 이동",
      onClick: () => {
        window.open(product.link);
      },
    },
  ];

  const alertBtn = {
    content: "삭제",
    onClick: () => {
      remove(backUrl);
      setAlertModal(false);
      setModal(false);
    },
  };

  return (
    <>
      {mapdata.map((product, idx) => {
        return (
          <li
            key={product.id}
            className="item-product"
            onClick={() => {
              if (myAccountname === accountname) {
                openModal();
                setProduct(product);
              } else {
                window.open(product.link);
              }
            }}
          >
            <img
              src={imageTest(product.itemImage)}
              alt=""
              className="img-product"
            />
            <strong className="text-product">{product.itemName}</strong>
            <strong className="text-product-price">{`${product.price
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`}</strong>
          </li>
        );
      })}

      {modal && (
        <Modal
          modal={modal}
          setModal={setModal}
          modalMenuList={modalMenuList}
        />
      )}
      {alertModal && (
        <AlertModal
          alertModal={alertModal}
          setAlertModal={setAlertModal}
          setModal={setModal}
          content={"삭제하시겠어요?"}
          alertBtn={alertBtn}
        />
      )}
    </>
  );
}

export default Product;

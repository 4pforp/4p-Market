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
  const [isModal, setIsModal] = useState(false);
  const [isAlert, setIsAlert] = useState(false);
  const backUrl = `product/${product.id}`;

  const navigate = useNavigate();

  function openModal() {
    setIsModal(true);
  }

  const modalMenuList = [
    {
      content: "삭제",
      onClick: () => {
        setIsAlert(true);
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
      setIsAlert(false);
      setIsModal(false);
    },
  };

  return (
    <>
      {mapdata.map((product) => {
        const imgStyle = {
          backgroundImage: `url(${imageTest(product.itemImage, "post")})`,
        };
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
            <div className="img-product" style={imgStyle}></div>
            <strong className="text-product">{product.itemName}</strong>
            <strong className="text-product-price">{typeof product.price === "number" ? `${product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원` : `- 원`}</strong>
          </li>
        );
      })}

      {isModal && <Modal isModal={isModal} setIsModal={setIsModal} modalMenuList={modalMenuList} />}
      {isAlert && <AlertModal isAlert={isAlert} setIsAlert={setIsAlert} setIsModal={setIsModal} content={"삭제하시겠어요?"} alertBtn={alertBtn} />}
    </>
  );
}

export default Product;

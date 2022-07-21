import { useState } from "react";
import ProductModal from "../../../components/modal/modals/ProductModal";

function Product({ id, mapdata, accountname, setOnAlert }) {
  const [onModal, setOnModal] = useState(false);
  const [product, setProduct] = useState({});

  function handleModal() {
    setOnModal(!onModal);
  }
  function openModal() {
    setOnModal(true);
  }

  return (
    <>
      {mapdata.map((product, idx) => {
        return (
          <li
            key={product.id}
            className="item-product"
            onClick={() => {
              openModal();
              setProduct(product);
            }}
          >
            <img src={product.itemImage} alt="" className="img-product" />
            <strong className="text-product">{product.itemName}</strong>
            <strong className="text-product-price">{`${product.price
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`}</strong>
          </li>
        );
      })}

      {onModal && <ProductModal setOnModal={handleModal} product={product} />}
    </>
  );
}

export default Product;

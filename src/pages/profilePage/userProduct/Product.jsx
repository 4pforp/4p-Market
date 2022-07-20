import { useState } from "react";
import ProductModal from "../../../components/modal/modals/ProductModal";

function Product({ id, mapdata }) {
  const [onModal, setOnModal] = useState(false);

  function handleModal() {
    setOnModal(!onModal);
  }
  function openModal() {
    setOnModal(true);
  }

  return (
    <>
      {onModal && (
        <ProductModal setOnModal={handleModal} />
      )}

      {mapdata.map((product, idx) => {
        return (
          <li
            key={product.author._id}
            className="item-product"
            onClick={openModal}
          >
            <img src={product.itemImage} alt="" className="img-product" />
            <strong className="text-product">{product.itemName}</strong>
            <strong className="text-product-price">{`${product.price
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`}</strong>
          </li>
        );
      })}
    </>
  );
}

export default Product;


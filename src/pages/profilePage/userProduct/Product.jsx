import { useState } from "react";
import ProductModal from "../../../components/modal/contents/ProductModal";

function Product({ id, mapdata }) {
  const [onModal, setOnModal] = useState(false);

  return (
    <>
      {/* 모달 조건부렌더링 위한 함수 */}
      {onModal && <ProductModal setOnModal={(bool) => setOnModal(bool)} />}
      {mapdata.map((product, idx) => {
        return (
          <li
            key={product.author._id}
            className="item-product"
            onClick={() => setOnModal(true)}
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

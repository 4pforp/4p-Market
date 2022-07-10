import { Link } from "react-router-dom";

function Product() {
  return (
    <>
      <Link to="">
        <li className="item-product">
          <img src="" alt="" className="image-product" />
          <strong className="text-product">애월읍 한라봉 10kg 1box</strong>
          <strong className="text-product-price">45,000원</strong>
        </li>
      </Link>
    </>
  );
}

export default Product;

import { Link } from "react-router-dom";
import examplePicture from "../../../assets/example-picture.jpg";

function Product() {
  return (
    <>
      <Link to="">
        <li className="item-product">
          <img src={examplePicture} alt="" className="img-product" />
          <strong className="txt-product">애월읍 한라봉 10kg 1box</strong>
          <strong className="txt-product-price">45,000원</strong>
        </li>
      </Link>
    </>
  );
}

export default Product;

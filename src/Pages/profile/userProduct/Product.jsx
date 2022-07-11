import { Link } from "react-router-dom";
import examplePicture from "../../../assets/example-picture.jpg";

function Product({ id }) {
  return (
    <>
      <Link to="">
        <li key={id} className="item-product">
          <img src={examplePicture} alt="" className="img-product" />
          <strong className="text-product">애월읍 한라봉 10kg 1box</strong>
          <strong className="text-product-price">45,000원</strong>
        </li>
      </Link>
    </>
  );
}

export default Product;

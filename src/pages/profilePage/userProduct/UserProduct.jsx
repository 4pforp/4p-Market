import { useState, useEffect, useContext } from "react";
import axios from "axios";
import UserContext from "../../../context/UserContext";
import Product from "./Product";
import "./UserProduct.scss";

function UserProduct({ accountname }) {
  const { token } = useContext(UserContext);
  const [productResult, setProductResult] = useState([]);

  useEffect(() => {
    async function getProduct() {
      try {
        const response = await axios.get(
          "https://mandarin.api.weniv.co.kr/product/" + accountname,
          {
            headers: {
              Authorization: token,
              "Content-type": "application/json",
            },
          }
        );
        const userProduct = response;
        setProductResult(userProduct.data.product);
      } catch (err) {
        console.log(err);
      }
    }
    getProduct();
  }, [accountname]);

  if (productResult.length > 0) {
    return (
      <>
        <section className="container-product">
          <div className="wrapper-product">
            <h3>판매 중인 상품</h3>
            <ol className="list-products">
              <Product id="product1" mapdata={productResult} />
            </ol>
          </div>
        </section>
      </>
    );
  }
}

export default UserProduct;

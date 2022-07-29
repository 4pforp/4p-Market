import { useState, useEffect, useContext } from "react";
import UserContext from "../../../context/UserContext";
import axios from "axios";
import useDelete from "../../../hooks/useDelete";
import Product from "./Product";
import "./UserProduct.scss";

function UserProduct({ accountname }) {
  const { token } = useContext(UserContext);
  const [productResult, setProductResult] = useState([]);
  // product 삭제 후 업데이트 위한 함수 선언, props로 넘겨주기 위함
  const { isUpdate, remove } = useDelete();

  useEffect(() => {
    async function getProduct() {
      try {
        const response = await axios.get("https://mandarin.api.weniv.co.kr/product/" + accountname, {
          headers: {
            Authorization: token,
            "Content-type": "application/json",
          },
        });
        const userProduct = response;
        setProductResult(userProduct.data.product);
      } catch (err) {
        console.error(err);
      }
    }
    getProduct();
  }, [accountname, isUpdate]);

  if (productResult.length > 0) {
    return (
      <>
        <section className="container-product">
          <div className="wrapper-product">
            <h3>판매 중인 상품</h3>
            <ol className="list-products">
              <Product id="product1" mapdata={productResult} accountname={accountname} remove={remove} />
            </ol>
          </div>
        </section>
      </>
    );
  }
}

export default UserProduct;

import Product from "./Product";
import "./UserProduct.scss";

function UserProduct() {
  return (
    <>
      <section className="container-product">
        <div className="wrapper-product">
          <h3>판매 중인 상품</h3>
          <ol className="list-products">
            <Product id="product1" />
          </ol>
        </div>
      </section>
    </>
  );
}

export default UserProduct;

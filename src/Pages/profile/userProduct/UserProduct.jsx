import Product from "./Product";
import "./UserProduct.scss";

function UserProduct() {
  return (
    <>
      <section className="container-product">
        <h3>판매 중인 상품</h3>
        <ol className="list-products">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </ol>
      </section>
    </>
  );
}

export default UserProduct;

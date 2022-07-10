function UserProducts() {
  return (
    <>
      <section className="container-product">
        <h3>판매 중인 상품</h3>
        <ol className="list-products">
          <li className="item-product">
            <img src="" alt="" className="image-product" />
            <strong className="text-product">애월읍 노지 감귤</strong>
            <strong className="text-product-price">35,000원</strong>
          </li>
          <li className="item-product">
            <img src="" alt="" className="image-product" />
            <strong className="text-product">애월읍 한라봉 10kg 1box</strong>
            <strong className="text-product-price">45,000원</strong>
          </li>
        </ol>
      </section>
    </>
  );
}

export default UserProducts;

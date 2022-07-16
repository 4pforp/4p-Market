function Product({ id, mapdata }) {
  return (
    <>
      {mapdata.map((product) => {
        return (
          <li key={product._id} className="item-product">
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

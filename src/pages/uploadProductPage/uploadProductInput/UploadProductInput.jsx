import { useState, useEffect, useRef } from "react";

function ProductInput({
  itemName,
  price,
  link,
  setItemName,
  setPrice,
  setLink,
}) {
  const inputRef = useRef();
  const [isWrong, setIsWrong] = useState(false);

  //페이지 로딩됐을 때 인풋 포커스
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // 가격인풋창 3자리마다 콤마 붙여주는 기능
  const inputPriceFormat = (str) => {
    const comma = (str) => {
      str = String(str);
      return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
    };
    const uncomma = (str) => {
      str = String(str);
      return str.replace(/[^\d]+/g, "");
    };
    return comma(uncomma(str));
  };
  function handleChange(e) {
    const inputType = e.target.id.slice(6);
    inputType === "productname" && setItemName(e.target.value);
    inputType === "salelink" && setLink(e.target.value);
    inputType === "price" &&
      setPrice(inputPriceFormat(e.target.value)) &&
      price.length >= 8 &&
      setIsWrong(true);
  }

  return (
    <>
      <div className="container-input-product">
        <div className="wrapper-productname">
          <label htmlFor="input-productname" className="label-productname">
            상품명
          </label>
          <input
            id="input-productname"
            type="text"
            placeholder="2~15자 "
            maxLength="16"
            minLength="2"
            onChange={handleChange}
            value={itemName}
            ref={inputRef}></input>
        </div>
        <div className="wrapper-price">
          <label htmlFor="input-price" className="label-price">
            가격
          </label>
          <input
            id="input-price"
            type="text"
            placeholder="숫자만 입력 가능합니다."
            onChange={handleChange}
            value={price}
            maxLength="10"></input>
          <strong className={`msg-error ${isWrong}`}>
            * 천만 단위 미만의 상품만 등록해주세요.
          </strong>
        </div>
        <div className="wrapper-salelink">
          <label htmlFor="input-salelink" className="label-salelink">
            판매 링크
          </label>
          <input
            id="input-salelink"
            type="text"
            placeholder="http:// 형식으로 입력해주세요."
            onChange={handleChange}
            value={link}></input>
        </div>
      </div>
    </>
  );
}

export default ProductInput;

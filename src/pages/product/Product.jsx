import SaveHeader from "../../components/header/SaveHeader";
import ProductInput from "./ProductInput";
import PictureIcon from "../../assets/upload-file-gray.svg";
import "./Product.scss";

function Product() {
  return (
    <>
      <SaveHeader />
      <h1 className="a11y-hidden">상품등록페이지</h1>
      <form
        method="POST"
        encType="multipart/form-data"
        className="container-form-product"
      >
        <p className="text-upload-img">이미지등록</p>
        <div className="wrapper-productimg">
          <label htmlFor="choose-img" className="label-upload-icon">
            <img src={PictureIcon} alt="upload" />
          </label>
          <input
            type="file"
            name="img-product"
            id="choose-img"
            accept="image/*"
          ></input>
        </div>
        <div className="container-input-product">
          <ProductInput
            name="productname"
            placeholder="2~15자 이내여야 합니다."
          />
          <ProductInput name="price" placeholder="숫자만 입력 가능합니다." />
          <ProductInput name="salelink" placeholder="URL을 입력해 주세요" />
        </div>
      </form>
    </>
  );
}

export default Product;

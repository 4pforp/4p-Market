import SaveNav from "../../Components/navBar/SaveNav";
import PictureIcon from "../../assets/upload-file-gray.svg";
import "./Product.scss";

function Product() {
  return (
    <>
      <SaveNav />
      <h1 className="a11y-hidden">상품등록페이지</h1>
      <form
        method="POST"
        encType="multipart/form-data"
        className="content-form-product"
      >
        <p className="par-imgupload">이미지등록</p>
        <div className="content-product-image">
          <label htmlFor="choose-img" className="upload-icon">
            <img src={PictureIcon} alt="upload" className="icon-img" />
          </label>
          <input
            type="file"
            name="user-pic"
            id="choose-img"
            accept="image/*"
          ></input>
        </div>
        <div className="container-input-product">
          <div className="container-productname">
            <label htmlFor="input-productname" className="label-productname">
              상품명
            </label>
            <input
              id="input-productname"
              type="text"
              placeholder="2~15자 이내여야 합니다."
            ></input>
          </div>
          <div className="container-price">
            <label htmlFor="id" className="label-price">
              가격
            </label>
            <input
              id="input-price"
              type="text"
              placeholder="숫자만 입력 가능합니다. "
            ></input>
          </div>
          <div className="container-salelink">
            <label htmlFor="input-intro" className="label-salelink">
              판매링크
            </label>
            <input
              id="input-salelink"
              type="text"
              placeholder="URL을 입력해 주세요."
            ></input>
          </div>
        </div>
      </form>
    </>
  );
}

export default Product;

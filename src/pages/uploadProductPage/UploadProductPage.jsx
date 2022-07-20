import { useState } from "react";
import SaveHeader from "../../components/header/SaveHeader";
import UploadProductImg from "./uploadProductImg/UploadProductImg";
import ProductInput from "./uploadProductInput/UploadProductInput";
import "./UploadProductPage.scss";

function UploadProductPage() {
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const [link, setLink] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [disabled, setIsDisabled] = useState(true);
  const [itemImage, setItemImage] = useState("");

  return (
    <>
      <form
        method="POST"
        encType="multipart/form-data"
        className="container-form-product"
      >
        <SaveHeader isActive={isActive} disabled={disabled} />
        <h1 className="a11y-hidden">상품등록페이지</h1>
        <UploadProductImg itemImage={itemImage} setItemImage={setItemImage} />
        <ProductInput
          itemName={itemName}
          setItemName={setItemName}
          price={price}
          setPrice={setPrice}
          link={link}
          setLink={setLink}
          setIsActive={setIsActive}
          setIsDisabled={setIsDisabled}
        />
      </form>
    </>
  );
}

export default UploadProductPage;
